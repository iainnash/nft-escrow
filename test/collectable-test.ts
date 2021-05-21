import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

import { TestErc20 } from "../typechain/TestErc20";
import { TestErc721 } from "../typechain/TestErc721";
import { BadErc721 } from "../typechain/BadErc721";
import { NftEscrow } from "../typechain/NftEscrow";

describe("Escrow", function () {
  it("Handles creating an escrow", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("TestERC721")
    ).deploy()) as TestErc721;
    await ERC721.mint(signerAddress, 1);
    await ERC721.mint(signerAddress, 2);

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC721.connect(signer1).setApprovalForAll(
      escrowInstance.address,
      true
    );
    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("1.2")
    );

    await escrowInstance
      .connect(signer1)
      .createPendingSale(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2"),
        await signer2.getAddress()
      );

    await escrowInstance
      .connect(signer2)
      .purchaseNFT(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2")
      );

    // Check currency transferred
    expect((await ERC20.balanceOf(signerAddress)).toString()).to.equal(
      ethers.utils.parseEther("198.8")
    );
    expect(
      (await ERC20.balanceOf(await signer2.getAddress())).toString()
    ).to.equal(ethers.utils.parseEther("1.2"));
    // Check NFT transferred
    expect(await ERC721.ownerOf(2)).to.equal(await signer2.getAddress());
  });
  it("handles a bad escrow payment method", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("TestERC721")
    ).deploy()) as TestErc721;
    await ERC721.mint(signerAddress, 2);

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC721.connect(signer1).setApprovalForAll(
      escrowInstance.address,
      true
    );
    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("0.1")
    );

    await escrowInstance
      .connect(signer1)
      .createPendingSale(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2"),
        await signer2.getAddress()
      );

    await expect(
      escrowInstance
        .connect(signer2)
        .purchaseNFT(
          ERC721.address,
          2,
          ERC20.address,
          ethers.utils.parseEther("1.2")
        )
    ).to.be.revertedWith("Currency allowance does not match required amount.");

    // Check currency transferred
    expect((await ERC20.balanceOf(signerAddress)).toString()).to.equal(
      ethers.utils.parseEther("200")
    );
    expect(
      (await ERC20.balanceOf(await signer2.getAddress())).toString()
    ).to.equal(ethers.utils.parseEther("0"));
    // Check that the NFT did not transfer
    expect(await ERC721.ownerOf(2)).to.equal(await signer1.getAddress());
  });
  it("handles a purchase cancellation", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("TestERC721")
    ).deploy()) as TestErc721;
    await ERC721.mint(signerAddress, 1);
    await ERC721.mint(signerAddress, 2);

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC721.connect(signer1).setApprovalForAll(
      escrowInstance.address,
      true
    );
    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("1.2")
    );

    await escrowInstance
      .connect(signer1)
      .createPendingSale(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2"),
        await signer2.getAddress()
      );

    await escrowInstance.connect(signer1).cancelSale(ERC721.address, 2);

    await expect(
      escrowInstance
        .connect(signer2)
        .purchaseNFT(
          ERC721.address,
          2,
          ERC20.address,
          ethers.utils.parseEther("1.2")
        )
    ).to.be.revertedWith("Recipient needs to match caller");

    // Check currency transferred
    expect((await ERC20.balanceOf(signerAddress)).toString()).to.equal(
      ethers.utils.parseEther("200")
    );
    expect(
      (await ERC20.balanceOf(await signer2.getAddress())).toString()
    ).to.equal(ethers.utils.parseEther("0"));

    // Check NFT transferred
    expect(await ERC721.ownerOf(2)).to.equal(signerAddress);
  });
  it("handles a bad escrow payment method", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("TestERC721")
    ).deploy()) as TestErc721;
    await ERC721.mint(signerAddress, 2);

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC721.connect(signer1).setApprovalForAll(
      escrowInstance.address,
      true
    );
    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("0.1")
    );

    await escrowInstance
      .connect(signer1)
      .createPendingSale(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2"),
        await signer2.getAddress()
      );

    await expect(
      escrowInstance
        .connect(signer2)
        .purchaseNFT(
          ERC721.address,
          2,
          ERC20.address,
          ethers.utils.parseEther("1.2")
        )
    ).to.be.revertedWith("Currency allowance does not match required amount.");

    // Check currency transferred
    expect((await ERC20.balanceOf(signerAddress)).toString()).to.equal(
      ethers.utils.parseEther("200")
    );
    expect(
      (await ERC20.balanceOf(await signer2.getAddress())).toString()
    ).to.equal(ethers.utils.parseEther("0"));
    // Check that the NFT did not transfer
    expect(await ERC721.ownerOf(2)).to.equal(await signer1.getAddress());
  });
  it("handles a bad NFT contract", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("BadERC721")
    ).deploy()) as BadErc721;

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("0.1")
    );

    await expect(
      escrowInstance
        .connect(signer1)
        .createPendingSale(
          ERC721.address,
          2,
          ERC20.address,
          ethers.utils.parseEther("1.2"),
          await signer2.getAddress()
        )
    ).to.be.revertedWith("NFT Address does not correspond to 721 ABI");
  });
  it("handles a NFT that's transferred before purchase", async () => {
    const [signer1, signer2] = await ethers.getSigners();
    const signerAddress = await signer1.getAddress();

    const ERC20 = (await (
      await ethers.getContractFactory("TestERC20")
    ).deploy()) as TestErc20;
    await ERC20.mint(signerAddress, ethers.utils.parseEther("200"));

    const ERC721 = (await (
      await ethers.getContractFactory("TestERC721")
    ).deploy()) as TestErc721;
    await ERC721.mint(signerAddress, 2);

    const escrowInstance = (await (
      await ethers.getContractFactory("NFTEscrow")
    ).deploy()) as NftEscrow;

    await ERC721.connect(signer1).setApprovalForAll(
      escrowInstance.address,
      true
    );
    await ERC20.connect(signer1).approve(
      escrowInstance.address,
      ethers.utils.parseEther("1.2")
    );

    await escrowInstance
      .connect(signer1)
      .createPendingSale(
        ERC721.address,
        2,
        ERC20.address,
        ethers.utils.parseEther("1.2"),
        await signer2.getAddress()
      );

    await ERC721.transferFrom(
      signerAddress,
      "0x000000000000000000000000000000000000dead",
      2
    );

    await expect(
      escrowInstance
        .connect(signer2)
        .purchaseNFT(
          ERC721.address,
          2,
          ERC20.address,
          ethers.utils.parseEther("1.2")
        )
    ).to.be.revertedWith("ERC721: transfer caller is not owner nor approved");

    // Check currency transferred
    expect((await ERC20.balanceOf(signerAddress)).toString()).to.equal(
      ethers.utils.parseEther("200")
    );
    expect(
      (await ERC20.balanceOf(await signer2.getAddress())).toString()
    ).to.equal(ethers.utils.parseEther("0"));

    // Check that the NFT did not transfer
    expect((await ERC721.ownerOf(2)).toLowerCase()).to.equal(
      "0x000000000000000000000000000000000000dead"
    );
  });
});
