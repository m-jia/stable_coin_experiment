const CADX = artifacts.require("CADXImplementation");
const Proxy = artifacts.require("CADXProxy");
const Issuer = artifacts.require("CADXIssuer");

module.exports = async function (deployer) {
  await deployer;

  await deployer.deploy(CADX);
  const proxy = await deployer.deploy(
    Proxy,
    CADX.address,
    "0xD22f350f010ED55f8602d6cA1396EcfC84470695" // Ropsten Proxy Owner Placeholder
  ); // Ropsten Proxy Owner Placeholder
  const proxiedCADX = await CADX.at(proxy.address);
  await proxiedCADX.initialize();
  await proxiedCADX.proposeOwner("0x1F86Fcd770e735a7edD86Cd57098300D0b2e2AA7"); // Ropsten Token Owner Placeholder
  const issuer = await deployer.deploy(Issuer, proxiedCADX.address, 40);
  await issuer.proposeOwner("0x1F86Fcd770e735a7edD86Cd57098300D0b2e2AA7"); // Ropsten Token Owner Placeholder
  await proxiedCADX.setIssuer(issuer.address);
};
