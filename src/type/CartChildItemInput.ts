/**
 Input object for CartChildItemInput
 */
export interface CartChildItemInput {
  /** Item quantity */
  quantity?: number;
  /** Item notes */
  notes?: string;
  /** Product unique identifier */
  productId: number;
  /** Cart item unit price. Defaults to calculated price. Only use for external pricing. */
  price?: number;
}