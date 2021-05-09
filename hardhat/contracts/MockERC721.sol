// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNFT is ERC721 {
    constructor(address addr1, address addr2, address addr3) ERC721("Mock NFT", "MOCK"){
        for (uint i=1; i<4; i++){
            _safeMint(addr1, i);
            _safeMint(addr2, i+3);
            _safeMint(addr3, i+6);
        }
    }
}