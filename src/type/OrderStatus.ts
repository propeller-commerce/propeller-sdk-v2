import { OrderStatusType } from '../enum/OrderStatusType';
import { OrderStatusOrderType } from '../enum/OrderStatusOrderType';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderStatusesResponse } from './OrderStatusesResponse';
/**
 Object class for OrderStatus
 */
export class OrderStatus {
  /** The primary order status identifier */
  id!: number;
  /** The order status name */
  name!: string;
  /** The order status code value */
  code!: string;
  /** The order status type */
  type!: OrderStatusType;
  /** The order status for order type */
  orderType!: OrderStatusOrderType;
  /** The order status description */
  description?: string;
  /** The order status priority */
  priority?: number;
  /** Marks if the order status is default */
  isDefault?: boolean;
  /** Marks if the order is public */
  isPublic?: boolean;
  /** Marks if the order is editable */
  isEditable?: boolean;
  /** Marks if the order is deletable */
  isDeletable?: boolean;
  /** The order status creation date */
  createdAt!: string;
  /** The order status last modification date */
  lastModifiedAt!: string;
  /** The order status set the current status belongs to */
  statusSet?: OrderStatusSet;
  /** nextStatuses field */
  nextStatuses!: OrderStatusesResponse;
  /** previousStatuses field */
  previousStatuses!: OrderStatusesResponse;
  constructor(data: Partial<OrderStatus> = {}) {
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
  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns `type`. */
  getType(): OrderStatusType {
    return this.type;
  }
  /** Returns `orderType`. */
  getOrderType(): OrderStatusOrderType {
    return this.orderType;
  }
  /** Returns `description`. */
  getDescription(): string | undefined {
    return this.description;
  }
  /** Returns `priority`. */
  getPriority(): number | undefined {
    return this.priority;
  }
  /** Returns `isDefault`. */
  getIsDefault(): boolean | undefined {
    return this.isDefault;
  }
  /** Returns `isPublic`. */
  getIsPublic(): boolean | undefined {
    return this.isPublic;
  }
  /** Returns `isEditable`. */
  getIsEditable(): boolean | undefined {
    return this.isEditable;
  }
  /** Returns `isDeletable`. */
  getIsDeletable(): boolean | undefined {
    return this.isDeletable;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `statusSet` as a OrderStatusSet instance (coerced on first access). */
  getStatusSet(): OrderStatusSet | undefined {
    if (this.statusSet == null) return undefined;
    if (!(this.statusSet instanceof OrderStatusSet)) {
      this.statusSet = new OrderStatusSet(this.statusSet as any);
    }
    return this.statusSet;
  }
  /** Returns `nextStatuses` as a OrderStatusesResponse instance (coerced on first access). */
  getNextStatuses(): OrderStatusesResponse | undefined {
    if (this.nextStatuses == null) return undefined;
    if (!(this.nextStatuses instanceof OrderStatusesResponse)) {
      this.nextStatuses = new OrderStatusesResponse(this.nextStatuses as any);
    }
    return this.nextStatuses;
  }
  /** Returns `previousStatuses` as a OrderStatusesResponse instance (coerced on first access). */
  getPreviousStatuses(): OrderStatusesResponse | undefined {
    if (this.previousStatuses == null) return undefined;
    if (!(this.previousStatuses instanceof OrderStatusesResponse)) {
      this.previousStatuses = new OrderStatusesResponse(this.previousStatuses as any);
    }
    return this.previousStatuses;
  }
}