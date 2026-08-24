/**
 * Real-API integration tests for ProductService.
 *
 * Separate from the mocked tests/service/ProductService.test.ts.
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only; create/update mutations are asserted to exist but never invoked
 * (they mutate real catalog state).
 */
import { productService } from '../../src/service/ProductService';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig, hasLiveCredentials } from '../config';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

describeLive('ProductService (integration)', () => {
  const svc = productService(TestHelpers.createTestClient());

  it('getProduct returns a product with schema-sync fields populated', async () => {
    // Find a valid product via the search list, then fetch it by id.
    const list = await svc.getProducts({
      input: {
        language: testConfig.DEFAULT_LANGUAGE,
        page: 1,
        offset: 12,
        statuses: [],
      },
    });
    expect(Array.isArray(list.items)).toBe(true);

    if (list.items.length === 0) {
      // Empty catalog is acceptable — nothing further to assert.
      return;
    }

    const productId = (list.items[0] as any).productId;
    expect(typeof productId).toBe('number');

    const product = await svc.getProduct({ productId });

    expect(product).toBeTruthy();
    expect(product.productId).toBe(productId);

    // NEW schema-sync fields
    expect(Array.isArray(product.names)).toBe(true);
    expect(Array.isArray(product.slugs)).toBe(true);
    expect(typeof product.uuid).toBe('string');
    expect(product.type).toBeTruthy();
    expect(product.createdAt).toBeTruthy();
  });

  it('exposes NEW read methods added by the schema sync', () => {
    expect(typeof svc.getBaseProducts).toBe('function');
    expect(typeof svc.getProductsRaw).toBe('function');
  });

  it('exposes create/update mutations without invoking them (destructive on real data)', () => {
    expect(typeof svc.createProduct).toBe('function');
    expect(typeof svc.updateProduct).toBe('function');
  });
});
