import { BaseProductCategoryRelationship } from '../type/BaseProductCategoryRelationship';
import { BaseProductClusterRelationship } from '../type/BaseProductClusterRelationship';
import { BaseProductsResponse } from '../type/BaseProductsResponse';
import { BatchMetricsFailedJobsResponse } from '../type/BatchMetricsFailedJobsResponse';
import { BatchMetricsQueueStatusResponse } from '../type/BatchMetricsQueueStatusResponse';
import { BatchMetricsTenantHourlyResponse } from '../type/BatchMetricsTenantHourlyResponse';
import { BatchMetricsTenantResponse } from '../type/BatchMetricsTenantResponse';
import { CancelReindexResponse } from '../type/CancelReindexResponse';
import { ForceReleaseLockResponse } from '../type/ForceReleaseLockResponse';
import { IndexEntitiesResponse } from '../type/IndexEntitiesResponse';
import { Product } from '../type/Product';
import { ProductCategoryRelationship } from '../type/ProductCategoryRelationship';
import { ProductClusterOptionRelationship } from '../type/ProductClusterOptionRelationship';
import { ProductSearchByCategoryResponse } from '../type/ProductSearchByCategoryResponse';
import { ProductSearchResponse } from '../type/ProductSearchResponse';
import { ProductsRawResponse } from '../type/ProductsRawResponse';
import { ReindexLockResponse } from '../type/ReindexLockResponse';
import { ReindexStatusResponse } from '../type/ReindexStatusResponse';
import { StartReindexResponse } from '../type/StartReindexResponse';
import { document as baseProductCategoryMoveAboveDoc } from '../generated/operations/baseProductCategoryMoveAbove';
import { document as baseProductCategoryMoveAboveByUuidsDoc } from '../generated/operations/baseProductCategoryMoveAboveByUuids';
import { document as baseProductCategoryMoveBelowDoc } from '../generated/operations/baseProductCategoryMoveBelow';
import { document as baseProductCategoryMoveBelowByUuidsDoc } from '../generated/operations/baseProductCategoryMoveBelowByUuids';
import { document as baseProductCategoryMoveToBottomDoc } from '../generated/operations/baseProductCategoryMoveToBottom';
import { document as baseProductCategoryMoveToBottomByUuidsDoc } from '../generated/operations/baseProductCategoryMoveToBottomByUuids';
import { document as baseProductCategoryMoveToTopDoc } from '../generated/operations/baseProductCategoryMoveToTop';
import { document as baseProductCategoryMoveToTopByUuidsDoc } from '../generated/operations/baseProductCategoryMoveToTopByUuids';
import { document as baseProductsDoc } from '../generated/operations/baseProducts';
import { document as productAddToCategoryDoc } from '../generated/operations/productAddToCategory';
import { document as productAssignToClusterDoc } from '../generated/operations/productAssignToCluster';
import { document as productCategoryMoveAboveDoc } from '../generated/operations/productCategoryMoveAbove';
import { document as productCategoryMoveBelowDoc } from '../generated/operations/productCategoryMoveBelow';
import { document as productCategoryMoveToBottomDoc } from '../generated/operations/productCategoryMoveToBottom';
import { document as productCategoryMoveToTopDoc } from '../generated/operations/productCategoryMoveToTop';
import { document as productClusterMoveAboveDoc } from '../generated/operations/productClusterMoveAbove';
import { document as productClusterMoveBelowDoc } from '../generated/operations/productClusterMoveBelow';
import { document as productClusterOptionMoveAboveDoc } from '../generated/operations/productClusterOptionMoveAbove';
import { document as productClusterOptionMoveBelowDoc } from '../generated/operations/productClusterOptionMoveBelow';
import { document as productRemoveFromCategoryDoc } from '../generated/operations/productRemoveFromCategory';
import { document as productSearchBatchMetricsDoc } from '../generated/operations/productSearchBatchMetrics';
import { document as productSearchBatchMetricsFailedJobsDoc } from '../generated/operations/productSearchBatchMetricsFailedJobs';
import { document as productSearchBatchMetricsHourlyDoc } from '../generated/operations/productSearchBatchMetricsHourly';
import { document as productSearchBatchMetricsQueueStatusDoc } from '../generated/operations/productSearchBatchMetricsQueueStatus';
import { document as productSearchByCategoryDoc } from '../generated/operations/productSearchByCategory';
import { document as productSearchCategoriesIndexDoc } from '../generated/operations/productSearchCategoriesIndex';
import { document as productSearchClustersIndexDoc } from '../generated/operations/productSearchClustersIndex';
import { document as productSearchFullReindexCancelDoc } from '../generated/operations/productSearchFullReindexCancel';
import { document as productSearchFullReindexStartDoc } from '../generated/operations/productSearchFullReindexStart';
import { document as productSearchProductsIndexDoc } from '../generated/operations/productSearchProductsIndex';
import { document as productSearchReindexLockDoc } from '../generated/operations/productSearchReindexLock';
import { document as productSearchReindexLockForceReleaseDoc } from '../generated/operations/productSearchReindexLockForceRelease';
import { document as productSearchReindexStatusDoc } from '../generated/operations/productSearchReindexStatus';
import { document as productSearchSolrDoc } from '../generated/operations/productSearchSolr';
import { document as productSetDefaultCategoryDoc } from '../generated/operations/productSetDefaultCategory';
import { document as productUnassignFromClusterDoc } from '../generated/operations/productUnassignFromCluster';
import { document as productsBulkAddToCategoryDoc } from '../generated/operations/productsBulkAddToCategory';
import { document as productsBulkRemoveFromCategoryDoc } from '../generated/operations/productsBulkRemoveFromCategory';
import { document as productsRawDoc } from '../generated/operations/productsRaw';
import type { BaseProductCategoryMoveAboveByUuidsVariables, BaseProductCategoryMoveAboveVariables, BaseProductCategoryMoveBelowByUuidsVariables, BaseProductCategoryMoveBelowVariables, BaseProductCategoryMoveToBottomByUuidsVariables, BaseProductCategoryMoveToBottomVariables, BaseProductCategoryMoveToTopByUuidsVariables, BaseProductCategoryMoveToTopVariables, BaseProductsVariables, ProductAddToCategoryVariables, ProductAssignToClusterVariables, ProductCategoryMoveAboveVariables, ProductCategoryMoveBelowVariables, ProductCategoryMoveToBottomVariables, ProductCategoryMoveToTopVariables, ProductClusterMoveAboveVariables, ProductClusterMoveBelowVariables, ProductClusterOptionMoveAboveVariables, ProductClusterOptionMoveBelowVariables, ProductRemoveFromCategoryVariables, ProductSearchBatchMetricsFailedJobsVariables, ProductSearchByCategoryVariables, ProductSearchCategoriesIndexVariables, ProductSearchClustersIndexVariables, ProductSearchFullReindexCancelVariables, ProductSearchFullReindexStartVariables, ProductSearchProductsIndexVariables, ProductSearchReindexStatusVariables, ProductSearchSolrVariables, ProductSetDefaultCategoryVariables, ProductUnassignFromClusterVariables, ProductsBulkAddToCategoryVariables, ProductsBulkRemoveFromCategoryVariables, ProductsRawVariables } from '../generated/operationVariables';

