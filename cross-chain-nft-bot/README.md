
# Cross-Chain Gasless NFT Marketplace Bot

![NFT Bot](https://img.shields.io/badge/status-beta-yellow)

## Overview

This project demonstrates a **cross-chain, gasless NFT marketplace bot** leveraging the **Gelato Smart Wallet SDK** and **Automate SDK**.  

It allows users to:

- Schedule NFT purchases on multiple EVM-compatible chains (Ethereum, Polygon, Arbitrum)
- Execute transactions **gaslessly** using Gelato relayers
- Receive notifications on successful or failed NFT purchases
- Automate NFT acquisition across chains in a secure and reliable way

This project showcases **automation in DeFi/NFT ecosystems**, cross-chain capabilities, and real-world usage of **Gelato's infrastructure**.

---

##  Key Features

| Feature | Description |
|---------|-------------|
| Cross-Chain NFT Purchases | Supports Ethereum, Polygon, Arbitrum testnets. |
| Gasless Transactions | Users don’t pay gas; Gelato relayers execute transactions. |
| Scheduled Purchases | Purchase NFTs at a specific block, price, or schedule. |
| Notifications | Real-time alerts for purchase success/failure. |
| Fully Automated | Backend + Gelato SDK handles execution. |

---

## 🏗Architecture

```text
+-------------------+       +----------------+       +----------------+
|   Frontend (React)| <---> | Backend (Node) | <---> | Gelato Network |
|  User schedules   |       | Schedules task |       | Executes NFT   |
|  NFT purchase     |       | via SDK        |       | purchase gaslessly |
+-------------------+       +----------------+       +----------------+
         |                         ^
         v                         |
    Connects wallet            Monitors events
````

**Components:**

1. **NFTBuyer.sol** – Solidity helper contract that allows executing NFT purchases on behalf of a Gelato Smart Wallet owner.
2. **Backend** – Node.js + Gelato SDK to schedule tasks.
3. **Frontend** – React UI for scheduling NFT purchases.
4. **Gelato Smart Wallet** – Executes transactions automatically and gaslessly.

---

##  Tech Stack

| Layer           | Technology                               |
| --------------- | ---------------------------------------- |
| Smart Contract  | Solidity (ERC-721 interface)             |
| Blockchain      | Ethereum, Polygon, Arbitrum (testnets)   |
| Backend         | Node.js, TypeScript, Express, Gelato SDK |
| Frontend        | React.js, Ethers.js, TailwindCSS         |
| Task Automation | Gelato Automate SDK & Smart Wallet SDK   |
| Testing         | Hardhat, Chai                            |



##  Usage

1. Open the frontend in browser: `http://localhost:3000`
2. Connect your wallet (Metamask or any EVM wallet)
3. Enter:

   * Marketplace contract address
   * NFT token ID
   * Maximum price (ETH)
4. Click **“Schedule Purchase”**
5. Backend schedules the task via **Gelato Automate SDK**
6. Gelato executes the purchase **gaslessly** when conditions are met

---

##  How Gelato is Used

1. **Smart Wallet SDK** – Creates a wallet for the user that can execute tasks automatically.
2. **Automate SDK** – Allows scheduling tasks like buying an NFT at a given price or block.
3. **Relay** – Executes transactions on behalf of the user without the user paying gas.

---

##  Potential Extensions

* **Multi-NFT batch scheduling** – Buy multiple NFTs in one task
* **Cross-chain swaps** – Buy NFT on one chain, sell on another
* **Price triggers** – Only execute purchase if NFT is below a target price
* **Notification system** – Telegram, Discord, or email alerts
* **Front-end analytics** – Track scheduled tasks and execution status across chains




