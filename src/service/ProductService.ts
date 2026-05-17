import { ConfirmationResponse } from '../type/ConfirmationResponse';
import { Product } from '../type/Product';
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
  /** Image transformation filters */
  imageVariantFilters: TransformationsInput;
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
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters: TransformationsInput;
  /** Filter available attributes input */
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}
import { GraphQLClient } from '../client/GraphQLClient';
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
    async getProduct(variables: ProductQueryVariables): Promise<Product> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, productDoc, 'product', { ...variables, language });
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
      const result = await runOperation(client, productsDoc, 'products', { ...variables, language });
      return result.data.products as ProductsResponse;
    },
    /**
       Creates a new product
       * @param input Product creation input data
       * @returns Promise<Product> The created product
       */
    async createProduct(input: CreateProductInput): Promise<Product> {
      const result = await runOperation(client, productCreateDoc, 'productCreate', { input });
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
      const result = await runOperation(client, productUpdateDoc, 'productUpdate', variables);
      return result.data.productUpdate as Product;
    },
    /**
       Imports products from CSV
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The import response
       */
    async importProductsCsv(input: ProductCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation(client, productCsvImportDoc, 'productCsvImport', { input });
      return result.data.productCsvImport as CsvImportResponse;
    },
    /**
       Adds surcharges to a product
       * @param input Surcharges input data
       * @returns Promise<boolean> Success status
       */
    async addSurchargesToProduct(input: AddSurchargesToProductInput): Promise<ConfirmationResponse> {
      const result = await runOperation(client, addSurchargesToProductDoc, 'addSurchargesToProduct', { input });
      return result.data.addSurchargesToProduct as ConfirmationResponse;
    },
    /**
       Fetches surcharges for a product
       * @param productId Product ID
       * @returns Promise<SurchargesResponse> The surcharges response
       */
    async getProductSurcharges(productId: number): Promise<SurchargeProductResponse> {
      const result = await runOperation(client, productSurchargesDoc, 'productSurcharges', { productId });
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
      const result = await runOperation(client, attributesByProductIdDoc, 'attributesByProductId', { productId, input });
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
      const result = await runOperation(client, attributeResultByProductIdDoc, 'attributeResultByProductId', { productId, input });
      return result.data.attributeResultByProductId as AttributeResultResponse;
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
  getProduct(variables: ProductQueryVariables): Promise<Product> { return this._svc.getProduct(variables); }
  /**
   * Fetches a list of products with search criteria
   * @param input Product search input parameters
   * @param language Language for localized content
   * @param priceCalculateProductInput Price calculation input
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   * @param filterAvailableAttributeInput Filter available attributes input
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
}
