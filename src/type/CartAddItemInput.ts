import { CartChildItemInput } from './CartChildItemInput';
/**
 Input object for CartAddItemInput
 */
export interface CartAddItemInput {
  /** Item quantity */
  quantity?: number;
  /** Item notes */
  notes?: string;
  /** Product unique identifier */
  productId: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  clusterId?: number;
  /** Cart item unit price. Defaults to calculated price. Only use for external pricing. */
  price?: number;
  /** Adds child items to this cart item, this field is used when adding configurable clusters to the Cart. */
  childItems?: CartChildItemInput[];
}