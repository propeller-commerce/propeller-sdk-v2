import { Category } from '../type/Category';
import { CategoryResponse } from '../type/CategoryResponse';
import { CategoryAddProductsClustersResponse } from '../type/CategoryAddProductsClustersResponse';
import { CategoryRemoveProductsClustersResponse } from '../type/CategoryRemoveProductsClustersResponse';
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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as categoriesDoc } from '../generated/operations/categories';
import { document as categoryDoc } from '../generated/operations/category';
import { document as categoryCreateDoc } from '../generated/operations/categoryCreate';
import { document as categoryUpdateDoc } from '../generated/operations/categoryUpdate';
import { document as categoryCsvImportDoc } from '../generated/operations/categoryCsvImport';
import { document as categoryAddProductsClustersDoc } from '../generated/operations/categoryAddProductsClusters';
import { document as categoryRemoveProductsClustersDoc } from '../generated/operations/categoryRemoveProductsClusters';
import { document as attributeResultByCategoryIdDoc } from '../generated/operations/attributeResultByCategoryId';
import type { CategoryAddProductsClustersVariables, CategoryCreateVariables, CategoryRemoveProductsClustersVariables, CategoryUpdateVariables } from '../generated/operationVariables';
/**
 Service class for Category-related GraphQL operations
 */
export function categoryService(client: GraphQLClient) {
  return {
    /**
       Fetches a list of categories
       * @param filter Category filter criteria
       * @param userId User ID for personalization
       * @returns Promise<Category[]> Array of categories
       */
    async getCategories(filter?: any, userId?: number): Promise<CategoryResponse> {
      const result = await runOperation(client, categoriesDoc, 'categories', { filter, userId });
      return result.data.categories as CategoryResponse;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, categoryDoc, 'category', { ...variables, language });
      return result.data.category as Category;
    },
    /**
       Creates a new category
       * @param input Category creation input data
       * @returns Promise<Category> The created category
       */
    async createCategory(variables: CategoryCreateVariables): Promise<Category> {
      const result = await runOperation(client, categoryCreateDoc, 'categoryCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryCreate as Category;
    },
    /**
       Updates an existing category
       * @param input Category update input data
       * @returns Promise<Category> The updated category
       */
    async updateCategory(variables: CategoryUpdateVariables): Promise<Category> {
      const result = await runOperation(client, categoryUpdateDoc, 'categoryUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryUpdate as Category;
    },
    /**
       Imports categories from CSV
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The import response
       */
    async importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation(client, categoryCsvImportDoc, 'categoryCsvImport', { input });
      return result.data.categoryCsvImport as CsvImportResponse;
    },
    /**
       Adds products/clusters to a category
       * @param input Category add products/clusters input data
       * @returns Promise<Category> The updated category
       */
    async addProductsClustersToCategory(variables: CategoryAddProductsClustersVariables): Promise<CategoryAddProductsClustersResponse> {
      const result = await runOperation(client, categoryAddProductsClustersDoc, 'categoryAddProductsClusters', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryAddProductsClusters as CategoryAddProductsClustersResponse;
    },
    /**
       Removes products/clusters from a category
       * @param input Category remove products/clusters input data
       * @returns Promise<Category> The updated category
       */
    async removeProductsClustersFromCategory(variables: CategoryRemoveProductsClustersVariables): Promise<CategoryRemoveProductsClustersResponse> {
      const result = await runOperation(client, categoryRemoveProductsClustersDoc, 'categoryRemoveProductsClusters', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryRemoveProductsClusters as CategoryRemoveProductsClustersResponse;
    },
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
      const result = await runOperation(client, attributeResultByCategoryIdDoc, 'attributeResultByCategoryId', { categoryId, input });
      return result.data.attributeResultByCategoryId as AttributeResultResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `categoryService(client)`.
 */
export class CategoryService {
  private readonly _svc: ReturnType<typeof categoryService>;
  constructor(client: GraphQLClient) { this._svc = categoryService(client); }
  /**
   * Fetches a list of categories
   * @param filter Category filter criteria
   * @param userId User ID for personalization
   */
  getCategories(filter?: any, userId?: number): Promise<CategoryResponse> { return this._svc.getCategories(filter, userId); }
  /**
   * Fetches a single category by ID or slug
   * @param variables Variables for the category query
   * @param categoryId Category ID to fetch
   * @param slug Category slug to fetch
   * @param userId User ID for personalization
   * @param hidden Whether to include hidden categories
   * @param language Language for localized content
   * @param priceCalculateProductInput Price calculation input
   * @param categoryProductSearchInput Category product search input
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   * @param filterAvailableAttributeInput Filter available attributes
   */
  getCategory(variables: CategoryQueryVariables): Promise<Category> { return this._svc.getCategory(variables); }
  /**
   * Creates a new category
   * @param input Category creation input data
   */
  createCategory(variables: CategoryCreateVariables): Promise<Category> { return this._svc.createCategory(variables); }
  /**
   * Updates an existing category
   * @param input Category update input data
   */
  updateCategory(variables: CategoryUpdateVariables): Promise<Category> { return this._svc.updateCategory(variables); }
  /**
   * Imports categories from CSV
   * @param input CSV import input data
   */
  importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse> { return this._svc.importCategoriesCsv(input); }
  /**
   * Adds products/clusters to a category
   * @param input Category add products/clusters input data
   */
  addProductsClustersToCategory(variables: CategoryAddProductsClustersVariables): Promise<CategoryAddProductsClustersResponse> { return this._svc.addProductsClustersToCategory(variables); }
  /**
   * Removes products/clusters from a category
   * @param input Category remove products/clusters input data
   */
  removeProductsClustersFromCategory(variables: CategoryRemoveProductsClustersVariables): Promise<CategoryRemoveProductsClustersResponse> { return this._svc.removeProductsClustersFromCategory(variables); }
  /**
   * Fetches attribute results for a category
   * @param categoryId Category ID
   * @param input Attribute result search input
   */
  getAttributeResultByCategoryId(categoryId: number, input: AttributeResultSearchInput): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByCategoryId(categoryId, input); }
}
