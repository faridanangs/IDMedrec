require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "983833d689e1a9481c585d846a50676cea2825bbbdcd5c0e2f624a13d54c0455";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "ganache",
  networks: {
    polygon_amoy: {
      url: "https://polygon-amoy-bor-rpc.publicnode.com",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80002
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [`0x7facebf1b90a36fe4396ec385fea80fdc1675733b314bff748675ceda7e7857f`],
      chainId: 1337
    },
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