import { ConfirmationResponse } from '../type/ConfirmationResponse';
import { ProductsResponse } from '../type/ProductsResponse';
import { SurchargeProductResponse } from '../type/SurchargeProductResponse';
import { ProductSearchInput } from '../type/ProductSearchInput';
import { CreateProductInput } from '../type/CreateProductInput';
import { UpdateProductInput } from '../type/UpdateProductInput';
import { PriceCalculateProductInput } from '../type/PriceCalculateProductInput';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { FilterAvailableAttributeInput } from '../type/FilterAvailableAttributeInput';
import { UserBulkPriceProductInput } from '../type/UserBulkPriceProductInput';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { MediaVideoProductSearchInput } from '../type/MediaVideoProductSearchInput';
import { MediaDocumentProductSearchInput } from '../type/MediaDocumentProductSearchInput';
import { ProductCsvInput } from '../type/ProductCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { AddSurchargesToProductInput } from '../type/AddSurchargesToProductInput';
import { SurchargesResponse } from '../type/SurchargesResponse';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { AttributeResponse } from '../type/AttributeResponse';
import { AttributeSearchInput } from '../type/AttributeSearchInput';
/**
 * Product query variables interface
 Variables for the product query
 */
export interface ProductQueryVariables {
  /** Product ID to fetch */
  productId?: number;
  /** Product slug to fetch */
  slug?: string;
  /** Product SKU to fetch */
  sku?: string;
  /** Language for localized content */
  language?: string;
  /** Whether to apply orderlist logic */
  applyOrderlists?: boolean;
  /** Array of orderlist IDs to apply */
  orderlistIds?: number[];
  /** Price calculation input */
  priceCalculateProductInput?: PriceCalculateProductInput;
  /** User bulk price input */
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  /** Attribute search input */
  attributeResultSearchInput?: AttributeResultSearchInput;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Video search input */
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  /** Document search input */
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  /** Image transformation filters. Optional — the SDK defaults this to
   * `{ transformations: [] }` when omitted (findings #4/#8). */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Products query variables interface
 Variables for the products query
 */
export interface ProductsQueryVariables {
  /** Product search input parameters */
  input?: ProductSearchInput;
  /** Language for localized content */
  language?: string;
  /** Price calculation input */
  priceCalculateProductInput?: PriceCalculateProductInput;
  /** Attribute search input — controls the attributes returned on grid products */
  attributeResultSearchInput?: AttributeResultSearchInput;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters. Optional — the SDK defaults this to
   * `{ transformations: [] }` when omitted (findings #4/#8). */
  imageVariantFilters?: TransformationsInput;
  /** Filter available attributes input */
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}
import { GraphQLClient, GraphQLFetchOptions } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as productDoc } from '../generated/operations/product';
import { document as productsDoc } from '../generated/operations/products';
import { document as productCreateDoc } from '../generated/operations/productCreate';
import { document as productUpdateDoc } from '../generated/operations/productUpdate';
import { document as productCsvImportDoc } from '../generated/operations/productCsvImport';
import { document as addSurchargesToProductDoc } from '../generated/operations/addSurchargesToProduct';
import { document as productSurchargesDoc } from '../generated/operations/productSurcharges';
import { document as attributesByProductIdDoc } from '../generated/operations/attributesByProductId';
import { document as attributeResultByProductIdDoc } from '../generated/operations/attributeResultByProductId';
import type { ProductUpdateVariables } from '../generated/operationVariables';
/**
 Service class for Product-related GraphQL operations
 */
export function productService(client: GraphQLClient) {
  return {
    /**
       Fetches a single product by ID, slug, or SKU
       * @param variables input variables for aproduct to fetch
       * - productId: int - Product ID to fetch
       * - slug: string - Product slug to fetch
       * - sku: string - Product SKU to fetch
       * - language: string - Language for localized content
       * - applyOrderlists: boolean - Whether to apply orderlist logic
       * - orderlistIds: number[] - Array of orderlist IDs to apply
       * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
       * - userBulkPriceProductInput: UserBulkPriceProductInput - User bulk price input
       * - attributeResultSearchInput: AttributeResultSearchInput - Attribute search input
       * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
       * - mediaVideoSearchInput: MediaVideoProductSearchInput - Video search input
       * - mediaDocumentSearchInput: MediaDocumentProductSearchInput - Document search input
       * - imageVariantFilters: TransformationsInput - Image transformation filters
       * @returns Promise<Product> The product data
       */
    async getProduct(variables: ProductQueryVariables, fetchOptions?: GraphQLFetchOptions): Promise<Product> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ product: Product }>(client, productDoc, 'product', { ...variables, language }, fetchOptions);
      return result.data.product as Product;
    },
    /**
       Fetches a list of products with search criteria
       * @param variables
       * - input: ProductSearchInput - Product search input parameters
       * - language: string - Language for localized content
       * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
       * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
       * - imageVariantFilters: TransformationsInput - Image transformation filters
       * - filterAvailableAttributeInput: FilterAvailableAttributeInput - Filter available attributes input
       * @returns Promise<ProductsResponse> The products response data
       */
    async getProducts(variables: ProductsQueryVariables): Promise<ProductsResponse> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ products: ProductsResponse }>(client, productsDoc, 'products', { ...variables, language });
      return result.data.products as ProductsResponse;
    },
    /**
       Creates a new product
       * @param input Product creation input data
       * @returns Promise<Product> The created product
       */
    async createProduct(input: CreateProductInput): Promise<Product> {
      const result = await runOperation<{ productCreate: Product }>(client, productCreateDoc, 'productCreate', { input });
      return result.data.productCreate as Product;
    },
    /**
       Updates an existing product
       * @param variables ProductUpdateVariables update input data
       * - productId: number - ID of the product to update
       * - input: UpdateProductInput - The fields to update for the product
       * @returns Promise<Product> The updated product
       */
    async updateProduct(variables: ProductUpdateVariables): Promise<Product> {
      const result = await runOperation<{ productUpdate: Product }>(client, productUpdateDoc, 'productUpdate', variables);
      return result.data.productUpdate as Product;
    },
    /**
       Imports products from CSV
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The import response
       */
    async importProductsCsv(input: ProductCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation<{ productCsvImport: CsvImportResponse }>(client, productCsvImportDoc, 'productCsvImport', { input });
      return result.data.productCsvImport as CsvImportResponse;
    },
    /**
       Adds surcharges to a product
       * @param input Surcharges input data
       * @returns Promise<boolean> Success status
       */
    async addSurchargesToProduct(input: AddSurchargesToProductInput): Promise<ConfirmationResponse> {
      const result = await runOperation<{ addSurchargesToProduct: ConfirmationResponse }>(client, addSurchargesToProductDoc, 'addSurchargesToProduct', { input });
      return result.data.addSurchargesToProduct as ConfirmationResponse;
    },
    /**
       Fetches surcharges for a product
       * @param productId Product ID
       * @returns Promise<SurchargesResponse> The surcharges response
       */
    async getProductSurcharges(productId: number): Promise<SurchargeProductResponse> {
      const result = await runOperation<{ productSurcharges: SurchargeProductResponse }>(client, productSurchargesDoc, 'productSurcharges', { productId });
      return result.data.productSurcharges as SurchargeProductResponse;
    },
    /**
       Fetches attributes for a product
       * @param productId Product ID
       * @param input Attribute search input
       * @returns Promise<AttributeResponse> The attributes response
       */
    async getAttributesByProductId(
    productId: number,
    input: AttributeSearchInput
  ): Promise<AttributeResponse> {
      const result = await runOperation<{ attributesByProductId: AttributeResponse }>(client, attributesByProductIdDoc, 'attributesByProductId', { productId, input });
      return result.data.attributesByProductId as AttributeResponse;
    },
    /**
       Fetches attribute results for a product
       * @param productId Product ID
       * @param input Attribute result search input
       * @returns Promise<AttributeResultResponse> The attribute result response
       */
    async getAttributeResultByProductId(
    productId: number,
    input: AttributeResultSearchInput
  ): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByProductId: AttributeResultResponse }>(client, attributeResultByProductIdDoc, 'attributeResultByProductId', { productId, input });
      return result.data.attributeResultByProductId as AttributeResultResponse;
    },
    /**
       baseProductCategoryMoveAbove operation
       */
    async baseProductCategoryMoveAbove(variables: BaseProductCategoryMoveAboveVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveAbove: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveAboveDoc, 'baseProductCategoryMoveAbove', { ...variables });
      return result.data.baseProductCategoryMoveAbove as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveAboveByUuids operation
       */
    async baseProductCategoryMoveAboveByUuids(variables: BaseProductCategoryMoveAboveByUuidsVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveAboveByUuids: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveAboveByUuidsDoc, 'baseProductCategoryMoveAboveByUuids', { ...variables });
      return result.data.baseProductCategoryMoveAboveByUuids as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveBelow operation
       */
    async baseProductCategoryMoveBelow(variables: BaseProductCategoryMoveBelowVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveBelow: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveBelowDoc, 'baseProductCategoryMoveBelow', { ...variables });
      return result.data.baseProductCategoryMoveBelow as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveBelowByUuids operation
       */
    async baseProductCategoryMoveBelowByUuids(variables: BaseProductCategoryMoveBelowByUuidsVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveBelowByUuids: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveBelowByUuidsDoc, 'baseProductCategoryMoveBelowByUuids', { ...variables });
      return result.data.baseProductCategoryMoveBelowByUuids as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveToBottom operation
       */
    async baseProductCategoryMoveToBottom(variables: BaseProductCategoryMoveToBottomVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveToBottom: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveToBottomDoc, 'baseProductCategoryMoveToBottom', { ...variables });
      return result.data.baseProductCategoryMoveToBottom as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveToBottomByUuids operation
       */
    async baseProductCategoryMoveToBottomByUuids(variables: BaseProductCategoryMoveToBottomByUuidsVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveToBottomByUuids: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveToBottomByUuidsDoc, 'baseProductCategoryMoveToBottomByUuids', { ...variables });
      return result.data.baseProductCategoryMoveToBottomByUuids as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveToTop operation
       */
    async baseProductCategoryMoveToTop(variables: BaseProductCategoryMoveToTopVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveToTop: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveToTopDoc, 'baseProductCategoryMoveToTop', { ...variables });
      return result.data.baseProductCategoryMoveToTop as BaseProductCategoryRelationship[];
    },
    /**
       baseProductCategoryMoveToTopByUuids operation
       */
    async baseProductCategoryMoveToTopByUuids(variables: BaseProductCategoryMoveToTopByUuidsVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ baseProductCategoryMoveToTopByUuids: BaseProductCategoryRelationship[] }>(client, baseProductCategoryMoveToTopByUuidsDoc, 'baseProductCategoryMoveToTopByUuids', { ...variables });
      return result.data.baseProductCategoryMoveToTopByUuids as BaseProductCategoryRelationship[];
    },
    /**
       Search both products and clusters in a single result set.
       */
    async getBaseProducts(variables: BaseProductsVariables): Promise<BaseProductsResponse> {
      const result = await runOperation<{ baseProducts: BaseProductsResponse }>(client, baseProductsDoc, 'baseProducts', { ...variables });
      return result.data.baseProducts as BaseProductsResponse;
    },
    /**
       productAddToCategory operation
       */
    async productAddToCategory(variables: ProductAddToCategoryVariables): Promise<ProductCategoryRelationship> {
      const result = await runOperation<{ productAddToCategory: ProductCategoryRelationship }>(client, productAddToCategoryDoc, 'productAddToCategory', { ...variables });
      return result.data.productAddToCategory as ProductCategoryRelationship;
    },
    /**
       Attach an existing product to a cluster.
       */
    async productAssignToCluster(variables: ProductAssignToClusterVariables): Promise<Product> {
      const result = await runOperation<{ productAssignToCluster: Product }>(client, productAssignToClusterDoc, 'productAssignToCluster', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.productAssignToCluster as Product;
    },
    /**
       productCategoryMoveAbove operation
       */
    async productCategoryMoveAbove(variables: ProductCategoryMoveAboveVariables): Promise<ProductCategoryRelationship[]> {
      const result = await runOperation<{ productCategoryMoveAbove: ProductCategoryRelationship[] }>(client, productCategoryMoveAboveDoc, 'productCategoryMoveAbove', { ...variables });
      return result.data.productCategoryMoveAbove as ProductCategoryRelationship[];
    },
    /**
       productCategoryMoveBelow operation
       */
    async productCategoryMoveBelow(variables: ProductCategoryMoveBelowVariables): Promise<ProductCategoryRelationship[]> {
      const result = await runOperation<{ productCategoryMoveBelow: ProductCategoryRelationship[] }>(client, productCategoryMoveBelowDoc, 'productCategoryMoveBelow', { ...variables });
      return result.data.productCategoryMoveBelow as ProductCategoryRelationship[];
    },
    /**
       productCategoryMoveToBottom operation
       */
    async productCategoryMoveToBottom(variables: ProductCategoryMoveToBottomVariables): Promise<ProductCategoryRelationship[]> {
      const result = await runOperation<{ productCategoryMoveToBottom: ProductCategoryRelationship[] }>(client, productCategoryMoveToBottomDoc, 'productCategoryMoveToBottom', { ...variables });
      return result.data.productCategoryMoveToBottom as ProductCategoryRelationship[];
    },
    /**
       productCategoryMoveToTop operation
       */
    async productCategoryMoveToTop(variables: ProductCategoryMoveToTopVariables): Promise<ProductCategoryRelationship[]> {
      const result = await runOperation<{ productCategoryMoveToTop: ProductCategoryRelationship[] }>(client, productCategoryMoveToTopDoc, 'productCategoryMoveToTop', { ...variables });
      return result.data.productCategoryMoveToTop as ProductCategoryRelationship[];
    },
    /**
       Reorder a product within its cluster so it appears immediately before another product.
       */
    async productClusterMoveAbove(variables: ProductClusterMoveAboveVariables): Promise<BaseProductClusterRelationship[]> {
      const result = await runOperation<{ productClusterMoveAbove: BaseProductClusterRelationship[] }>(client, productClusterMoveAboveDoc, 'productClusterMoveAbove', { ...variables });
      return result.data.productClusterMoveAbove as BaseProductClusterRelationship[];
    },
    /**
       Reorder a product within its cluster so it appears immediately after another product.
       */
    async productClusterMoveBelow(variables: ProductClusterMoveBelowVariables): Promise<BaseProductClusterRelationship[]> {
      const result = await runOperation<{ productClusterMoveBelow: BaseProductClusterRelationship[] }>(client, productClusterMoveBelowDoc, 'productClusterMoveBelow', { ...variables });
      return result.data.productClusterMoveBelow as BaseProductClusterRelationship[];
    },
    /**
       Reorder a product within its cluster option so it appears immediately before another product.
       */
    async productClusterOptionMoveAbove(variables: ProductClusterOptionMoveAboveVariables): Promise<ProductClusterOptionRelationship[]> {
      const result = await runOperation<{ productClusterOptionMoveAbove: ProductClusterOptionRelationship[] }>(client, productClusterOptionMoveAboveDoc, 'productClusterOptionMoveAbove', { ...variables });
      return result.data.productClusterOptionMoveAbove as ProductClusterOptionRelationship[];
    },
    /**
       Reorder a product within its cluster option so it appears immediately after another product.
       */
    async productClusterOptionMoveBelow(variables: ProductClusterOptionMoveBelowVariables): Promise<ProductClusterOptionRelationship[]> {
      const result = await runOperation<{ productClusterOptionMoveBelow: ProductClusterOptionRelationship[] }>(client, productClusterOptionMoveBelowDoc, 'productClusterOptionMoveBelow', { ...variables });
      return result.data.productClusterOptionMoveBelow as ProductClusterOptionRelationship[];
    },
    /**
       productRemoveFromCategory operation
       */
    async productRemoveFromCategory(variables: ProductRemoveFromCategoryVariables): Promise<boolean> {
      const result = await runOperation<{ productRemoveFromCategory: boolean }>(client, productRemoveFromCategoryDoc, 'productRemoveFromCategory', { ...variables });
      return result.data.productRemoveFromCategory as boolean;
    },
    /**
       Current batch metrics for the current tenant
       */
    async getProductSearchBatchMetrics(): Promise<BatchMetricsTenantResponse> {
      const result = await runOperation<{ productSearchBatchMetrics: BatchMetricsTenantResponse }>(client, productSearchBatchMetricsDoc, 'productSearchBatchMetrics', {});
      return result.data.productSearchBatchMetrics as BatchMetricsTenantResponse;
    },
    /**
       Failed batch jobs for the current tenant
       */
    async getProductSearchBatchMetricsFailedJobs(variables: ProductSearchBatchMetricsFailedJobsVariables): Promise<BatchMetricsFailedJobsResponse> {
      const result = await runOperation<{ productSearchBatchMetricsFailedJobs: BatchMetricsFailedJobsResponse }>(client, productSearchBatchMetricsFailedJobsDoc, 'productSearchBatchMetricsFailedJobs', { ...variables });
      return result.data.productSearchBatchMetricsFailedJobs as BatchMetricsFailedJobsResponse;
    },
    /**
       Hourly batch metrics for the current tenant (last 48 hours)
       */
    async getProductSearchBatchMetricsHourly(): Promise<BatchMetricsTenantHourlyResponse> {
      const result = await runOperation<{ productSearchBatchMetricsHourly: BatchMetricsTenantHourlyResponse }>(client, productSearchBatchMetricsHourlyDoc, 'productSearchBatchMetricsHourly', {});
      return result.data.productSearchBatchMetricsHourly as BatchMetricsTenantHourlyResponse;
    },
    /**
       Aggregate status of all batch-related queues
       */
    async getProductSearchBatchMetricsQueueStatus(): Promise<BatchMetricsQueueStatusResponse> {
      const result = await runOperation<{ productSearchBatchMetricsQueueStatus: BatchMetricsQueueStatusResponse }>(client, productSearchBatchMetricsQueueStatusDoc, 'productSearchBatchMetricsQueueStatus', {});
      return result.data.productSearchBatchMetricsQueueStatus as BatchMetricsQueueStatusResponse;
    },
    /**
       Search for products across multiple categories. Each category is searched separately with the same filters applied. Results are grouped by category ID for dataloader patterns.
       */
    async getProductSearchByCategory(variables: ProductSearchByCategoryVariables): Promise<ProductSearchByCategoryResponse> {
      const result = await runOperation<{ productSearchByCategory: ProductSearchByCategoryResponse }>(client, productSearchByCategoryDoc, 'productSearchByCategory', { ...variables });
      return result.data.productSearchByCategory as ProductSearchByCategoryResponse;
    },
    /**
       Queue one or more categories for indexing
       */
    async productSearchCategoriesIndex(variables: ProductSearchCategoriesIndexVariables): Promise<IndexEntitiesResponse> {
      const result = await runOperation<{ productSearchCategoriesIndex: IndexEntitiesResponse }>(client, productSearchCategoriesIndexDoc, 'productSearchCategoriesIndex', { ...variables });
      return result.data.productSearchCategoriesIndex as IndexEntitiesResponse;
    },
    /**
       Queue one or more clusters for indexing
       */
    async productSearchClustersIndex(variables: ProductSearchClustersIndexVariables): Promise<IndexEntitiesResponse> {
      const result = await runOperation<{ productSearchClustersIndex: IndexEntitiesResponse }>(client, productSearchClustersIndexDoc, 'productSearchClustersIndex', { ...variables });
      return result.data.productSearchClustersIndex as IndexEntitiesResponse;
    },
    /**
       Cancel a running reindex by its ID
       */
    async productSearchFullReindexCancel(variables: ProductSearchFullReindexCancelVariables): Promise<CancelReindexResponse> {
      const result = await runOperation<{ productSearchFullReindexCancel: CancelReindexResponse }>(client, productSearchFullReindexCancelDoc, 'productSearchFullReindexCancel', { ...variables });
      return result.data.productSearchFullReindexCancel as CancelReindexResponse;
    },
    /**
       Start a full reindex for the current tenant
       */
    async productSearchFullReindexStart(variables: ProductSearchFullReindexStartVariables): Promise<StartReindexResponse> {
      const result = await runOperation<{ productSearchFullReindexStart: StartReindexResponse }>(client, productSearchFullReindexStartDoc, 'productSearchFullReindexStart', { ...variables });
      return result.data.productSearchFullReindexStart as StartReindexResponse;
    },
    /**
       Queue one or more products for indexing
       */
    async productSearchProductsIndex(variables: ProductSearchProductsIndexVariables): Promise<IndexEntitiesResponse> {
      const result = await runOperation<{ productSearchProductsIndex: IndexEntitiesResponse }>(client, productSearchProductsIndexDoc, 'productSearchProductsIndex', { ...variables });
      return result.data.productSearchProductsIndex as IndexEntitiesResponse;
    },
    /**
       Check if a reindex is currently running for the current tenant
       */
    async getProductSearchReindexLock(): Promise<ReindexLockResponse> {
      const result = await runOperation<{ productSearchReindexLock: ReindexLockResponse }>(client, productSearchReindexLockDoc, 'productSearchReindexLock', {});
      return result.data.productSearchReindexLock as ReindexLockResponse;
    },
    /**
       Force release a reindex lock for the current tenant (admin operation)
       */
    async productSearchReindexLockForceRelease(): Promise<ForceReleaseLockResponse> {
      const result = await runOperation<{ productSearchReindexLockForceRelease: ForceReleaseLockResponse }>(client, productSearchReindexLockForceReleaseDoc, 'productSearchReindexLockForceRelease', {});
      return result.data.productSearchReindexLockForceRelease as ForceReleaseLockResponse;
    },
    /**
       Get the progress of a reindex by its ID
       */
    async getProductSearchReindexStatus(variables: ProductSearchReindexStatusVariables): Promise<ReindexStatusResponse> {
      const result = await runOperation<{ productSearchReindexStatus: ReindexStatusResponse }>(client, productSearchReindexStatusDoc, 'productSearchReindexStatus', { ...variables });
      return result.data.productSearchReindexStatus as ReindexStatusResponse;
    },
    /**
       Search for products using Solr (parallel implementation for testing and migration)
       */
    async getProductSearchSolr(variables: ProductSearchSolrVariables): Promise<ProductSearchResponse> {
      const result = await runOperation<{ productSearchSolr: ProductSearchResponse }>(client, productSearchSolrDoc, 'productSearchSolr', { ...variables });
      return result.data.productSearchSolr as ProductSearchResponse;
    },
    /**
       productSetDefaultCategory operation
       */
    async productSetDefaultCategory(variables: ProductSetDefaultCategoryVariables): Promise<Product> {
      const result = await runOperation<{ productSetDefaultCategory: Product }>(client, productSetDefaultCategoryDoc, 'productSetDefaultCategory', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.productSetDefaultCategory as Product;
    },
    /**
       Detach a product from its current cluster.
       */
    async productUnassignFromCluster(variables: ProductUnassignFromClusterVariables): Promise<Product> {
      const result = await runOperation<{ productUnassignFromCluster: Product }>(client, productUnassignFromClusterDoc, 'productUnassignFromCluster', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.productUnassignFromCluster as Product;
    },
    /**
       productsBulkAddToCategory operation
       */
    async productsBulkAddToCategory(variables: ProductsBulkAddToCategoryVariables): Promise<ProductCategoryRelationship[]> {
      const result = await runOperation<{ productsBulkAddToCategory: ProductCategoryRelationship[] }>(client, productsBulkAddToCategoryDoc, 'productsBulkAddToCategory', { ...variables });
      return result.data.productsBulkAddToCategory as ProductCategoryRelationship[];
    },
    /**
       productsBulkRemoveFromCategory operation
       */
    async productsBulkRemoveFromCategory(variables: ProductsBulkRemoveFromCategoryVariables): Promise<boolean> {
      const result = await runOperation<{ productsBulkRemoveFromCategory: boolean }>(client, productsBulkRemoveFromCategoryDoc, 'productsBulkRemoveFromCategory', { ...variables });
      return result.data.productsBulkRemoveFromCategory as boolean;
    },
    /**
       Search products with filtering, sorting and pagination, returning raw records without orderlist enrichment.
       */
    async getProductsRaw(variables: ProductsRawVariables): Promise<ProductsRawResponse> {
      const result = await runOperation<{ productsRaw: ProductsRawResponse }>(client, productsRawDoc, 'productsRaw', { ...variables });
      return result.data.productsRaw as ProductsRawResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `productService(client)`.
 */
export class ProductService {
  private readonly _svc: ReturnType<typeof productService>;
  constructor(client: GraphQLClient) { this._svc = productService(client); }
  /**
   * Fetches a single product by ID, slug, or SKU
   * @param variables input variables for aproduct to fetch
   * - productId: int - Product ID to fetch
    * - slug: string - Product slug to fetch
    * - sku: string - Product SKU to fetch
    * - language: string - Language for localized content
    * - applyOrderlists: boolean - Whether to apply orderlist logic
    * - orderlistIds: number[] - Array of orderlist IDs to apply
    * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
    * - userBulkPriceProductInput: UserBulkPriceProductInput - User bulk price input
    * - attributeResultSearchInput: AttributeResultSearchInput - Attribute search input
    * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
    * - mediaVideoSearchInput: MediaVideoProductSearchInput - Video search input
    * - mediaDocumentSearchInput: MediaDocumentProductSearchInput - Document search input
    * - imageVariantFilters: TransformationsInput - Image transformation filters
   */
  getProduct(variables: ProductQueryVariables, fetchOptions?: GraphQLFetchOptions): Promise<Product> { return this._svc.getProduct(variables, fetchOptions); }
  /**
   * Fetches a list of products with search criteria
   * @param variables Product search input parameters
   */
  getProducts(variables: ProductsQueryVariables): Promise<ProductsResponse> { return this._svc.getProducts(variables); }
  /**
   * Creates a new product
   * @param input Product creation input data
   */
  createProduct(input: CreateProductInput): Promise<Product> { return this._svc.createProduct(input); }
  /**
   * Updates an existing product
   * @param variables Product update input data
   * - productId: number - ID of the product to update
   * - input: UpdateProductInput - The fields to update for the product
   */
  updateProduct(variables: ProductUpdateVariables): Promise<Product> { return this._svc.updateProduct(variables); }
  /**
   * Imports products from CSV
   * @param input CSV import input data
   */
  importProductsCsv(input: ProductCsvInput): Promise<CsvImportResponse> { return this._svc.importProductsCsv(input); }
  /**
   * Adds surcharges to a product
   * @param input Surcharges input data
   */
  addSurchargesToProduct(input: AddSurchargesToProductInput): Promise<ConfirmationResponse> { return this._svc.addSurchargesToProduct(input); }
  /**
   * Fetches surcharges for a product
   * @param productId Product ID
   */
  getProductSurcharges(productId: number): Promise<SurchargeProductResponse> { return this._svc.getProductSurcharges(productId); }
  /**
   * Fetches attributes for a product
   * @param productId Product ID
   * @param input Attribute search input
   */
  getAttributesByProductId(productId: number, input: AttributeSearchInput): Promise<AttributeResponse> { return this._svc.getAttributesByProductId(productId, input); }
  /**
   * Fetches attribute results for a product
   * @param productId Product ID
   * @param input Attribute result search input
   */
  getAttributeResultByProductId(productId: number, input: AttributeResultSearchInput): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByProductId(productId, input); }
  baseProductCategoryMoveAbove(variables: BaseProductCategoryMoveAboveVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveAbove(variables); }
  baseProductCategoryMoveAboveByUuids(variables: BaseProductCategoryMoveAboveByUuidsVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveAboveByUuids(variables); }
  baseProductCategoryMoveBelow(variables: BaseProductCategoryMoveBelowVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveBelow(variables); }
  baseProductCategoryMoveBelowByUuids(variables: BaseProductCategoryMoveBelowByUuidsVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveBelowByUuids(variables); }
  baseProductCategoryMoveToBottom(variables: BaseProductCategoryMoveToBottomVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveToBottom(variables); }
  baseProductCategoryMoveToBottomByUuids(variables: BaseProductCategoryMoveToBottomByUuidsVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveToBottomByUuids(variables); }
  baseProductCategoryMoveToTop(variables: BaseProductCategoryMoveToTopVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveToTop(variables); }
  baseProductCategoryMoveToTopByUuids(variables: BaseProductCategoryMoveToTopByUuidsVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.baseProductCategoryMoveToTopByUuids(variables); }
  getBaseProducts(variables: BaseProductsVariables): Promise<BaseProductsResponse> { return this._svc.getBaseProducts(variables); }
  productAddToCategory(variables: ProductAddToCategoryVariables): Promise<ProductCategoryRelationship> { return this._svc.productAddToCategory(variables); }
  productAssignToCluster(variables: ProductAssignToClusterVariables): Promise<Product> { return this._svc.productAssignToCluster(variables); }
  productCategoryMoveAbove(variables: ProductCategoryMoveAboveVariables): Promise<ProductCategoryRelationship[]> { return this._svc.productCategoryMoveAbove(variables); }
  productCategoryMoveBelow(variables: ProductCategoryMoveBelowVariables): Promise<ProductCategoryRelationship[]> { return this._svc.productCategoryMoveBelow(variables); }
  productCategoryMoveToBottom(variables: ProductCategoryMoveToBottomVariables): Promise<ProductCategoryRelationship[]> { return this._svc.productCategoryMoveToBottom(variables); }
  productCategoryMoveToTop(variables: ProductCategoryMoveToTopVariables): Promise<ProductCategoryRelationship[]> { return this._svc.productCategoryMoveToTop(variables); }
  productClusterMoveAbove(variables: ProductClusterMoveAboveVariables): Promise<BaseProductClusterRelationship[]> { return this._svc.productClusterMoveAbove(variables); }
  productClusterMoveBelow(variables: ProductClusterMoveBelowVariables): Promise<BaseProductClusterRelationship[]> { return this._svc.productClusterMoveBelow(variables); }
  productClusterOptionMoveAbove(variables: ProductClusterOptionMoveAboveVariables): Promise<ProductClusterOptionRelationship[]> { return this._svc.productClusterOptionMoveAbove(variables); }
  productClusterOptionMoveBelow(variables: ProductClusterOptionMoveBelowVariables): Promise<ProductClusterOptionRelationship[]> { return this._svc.productClusterOptionMoveBelow(variables); }
  productRemoveFromCategory(variables: ProductRemoveFromCategoryVariables): Promise<boolean> { return this._svc.productRemoveFromCategory(variables); }
  getProductSearchBatchMetrics(): Promise<BatchMetricsTenantResponse> { return this._svc.getProductSearchBatchMetrics(); }
  getProductSearchBatchMetricsFailedJobs(variables: ProductSearchBatchMetricsFailedJobsVariables): Promise<BatchMetricsFailedJobsResponse> { return this._svc.getProductSearchBatchMetricsFailedJobs(variables); }
  getProductSearchBatchMetricsHourly(): Promise<BatchMetricsTenantHourlyResponse> { return this._svc.getProductSearchBatchMetricsHourly(); }
  getProductSearchBatchMetricsQueueStatus(): Promise<BatchMetricsQueueStatusResponse> { return this._svc.getProductSearchBatchMetricsQueueStatus(); }
  getProductSearchByCategory(variables: ProductSearchByCategoryVariables): Promise<ProductSearchByCategoryResponse> { return this._svc.getProductSearchByCategory(variables); }
  productSearchCategoriesIndex(variables: ProductSearchCategoriesIndexVariables): Promise<IndexEntitiesResponse> { return this._svc.productSearchCategoriesIndex(variables); }
  productSearchClustersIndex(variables: ProductSearchClustersIndexVariables): Promise<IndexEntitiesResponse> { return this._svc.productSearchClustersIndex(variables); }
  productSearchFullReindexCancel(variables: ProductSearchFullReindexCancelVariables): Promise<CancelReindexResponse> { return this._svc.productSearchFullReindexCancel(variables); }
  productSearchFullReindexStart(variables: ProductSearchFullReindexStartVariables): Promise<StartReindexResponse> { return this._svc.productSearchFullReindexStart(variables); }
  productSearchProductsIndex(variables: ProductSearchProductsIndexVariables): Promise<IndexEntitiesResponse> { return this._svc.productSearchProductsIndex(variables); }
  getProductSearchReindexLock(): Promise<ReindexLockResponse> { return this._svc.getProductSearchReindexLock(); }
  productSearchReindexLockForceRelease(): Promise<ForceReleaseLockResponse> { return this._svc.productSearchReindexLockForceRelease(); }
  getProductSearchReindexStatus(variables: ProductSearchReindexStatusVariables): Promise<ReindexStatusResponse> { return this._svc.getProductSearchReindexStatus(variables); }
  getProductSearchSolr(variables: ProductSearchSolrVariables): Promise<ProductSearchResponse> { return this._svc.getProductSearchSolr(variables); }
  productSetDefaultCategory(variables: ProductSetDefaultCategoryVariables): Promise<Product> { return this._svc.productSetDefaultCategory(variables); }
  productUnassignFromCluster(variables: ProductUnassignFromClusterVariables): Promise<Product> { return this._svc.productUnassignFromCluster(variables); }
  productsBulkAddToCategory(variables: ProductsBulkAddToCategoryVariables): Promise<ProductCategoryRelationship[]> { return this._svc.productsBulkAddToCategory(variables); }
  productsBulkRemoveFromCategory(variables: ProductsBulkRemoveFromCategoryVariables): Promise<boolean> { return this._svc.productsBulkRemoveFromCategory(variables); }
  getProductsRaw(variables: ProductsRawVariables): Promise<ProductsRawResponse> { return this._svc.getProductsRaw(variables); }
}
