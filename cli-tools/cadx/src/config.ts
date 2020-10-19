import tokenABI from "./abis/CADX.abi.json";
import issuerABI from "./abis/CADXIssuer.abi.json";

const config = {
  web3: {
    endpoint: {
      ropsten: "https://ropsten.infura.io/v3/b3a4d94fff6d4bf3abd7f70f91d1c0d4",
      mainnet: "https://mainnet.infura.io/v3/b3a4d94fff6d4bf3abd7f70f91d1c0d4",
    },
  },
  token: {
    address: {
      ropsten: "0xc1B73b51601253084136d258bD5B7Dd00104CFa8",
      mainnet: "0xfaAc3113CeE77B4caEf48ccbF60A89BcC07f333e",
    },
    abi: tokenABI,
    decimals: 6,
  },
  issuer: {
    address: {
      ropsten: "0x52952BF952c695EDB565bEcc98B38acE3ec1A1DA",
      mainnet: "0xb316CF21Ef0CE86420Ca62CC701211078db0F577",
    },
    abi: issuerABI,
  },
};

export default config;
