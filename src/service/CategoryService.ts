import { BaseService } from './BaseService';
import { Category } from '../type/Category';
import { CategoryResponse } from '../type/CategoryResponse';
import { CategorySearchInput } from '../type/CategorySearchInput';
import { CategoryCsvInput } from '../type/CategoryCsvInput';
import { CategoryAddProductsClustersInput } from '../type/CategoryAddProductsClustersInput';
import { CategoryRemoveProductsClustersInput } from '../type/CategoryRemoveProductsClustersInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { FilterAvailableAttributeInput } from '../type/FilterAvailableAttributeInput';
import { PriceCalculateProductInput } from '../type/PriceCalculateProductInput';
import { CategoryProductSearchInput } from '../type/CategoryProductSearchInput';
/**
 * Category query variables interface
 Variables for the category query
 */
export interface CategoryQueryVariables {
  /** Category ID to fetch */
  categoryId?: number;
  /** Category slug to fetch */
  slug?: string;
  /** User ID for personalization */
  userId?: number;
  /** Whether to include hidden categories */
  hidden?: boolean;
  /** Language for localized content */
  language?: string;
  /** Price calculation input for products */
  priceCalculateProductInput?: PriceCalculateProductInput;
  /** Category product search input */
  categoryProductSearchInput?: CategoryProductSearchInput;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
  /** Filter available attributes input */
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}
/**
 Service class for Category-related GraphQL operations
 */
export class CategoryService extends BaseService {
  /**
   Fetches a list of categories
   * @param filter Category filter criteria
   * @param userId User ID for personalization
   * @returns Promise<Category[]> Array of categories
   */
  async getCategories(filter?: any, userId?: number): Promise<Category[]> {
    const variables = { filter, userId };
    const result = await this.executeQuery('categories', variables);
    return result.data.categories as Category[];
  }
  /**
   Fetches a single category by ID or slug
   * @param variables Variables for the category query
   *  - categoryId: number - Category ID to fetch
   *  - slug: string - Category slug to fetch
   *  - userId: number - User ID for personalization
   *  - hidden: boolean - Whether to include hidden categories
   *  - language: string - Language for localized content
   *  - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
   *  - categoryProductSearchInput: CategoryProductSearchInput - Category product search input
   *  - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   *  - imageVariantFilters: TransformationsInput! - Image transformation filters
   *  - filterAvailableAttributeInput: FilterAvailableAttributeInput - Filter available attributes
   * @returns Promise<Category> The category data
   */
  async getCategory(variables: CategoryQueryVariables): Promise<Category> {
    const result = await this.executeQuery('category', variables);
    return result.data.category as Category;
  }
  /**
   Creates a new category
   * @param input Category creation input data
   * @returns Promise<Category> The created category
   */
  async createCategory(input: any): Promise<Category> {
    const variables = { input };
    const result = await this.executeMutation('categoryCreate', variables);
    return result.data.categoryCreate as Category;
  }
  /**
   Updates an existing category
   * @param input Category update input data
   * @returns Promise<Category> The updated category
   */
  async updateCategory(input: any): Promise<Category> {
    const variables = { input };
    const result = await this.executeMutation('categoryUpdate', variables);
    return result.data.categoryUpdate as Category;
  }
  /**
   Imports categories from CSV
   * @param input CSV import input data
   * @returns Promise<CsvImportResponse> The import response
   */
  async importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse> {
    const variables = { input };
    const result = await this.executeMutation('categoryCsvImport', variables);
    return result.data.categoryCsvImport as CsvImportResponse;
  }
  /**
   Adds products/clusters to a category
   * @param input Category add products/clusters input data
   * @returns Promise<Category> The updated category
   */
  async addProductsClustersToCategory(input: CategoryAddProductsClustersInput): Promise<Category> {
    const variables = { input };
    const result = await this.executeMutation('categoryAddProductsClusters', variables);
    return result.data.categoryAddProductsClusters as Category;
  }
  /**
   Removes products/clusters from a category
   * @param input Category remove products/clusters input data
   * @returns Promise<Category> The updated category
   */
  async removeProductsClustersFromCategory(input: CategoryRemoveProductsClustersInput): Promise<Category> {
    const variables = { input };
    const result = await this.executeMutation('categoryRemoveProductsClusters', variables);
    return result.data.categoryRemoveProductsClusters as Category;
  }
  /**
   Fetches attribute results for a category
   * @param categoryId Category ID
   * @param input Attribute result search input
   * @returns Promise<AttributeResultResponse> The attribute result response
   */
  async getAttributeResultByCategoryId(
    categoryId: number,
    input: AttributeResultSearchInput
  ): Promise<AttributeResultResponse> {
    const variables = { categoryId, input };
    const result = await this.executeQuery('attributeResultByCategoryId', variables);
    return result.data.attributeResultByCategoryId as AttributeResultResponse;
  }
}