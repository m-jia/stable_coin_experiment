const HDWalletProvider = require("truffle-hdwallet-provider");
// const LedgerWalletProvider = require("truffle-ledger-provider");
const ropstenNetworkURL =
  "https://ropsten.infura.io/v3/b26481279d3a46afab21c568f94ce9d1";
const mainnetNetworkURL =
  "https://mainnet.infura.io/v3/b3a4d94fff6d4bf3abd7f70f91d1c0d4";
const devPrivateKey =
  "fd683ee24915f11590ee5496b51a27e35ddeb53bea9904198501ce9a49bc6071"; // 0xfed39281599aa7a1ba16fd072512164857f9326d
const prodHotKey = ""; // 0x1F86Fcd770e735a7edD86Cd57098300D0b2e2AA7

module.exports = {
  plugins: ["solidity-coverage"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    local: {
      host: "127.0.0.1",
      network_id: "*",
      port: 8545,
      gas: 6700000,
      gasPrice: 0x01,
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 10000000000000,
      gasPrice: 0x01,
    },
    ropsten: {
      network_id: 3,
      provider: function () {
        return new HDWalletProvider(devPrivateKey, ropstenNetworkURL);
      },
      // ropsten block limit
      gas: 4700000,
      gasPrice: 10100000000, // 10.1 gwei
      // confirmations: 0,
      // skipDryRun: true,
    },
    mainnet: {
      network_id: 1,
      gasPrice: 30100000000, // 30.1 gwei
      gas: 3099124,
      provider: function () {
        // return new LedgerWalletProvider(
        //   {
        //     networkId: 1,
        //     path: "44'/60'/0'/0/0",
        //     askConfirm: false,
        //   },
        return new HDWalletProvider(prodHotKey, mainnetNetworkURL);
      },
    },
  },
  compilers: {
    solc: {
      version: "v0.5.11",
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
