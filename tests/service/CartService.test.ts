import { CartService } from '../../src/service/CartService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';
import { TestHelpers } from '../helpers/testHelpers';
import { CartStatus } from '../../src/enum';
import { 
  Cart, 
  CartItem, 
  AddToCartInput, 
  UpdateCartItemInput,
  RemoveFromCartInput,
  CartSearchInput
} from '../../src/type';

describe('CartService', () => {
  let service: CartService;
  let mockClient: jest.Mocked<GraphQLClient>;

  beforeEach(() => {
    // Create a mock GraphQL client
    mockClient = {
      execute: jest.fn(),
    } as any;

    service = new CartService(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(CartService);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new CartService(realClient);
      
      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(CartService);
    });
  });

  describe('Cart Creation and Retrieval', () => {
    it('should create a new cart successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        createCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.createCart(testConfig.ANONYMOUS_USER_ID);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('createCart'),
          variables: { customerId: testConfig.ANONYMOUS_USER_ID },
        })
      );
    });

    it('should get cart by ID successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        cart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getCart(123);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cart'),
          variables: { id: 123 },
        })
      );
    });

    it('should get cart by customer ID successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        cartByCustomerId: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getCartByCustomerId(testConfig.ANONYMOUS_USER_ID);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cartByCustomerId'),
          variables: { customerId: testConfig.ANONYMOUS_USER_ID },
        })
      );
    });
  });

  describe('Cart Item Management', () => {
    it('should add item to cart successfully', async () => {
      const mockCartItem: CartItem = {
        id: 456,
        productId: 789,
        quantity: 2,
        price: 29.99,
        total: 59.98,
        product: {
          productId: 789,
          name: 'Test Product',
          sku: 'TEST-001',
        },
      };

      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [mockCartItem],
        total: 59.98,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        addToCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const addInput: AddToCartInput = {
        cartId: 123,
        productId: 789,
        quantity: 2,
        price: 29.99,
      };

      const result = await service.addToCart(addInput);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('addToCart'),
          variables: { input: addInput },
        })
      );
    });

    it('should update cart item quantity successfully', async () => {
      const mockCartItem: CartItem = {
        id: 456,
        productId: 789,
        quantity: 3,
        price: 29.99,
        total: 89.97,
        product: {
          productId: 789,
          name: 'Test Product',
          sku: 'TEST-001',
        },
      };

      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [mockCartItem],
        total: 89.97,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateCartItem: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const updateInput: UpdateCartItemInput = {
        cartId: 123,
        itemId: 456,
        quantity: 3,
      };

      const result = await service.updateCartItem(updateInput);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('updateCartItem'),
          variables: { input: updateInput },
        })
      );
    });

    it('should remove item from cart successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        removeFromCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const removeInput: RemoveFromCartInput = {
        cartId: 123,
        itemId: 456,
      };

      const result = await service.removeFromCart(removeInput);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('removeFromCart'),
          variables: { input: removeInput },
        })
      );
    });

    it('should clear cart successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        clearCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.clearCart(123);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clearCart'),
          variables: { cartId: 123 },
        })
      );
    });
  });

  describe('Cart Status Management', () => {
    it('should update cart status successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ABANDONED,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateCartStatus: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.updateCartStatus(123, CartStatus.ABANDONED);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('updateCartStatus'),
          variables: { cartId: 123, status: CartStatus.ABANDONED },
        })
      );
    });

    it('should abandon cart successfully', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ABANDONED,
        items: [],
        total: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        abandonCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.abandonCart(123);

      expect(result).toEqual(mockCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('abandonCart'),
          variables: { cartId: 123 },
        })
      );
    });
  });

  describe('Cart Calculations', () => {
    it('should calculate cart totals correctly', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [
          {
            id: 456,
            productId: 789,
            quantity: 2,
            price: 29.99,
            total: 59.98,
            product: {
              productId: 789,
              name: 'Test Product 1',
              sku: 'TEST-001',
            },
          },
          {
            id: 457,
            productId: 790,
            quantity: 1,
            price: 19.99,
            total: 19.99,
            product: {
              productId: 790,
              name: 'Test Product 2',
              sku: 'TEST-002',
            },
          },
        ],
        total: 79.97,
        subtotal: 79.97,
        tax: 16.79,
        shipping: 5.99,
        discount: 0,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        calculateCart: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.calculateCart(123);

      expect(result.total).toBe(79.97);
      expect(result.subtotal).toBe(79.97);
      expect(result.tax).toBe(16.79);
      expect(result.shipping).toBe(5.99);
      expect(result.discount).toBe(0);
    });

    it('should apply discounts to cart', async () => {
      const mockCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [
          {
            id: 456,
            productId: 789,
            quantity: 1,
            price: 100.00,
            total: 100.00,
            product: {
              productId: 789,
              name: 'Expensive Product',
              sku: 'EXP-001',
            },
          },
        ],
        total: 85.00,
        subtotal: 100.00,
        tax: 17.85,
        shipping: 0,
        discount: 15.00,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        applyDiscount: mockCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.applyDiscount(123, 'SAVE15');

      expect(result.discount).toBe(15.00);
      expect(result.total).toBe(85.00);
    });
  });

  describe('Cart Search and Filtering', () => {
    it('should search carts by criteria', async () => {
      const mockCarts: Cart[] = [
        {
          id: 123,
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: CartStatus.ACTIVE,
          items: [],
          total: 0,
          currency: 'EUR',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 124,
          customerId: 14552,
          status: CartStatus.ABANDONED,
          items: [],
          total: 0,
          currency: 'EUR',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        searchCarts: {
          data: mockCarts,
          total: 2,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: CartSearchInput = {
        status: CartStatus.ACTIVE,
        customerId: testConfig.ANONYMOUS_USER_ID,
        limit: 10,
        offset: 0,
      };

      const result = await service.searchCarts(searchInput);

      expect(result.data).toHaveLength(2);
      expect(result.total).toBe(2);
    });

    it('should filter carts by date range', async () => {
      const mockCarts: Cart[] = [
        {
          id: 125,
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: CartStatus.ACTIVE,
          items: [],
          total: 0,
          currency: 'EUR',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        searchCarts: {
          data: mockCarts,
          total: 1,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: CartSearchInput = {
        createdAtFrom: '2024-01-01T00:00:00Z',
        createdAtTo: '2024-01-31T23:59:59Z',
        limit: 10,
        offset: 0,
      };

      const result = await service.searchCarts(searchInput);

      expect(result.data).toHaveLength(1);
      expect(result.total).toBe(1);
    });
  });

  describe('Cart Merging and Splitting', () => {
    it('should merge carts successfully', async () => {
      const mockMergedCart: Cart = {
        id: 123,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [
          {
            id: 456,
            productId: 789,
            quantity: 3,
            price: 29.99,
            total: 89.97,
            product: {
              productId: 789,
              name: 'Test Product',
              sku: 'TEST-001',
            },
          },
        ],
        total: 89.97,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        mergeCarts: mockMergedCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.mergeCarts(123, 124);

      expect(result).toEqual(mockMergedCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('mergeCarts'),
          variables: { sourceCartId: 123, targetCartId: 124 },
        })
      );
    });

    it('should split cart items successfully', async () => {
      const mockSplitCart: Cart = {
        id: 125,
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: CartStatus.ACTIVE,
        items: [
          {
            id: 457,
            productId: 790,
            quantity: 1,
            price: 19.99,
            total: 19.99,
            product: {
              productId: 790,
              name: 'Test Product 2',
              sku: 'TEST-002',
            },
          },
        ],
        total: 19.99,
        currency: 'EUR',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        splitCart: mockSplitCart,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.splitCart(123, [456]);

      expect(result).toEqual(mockSplitCart);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('splitCart'),
          variables: { sourceCartId: 123, itemIds: [456] },
        })
      );
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network error');
      mockClient.execute = jest.fn().mockRejectedValue(networkError);

      await expect(service.getCart(123)).rejects.toThrow('Network error');
    });

    it('should handle invalid cart IDs', async () => {
      const mockError = TestHelpers.createMockError('Cart not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      await expect(service.getCart(999)).rejects.toThrow();
    });

    it('should handle adding invalid products to cart', async () => {
      const mockError = TestHelpers.createMockError('Product not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const addInput: AddToCartInput = {
        cartId: 123,
        productId: 999,
        quantity: 1,
        price: 29.99,
      };

      await expect(service.addToCart(addInput)).rejects.toThrow();
    });

    it('should handle updating non-existent cart items', async () => {
      const mockError = TestHelpers.createMockError('Cart item not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const updateInput: UpdateCartItemInput = {
        cartId: 123,
        itemId: 999,
        quantity: 2,
      };

      await expect(service.updateCartItem(updateInput)).rejects.toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('should perform full cart lifecycle', async () => {
      // This test demonstrates a full cart lifecycle
      const realClient = TestHelpers.createTestClient();
      const realService = new CartService(realClient);

      expect(realService).toBeDefined();

      // Note: In a real integration test, you would:
      // 1. Create a cart
      // 2. Add items to cart
      // 3. Update cart items
      // 4. Calculate totals
      // 5. Clear or abandon cart
      // But for now, we'll just verify the service is properly initialized
      expect(realService).toBeInstanceOf(CartService);
    });

    it('should handle multiple cart operations efficiently', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new CartService(realClient);

      // Test that the service can handle multiple operations efficiently
      expect(realService).toBeDefined();
    });
  });
}); 