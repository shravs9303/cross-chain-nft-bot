import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const NFTBuyer = await ethers.getContractFactory("NFTBuyer");
  const buyer = await NFTBuyer.deploy(deployer.address);
  await buyer.deployed();

  console.log("NFTBuyer deployed to:", buyer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
