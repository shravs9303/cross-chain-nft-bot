import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFTBuyer", function () {
  it("Should set the right owner", async function () {
    const [owner] = await ethers.getSigners();
    const NFTBuyer = await ethers.getContractFactory("NFTBuyer");
    const buyer = await NFTBuyer.deploy(owner.address);
    await buyer.deployed();

    expect(await buyer.owner()).to.equal(owner.address);
  });
});
