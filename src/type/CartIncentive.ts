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
}