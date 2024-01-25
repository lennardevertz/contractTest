/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockEAS, MockEASInterface } from "../MockEAS";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "Attested",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct MockEAS.AttestationRequestData",
            name: "data",
            type: "tuple",
          },
        ],
        internalType: "struct MockEAS.AttestationRequest",
        name: "request",
        type: "tuple",
      },
    ],
    name: "attest",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ec8061001f6000396000f3fe608060405260043610601c5760003560e01c8063f17325e7146021575b600080fd5b6030602c3660046077565b6042565b60405190815260200160405180910390f35b60405160009033907f43348b2f0af7f1468816ae2fc5472643114556a82bacea2d2da660069ea117b3908390a2506000919050565b600060208284031215608857600080fd5b813567ffffffffffffffff811115609e57600080fd5b82016040818503121560af57600080fd5b939250505056fea2646970667358221220327125620fb4fe909309a10dd23b90d0e37fc70e4b0f1127e44c8a0d2339edd864736f6c63430008130033";

export class MockEAS__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockEAS> {
    return super.deploy(overrides || {}) as Promise<MockEAS>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockEAS {
    return super.attach(address) as MockEAS;
  }
  connect(signer: Signer): MockEAS__factory {
    return super.connect(signer) as MockEAS__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockEASInterface {
    return new utils.Interface(_abi) as MockEASInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockEAS {
    return new Contract(address, _abi, signerOrProvider) as MockEAS;
  }
}