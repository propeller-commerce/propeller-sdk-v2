/**
 * Real-API integration tests for the attributes selection on ProductGridFields.
 *
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only.
 *
 * These go through the SERVICE layer on purpose. Several services expose
 * hand-authored `*QueryVariables` interfaces that codegen does not regenerate
 * (ProductsQueryVariables, CategoryQueryVariables, CrossupsellsQueryVariables),
 * so a test that posts a raw document — or that casts the variables to `any` —
 * will pass while the public API is still missing the field. No `as any` here:
 * if a variables interface loses `attributeResultSearchInput`, this file must
 * fail to compile.
 *
 * ProductGridFields deliberately selects a LEAN attribute shape for listings
 * (`attributeDescription { name }` + four value branches) rather than reusing
 * the heavy AttributeResultProductFields.
 */
import { productService, type ProductsQueryVariables } from '../../src/service/ProductService';
import { categoryService, type CategoryQueryVariables } from '../../src/service/CategoryService';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig, hasLiveCredentials } from '../config';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

type GridAttr = {
  attributeDescription?: { name?: string };
  value?: Record<string, unknown> & { __typename?: string };
};

const attrsOf = (p: any): GridAttr[] => p?.attributes?.items ?? [];

describeLive('ProductGridFields attributes (integration)', () => {
  const client = TestHelpers.createTestClient();
  const products = productService(client);
  const categories = categoryService(client);

  // Typed as the real interface — no cast. This is the compile-time guard.
  const gridVars = (attributeOffset: number): ProductsQueryVariables => ({
    input: { language: testConfig.DEFAULT_LANGUAGE, page: 1, offset: 25, statuses: [] },
    attributeResultSearchInput: { page: 1, offset: attributeOffset },
  });

  it('ProductService.getProducts returns attributes with a named description', async () => {
    const res = await products.getProducts(gridVars(25));
    const items = res.items ?? [];
    if (items.length === 0) return; // empty catalogue is acceptable

    const withAttrs = items.filter((p: any) => attrsOf(p).length > 0);
    expect(withAttrs.length).toBeGreaterThan(0);

    for (const attr of attrsOf(withAttrs[0])) {
      expect(typeof attr.attributeDescription?.name).toBe('string');
      expect(typeof attr.value?.__typename).toBe('string');
    }
  });

  it('honours attributeResultSearchInput — a smaller offset returns fewer attributes', async () => {
    const [few, many] = [await products.getProducts(gridVars(2)), await products.getProducts(gridVars(25))];
    const maxAttrs = (r: any) => Math.max(0, ...(r.items ?? []).map((p: any) => attrsOf(p).length));

    // If the variable were dropped between the service and the wire, both
    // calls would come back with an identical attribute count.
    expect(maxAttrs(few)).toBeLessThanOrEqual(maxAttrs(many));
    expect(maxAttrs(few)).toBeLessThanOrEqual(2);
  });

  it('resolves the value union — each selected branch carries its own field', async () => {
    const res = await products.getProducts(gridVars(60));
    const values = (res.items ?? []).flatMap((p: any) => attrsOf(p).map((a) => a.value).filter(Boolean));
    if (values.length === 0) return;

    for (const v of values as any[]) {
      switch (v.__typename) {
        case 'AttributeTextValue': expect(Array.isArray(v.textValues)).toBe(true); break;
        case 'AttributeEnumValue': expect(Array.isArray(v.enumValues)).toBe(true); break;
        case 'AttributeIntValue': expect(typeof v.intValue).toBe('number'); break;
        case 'AttributeDecimalValue': expect(typeof v.decimalValue).toBe('number'); break;
        default:
          // AttributeColorValue / AttributeDateTimeValue are intentionally not
          // selected by the grid fragment, so they carry only __typename.
          expect(Object.keys(v)).toEqual(['__typename']);
      }
    }
  });

  it('CategoryService.getCategory accepts attributeResultSearchInput on its hand-authored interface', async () => {
    // Typed as CategoryQueryVariables — this would not compile if the
    // hand-authored interface were missing the field.
    const vars: CategoryQueryVariables = {
      categoryId: Number(testConfig.BASE_CATEGORY_ID),
      language: testConfig.DEFAULT_LANGUAGE,
      attributeResultSearchInput: { page: 1, offset: 5 },
    };
    const category: any = await categories.getCategory(vars);
    expect(category).toBeTruthy();

    // The category's products carry ProductGridFields, so any returned product
    // must respect the offset we asked for.
    for (const p of category?.products?.items ?? []) {
      expect(attrsOf(p).length).toBeLessThanOrEqual(5);
    }
  });
});
