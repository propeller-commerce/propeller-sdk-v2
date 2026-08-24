/**
 * Real-API integration tests for CategoryService.
 *
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only; move/reorder mutations are asserted to exist but never invoked
 * (they mutate real catalog state).
 */
import { categoryService } from '../../src/service/CategoryService';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig, hasLiveCredentials } from '../config';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

describeLive('CategoryService (integration)', () => {
  const svc = categoryService(TestHelpers.createTestClient());

  it('getCategory returns the base category with schema-sync fields populated', async () => {
    const category = await svc.getCategory({ categoryId: testConfig.BASE_CATEGORY_ID });

    expect(category).toBeTruthy();
    expect(category.categoryId).toBe(testConfig.BASE_CATEGORY_ID);

    // NEW schema-sync fields
    expect(Array.isArray(category.names)).toBe(true);
    expect(Array.isArray(category.slugs)).toBe(true);
    expect(typeof category.uuid).toBe('string');
    expect(category.uuid.length).toBeGreaterThan(0);
    expect(category.createdAt).toBeTruthy();
  });

  it('getCategoryChildren returns an array of categories', async () => {
    const children = await svc.getCategoryChildren({ categoryId: testConfig.BASE_CATEGORY_ID });

    expect(Array.isArray(children)).toBe(true);
    if (children.length > 0) {
      expect(typeof children[0].categoryId).toBe('number');
      expect(Array.isArray(children[0].names)).toBe(true);
    }
  });

  it('getCategoryHierarchy returns the ancestor chain as an array', async () => {
    const hierarchy = await svc.getCategoryHierarchy({ categoryId: testConfig.BASE_CATEGORY_ID });

    expect(Array.isArray(hierarchy)).toBe(true);
    if (hierarchy.length > 0) {
      expect(typeof hierarchy[0].categoryId).toBe('number');
    }
  });

  it('exposes move mutations without invoking them (destructive on real data)', () => {
    expect(typeof svc.categoryMoveAbove).toBe('function');
    expect(typeof svc.categoryMoveBelow).toBe('function');
  });
});
