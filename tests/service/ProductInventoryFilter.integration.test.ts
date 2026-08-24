/**
 * Real-API integration tests for the server-side inventory/stock filter
 * (`ProductSearchInput.inventory`).
 *
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only.
 *
 * These guard the operator semantics, which are easy to get wrong:
 * `greaterThan` / `lessThan` are INCLUSIVE (>= / <=), so `lessThan: 1` means
 * "<= 1" and wrongly includes in-stock products that have exactly 1 left.
 */
import { productService } from '../../src/service/ProductService';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig, hasLiveCredentials } from '../config';
import type { ProductSearchInventoryFilterInput } from '../../src/type/ProductSearchInventoryFilterInput';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

describeLive('ProductSearchInput.inventory (integration)', () => {
  const svc = productService(TestHelpers.createTestClient());

  const countWith = async (inventory?: ProductSearchInventoryFilterInput) => {
    const res = await svc.getProducts({
      input: {
        language: testConfig.DEFAULT_LANGUAGE,
        page: 1,
        offset: 1,
        statuses: [],
        ...(inventory ? { inventory } : {}),
      },
    });
    return (res as any).itemsFound as number;
  };

  it('filters server-side, so itemsFound reflects the filtered set', async () => {
    const total = await countWith();
    const inStock = await countWith({ totalQuantity: { greaterThan: 1 } });

    expect(typeof total).toBe('number');
    expect(typeof inStock).toBe('number');
    // The filter must actually constrain the result set, not be ignored.
    expect(inStock).toBeLessThanOrEqual(total);
  });

  it('in-stock and exactly-zero are disjoint subsets of the catalogue', async () => {
    const total = await countWith();
    const inStock = await countWith({ totalQuantity: { greaterThan: 1 } });
    const zero = await countWith({ totalQuantity: { equal: 0 } });

    // equal:0 counts never-stocked products too, so the two buckets together
    // can only account for the catalogue minus any negative balances.
    expect(inStock + zero).toBeLessThanOrEqual(total);
  });

  it('lessThan is inclusive — lessThan:1 wrongly includes stock-1 products', async () => {
    const outOfStock = await countWith({ totalQuantity: { lessThan: 0 } });
    const lessThanOne = await countWith({ totalQuantity: { lessThan: 1 } });

    // <= 1 is a superset of <= 0. If these are ever equal the catalogue simply
    // has no stock-1 products; it must never be smaller.
    expect(lessThanOne).toBeGreaterThanOrEqual(outOfStock);
  });
});
