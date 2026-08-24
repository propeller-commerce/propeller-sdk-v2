/**
 Input object for CartItemBulkInput
 */
export interface CartItemBulkInput {
  /** CartItem unique identifier */
  itemId?: string;
  /** Product unique identifier */
  productId?: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  clusterId?: number;
  /** Cart item unit price. Defaults to calculated price. Only use for external pricing. */
  price?: number;
  /** Item quantity in cart, defaults to 1. If updated with null value quantity will be set to 1. */
  quantity?: number;
  /** Item notes */
  notes?: string;
}