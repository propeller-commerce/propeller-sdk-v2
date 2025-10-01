import { PaymentStatuses } from '../enum/PaymentStatuses';
import { Transaction } from './Transaction';
/**
 Object class for Payment
 */
export class Payment {
  /** Payment primary identifier */
  private _id: string | number;
  /** Logged in User ID */
  private _userId?: number;
  /** Guest User ID */
  private _anonymousId?: number;
  /** Unique paymentId reference for the Payment - provided by the PSP */
  private _paymentId?: string;
  /** Unique orderId reference for the Payment */
  private _orderId: number;
  /** Payment amount [denomination in cents] */
  private _amount: number;
  /** Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  private _currency: string;
  /** Payment method used by the PSP */
  private _method: string;
  /** Payment status */
  private _status: PaymentStatuses;
  /** Transaction(s) related to the specified payment */
  private _transactions?: Transaction[];
  /** Payment initial creation timestamp */
  private _createdAt: string;
  /** Reference to the user that created the payment initially */
  private _createdBy?: string;
  /** Payment last update timestamp */
  private _lastModifiedAt: string;
  /** Reference to the user that last modified the payment */
  private _lastModifiedBy?: string;
  /**
   Creates a new instance of Payment
   */
  constructor(data: Partial<Payment> = {}) {
    this._id = data.id!;
    this._userId = data.userId;
    this._anonymousId = data.anonymousId;
    this._paymentId = data.paymentId;
    this._orderId = data.orderId!;
    this._amount = data.amount!;
    this._currency = data.currency!;
    this._method = data.method!;
    this._status = data.status!;
    this._transactions = data.transactions;
    this._createdAt = data.createdAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._lastModifiedBy = data.lastModifiedBy;
  }
  /**
   Payment primary identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Payment primary identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Logged in User ID
   */
  get userId(): number | undefined {
    return this._userId;
  }
  /**
   Logged in User ID
   */
  set userId(value: number | undefined) {
    this._userId = value;
  }
  /**
   Guest User ID
   */
  get anonymousId(): number | undefined {
    return this._anonymousId;
  }
  /**
   Guest User ID
   */
  set anonymousId(value: number | undefined) {
    this._anonymousId = value;
  }
  /**
   Unique paymentId reference for the Payment - provided by the PSP
   */
  get paymentId(): string | undefined {
    return this._paymentId;
  }
  /**
   Unique paymentId reference for the Payment - provided by the PSP
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
   Payment amount [denomination in cents]
   */
  get amount(): number {
    return this._amount;
  }
  /**
   Payment amount [denomination in cents]
   */
  set amount(value: number) {
    this._amount = value;
  }
  /**
   Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
   */
  get currency(): string {
    return this._currency;
  }
  /**
   Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
   */
  set currency(value: string) {
    this._currency = value;
  }
  /**
   Payment method used by the PSP
   */
  get method(): string {
    return this._method;
  }
  /**
   Payment method used by the PSP
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   Payment status
   */
  get status(): PaymentStatuses {
    return this._status;
  }
  /**
   Payment status
   */
  set status(value: PaymentStatuses) {
    this._status = value;
  }
  /**
   Transaction(s) related to the specified payment
   */
  get transactions(): Transaction[] | undefined {
    return this._transactions;
  }
  /**
   Transaction(s) related to the specified payment
   */
  set transactions(value: Transaction[] | undefined) {
    this._transactions = value;
  }
  /**
   Payment initial creation timestamp
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Payment initial creation timestamp
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Reference to the user that created the payment initially
   */
  get createdBy(): string | undefined {
    return this._createdBy;
  }
  /**
   Reference to the user that created the payment initially
   */
  set createdBy(value: string | undefined) {
    this._createdBy = value;
  }
  /**
   Payment last update timestamp
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Payment last update timestamp
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Reference to the user that last modified the payment
   */
  get lastModifiedBy(): string | undefined {
    return this._lastModifiedBy;
  }
  /**
   Reference to the user that last modified the payment
   */
  set lastModifiedBy(value: string | undefined) {
    this._lastModifiedBy = value;
  }
}