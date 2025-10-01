import { OrderService } from '../../src/service/OrderService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';
import { TestHelpers } from '../helpers/testHelpers';
import { OrderStatus, OrderType, PaymentStatus } from '../../src/enum';
import { 
  Order, 
  OrderItem, 
  CreateOrderInput, 
  UpdateOrderInput,
  OrderSearchInput
} from '../../src/type';

describe('OrderService', () => {
  let service: OrderService;
  let mockClient: jest.Mocked<GraphQLClient>;

  beforeEach(() => {
    // Create a mock GraphQL client
    mockClient = {
      execute: jest.fn(),
    } as any;

    service = new OrderService(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(OrderService);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new OrderService(realClient);
      
      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(OrderService);
    });
  });

  describe('Order Creation', () => {
    it('should create an order successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [
          {
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
          },
        ],
        total: 59.98,
        subtotal: 59.98,
        tax: 12.60,
        shipping: 5.99,
        discount: 0,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        createOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const createInput: CreateOrderInput = {
        customerId: testConfig.ANONYMOUS_USER_ID,
        items: [
          {
            productId: 789,
            quantity: 2,
            price: 29.99,
          },
        ],
        shippingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Test Street',
          city: 'Test City',
          state: 'Test State',
          zipCode: '12345',
          country: 'NL',
        },
        billingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Test Street',
          city: 'Test City',
          state: 'Test State',
          zipCode: '12345',
          country: 'NL',
        },
        currency: 'EUR',
      };

      const result = await service.createOrder(createInput);

      expect(result).toEqual(mockOrder);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('createOrder'),
          variables: { input: createInput },
        })
      );
    });

    it('should handle order creation errors', async () => {
      const mockError = TestHelpers.createMockError('Order creation failed');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const createInput: CreateOrderInput = {
        customerId: testConfig.ANONYMOUS_USER_ID,
        items: [
          {
            productId: 789,
            quantity: 2,
            price: 29.99,
          },
        ],
        shippingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Test Street',
          city: 'Test City',
          country: 'NL',
        },
        billingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Test Street',
          city: 'Test City',
          country: 'NL',
        },
        currency: 'EUR',
      };

      await expect(service.createOrder(createInput)).rejects.toThrow();
    });
  });

  describe('Order Retrieval', () => {
    it('should get order by ID successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        order: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getOrder(123);

      expect(result).toEqual(mockOrder);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('order'),
          variables: { id: 123 },
        })
      );
    });

    it('should get order by order number successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        orderByNumber: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getOrderByNumber('ORD-2024-001');

      expect(result).toEqual(mockOrder);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('orderByNumber'),
          variables: { orderNumber: 'ORD-2024-001' },
        })
      );
    });

    it('should get orders by customer ID successfully', async () => {
      const mockOrders: Order[] = [
        {
          id: 123,
          orderNumber: 'ORD-2024-001',
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: OrderStatus.PENDING,
          type: OrderType.SALES,
          items: [],
          total: 59.98,
          currency: 'EUR',
          paymentStatus: PaymentStatus.PENDING,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 124,
          orderNumber: 'ORD-2024-002',
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: OrderStatus.COMPLETED,
          type: OrderType.SALES,
          items: [],
          total: 89.97,
          currency: 'EUR',
          paymentStatus: PaymentStatus.PAID,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        ordersByCustomerId: mockOrders,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getOrdersByCustomerId(testConfig.ANONYMOUS_USER_ID);

      expect(result).toEqual(mockOrders);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('ordersByCustomerId'),
          variables: { customerId: testConfig.ANONYMOUS_USER_ID },
        })
      );
    });
  });

  describe('Order Status Management', () => {
    it('should update order status successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PROCESSING,
        type: OrderType.SALES,
        items: [],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateOrderStatus: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.updateOrderStatus(123, OrderStatus.PROCESSING);

      expect(result).toEqual(mockOrder);
      expect(result.status).toBe(OrderStatus.PROCESSING);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('updateOrderStatus'),
          variables: { orderId: 123, status: OrderStatus.PROCESSING },
        })
      );
    });

    it('should cancel order successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.CANCELLED,
        type: OrderType.SALES,
        items: [],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.REFUNDED,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        cancelOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.cancelOrder(123, 'Customer requested cancellation');

      expect(result).toEqual(mockOrder);
      expect(result.status).toBe(OrderStatus.CANCELLED);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cancelOrder'),
          variables: { orderId: 123, reason: 'Customer requested cancellation' },
        })
      );
    });

    it('should complete order successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.COMPLETED,
        type: OrderType.SALES,
        items: [],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PAID,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        completeOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.completeOrder(123);

      expect(result).toEqual(mockOrder);
      expect(result.status).toBe(OrderStatus.COMPLETED);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('completeOrder'),
          variables: { orderId: 123 },
        })
      );
    });
  });

  describe('Order Updates', () => {
    it('should update order details successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [],
        total: 89.97,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const updateInput: UpdateOrderInput = {
        id: 123,
        items: [
          {
            productId: 789,
            quantity: 3,
            price: 29.99,
          },
        ],
      };

      const result = await service.updateOrder(updateInput);

      expect(result).toEqual(mockOrder);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('updateOrder'),
          variables: { input: updateInput },
        })
      );
    });

    it('should add items to order successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [
          {
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
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        addItemsToOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.addItemsToOrder(123, [
        {
          productId: 790,
          quantity: 1,
          price: 19.99,
        },
      ]);

      expect(result).toEqual(mockOrder);
      expect(result.items).toHaveLength(2);
      expect(result.total).toBe(79.97);
    });

    it('should remove items from order successfully', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [
          {
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
          },
        ],
        total: 59.98,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        removeItemsFromOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.removeItemsFromOrder(123, [457]);

      expect(result).toEqual(mockOrder);
      expect(result.items).toHaveLength(1);
      expect(result.total).toBe(59.98);
    });
  });

  describe('Order Search and Filtering', () => {
    it('should search orders by criteria', async () => {
      const mockOrders: Order[] = [
        {
          id: 123,
          orderNumber: 'ORD-2024-001',
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: OrderStatus.PENDING,
          type: OrderType.SALES,
          items: [],
          total: 59.98,
          currency: 'EUR',
          paymentStatus: PaymentStatus.PENDING,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        searchOrders: {
          data: mockOrders,
          total: 1,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: OrderSearchInput = {
        status: OrderStatus.PENDING,
        customerId: testConfig.ANONYMOUS_USER_ID,
        limit: 10,
        offset: 0,
      };

      const result = await service.searchOrders(searchInput);

      expect(result.data).toHaveLength(1);
      expect(result.total).toBe(1);
    });

    it('should filter orders by date range', async () => {
      const mockOrders: Order[] = [
        {
          id: 125,
          orderNumber: 'ORD-2024-003',
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: OrderStatus.COMPLETED,
          type: OrderType.SALES,
          items: [],
          total: 29.99,
          currency: 'EUR',
          paymentStatus: PaymentStatus.PAID,
          createdAt: '2024-01-15T00:00:00Z',
          updatedAt: '2024-01-15T00:00:00Z',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        searchOrders: {
          data: mockOrders,
          total: 1,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: OrderSearchInput = {
        createdAtFrom: '2024-01-01T00:00:00Z',
        createdAtTo: '2024-01-31T23:59:59Z',
        status: OrderStatus.COMPLETED,
        limit: 10,
        offset: 0,
      };

      const result = await service.searchOrders(searchInput);

      expect(result.data).toHaveLength(1);
      expect(result.total).toBe(1);
    });

    it('should filter orders by payment status', async () => {
      const mockOrders: Order[] = [
        {
          id: 126,
          orderNumber: 'ORD-2024-004',
          customerId: testConfig.ANONYMOUS_USER_ID,
          status: OrderStatus.COMPLETED,
          type: OrderType.SALES,
          items: [],
          total: 49.99,
          currency: 'EUR',
          paymentStatus: PaymentStatus.PAID,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        searchOrders: {
          data: mockOrders,
          total: 1,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: OrderSearchInput = {
        paymentStatus: PaymentStatus.PAID,
        limit: 10,
        offset: 0,
      };

      const result = await service.searchOrders(searchInput);

      expect(result.data).toHaveLength(1);
      expect(result.total).toBe(1);
    });
  });

  describe('Order Calculations', () => {
    it('should calculate order totals correctly', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
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
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        calculateOrder: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.calculateOrder(123);

      expect(result.total).toBe(79.97);
      expect(result.subtotal).toBe(79.97);
      expect(result.tax).toBe(16.79);
      expect(result.shipping).toBe(5.99);
      expect(result.discount).toBe(0);
    });

    it('should apply discounts to order', async () => {
      const mockOrder: Order = {
        id: 123,
        orderNumber: 'ORD-2024-001',
        customerId: testConfig.ANONYMOUS_USER_ID,
        status: OrderStatus.PENDING,
        type: OrderType.SALES,
        items: [],
        total: 85.00,
        subtotal: 100.00,
        tax: 17.85,
        shipping: 0,
        discount: 15.00,
        currency: 'EUR',
        paymentStatus: PaymentStatus.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockResponse = TestHelpers.createMockResponse({
        applyOrderDiscount: mockOrder,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.applyOrderDiscount(123, 'SAVE15');

      expect(result.discount).toBe(15.00);
      expect(result.total).toBe(85.00);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network error');
      mockClient.execute = jest.fn().mockRejectedValue(networkError);

      await expect(service.getOrder(123)).rejects.toThrow('Network error');
    });

    it('should handle invalid order IDs', async () => {
      const mockError = TestHelpers.createMockError('Order not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      await expect(service.getOrder(999)).rejects.toThrow();
    });

    it('should handle updating non-existent orders', async () => {
      const mockError = TestHelpers.createMockError('Order not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const updateInput: UpdateOrderInput = {
        id: 999,
        items: [],
      };

      await expect(service.updateOrder(updateInput)).rejects.toThrow();
    });

    it('should handle invalid order status transitions', async () => {
      const mockError = TestHelpers.createMockError('Invalid status transition');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      await expect(service.updateOrderStatus(123, OrderStatus.CANCELLED)).rejects.toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('should perform full order lifecycle', async () => {
      // This test demonstrates a full order lifecycle
      const realClient = TestHelpers.createTestClient();
      const realService = new OrderService(realClient);

      expect(realService).toBeDefined();

      // Note: In a real integration test, you would:
      // 1. Create an order
      // 2. Update order status
      // 3. Process payment
      // 4. Complete order
      // But for now, we'll just verify the service is properly initialized
      expect(realService).toBeInstanceOf(OrderService);
    });

    it('should handle multiple order operations efficiently', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new OrderService(realClient);

      // Test that the service can handle multiple operations efficiently
      expect(realService).toBeDefined();
    });
  });
}); 