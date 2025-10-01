import { TransactionTypes } from '../enum/TransactionTypes';
import { TransactionStatuses } from '../enum/TransactionStatuses';
/**
 Object class for Transaction
 */
export class Transaction {
  /** Transaction primary identifier */
  private _id: string | number;
  /** Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier] */
  private _transactionId: string;
  /** Payment ID - usually provided by the PSP */
  private _paymentId?: string;
  /** Unique orderId reference for the Payment */
  private _orderId: number;
  /** Transaction amount */
  private _amount: number;
  /** Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  private _currency: string;
  /** Description */
  private _description?: string;
  /** Transaction timestamp */
  private _timestamp?: string;
  /** Transaction type */
  private _type: TransactionTypes;
  /** PSP Provider Name */
  private _provider?: string;
  /** Transaction status */
  private _status: TransactionStatuses;
  /**
   Creates a new instance of Transaction
   */
  constructor(data: Partial<Transaction> = {}) {
    this._id = data.id!;
    this._transactionId = data.transactionId!;
    this._paymentId = data.paymentId;
    this._orderId = data.orderId!;
    this._amount = data.amount!;
    this._currency = data.currency!;
    this._description = data.description;
    this._timestamp = data.timestamp;
    this._type = data.type!;
    this._provider = data.provider;
    this._status = data.status!;
  }
  /**
   Transaction primary identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Transaction primary identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
   */
  get transactionId(): string {
    return this._transactionId;
  }
  /**
   Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
   */
  set transactionId(value: string) {
    this._transactionId = value;
  }
  /**
   Payment ID - usually provided by the PSP
   */
  get paymentId(): string | undefined {
    return this._paymentId;
  }
  /**
   Payment ID - usually provided by the PSP
   */
  set paymentId(value: string | undefined) {
    this._paymentId = value;
  }
  /**
   Unique orderId reference for the Payment
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   Unique orderId reference for the Payment
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   Transaction amount
   */
  get amount(): number {
    return this._amount;
  }
  /**
   Transaction amount
   */
  set amount(value: number) {
    this._amount = value;
  }
  /**
   Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
   */
  get currency(): string {
    return this._currency;
  }
  /**
   Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
   */
  set currency(value: string) {
    this._currency = value;
  }
  /**
   Description
   */
  get description(): string | undefined {
    return this._description;
  }
  /**
   Description
   */
  set description(value: string | undefined) {
    this._description = value;
  }
  /**
   Transaction timestamp
   */
  get timestamp(): string | undefined {
    return this._timestamp;
  }
  /**
   Transaction timestamp
   */
  set timestamp(value: string | undefined) {
    this._timestamp = value;
  }
  /**
   Transaction type
   */
  get type(): TransactionTypes {
    return this._type;
  }
  /**
   Transaction type
   */
  set type(value: TransactionTypes) {
    this._type = value;
  }
  /**
   PSP Provider Name
   */
  get provider(): string | undefined {
    return this._provider;
  }
  /**
   PSP Provider Name
   */
  set provider(value: string | undefined) {
    this._provider = value;
  }
  /**
   Transaction status
   */
  get status(): TransactionStatuses {
    return this._status;
  }
  /**
   Transaction status
   */
  set status(value: TransactionStatuses) {
    this._status = value;
  }
}