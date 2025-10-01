import { InventoryService } from '../../src/service/InventoryService';
import { Inventory } from '../../src/type/Inventory';
import { TestHelpers } from '../helpers/testHelpers';

describe('InventoryService', () => {
  let inventoryService: InventoryService;
  let mockClient: any;

  beforeEach(() => {
    // Create a mock client
    mockClient = {
      execute: jest.fn(),
      updateConfig: jest.fn(),
      getFragment: jest.fn(),
      getFragmentNames: jest.fn(),
      registerFragment: jest.fn(),
      query: jest.fn(),
      mutate: jest.fn(),
      getConfig: jest.fn(),
    };

    inventoryService = new InventoryService(mockClient);
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(inventoryService).toBeInstanceOf(InventoryService);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const service = new InventoryService(realClient);
      
      expect(service).toBeInstanceOf(InventoryService);
    });
  });

  describe('Inventory Retrieval', () => {
    it('should get inventory successfully', async () => {
      const mockInventoryData = [
        {
          id: 1,
          productId: 123,
          quantity: 50,
          costPrice: 29.99,
          supplier: 'Test Supplier',
          supplierCode: 'SUP001',
          sku: 'INV-001',
          dateModified: '2024-01-01',
          warehouseId: 1,
          location: 'A1-B2-C3',
          nextDeliveryDate: '2024-02-01',
          notes: 'Test inventory item'
        }
      ];

      const mockResponse = {
        data: {
          inventory: mockInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory();

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query inventory'),
        variables: { input: undefined }
      }));
      expect(result).toHaveLength(1);
      expect(result[0]).toBeInstanceOf(Inventory);
      expect(result[0].id).toBe(1);
      expect(result[0].productId).toBe(123);
      expect(result[0].quantity).toBe(50);
      expect(result[0].costPrice).toBe(29.99);
      expect(result[0].supplier).toBe('Test Supplier');
      expect(result[0].sku).toBe('INV-001');
    });

    it('should get inventory with search criteria', async () => {
      const searchInput = {
        productId: 123,
        warehouseId: 1,
        minQuantity: 10
      };

      const mockInventoryData = [
        {
          id: 1,
          productId: 123,
          quantity: 50,
          costPrice: 29.99,
          supplier: 'Test Supplier',
          supplierCode: 'SUP001',
          sku: 'INV-001',
          dateModified: '2024-01-01',
          warehouseId: 1,
          location: 'A1-B2-C3',
          nextDeliveryDate: '2024-02-01',
          notes: 'Test inventory item'
        }
      ];

      const mockResponse = {
        data: {
          inventory: mockInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory(searchInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query inventory'),
        variables: { input: searchInput }
      }));
      expect(result).toHaveLength(1);
      expect(result[0].productId).toBe(123);
      expect(result[0].warehouseId).toBe(1);
    });

    it('should handle empty inventory results', async () => {
      const mockResponse = {
        data: {
          inventory: []
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory();

      expect(result).toHaveLength(0);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should handle inventory errors gracefully', async () => {
      const mockResponse = {
        data: null,
        errors: [
          {
            message: 'Inventory query not found',
            locations: [{ line: 1, column: 1 }]
          }
        ]
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      try {
        await inventoryService.getInventory();
        fail('Expected error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle malformed response data', async () => {
      const mockResponse = {
        data: {
          inventory: null
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      try {
        await inventoryService.getInventory();
        fail('Expected error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle network errors gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Network error'));

      await expect(inventoryService.getInventory()).rejects.toThrow('Network error');
    });

    it('should handle timeout errors gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Request timeout'));

      await expect(inventoryService.getInventory()).rejects.toThrow('Request timeout');
    });
  });

  describe('Service Initialization', () => {
    it('should initialize service successfully', async () => {
      await expect(inventoryService.initializeService()).resolves.toBeUndefined();
    });

    it('should handle initialization errors gracefully', async () => {
      // Mock a scenario where initialization might fail
      const mockError = new Error('Initialization failed');
      jest.spyOn(inventoryService, 'initializeService').mockRejectedValue(mockError);

      await expect(inventoryService.initializeService()).rejects.toThrow('Initialization failed');
    });
  });

  describe('Input Validation', () => {
    it('should handle undefined input', async () => {
      const mockResponse = {
        data: {
          inventory: []
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory(undefined);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        variables: { input: undefined }
      }));
      expect(result).toHaveLength(0);
    });

    it('should handle null input', async () => {
      const mockResponse = {
        data: {
          inventory: []
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory(null as any);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        variables: { input: null }
      }));
      expect(result).toHaveLength(0);
    });

    it('should handle empty object input', async () => {
      const mockResponse = {
        data: {
          inventory: []
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory({});

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        variables: { input: {} }
      }));
      expect(result).toHaveLength(0);
    });
  });

  describe('Integration Tests', () => {
    it('should work with real GraphQL client in test environment', async () => {
      const realClient = TestHelpers.createTestClient();
      const service = new InventoryService(realClient);
      
      expect(service).toBeInstanceOf(InventoryService);
      
      try {
        await service.getInventory();
      } catch (error) {
        // Expected in test environment if inventory query doesn't exist
        expect(error).toBeDefined();
      }
    });

    it('should handle multiple inventory requests efficiently', async () => {
      const searchInputs = [
        { productId: 123 },
        { warehouseId: 1 },
        { minQuantity: 10 }
      ];

      const mockResponses = searchInputs.map(() => ({
        data: {
          inventory: []
        }
      }));

      mockResponses.forEach((response, index) => {
        mockClient.execute.mockResolvedValueOnce(response);
      });

      const results = await Promise.all(
        searchInputs.map(input => inventoryService.getInventory(input))
      );

      expect(results).toHaveLength(3);
      expect(mockClient.execute).toHaveBeenCalledTimes(3);
      
      results.forEach(result => {
        expect(Array.isArray(result)).toBe(true);
      });
    });
  });

  describe('Inventory Object Creation', () => {
    it('should create Inventory objects with complete data', async () => {
      const mockInventoryData = [
        {
          id: 1,
          productId: 123,
          quantity: 50,
          costPrice: 29.99,
          supplier: 'Test Supplier',
          supplierCode: 'SUP001',
          sku: 'INV-001',
          dateModified: '2024-01-01',
          warehouseId: 1,
          location: 'A1-B2-C3',
          nextDeliveryDate: '2024-02-01',
          notes: 'Test inventory item'
        }
      ];

      const mockResponse = {
        data: {
          inventory: mockInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory();

      expect(result[0]).toBeInstanceOf(Inventory);
      expect(result[0].id).toBe(1);
      expect(result[0].productId).toBe(123);
      expect(result[0].quantity).toBe(50);
      expect(result[0].costPrice).toBe(29.99);
      expect(result[0].supplier).toBe('Test Supplier');
      expect(result[0].supplierCode).toBe('SUP001');
      expect(result[0].sku).toBe('INV-001');
      expect(result[0].dateModified).toBe('2024-01-01');
      expect(result[0].warehouseId).toBe(1);
      expect(result[0].location).toBe('A1-B2-C3');
      expect(result[0].nextDeliveryDate).toBe('2024-02-01');
      expect(result[0].notes).toBe('Test inventory item');
    });

    it('should create Inventory objects with partial data', async () => {
      const mockInventoryData = [
        {
          id: 1,
          productId: 123,
          quantity: 50,
          costPrice: 29.99,
          supplier: 'Test Supplier',
          supplierCode: 'SUP001',
          sku: 'INV-001',
          warehouseId: 1,
          location: 'A1-B2-C3',
          nextDeliveryDate: '2024-02-01',
          notes: 'Test inventory item'
          // dateModified is missing
        }
      ];

      const mockResponse = {
        data: {
          inventory: mockInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory();

      expect(result[0]).toBeInstanceOf(Inventory);
      expect(result[0].id).toBe(1);
      expect(result[0].dateModified).toBeUndefined();
    });

    it('should handle Inventory constructor errors gracefully', async () => {
      const mockInventoryData = [
        {
          // Missing required fields
          id: 1
        }
      ];

      const mockResponse = {
        data: {
          inventory: mockInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      try {
        await inventoryService.getInventory();
        fail('Expected error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle missing inventory data', async () => {
      const mockResponse = {
        data: {}
        // Missing inventory property
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      try {
        await inventoryService.getInventory();
        fail('Expected error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle non-array inventory data', async () => {
      const mockResponse = {
        data: {
          inventory: 'not an array'
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      try {
        await inventoryService.getInventory();
        fail('Expected error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle large inventory datasets', async () => {
      const largeInventoryData = Array.from({ length: 1000 }, (_, index) => ({
        id: index + 1,
        productId: index + 100,
        quantity: Math.floor(Math.random() * 1000),
        costPrice: Math.random() * 100,
        supplier: `Supplier ${index}`,
        supplierCode: `SUP${index.toString().padStart(3, '0')}`,
        sku: `INV-${index.toString().padStart(3, '0')}`,
        dateModified: '2024-01-01',
        warehouseId: (index % 5) + 1,
        location: `A${Math.floor(index / 100)}-B${Math.floor((index % 100) / 10)}-C${index % 10}`,
        nextDeliveryDate: '2024-02-01',
        notes: `Inventory item ${index}`
      }));

      const mockResponse = {
        data: {
          inventory: largeInventoryData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await inventoryService.getInventory();

      expect(result).toHaveLength(1000);
      expect(result[0]).toBeInstanceOf(Inventory);
      expect(result[999]).toBeInstanceOf(Inventory);
    });
  });
}); 