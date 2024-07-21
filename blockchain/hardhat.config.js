require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    polygon_amoy: {
      url: "https://polygon-amoy-bor-rpc.publicnode.com",
      accounts: [`0x${process.env.PRIVATE_ADDRESS}`],
      chainId: 80002
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 350
      }
    }
  },
};
