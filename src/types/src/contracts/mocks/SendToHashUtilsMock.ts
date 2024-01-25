/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface SendToHashUtilsMockInterface extends utils.Interface {
  functions: {
    "fromHexChar(uint8)": FunctionFragment;
    "hashIDrissWithPassword(string,string)": FunctionFragment;
    "safeHexStringToAddress(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fromHexChar"
      | "hashIDrissWithPassword"
      | "safeHexStringToAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fromHexChar",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hashIDrissWithPassword",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeHexStringToAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "fromHexChar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashIDrissWithPassword",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeHexStringToAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SendToHashUtilsMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SendToHashUtilsMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fromHexChar(
      c: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    hashIDrissWithPassword(
      _IDrissHash: PromiseOrValue<string>,
      _password: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { _hash: string }>;

    safeHexStringToAddress(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  fromHexChar(
    c: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  hashIDrissWithPassword(
    _IDrissHash: PromiseOrValue<string>,
    _password: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  safeHexStringToAddress(
    s: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    fromHexChar(
      c: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    hashIDrissWithPassword(
      _IDrissHash: PromiseOrValue<string>,
      _password: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    safeHexStringToAddress(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fromHexChar(
      c: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashIDrissWithPassword(
      _IDrissHash: PromiseOrValue<string>,
      _password: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeHexStringToAddress(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fromHexChar(
      c: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashIDrissWithPassword(
      _IDrissHash: PromiseOrValue<string>,
      _password: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeHexStringToAddress(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}