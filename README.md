## nft-escrow

A simple NFT transfer contract that takes an ERC20 token amount for a sale to a specific person.

Enforced parameters:
ERC721 media id
ERC20 currency
ERC20 amount
address recipient

Any issue (missing funds, NFT moved, etc) reverts the contract interaction.

No custody of funds nor NFT is required by this contract.
