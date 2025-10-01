import { CartBaseItem } from './CartBaseItem';
import { CartIncentiveParams } from './CartIncentiveParams';
/**
 Object class for CartIncentive
 */
export class CartIncentive {
  /** Incentive name */
  private _name: string;
  /** Incentive action */
  private _action: string;
  /** List of affected items */
  private _affectedItems?: CartBaseItem[];
  /** Incentive parameters */
  private _params: CartIncentiveParams;
  /**
   Creates a new instance of CartIncentive
   */
  constructor(data: Partial<CartIncentive> = {}) {
    this._name = data.name!;
    this._action = data.action!;
    this._affectedItems = data.affectedItems;
    this._params = data.params!;
  }
  /**
   Incentive name
   */
  get name(): string {
    return this._name;
  }
  /**
   Incentive name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Incentive action
   */
  get action(): string {
    return this._action;
  }
  /**
   Incentive action
   */
  set action(value: string) {
    this._action = value;
  }
  /**
   List of affected items
   */
  get affectedItems(): CartBaseItem[] | undefined {
    return this._affectedItems;
  }
  /**
   List of affected items
   */
  set affectedItems(value: CartBaseItem[] | undefined) {
    this._affectedItems = value;
  }
  /**
   Incentive parameters
   */
  get params(): CartIncentiveParams {
    return this._params;
  }
  /**
   Incentive parameters
   */
  set params(value: CartIncentiveParams) {
    this._params = value;
  }
}