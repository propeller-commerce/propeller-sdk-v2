import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusSet
 */
export class OrderStatusSet {
  /** The primary order status set identifier */
  private _id: number;
  /** The order status set name */
  private _name: string;
  /** The order status set description */
  private _description?: string;
  /** The order statuses in this set */
  private _orderStatuses?: OrderStatus[];
  /**
   Creates a new instance of OrderStatusSet
   */
  constructor(data: Partial<OrderStatusSet> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._description = data.description;
    this._orderStatuses = data.orderStatuses;
  }
  /**
   The primary order status set identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   The primary order status set identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   The order status set name
   */
  get name(): string {
    return this._name;
  }
  /**
   The order status set name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The order status set description
   */
  get description(): string | undefined {
    return this._description;
  }
  /**
   The order status set description
   */
  set description(value: string | undefined) {
    this._description = value;
  }
  /**
   The order statuses in this set
   */
  get orderStatuses(): OrderStatus[] | undefined {
    return this._orderStatuses;
  }
  /**
   The order statuses in this set
   */
  set orderStatuses(value: OrderStatus[] | undefined) {
    this._orderStatuses = value;
  }
}