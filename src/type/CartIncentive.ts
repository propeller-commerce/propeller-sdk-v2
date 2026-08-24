import { CartBaseItem } from './CartBaseItem';
import { CartIncentiveParams } from './CartIncentiveParams';
/**
 Object class for CartIncentive
 */
export interface CartIncentive {
  /** Incentive name */
  name: string;
  /** Incentive action */
  action: string;
  /** List of affected items */
  affectedItems?: CartBaseItem[];
  /** Incentive parameters */
  params: CartIncentiveParams;
}