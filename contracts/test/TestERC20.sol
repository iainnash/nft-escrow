// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20 {
    constructor() ERC20("TestERC721", "TEST") public {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}