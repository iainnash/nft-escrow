/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NftEscrow } from "./NftEscrow";

export class NftEscrowFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NftEscrow> {
    return super.deploy(overrides || {}) as Promise<NftEscrow>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NftEscrow {
    return super.attach(address) as NftEscrow;
  }
  connect(signer: Signer): NftEscrowFactory {
    return super.connect(signer) as NftEscrowFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftEscrow {
    return new Contract(address, _abi, signerOrProvider) as NftEscrow;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mediaId",
        type: "uint256",
      },
    ],
    name: "cancelSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mediaId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currencyAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createPendingSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mediaId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currencyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currencyAmount",
        type: "uint256",
      },
    ],
    name: "purchaseNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806316f3a95b14610046578063b1986fcc146100a4578063b9dda98f146100b7575b600080fd5b6100a261005436600461068a565b6001600160a01b0390911660009081526020818152604080832093835292905290812080546001600160a01b0319908116825560018201805482169055600282018054909116905560030155565b005b6100a26100b23660046106b3565b6100ca565b6100a26100c53660046106f6565b61042b565b6001600160a01b038085166000908152602081815260408083208784528252918290208251608081018452815485168082526001830154861693820193909352600282015490941692840192909252600390910154606083015233146101775760405162461bcd60e51b815260206004820152601f60248201527f526563697069656e74206e6565647320746f206d617463682063616c6c65720060448201526064015b60405180910390fd5b826001600160a01b031681604001516001600160a01b0316146101ea5760405162461bcd60e51b815260206004820152602560248201527f43757272656e63792061646472657373206e6565647320746f206d617463682060448201526437b33332b960d91b606482015260840161016e565b818160600151146102495760405162461bcd60e51b8152602060048201526024808201527f43757272656e637920616d6f756e74206e6565647320746f206d61746368206f604482015263333332b960e11b606482015260840161016e565b6020810151604051636eb1769f60e11b8152849184916001600160a01b0384169163dd62ed3e9161027f9190309060040161078b565b60206040518083038186803b15801561029757600080fd5b505afa1580156102ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cf9190610773565b10156103385760405162461bcd60e51b815260206004820152603260248201527f43757272656e637920616c6c6f77616e636520646f6573206e6f74206d61746360448201527134103932b8bab4b932b21030b6b7bab73a1760711b606482015260840161016e565b602082015182516040516323b872dd60e01b81526001600160a01b038416926323b872dd9261036b9288906004016107a5565b602060405180830381600087803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bd919061074c565b5060208201518251604051632142170760e11b81526001600160a01b038916926342842e0e926103f1928a906004016107a5565b600060405180830381600087803b15801561040b57600080fd5b505af115801561041f573d6000803e3d6000fd5b50505050505050505050565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038616906301ffc9a79060240160206040518083038186803b15801561047157600080fd5b505afa158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a9919061074c565b6105085760405162461bcd60e51b815260206004820152602a60248201527f4e4654204164647265737320646f6573206e6f7420636f72726573706f6e6420604482015269746f203732312041424960b01b606482015260840161016e565b60405163e985e9c560e01b81526001600160a01b0386169063e985e9c590610536903390309060040161078b565b60206040518083038186803b15801561054e57600080fd5b505afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610586919061074c565b6105de5760405162461bcd60e51b815260206004820152602360248201527f4e4654206973206e6f7420617070726f76656420746f207468697320636f6e746044820152621858dd60ea1b606482015260840161016e565b604080516080810182526001600160a01b039283168152336020808301918252958416828401908152606083019586529784166000908152808752838120978152969095529420935184549082166001600160a01b031991821617855592516001850180549183169185169190911790559351600284018054919095169216919091179092559051600390910155565b80356001600160a01b038116811461068557600080fd5b919050565b6000806040838503121561069c578182fd5b6106a58361066e565b946020939093013593505050565b600080600080608085870312156106c8578182fd5b6106d18561066e565b9350602085013592506106e66040860161066e565b9396929550929360600135925050565b600080600080600060a0868803121561070d578081fd5b6107168661066e565b94506020860135935061072b6040870161066e565b9250606086013591506107406080870161066e565b90509295509295909350565b60006020828403121561075d578081fd5b8151801515811461076c578182fd5b9392505050565b600060208284031215610784578081fd5b5051919050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03938416815291909216602082015260408101919091526060019056fea2646970667358221220af41b7c52f759b2e3a34807d711c80d99aa87a9ca4fc021366b3e94b08b421e664736f6c63430008040033";
