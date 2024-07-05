const hre = require("hardhat");

async function main() {
  const NFTPlatform = await hre.ethers.getContractFactory("NFTPlatform");
  const nftPlatform = await NFTPlatform.deploy();

  await nftPlatform.deployed();

  console.log(`Deployed Contract Address to ${nftPlatform.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
