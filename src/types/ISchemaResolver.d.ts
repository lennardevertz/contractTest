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
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ISchemaResolverInterface extends ethers.utils.Interface {
  functions: {
    "attest((bytes32,bytes32,uint64,uint64,uint64,bytes32,address,address,bool,bytes))": FunctionFragment;
    "isPayable()": FunctionFragment;
    "multiAttest(tuple[],uint256[])": FunctionFragment;
    "multiRevoke(tuple[],uint256[])": FunctionFragment;
    "revoke((bytes32,bytes32,uint64,uint64,uint64,bytes32,address,address,bool,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "attest",
    values: [
      {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "isPayable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiAttest",
    values: [
      {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevoke",
    values: [
      {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [
      {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPayable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiAttest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiRevoke",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;

  events: {};
}

export class ISchemaResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISchemaResolverInterface;

  functions: {
    attest(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPayable(overrides?: CallOverrides): Promise<[boolean]>;

    multiAttest(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiRevoke(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  attest(
    attestation: {
      uid: BytesLike;
      schema: BytesLike;
      time: BigNumberish;
      expirationTime: BigNumberish;
      revocationTime: BigNumberish;
      refUID: BytesLike;
      recipient: string;
      attester: string;
      revocable: boolean;
      data: BytesLike;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPayable(overrides?: CallOverrides): Promise<boolean>;

  multiAttest(
    attestations: {
      uid: BytesLike;
      schema: BytesLike;
      time: BigNumberish;
      expirationTime: BigNumberish;
      revocationTime: BigNumberish;
      refUID: BytesLike;
      recipient: string;
      attester: string;
      revocable: boolean;
      data: BytesLike;
    }[],
    values: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiRevoke(
    attestations: {
      uid: BytesLike;
      schema: BytesLike;
      time: BigNumberish;
      expirationTime: BigNumberish;
      revocationTime: BigNumberish;
      refUID: BytesLike;
      recipient: string;
      attester: string;
      revocable: boolean;
      data: BytesLike;
    }[],
    values: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    attestation: {
      uid: BytesLike;
      schema: BytesLike;
      time: BigNumberish;
      expirationTime: BigNumberish;
      revocationTime: BigNumberish;
      refUID: BytesLike;
      recipient: string;
      attester: string;
      revocable: boolean;
      data: BytesLike;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    attest(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPayable(overrides?: CallOverrides): Promise<boolean>;

    multiAttest(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    multiRevoke(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    revoke(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    attest(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPayable(overrides?: CallOverrides): Promise<BigNumber>;

    multiAttest(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiRevoke(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    attest(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPayable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multiAttest(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiRevoke(
      attestations: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      }[],
      values: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      attestation: {
        uid: BytesLike;
        schema: BytesLike;
        time: BigNumberish;
        expirationTime: BigNumberish;
        revocationTime: BigNumberish;
        refUID: BytesLike;
        recipient: string;
        attester: string;
        revocable: boolean;
        data: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
