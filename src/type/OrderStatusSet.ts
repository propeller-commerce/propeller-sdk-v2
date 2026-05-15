import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusSet
 */
export class OrderStatusSet {
  /** The primary order status set identifier */
  id!: number;
  /** The order status set name */
  name!: string;
  /** The order status set description */
  description?: string;
  /** The order statuses in this set */
  orderStatuses?: OrderStatus[];
  constructor(data: Partial<OrderStatusSet> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `description`. */
  getDescription(): string | undefined {
    return this.description;
  }
  /** Returns `orderStatuses` as OrderStatus instances (coerced on first access). */
  getOrderStatuses(): OrderStatus[] | undefined {
    if (!this.orderStatuses) return undefined;
    this.orderStatuses = this.orderStatuses.map((x: any) => x instanceof OrderStatus ? x : new OrderStatus(x));
    return this.orderStatuses;
  }
}