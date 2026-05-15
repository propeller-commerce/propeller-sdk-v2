import { CartBaseItem } from './CartBaseItem';
import { CartIncentiveParams } from './CartIncentiveParams';
/**
 Object class for CartIncentive
 */
export class CartIncentive {
  /** Incentive name */
  name!: string;
  /** Incentive action */
  action!: string;
  /** List of affected items */
  affectedItems?: CartBaseItem[];
  /** Incentive parameters */
  params!: CartIncentiveParams;
  constructor(data: Partial<CartIncentive> = {}) {
    Object.assign(this, data);
  }

  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `action`. */
  getAction(): string {
    return this.action;
  }
  /** Returns `affectedItems` as CartBaseItem instances (coerced on first access). */
  getAffectedItems(): CartBaseItem[] | undefined {
    if (!this.affectedItems) return undefined;
    this.affectedItems = this.affectedItems.map((x: any) => x instanceof CartBaseItem ? x : new CartBaseItem(x));
    return this.affectedItems;
  }
  /** Returns `params` as a CartIncentiveParams instance (coerced on first access). */
  getParams(): CartIncentiveParams | undefined {
    if (this.params == null) return undefined;
    if (!(this.params instanceof CartIncentiveParams)) {
      this.params = new CartIncentiveParams(this.params as any);
    }
    return this.params;
  }
}