import { ClusterService } from '../../src/service/ClusterService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig } from '../config';
import { Cluster } from '../../src/type/Cluster';
import { ClusterProductSearchInput } from '../../src/type/ClusterProductSearchInput';
import { ClusterCreateVariables } from '../../src/type/ClusterCreateVariables';
import { ClusterUpdateVariables } from '../../src/type/ClusterUpdateVariables';
import { ClusterDeleteVariables } from '../../src/type/ClusterDeleteVariables';
import { PriceCalculateProductInput } from '../../src/type/PriceCalculateProductInput';
import { UserBulkPriceProductInput } from '../../src/type/UserBulkPriceProductInput';
import { AttributeResultSearchInput } from '../../src/type/AttributeResultSearchInput';
import { MediaImageProductSearchInput } from '../../src/type/MediaImageProductSearchInput';
import { MediaVideoProductSearchInput } from '../../src/type/MediaVideoProductSearchInput';
import { MediaDocumentProductSearchInput } from '../../src/type/MediaDocumentProductSearchInput';
import { TransformationsInput } from '../../src/type/TransformationsInput';

describe('ClusterService', () => {
  let clusterService: ClusterService;
  let mockClient: jest.Mocked<GraphQLClient>;

  beforeEach(() => {
    mockClient = TestHelpers.createTestClient() as jest.Mocked<GraphQLClient>;
    clusterService = new ClusterService(mockClient);
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(clusterService).toBeInstanceOf(ClusterService);
      expect(clusterService['client']).toBe(mockClient);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const service = new ClusterService(realClient);
      expect(service).toBeInstanceOf(ClusterService);
    });
  });

  describe('Cluster Configuration', () => {
    it('should get cluster configuration successfully', async () => {
      const clusterId = 123;
      const mockClusterData = {
        id: clusterId,
        name: 'Test Cluster',
        description: 'A test cluster configuration',
        status: 'ACTIVE',
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ cluster: mockClusterData })
      );

      const result = await clusterService.getClusterConfig(clusterId);

      expect(result).toBeInstanceOf(Cluster);
      expect(result.id).toBe(clusterId);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusterGetConfig'),
          variables: { clusterId },
        })
      );
    });

    it('should handle cluster configuration errors gracefully', async () => {
      const clusterId = 999;
      mockClient.execute.mockRejectedValue(new Error('Cluster not found'));

      await expect(clusterService.getClusterConfig(clusterId)).rejects.toThrow('Cluster not found');
    });
  });

  describe('Cluster Retrieval', () => {
    it('should get single cluster by ID successfully', async () => {
      const clusterId = 456;
      const mockClusterData = {
        id: clusterId,
        names: [{ language: 'EN', value: 'Single Cluster' }],
        descriptions: [{ language: 'EN', value: 'A single cluster' }],
        slugs: [{ language: 'EN', value: 'single-cluster' }],
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ cluster: mockClusterData })
      );

      const result = await clusterService.getCluster({ clusterId });

      expect(result).toBeInstanceOf(Cluster);
      expect(result.id).toBe(clusterId);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cluster'),
          variables: { clusterId },
        })
      );
    });

    it('should get single cluster by slug successfully', async () => {
      const slug = 'test-cluster';
      const mockClusterData = {
        id: 789,
        name: 'Test Cluster',
        slug,
        description: 'A test cluster',
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ cluster: mockClusterData })
      );

      const result = await clusterService.getCluster({ slug });

      expect(result).toBeInstanceOf(Cluster);
      expect(result.slugs[0].value).toBe(slug);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cluster'),
          variables: { slug },
        })
      );
    });

    it('should get cluster with complex variables successfully', async () => {
      const variables = {
        clusterId: 123,
        language: 'EN',
        priceCalculateProductInput: {
          productId: 456,
          quantity: 2,
        } as PriceCalculateProductInput,
        userBulkPriceProductInput: {
          userId: 789,
          productIds: [123, 456],
        } as UserBulkPriceProductInput,
        attributeResultSearchInput: {
          searchTerm: 'test',
        } as AttributeResultSearchInput,
        imageSearchFilters: {
          productId: 123,
        } as MediaImageProductSearchInput,
        mediaVideoSearchInput: {
          productId: 123,
        } as MediaVideoProductSearchInput,
        mediaDocumentSearchInput: {
          productId: 123,
        } as MediaDocumentProductSearchInput,
        imageVariantFilters: {
          transformations: [
            { 
              name: 'resize',
              transformation: { width: 800, height: 600 }
            }
          ]
        } as TransformationsInput,
      };

      const mockClusterData = {
        id: 123,
        name: 'Complex Cluster',
        description: 'A cluster with complex variables',
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ cluster: mockClusterData })
      );

      const result = await clusterService.getCluster(variables);

      expect(result).toBeInstanceOf(Cluster);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('cluster'),
          variables,
        })
      );
    });
  });

  describe('Cluster Listing', () => {
    it('should get clusters list successfully', async () => {
      const mockClustersData = [
        { id: 1, name: 'Cluster 1', description: 'First cluster' },
        { id: 2, name: 'Cluster 2', description: 'Second cluster' },
        { id: 3, name: 'Cluster 3', description: 'Third cluster' },
      ];

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusters: mockClustersData })
      );

      const result = await clusterService.getClusters();

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(3);
      result.forEach(cluster => {
        expect(cluster).toBeInstanceOf(Cluster);
      });
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusters'),
          variables: { input: undefined },
        })
      );
    });

    it('should get clusters with search input successfully', async () => {
      const searchInput: ClusterProductSearchInput = {
        hidden: false,
      };

      const mockClustersData = [
        { id: 1, name: 'Test Cluster 1', description: 'First test cluster' },
        { id: 2, name: 'Test Cluster 2', description: 'Second test cluster' },
      ];

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusters: mockClustersData })
      );

      const result = await clusterService.getClusters(searchInput);

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(2);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusters'),
          variables: { input: searchInput },
        })
      );
    });

    it('should handle empty clusters list', async () => {
      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusters: [] })
      );

      const result = await clusterService.getClusters();

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(0);
    });
  });

  describe('Cluster Creation', () => {
    it('should create cluster successfully', async () => {
      const createVariables: ClusterCreateVariables = {
        input: {
          names: [{ language: 'EN', value: 'New Cluster' }],
          descriptions: [{ language: 'EN', value: 'A newly created cluster' }],
          defaultLanguage: 'EN',
          parentId: 1,
          clusterConfigId: 1,
          hidden: 'N' as any,
        },
      };

      const mockCreatedCluster = {
        id: 999,
        name: 'New Cluster',
        description: 'A newly created cluster',
        status: 'ACTIVE',
        parentId: 1,
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusterCreate: mockCreatedCluster })
      );

      const result = await clusterService.createCluster(createVariables);

      expect(result).toBeInstanceOf(Cluster);
      expect(result.name).toBe('New Cluster');
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusterCreate'),
          variables: createVariables,
        })
      );
    });

    it('should handle cluster creation errors', async () => {
      const createVariables: ClusterCreateVariables = {
        name: 'Invalid Cluster',
        description: 'This should fail',
      };

      mockClient.execute.mockRejectedValue(new Error('Creation failed'));

      await expect(clusterService.createCluster(createVariables)).rejects.toThrow('Creation failed');
    });
  });

  describe('Cluster Updates', () => {
    it('should update cluster successfully', async () => {
      const updateVariables: ClusterUpdateVariables = {
        id: 123,
        name: 'Updated Cluster',
        description: 'An updated cluster description',
      };

      const mockUpdatedCluster = {
        id: 123,
        name: 'Updated Cluster',
        description: 'An updated cluster description',
        status: 'ACTIVE',
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusterUpdate: mockUpdatedCluster })
      );

      const result = await clusterService.updateCluster(updateVariables);

      expect(result).toBeInstanceOf(Cluster);
      expect(result.name).toBe('Updated Cluster');
      expect(result.description).toBe('An updated cluster description');
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusterUpdate'),
          variables: updateVariables,
        })
      );
    });

    it('should handle cluster update errors', async () => {
      const updateVariables: ClusterUpdateVariables = {
        id: 999,
        name: 'Non-existent Cluster',
      };

      mockClient.execute.mockRejectedValue(new Error('Update failed'));

      await expect(clusterService.updateCluster(updateVariables)).rejects.toThrow('Update failed');
    });
  });

  describe('Cluster Deletion', () => {
    it('should delete cluster successfully', async () => {
      const deleteVariables: ClusterDeleteVariables = {
        id: 123,
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusterDelete: true })
      );

      const result = await clusterService.deleteCluster(deleteVariables);

      expect(result).toBe(true);
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('clusterDelete'),
          variables: deleteVariables,
        })
      );
    });

    it('should handle cluster deletion errors', async () => {
      const deleteVariables: ClusterDeleteVariables = {
        id: 999,
      };

      mockClient.execute.mockRejectedValue(new Error('Deletion failed'));

      await expect(clusterService.deleteCluster(deleteVariables)).rejects.toThrow('Deletion failed');
    });

    it('should handle cluster deletion failure response', async () => {
      const deleteVariables: ClusterDeleteVariables = {
        id: 123,
      };

      mockClient.execute.mockResolvedValue(
        TestHelpers.createMockResponse({ clusterDelete: false })
      );

      const result = await clusterService.deleteCluster(deleteVariables);

      expect(result).toBe(false);
    });
  });

  describe('Service Initialization', () => {
    it('should initialize service successfully', async () => {
      await expect(clusterService.initializeService()).resolves.toBeUndefined();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Network error'));

      await expect(clusterService.getCluster({ clusterId: 123 })).rejects.toThrow('Network error');
    });

    it('should handle GraphQL errors gracefully', async () => {
      const mockErrorResponse = {
        data: null,
        errors: [
          {
            message: 'Cluster not found',
            locations: [{ line: 1, column: 1 }],
            path: ['cluster'],
          },
        ],
      };

      mockClient.execute.mockResolvedValue(mockErrorResponse);

      await expect(clusterService.getCluster({ clusterId: 999 })).rejects.toThrow();
    });

    it('should handle malformed response data', async () => {
      mockClient.execute.mockResolvedValue({
        data: { cluster: null },
        errors: undefined,
        extensions: undefined,
      });

      await expect(clusterService.getCluster({ clusterId: 123 })).rejects.toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('should perform full cluster lifecycle', async () => {
      // Create cluster
      const createVariables: ClusterCreateVariables = {
        name: 'Lifecycle Cluster',
        description: 'A cluster for testing full lifecycle',
        status: 'ACTIVE',
      };

      const mockCreatedCluster = {
        id: 888,
        name: 'Lifecycle Cluster',
        description: 'A cluster for testing full lifecycle',
        status: 'ACTIVE',
      };

      mockClient.execute
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ clusterCreate: mockCreatedCluster }))
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ cluster: mockCreatedCluster }))
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ clusterUpdate: { ...mockCreatedCluster, description: 'Updated description' } }))
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ clusterDelete: true }));

      // Create
      const created = await clusterService.createCluster(createVariables);
      expect(created).toBeInstanceOf(Cluster);
      expect(created.name).toBe('Lifecycle Cluster');

      // Read
      const retrieved = await clusterService.getCluster({ clusterId: 888 });
      expect(retrieved).toBeInstanceOf(Cluster);
      expect(retrieved.id).toBe(888);

      // Update
      const updateVariables: ClusterUpdateVariables = {
        id: 888,
        description: 'Updated description',
      };
      const updated = await clusterService.updateCluster(updateVariables);
      expect(updated.description).toBe('Updated description');

      // Delete
      const deleted = await clusterService.deleteCluster({ id: 888 });
      expect(deleted).toBe(true);

      expect(mockClient.execute).toHaveBeenCalledTimes(4);
    });

    it('should handle multiple cluster operations efficiently', async () => {
      const mockClustersData = [
        { id: 1, name: 'Cluster 1', description: 'First cluster' },
        { id: 2, name: 'Cluster 2', description: 'Second cluster' },
      ];

      mockClient.execute
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ clusters: mockClustersData }))
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ cluster: mockClustersData[0] }))
        .mockResolvedValueOnce(TestHelpers.createMockResponse({ cluster: mockClustersData[1] }));

      // Get all clusters
      const allClusters = await clusterService.getClusters();
      expect(allClusters).toHaveLength(2);

      // Get individual clusters
      const cluster1 = await clusterService.getCluster({ clusterId: 1 });
      const cluster2 = await clusterService.getCluster({ clusterId: 2 });

      expect(cluster1.name).toBe('Cluster 1');
      expect(cluster2.name).toBe('Cluster 2');

      expect(mockClient.execute).toHaveBeenCalledTimes(3);
    });
  });
}); 