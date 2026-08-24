import { NumberSearchInput } from './NumberSearchInput';
/**
 Input object for ProductSearchInventoryFilterInput

 Server-side stock filter for product search. Because the filtering happens
 upstream, the pagination counts on the response (`itemsFound`, `pages`)
 describe the *filtered* set, so they can be used directly for paging.

 Products that were never stocked have no inventory record and count as **0**.

 `NumberSearchInput` operators are inclusive despite their names —
 `greaterThan: N` means stock **>= N** and `lessThan: N` means stock **<= N**:

 - In stock — `{ totalQuantity: { greaterThan: 1 } }` (>= 1). This includes
   products with exactly 1 in stock, which is correct.
 - Out of stock — `{ totalQuantity: { equal: 0 } }` (exactly 0, including
   never-stocked products), or `{ totalQuantity: { lessThan: 0 } }` (<= 0) to
   also catch negative balances.

 Do **not** use `lessThan: 1` for out-of-stock: it means <= 1 and therefore
 includes in-stock products that have exactly 1 remaining.
 */
export interface ProductSearchInventoryFilterInput {
  /** Filter on the total available quantity across all warehouses */
  totalQuantity?: NumberSearchInput;
  /** Filter on the local warehouse quantity */
  localQuantity?: NumberSearchInput;
  /** Filter on the supplier warehouse quantity */
  supplierQuantity?: NumberSearchInput;
}
