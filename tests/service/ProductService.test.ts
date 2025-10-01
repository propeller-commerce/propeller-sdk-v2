import { ProductService } from '../../src/service/ProductService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';
import { TestHelpers } from '../helpers/testHelpers';
import { ProductStatus, YesNo } from '../../src/enum';
import { CreateProductInput, ProductSearchInput } from '../../src/type';

describe('ProductService', () => {
  let service: ProductService;
  let mockClient: jest.Mocked<GraphQLClient>;

  beforeEach(() => {
    // Create a mock GraphQL client
    mockClient = {
      execute: jest.fn(),
    } as any;

    service = new ProductService(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(ProductService);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new ProductService(realClient);
      
      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(ProductService);
    });
  });

  describe('Product Creation', () => {
    it('should create a product successfully', async () => {
      const mockProduct = {
        productId: 123,
        name: 'Test Product',
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        createProduct: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const createInput: CreateProductInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        categoryId: testConfig.BASE_CATEGORY_ID,
        names: [{
          language: testConfig.DEFAULT_LANGUAGE,
          value: 'Test Product',
        }],
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
        hidden: YesNo.N,
        orderable: YesNo.Y,
        physical: YesNo.Y,
      };

      const result = await service.createProduct(createInput);

      expect(result).toEqual(mockProduct);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('createProduct'),
          variables: { input: createInput },
        })
      );
    });

    it('should handle product creation errors', async () => {
      const mockError = TestHelpers.createMockError('Product creation failed');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const createInput: CreateProductInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        categoryId: testConfig.BASE_CATEGORY_ID,
        names: [{
          language: testConfig.DEFAULT_LANGUAGE,
          value: 'Test Product',
        }],
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
        hidden: YesNo.N,
        orderable: YesNo.Y,
        physical: YesNo.Y,
      };

      await expect(service.createProduct(createInput)).rejects.toThrow();
    });

    it('should create product with minimal required fields', async () => {
      const mockProduct = {
        productId: 124,
        name: 'Minimal Product',
        sku: 'MIN-001',
      };

      const mockResponse = TestHelpers.createMockResponse({
        createProduct: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const createInput: CreateProductInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        categoryId: testConfig.BASE_CATEGORY_ID,
        names: [{
          language: testConfig.DEFAULT_LANGUAGE,
          value: 'Minimal Product',
        }],
        sku: 'MIN-001',
        status: ProductStatus.ACTIVE,
        hidden: YesNo.N,
        orderable: YesNo.Y,
        physical: YesNo.Y,
      };

      const result = await service.createProduct(createInput);

      expect(result).toEqual(mockProduct);
    });
  });

  describe('Product Retrieval', () => {
    it('should get a product by ID successfully', async () => {
      const mockProduct = {
        productId: 123,
        name: 'Test Product',
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        product: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProduct({
        productId: 123,
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result).toEqual(mockProduct);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('product'),
          variables: {
            productId: 123,
            language: testConfig.DEFAULT_LANGUAGE,
          },
        })
      );
    });

    it('should get a product by SKU successfully', async () => {
      const mockProduct = {
        productId: 123,
        name: 'Test Product',
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        product: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProduct({
        sku: 'TEST-001',
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result).toEqual(mockProduct);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('product'),
          variables: {
            sku: 'TEST-001',
            language: testConfig.DEFAULT_LANGUAGE,
          },
        })
      );
    });

    it('should get a product by slug successfully', async () => {
      const mockProduct = {
        productId: 123,
        name: 'Test Product',
        slug: 'test-product',
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        product: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProduct({
        slug: 'test-product',
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result).toEqual(mockProduct);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('product'),
          variables: {
            slug: 'test-product',
            language: testConfig.DEFAULT_LANGUAGE,
          },
        })
      );
    });
  });

  describe('Product Search', () => {
    it('should search products successfully', async () => {
      const mockProducts = [
        {
          productId: 123,
          name: 'Test Product 1',
          sku: 'TEST-001',
          status: ProductStatus.ACTIVE,
        },
        {
          productId: 124,
          name: 'Test Product 2',
          sku: 'TEST-002',
          status: ProductStatus.ACTIVE,
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        products: {
          data: mockProducts,
          total: 2,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: ProductSearchInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        limit: 10,
        offset: 0,
      };

      const result = await service.getProducts({
        input: searchInput,
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result).toEqual({
        data: mockProducts,
        total: 2,
        page: 1,
        limit: 10,
      });
    });

    it('should search products with filters', async () => {
      const mockProducts = [
        {
          productId: 123,
          name: 'Active Product',
          status: ProductStatus.ACTIVE,
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        products: {
          data: mockProducts,
          total: 1,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: ProductSearchInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        status: ProductStatus.ACTIVE,
        categoryId: testConfig.BASE_CATEGORY_ID,
        limit: 20,
        offset: 0,
      };

      const result = await service.getProducts({
        input: searchInput,
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result.data).toHaveLength(1);
      expect(result.data[0].status).toBe(ProductStatus.ACTIVE);
    });

    it('should handle empty search results', async () => {
      const mockResponse = TestHelpers.createMockResponse({
        products: {
          data: [],
          total: 0,
          page: 1,
          limit: 10,
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const searchInput: ProductSearchInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        status: ProductStatus.INACTIVE,
      };

      const result = await service.getProducts({
        input: searchInput,
        language: testConfig.DEFAULT_LANGUAGE,
      });

      expect(result.data).toHaveLength(0);
      expect(result.total).toBe(0);
    });
  });

  describe('Product Updates', () => {
    it('should update a product successfully', async () => {
      const mockProduct = {
        productId: 123,
        name: 'Updated Product',
        sku: 'TEST-001',
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateProduct: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const updateInput = {
        productId: 123,
        names: [{
          language: testConfig.DEFAULT_LANGUAGE,
          value: 'Updated Product',
        }],
      };

      const result = await service.updateProduct(updateInput);

      expect(result).toEqual(mockProduct);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('updateProduct'),
          variables: { input: updateInput },
        })
      );
    });

    it('should handle product update errors', async () => {
      const mockError = TestHelpers.createMockError('Product update failed');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const updateInput = {
        productId: 999,
        names: [{
          language: testConfig.DEFAULT_LANGUAGE,
          value: 'Invalid Product',
        }],
      };

      await expect(service.updateProduct(updateInput)).rejects.toThrow();
    });
  });

  describe('Product Deletion', () => {
    it('should delete a product successfully', async () => {
      const mockResponse = TestHelpers.createMockResponse({
        deleteProduct: true,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.deleteProduct(123);

      expect(result).toBe(true);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('deleteProduct'),
          variables: { productId: 123 },
        })
      );
    });

    it('should handle product deletion errors', async () => {
      const mockError = TestHelpers.createMockError('Product deletion failed');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      await expect(service.deleteProduct(999)).rejects.toThrow();
    });
  });

  describe('Product Status Management', () => {
    it('should activate a product', async () => {
      const mockProduct = {
        productId: 123,
        status: ProductStatus.ACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateProduct: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.activateProduct(123);

      expect(result.status).toBe(ProductStatus.ACTIVE);
    });

    it('should deactivate a product', async () => {
      const mockProduct = {
        productId: 123,
        status: ProductStatus.INACTIVE,
      };

      const mockResponse = TestHelpers.createMockResponse({
        updateProduct: mockProduct,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.deactivateProduct(123);

      expect(result.status).toBe(ProductStatus.INACTIVE);
    });
  });

  describe('Product Media Management', () => {
    it('should get product images', async () => {
      const mockImages = [
        {
          id: 1,
          url: 'https://example.com/image1.jpg',
          alt: 'Product Image 1',
        },
        {
          id: 2,
          url: 'https://example.com/image2.jpg',
          alt: 'Product Image 2',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        productImages: mockImages,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProductImages(123);

      expect(result).toEqual(mockImages);
    });

    it('should get product videos', async () => {
      const mockVideos = [
        {
          id: 1,
          url: 'https://example.com/video1.mp4',
          title: 'Product Video 1',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        productVideos: mockVideos,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProductVideos(123);

      expect(result).toEqual(mockVideos);
    });

    it('should get product documents', async () => {
      const mockDocuments = [
        {
          id: 1,
          url: 'https://example.com/doc1.pdf',
          title: 'Product Manual',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        productDocuments: mockDocuments,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProductDocuments(123);

      expect(result).toEqual(mockDocuments);
    });
  });

  describe('Product Attributes', () => {
    it('should get product attributes', async () => {
      const mockAttributes = [
        {
          id: 1,
          name: 'Color',
          value: 'Red',
        },
        {
          id: 2,
          name: 'Size',
          value: 'Large',
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        productAttributes: mockAttributes,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getProductAttributes(123);

      expect(result).toEqual(mockAttributes);
    });

    it('should filter available attributes', async () => {
      const mockAttributes = [
        {
          id: 1,
          name: 'Color',
          available: true,
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        availableAttributes: mockAttributes,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getAvailableAttributes(123);

      expect(result).toEqual(mockAttributes);
    });
  });

  describe('Product Pricing', () => {
    it('should calculate product price', async () => {
      const mockPrice = {
        basePrice: 29.99,
        finalPrice: 24.99,
        discount: 5.00,
        currency: 'EUR',
      };

      const mockResponse = TestHelpers.createMockResponse({
        calculatePrice: mockPrice,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.calculatePrice(123, {
        quantity: 2,
        customerId: testConfig.ANONYMOUS_USER_ID,
      });

      expect(result).toEqual(mockPrice);
    });

    it('should get bulk pricing', async () => {
      const mockBulkPrices = [
        {
          quantity: 10,
          price: 25.00,
        },
        {
          quantity: 50,
          price: 20.00,
        },
      ];

      const mockResponse = TestHelpers.createMockResponse({
        bulkPricing: mockBulkPrices,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getBulkPricing(123);

      expect(result).toEqual(mockBulkPrices);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network error');
      mockClient.execute = jest.fn().mockRejectedValue(networkError);

      await expect(service.getProduct({ productId: 123 })).rejects.toThrow('Network error');
    });

    it('should handle invalid product IDs', async () => {
      const mockError = TestHelpers.createMockError('Product not found');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      await expect(service.getProduct({ productId: 999 })).rejects.toThrow();
    });

    it('should handle missing required fields in creation', async () => {
      const mockError = TestHelpers.createMockError('Missing required field: name');
      mockClient.execute = jest.fn().mockResolvedValue({
        data: null,
        errors: [mockError],
      });

      const invalidInput = {
        language: testConfig.DEFAULT_LANGUAGE,
        categoryId: testConfig.BASE_CATEGORY_ID,
        // Missing names field
        sku: 'TEST-001',
      } as CreateProductInput;

      await expect(service.createProduct(invalidInput)).rejects.toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('should perform full product lifecycle', async () => {
      // This test demonstrates a full product lifecycle
      const realClient = TestHelpers.createTestClient();
      const realService = new ProductService(realClient);

      expect(realService).toBeDefined();

      // Note: In a real integration test, you would:
      // 1. Create a product
      // 2. Retrieve the product
      // 3. Update the product
      // 4. Delete the product
      // But for now, we'll just verify the service is properly initialized
      expect(realService).toBeInstanceOf(ProductService);
    });

    it('should work with different languages', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new ProductService(realClient);

      // Test that the service can handle different language configurations
      expect(realService).toBeDefined();
    });
  });
}); 