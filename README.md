## nft-escrow

A simple NFT transfer contract that takes an ERC20 token amount for a sale to a specific person.

Enforced parameters:
* ERC721 media id
* ERC20 currency
* ERC20 amount
* address recipient

### Seller flow:
* Approve ERC721 to sell to contract
* Call `createPendingSale(address nftContract, uint256 mediaId, address currency, uint256 currencyAmount, address recipient)`

### Buyer flow:
* Approve ERC20 needed to purchase
* Call `purchaseNFT(address nftContract, uint256 mediaId, address currencyAddress, uint256 amount)`
  - All these parameters need to match the sale parameters

Sales can be cancelled using `cancelPendingSale(address nftContract, uint256 mediaId)`.

Events are emitted for analytics purposes.


Any issue (missing funds, NFT moved, etc) reverts the contract interaction.

No custody of funds nor NFT is required by this contract.
