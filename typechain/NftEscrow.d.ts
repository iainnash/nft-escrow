/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NftEscrowInterface extends ethers.utils.Interface {
  functions: {
    "cancelSale(address,uint256)": FunctionFragment;
    "createPendingSale(address,uint256,address,uint256,address)": FunctionFragment;
    "purchaseNFT(address,uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelSale",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPendingSale",
    values: [string, BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseNFT",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "cancelSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createPendingSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseNFT",
    data: BytesLike
  ): Result;

  events: {};
}

export class NftEscrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NftEscrowInterface;

  functions: {
    cancelSale(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelSale(address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createPendingSale(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPendingSale(address,uint256,address,uint256,address)"(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    purchaseNFT(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "purchaseNFT(address,uint256,address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  cancelSale(
    nftContract: string,
    mediaId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelSale(address,uint256)"(
    nftContract: string,
    mediaId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createPendingSale(
    nftContract: string,
    mediaId: BigNumberish,
    currency: string,
    currencyAmount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPendingSale(address,uint256,address,uint256,address)"(
    nftContract: string,
    mediaId: BigNumberish,
    currency: string,
    currencyAmount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  purchaseNFT(
    nftContract: string,
    mediaId: BigNumberish,
    currencyAddress: string,
    currencyAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "purchaseNFT(address,uint256,address,uint256)"(
    nftContract: string,
    mediaId: BigNumberish,
    currencyAddress: string,
    currencyAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelSale(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelSale(address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createPendingSale(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createPendingSale(address,uint256,address,uint256,address)"(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    purchaseNFT(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "purchaseNFT(address,uint256,address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancelSale(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelSale(address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createPendingSale(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPendingSale(address,uint256,address,uint256,address)"(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    purchaseNFT(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "purchaseNFT(address,uint256,address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelSale(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelSale(address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createPendingSale(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPendingSale(address,uint256,address,uint256,address)"(
      nftContract: string,
      mediaId: BigNumberish,
      currency: string,
      currencyAmount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    purchaseNFT(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "purchaseNFT(address,uint256,address,uint256)"(
      nftContract: string,
      mediaId: BigNumberish,
      currencyAddress: string,
      currencyAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}