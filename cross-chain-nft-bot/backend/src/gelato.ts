import { ethers } from "ethers";
import { AutomateSDK } from "@gelatonetwork/automate-sdk";
import * as dotenv from "dotenv";
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const automate = new AutomateSDK(wallet, 5); // 5 = Goerli testnet

export default automate;
