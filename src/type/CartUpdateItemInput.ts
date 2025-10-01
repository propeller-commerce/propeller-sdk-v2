/**
 Input object for CartUpdateItemInput
 */
export interface CartUpdateItemInput {
  /** Item quantity */
  quantity?: number;
  /** Item notes */
  notes?: string;
  /** Cart item unit price. Defaults to calculated price. Only use for external pricing. */
  price?: number;
}