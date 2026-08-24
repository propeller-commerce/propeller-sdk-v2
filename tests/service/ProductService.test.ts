import { GraphQLClient } from '../../src/client/GraphQLClient';
import { ProductService } from '../../src/service/ProductService';
import type { Product } from '../../src/type/Product';

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

describe('ProductService', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('getProduct returns the response payload typed as Product', async () => {
    fetchSpy.mockResolvedValueOnce(
      okResponse({ product: { id: 42, productId: 42, sku: 'SKU-42' } })
    );

    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new ProductService(client);

    const product: Product = await svc.getProduct({ productId: 42 } as any);

    // v0.10.0: returned value is a plain object satisfying the Product
    // interface (no longer a class instance).
    expect(product).toEqual(expect.objectContaining({ id: 42, sku: 'SKU-42' }));
    expect(product.id).toBe(42);
    expect(product.sku).toBe('SKU-42');

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('product');
    expect(body.variables).toMatchObject({ productId: 42 });
  });

  it('JSON.stringify on returned Product produces a full payload', async () => {
    fetchSpy.mockResolvedValueOnce(
      okResponse({ product: { id: 1, productId: 1, sku: 'A', categoryId: 5 } })
    );

    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new ProductService(client);
    const product = await svc.getProduct({ productId: 1 } as any);

    const parsed = JSON.parse(JSON.stringify(product));
    expect(parsed.id).toBe(1);
    expect(parsed.sku).toBe('A');
    expect(parsed.categoryId).toBe(5);
  });
});
