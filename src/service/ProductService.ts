import { BaseService } from './BaseService';
import { Product } from '../type/Product';
import { ProductsResponse } from '../type/ProductsResponse';
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
/**
 Service class for Product-related GraphQL operations
 */
export class ProductService extends BaseService {
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
    const result = await this.executeQuery('product', variables);
    return new Product(result.data.product);
  }
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
    const result = await this.executeQuery('products', variables);
    return new ProductsResponse(result.data.products);
  }
  /**
   Creates a new product
   * @param input Product creation input data
   * @returns Promise<Product> The created product
   */
  async createProduct(input: CreateProductInput): Promise<Product> {
    const variables = { input };
    const result = await this.executeMutation('productCreate', variables);
    return new Product(result.data.productCreate);
  }
  /**
   Updates an existing product
   * @param input Product update input data
   * @returns Promise<Product> The updated product
   */
  async updateProduct(input: UpdateProductInput): Promise<Product> {
    const variables = { input };
    const result = await this.executeMutation('productUpdate', variables);
    return new Product(result.data.productUpdate);
  }
  /**
   Imports products from CSV
   * @param input CSV import input data
   * @returns Promise<CsvImportResponse> The import response
   */
  async importProductsCsv(input: ProductCsvInput): Promise<CsvImportResponse> {
    const variables = { input };
    const result = await this.executeMutation('productCsvImport', variables);
    return new CsvImportResponse(result.data.productCsvImport);
  }
  /**
   Adds surcharges to a product
   * @param input Surcharges input data
   * @returns Promise<boolean> Success status
   */
  async addSurchargesToProduct(input: AddSurchargesToProductInput): Promise<boolean> {
    const variables = { input };
    const result = await this.executeMutation('addSurchargesToProduct', variables);
    return result.data.addSurchargesToProduct;
  }
  /**
   Fetches surcharges for a product
   * @param productId Product ID
   * @returns Promise<SurchargesResponse> The surcharges response
   */
  async getProductSurcharges(productId: number): Promise<SurchargesResponse> {
    const variables = { productId };
    const result = await this.executeQuery('productSurcharges', variables);
    return new SurchargesResponse(result.data.productSurcharges);
  }
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
    const variables = { productId, input };
    const result = await this.executeQuery('attributesByProductId', variables);
    return new AttributeResponse(result.data.attributesByProductId);
  }
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
    const variables = { productId, input };
    const result = await this.executeQuery('attributeResultByProductId', variables);
    return new AttributeResultResponse(result.data.attributeResultByProductId);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}