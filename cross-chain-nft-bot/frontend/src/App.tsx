import React, { useState } from "react";

function App() {
  const [marketplace, setMarketplace] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  async function schedule() {
    const res = await fetch("/api/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ marketplace, tokenId, price }),
    });
    const data = await res.json();
    alert(`Task Scheduled! ID: ${data.taskId}`);
  }

  return (
    <div>
      <h1>Cross-Chain Gasless NFT Bot</h1>
      <input placeholder="Marketplace" onChange={e => setMarketplace(e.target.value)} />
      <input placeholder="Token ID" onChange={e => setTokenId(e.target.value)} />
      <input placeholder="Price in ETH" onChange={e => setPrice(e.target.value)} />
      <button onClick={schedule}>Schedule Purchase</button>
    </div>
  );
}

export default App;
