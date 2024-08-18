
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");



module.exports = {
  solidity: {
    version: "0.8.9",
  },  
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
}