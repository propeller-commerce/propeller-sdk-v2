import { OrderStatusType } from '../enum/OrderStatusType';
import { OrderStatusOrderType } from '../enum/OrderStatusOrderType';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderStatusesResponse } from './OrderStatusesResponse';
/**
 Object class for OrderStatus
 */
export class OrderStatus {
  /** The primary order status identifier */
  private _id: number;
  /** The order status name */
  private _name: string;
  /** The order status code value */
  private _code: string;
  /** The order status type */
  private _type: OrderStatusType;
  /** The order status for order type */
  private _orderType: OrderStatusOrderType;
  /** The order status description */
  private _description?: string;
  /** The order status priority */
  private _priority?: number;
  /** Marks if the order status is default */
  private _isDefault?: boolean;
  /** Marks if the order is public */
  private _isPublic?: boolean;
  /** Marks if the order is editable */
  private _isEditable?: boolean;
  /** Marks if the order is deletable */
  private _isDeletable?: boolean;
  /** Marks if the order is exportable */
  private _isExportable?: boolean;
  /** Marks if the order is confirmable */
  private _isConfirmable?: boolean;
  /** Marks if the order can be archived */
  private _isArchivable?: boolean;
  /** The order status creation date */
  private _createdAt: string;
  /** The order status last modification date */
  private _lastModifiedAt: string;
  /** The order status set the current status belongs to */
  private _statusSet?: OrderStatusSet;
  /** nextStatuses field */
  private _nextStatuses: OrderStatusesResponse;
  /** previousStatuses field */
  private _previousStatuses: OrderStatusesResponse;
  /**
   Creates a new instance of OrderStatus
   */
  constructor(data: Partial<OrderStatus> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._code = data.code!;
    this._type = data.type!;
    this._orderType = data.orderType!;
    this._description = data.description;
    this._priority = data.priority;
    this._isDefault = data.isDefault;
    this._isPublic = data.isPublic;
    this._isEditable = data.isEditable;
    this._isDeletable = data.isDeletable;
    this._isExportable = data.isExportable;
    this._isConfirmable = data.isConfirmable;
    this._isArchivable = data.isArchivable;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._statusSet = data.statusSet;
    this._nextStatuses = data.nextStatuses!;
    this._previousStatuses = data.previousStatuses!;
  }
  /**
   The primary order status identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   The primary order status identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   The order status name
   */
  get name(): string {
    return this._name;
  }
  /**
   The order status name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The order status code value
   */
  get code(): string {
    return this._code;
  }
  /**
   The order status code value
   */
  set code(value: string) {
    this._code = value;
  }
  /**
   The order status type
   */
  get type(): OrderStatusType {
    return this._type;
  }
  /**
   The order status type
   */
  set type(value: OrderStatusType) {
    this._type = value;
  }
  /**
   The order status for order type
   */
  get orderType(): OrderStatusOrderType {
    return this._orderType;
  }
  /**
   The order status for order type
   */
  set orderType(value: OrderStatusOrderType) {
    this._orderType = value;
  }
  /**
   The order status description
   */
  get description(): string | undefined {
    return this._description;
  }
  /**
   The order status description
   */
  set description(value: string | undefined) {
    this._description = value;
  }
  /**
   The order status priority
   */
  get priority(): number | undefined {
    return this._priority;
  }
  /**
   The order status priority
   */
  set priority(value: number | undefined) {
    this._priority = value;
  }
  /**
   Marks if the order status is default
   */
  get isDefault(): boolean | undefined {
    return this._isDefault;
  }
  /**
   Marks if the order status is default
   */
  set isDefault(value: boolean | undefined) {
    this._isDefault = value;
  }
  /**
   Marks if the order is public
   */
  get isPublic(): boolean | undefined {
    return this._isPublic;
  }
  /**
   Marks if the order is public
   */
  set isPublic(value: boolean | undefined) {
    this._isPublic = value;
  }
  /**
   Marks if the order is editable
   */
  get isEditable(): boolean | undefined {
    return this._isEditable;
  }
  /**
   Marks if the order is editable
   */
  set isEditable(value: boolean | undefined) {
    this._isEditable = value;
  }
  /**
   Marks if the order is deletable
   */
  get isDeletable(): boolean | undefined {
    return this._isDeletable;
  }
  /**
   Marks if the order is deletable
   */
  set isDeletable(value: boolean | undefined) {
    this._isDeletable = value;
  }
  /**
   Marks if the order is exportable
   */
  get isExportable(): boolean | undefined {
    return this._isExportable;
  }
  /**
   Marks if the order is exportable
   */
  set isExportable(value: boolean | undefined) {
    this._isExportable = value;
  }
  /**
   Marks if the order is confirmable
   */
  get isConfirmable(): boolean | undefined {
    return this._isConfirmable;
  }
  /**
   Marks if the order is confirmable
   */
  set isConfirmable(value: boolean | undefined) {
    this._isConfirmable = value;
  }
  /**
   Marks if the order can be archived
   */
  get isArchivable(): boolean | undefined {
    return this._isArchivable;
  }
  /**
   Marks if the order can be archived
   */
  set isArchivable(value: boolean | undefined) {
    this._isArchivable = value;
  }
  /**
   The order status creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The order status creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The order status last modification date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The order status last modification date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   The order status set the current status belongs to
   */
  get statusSet(): OrderStatusSet | undefined {
    return this._statusSet;
  }
  /**
   The order status set the current status belongs to
   */
  set statusSet(value: OrderStatusSet | undefined) {
    this._statusSet = value;
  }
  /**
   nextStatuses field
   */
  get nextStatuses(): OrderStatusesResponse {
    return this._nextStatuses;
  }
  /**
   nextStatuses field
   */
  set nextStatuses(value: OrderStatusesResponse) {
    this._nextStatuses = value;
  }
  /**
   previousStatuses field
   */
  get previousStatuses(): OrderStatusesResponse {
    return this._previousStatuses;
  }
  /**
   previousStatuses field
   */
  set previousStatuses(value: OrderStatusesResponse) {
    this._previousStatuses = value;
  }
}