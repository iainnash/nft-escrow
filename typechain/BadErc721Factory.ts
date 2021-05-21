/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BadErc721 } from "./BadErc721";

export class BadErc721Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BadErc721> {
    return super.deploy(overrides || {}) as Promise<BadErc721>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadErc721 {
    return super.attach(address) as BadErc721;
  }
  connect(signer: Signer): BadErc721Factory {
    return super.connect(signer) as BadErc721Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadErc721 {
    return new Contract(address, _abi, signerOrProvider) as BadErc721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interface",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b58061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b603e60383660046052565b50600090565b604051901515815260200160405180910390f35b6000602082840312156062578081fd5b81356001600160e01b0319811681146078578182fd5b939250505056fea26469706673582212204375ec56ba9a786dd82db0ae223bde55ea07f79548793f0749329f85cc7bf30964736f6c63430008040033";