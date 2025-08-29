// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IMarketplace {
    function buyNFT(uint256 tokenId) external payable;
}

contract NFTBuyer {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function buyNFTOnBehalf(address marketplace, uint256 tokenId) external payable {
        require(msg.sender == owner, "Not authorized");
        IMarketplace(marketplace).buyNFT{value: msg.value}(tokenId);
    }
}
