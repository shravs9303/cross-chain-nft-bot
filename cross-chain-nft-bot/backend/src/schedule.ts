import automate from "./gelato";
import { ethers } from "ethers";

export async function scheduleNFTPurchase(
  nftBuyer: string,
  marketplace: string,
  tokenId: number,
  price: string
) {
  const execArgs = [marketplace, tokenId];
  const execValue = ethers.utils.parseEther(price);

  const task = await automate.createTask({
    execAddress: nftBuyer,
    execSelector: "buyNFTOnBehalf(address,uint256)",
    execAbi: ["address", "uint256"],
    execArgs,
    execValue
  });

  console.log("Scheduled NFT Purchase Task:", task.taskId);
  return task.taskId;
}
