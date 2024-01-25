/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export type AttestationStruct = {
  uid: BytesLike;
  schema: BytesLike;
  time: BigNumberish;
  expirationTime: BigNumberish;
  revocationTime: BigNumberish;
  refUID: BytesLike;
  recipient: AddressLike;
  attester: AddressLike;
  revocable: boolean;
  data: BytesLike;
};

export type AttestationStructOutput = [
  uid: string,
  schema: string,
  time: bigint,
  expirationTime: bigint,
  revocationTime: bigint,
  refUID: string,
  recipient: string,
  attester: string,
  revocable: boolean,
  data: string
] & {
  uid: string;
  schema: string;
  time: bigint;
  expirationTime: bigint;
  revocationTime: bigint;
  refUID: string;
  recipient: string;
  attester: string;
  revocable: boolean;
  data: string;
};

export interface ISchemaResolverInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "attest"
      | "isPayable"
      | "multiAttest"
      | "multiRevoke"
      | "revoke"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "attest",
    values: [AttestationStruct]
  ): string;
  encodeFunctionData(functionFragment: "isPayable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiAttest",
    values: [AttestationStruct[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevoke",
    values: [AttestationStruct[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [AttestationStruct]
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
}

export interface ISchemaResolver extends BaseContract {
  connect(runner?: ContractRunner | null): ISchemaResolver;
  waitForDeployment(): Promise<this>;

  interface: ISchemaResolverInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  attest: TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;

  isPayable: TypedContractMethod<[], [boolean], "view">;

  multiAttest: TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;

  multiRevoke: TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;

  revoke: TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "attest"
  ): TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "isPayable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "multiAttest"
  ): TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multiRevoke"
  ): TypedContractMethod<
    [attestations: AttestationStruct[], values: BigNumberish[]],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "revoke"
  ): TypedContractMethod<
    [attestation: AttestationStruct],
    [boolean],
    "payable"
  >;

  filters: {};
}
