const CADXMock = artifacts.require('CADXWithBalance.sol');
const Proxy = artifacts.require('CADXProxy.sol');

const assertRevert = require('./helpers/assertRevert');

// Test that CADX operates correctly as a Pausable token.
contract('CADX pause', function ([_, admin, anotherAccount, owner]) {
  beforeEach(async function () {
    const CADX = await CADXMock.new({from: owner});
    const proxy = await Proxy.new(CADX.address, admin, {from: admin});
    const proxiedCADX = await CADXMock.at(proxy.address);
    await proxiedCADX.initialize({from: owner});
    await proxiedCADX.initializeBalance(owner, 100);
    this.token = proxiedCADX;
  });

  const amount = 10;

  it('can transfer in non-pause', async function () {
    const paused = await this.token.paused();
    assert.equal(paused, false);
    await this.token.transfer(anotherAccount, amount, {from: owner});
    const balance = await this.token.balanceOf(owner);
    assert.equal(90, balance);
  });

  it('cannot transfer in pause', async function () {
    const {logs} = await this.token.pause({from: owner});
    const paused = await this.token.paused();
    assert.equal(paused, true);
    await assertRevert(this.token.transfer(anotherAccount, amount, {from: owner}));
    const balance = await this.token.balanceOf(owner);
    assert.equal(100, balance);

    // emits a Pause event
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, 'Pause');
  });

  it('cannot approve/transferFrom/burnFrom in pause', async function () {
    await this.token.approve(anotherAccount, amount, {from: owner});
    const {logs} = await this.token.pause({from: owner});
    await assertRevert(this.token.approve(anotherAccount, 2 * amount, {from: owner}));
    await assertRevert(this.token.transferFrom(owner, anotherAccount, amount, {from: anotherAccount}));
    await assertRevert(this.token.burnFrom(owner, amount, {from: anotherAccount}));
  });

  it('should resume allowing normal process after pause is over', async function () {
    await this.token.pause({from: owner});
    const {logs} = await this.token.unpause({from: owner});
    await this.token.transfer(anotherAccount, amount, {from: owner});
    let balance = await this.token.balanceOf(owner);
    assert.equal(90, balance);
    await this.token.burn(amount, {from: owner});
    balance = await this.token.balanceOf(owner);
    assert.equal(80, balance);

    // emits a Unpause event
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, 'Unpause');
  });

  it('cannot unpause when unpaused or pause when paused', async function () {
    await assertRevert(this.token.unpause({from: owner}));
    await this.token.pause({from: owner});
    await assertRevert(this.token.pause({from: owner}));
  });
});
