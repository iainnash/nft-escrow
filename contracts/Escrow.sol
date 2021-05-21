// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "hardhat/console.sol";


// Not Production Code // Rough-draft sketch for simple ERC721 token-based escrow

// Pending sale information
struct PendingSale {
    address recipient;
    address currentOwner;
    address currency;
    uint256 currencyAmount;
}

contract NFTEscrow {
    bytes4 constant interfaceId = 0x80ac58cd; // 721 interface id

    mapping(address => mapping(uint256 => PendingSale)) private sales;

    function createPendingSale(
        address nftContract,
        uint256 mediaId,
        address currency,
        uint256 currencyAmount,
        address recipient
    ) public {
        // Pre-requisite: approve all NFT transfers from owner address
        require(
            IERC165(nftContract).supportsInterface(interfaceId),
            "NFT Address does not correspond to 721 ABI"
        );
        require(
            IERC721(nftContract).isApprovedForAll(msg.sender, address(this)),
            "NFT is not approved to this contact"
        );

        sales[nftContract][mediaId] = PendingSale({
            recipient: recipient,
            currency: currency,
            currencyAmount: currencyAmount,
            currentOwner: msg.sender
        });
    }

    function cancelSale(address nftContract, uint256 mediaId) external {
        delete sales[nftContract][mediaId];
    }

    function purchaseNFT(
        address nftContract,
        uint256 mediaId,
        address currencyAddress,
        uint256 currencyAmount
    ) external {
        // Pre-requisite: approve currency used for transaction (either all or the amount desired to use)
        PendingSale memory sale = sales[nftContract][mediaId];

        require(msg.sender == sale.recipient, "Recipient needs to match caller");

        require(
            sale.currency == currencyAddress,
            "Currency address needs to match offer"
        );
        require(
            sale.currencyAmount == currencyAmount,
            "Currency amount needs to match offer"
        );

        IERC20 currency = IERC20(currencyAddress);

        require(
            currency.allowance(sale.currentOwner, address(this)) >= currencyAmount,
            "Currency allowance does not match required amount."
        );

        // Transfer currency
        currency.transferFrom(sale.currentOwner, sale.recipient, currencyAmount);

        // Transfer NFT
        IERC721(nftContract).safeTransferFrom(
            sale.currentOwner,
            sale.recipient,
            mediaId
        );
    }
}
