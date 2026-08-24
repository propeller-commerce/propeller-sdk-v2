import { Category } from '../type/Category';
import { document as categoryBySlugDoc } from '../generated/operations/categoryBySlug';
import { document as categoryBySourceDoc } from '../generated/operations/categoryBySource';
import { document as categoryChildrenDoc } from '../generated/operations/categoryChildren';
import { document as categoryHierarchyDoc } from '../generated/operations/categoryHierarchy';
import { document as categoryMoveAboveDoc } from '../generated/operations/categoryMoveAbove';
import { document as categoryMoveBelowDoc } from '../generated/operations/categoryMoveBelow';
import type { CategoryBySlugVariables, CategoryBySourceVariables, CategoryChildrenVariables, CategoryHierarchyVariables, CategoryMoveAboveVariables, CategoryMoveBelowVariables } from '../generated/operationVariables';

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
  /** Whether to include hidden categories */
  hidden?: boolean;
  /** Language for localized content */
  language?: string;
  /** Price calculation input for products */
  priceCalculateProductInput?: PriceCalculateProductInput;
  /** Category product search input */
  categoryProductSearchInput?: CategoryProductSearchInput;
  /** Attribute search input — controls the attributes returned on grid products */
  attributeResultSearchInput?: AttributeResultSearchInput;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
  /** Filter available attributes input */
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}
import { GraphQLClient, GraphQLFetchOptions } from '../client/GraphQLClient';
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
      const result = await runOperation<{ categories: CategoryResponse }>(client, categoriesDoc, 'categories', { filter, userId });
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
    async getCategory(variables: CategoryQueryVariables, fetchOptions?: GraphQLFetchOptions): Promise<Category> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ category: Category }>(client, categoryDoc, 'category', { ...variables, language }, fetchOptions);
      return result.data.category as Category;
    },
    /**
       Creates a new category
       * @param variables Category creation input data
       * @returns Promise<Category> The created category
       */
    async createCategory(variables: CategoryCreateVariables): Promise<Category> {
      const result = await runOperation<{ categoryCreate: Category }>(client, categoryCreateDoc, 'categoryCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryCreate as Category;
    },
    /**
       Updates an existing category
       * @param variables Category update input data
       * @returns Promise<Category> The updated category
       */
    async updateCategory(variables: CategoryUpdateVariables): Promise<Category> {
      const result = await runOperation<{ categoryUpdate: Category }>(client, categoryUpdateDoc, 'categoryUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryUpdate as Category;
    },
    /**
       Imports categories from CSV
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The import response
       */
    async importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation<{ categoryCsvImport: CsvImportResponse }>(client, categoryCsvImportDoc, 'categoryCsvImport', { input });
      return result.data.categoryCsvImport as CsvImportResponse;
    },
    /**
       Adds products/clusters to a category
       * @param variables Category add products/clusters input data
       * @returns Promise<Category> The updated category
       */
    async addProductsClustersToCategory(variables: CategoryAddProductsClustersVariables): Promise<CategoryAddProductsClustersResponse> {
      const result = await runOperation<{ categoryAddProductsClusters: CategoryAddProductsClustersResponse }>(client, categoryAddProductsClustersDoc, 'categoryAddProductsClusters', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryAddProductsClusters as CategoryAddProductsClustersResponse;
    },
    /**
       Removes products/clusters from a category
       * @param variables Category remove products/clusters input data
       * @returns Promise<Category> The updated category
       */
    async removeProductsClustersFromCategory(variables: CategoryRemoveProductsClustersVariables): Promise<CategoryRemoveProductsClustersResponse> {
      const result = await runOperation<{ categoryRemoveProductsClusters: CategoryRemoveProductsClustersResponse }>(client, categoryRemoveProductsClustersDoc, 'categoryRemoveProductsClusters', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
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
      const result = await runOperation<{ attributeResultByCategoryId: AttributeResultResponse }>(client, attributeResultByCategoryIdDoc, 'attributeResultByCategoryId', { categoryId, input });
      return result.data.attributeResultByCategoryId as AttributeResultResponse;
    },
    /**
       Retrieve a single category by localized slug and language.
       */
    async getCategoryBySlug(variables: CategoryBySlugVariables): Promise<Category> {
      const result = await runOperation<{ categoryBySlug: Category }>(client, categoryBySlugDoc, 'categoryBySlug', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryBySlug as Category;
    },
    /**
       Retrieve a single category by its external source / source identifier pair.
       */
    async getCategoryBySource(variables: CategoryBySourceVariables): Promise<Category> {
      const result = await runOperation<{ categoryBySource: Category }>(client, categoryBySourceDoc, 'categoryBySource', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryBySource as Category;
    },
    /**
       Retrieve the direct child categories of a category.
       */
    async getCategoryChildren(variables: CategoryChildrenVariables): Promise<Category[]> {
      const result = await runOperation<{ categoryChildren: Category[] }>(client, categoryChildrenDoc, 'categoryChildren', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryChildren as Category[];
    },
    /**
       Retrieve the ancestor chain of a category, ordered from the category itself up to the root.
       */
    async getCategoryHierarchy(variables: CategoryHierarchyVariables): Promise<Category[]> {
      const result = await runOperation<{ categoryHierarchy: Category[] }>(client, categoryHierarchyDoc, 'categoryHierarchy', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryHierarchy as Category[];
    },
    /**
       Reorder a category so it appears immediately before another category within the same parent.
       */
    async categoryMoveAbove(variables: CategoryMoveAboveVariables): Promise<Category[]> {
      const result = await runOperation<{ categoryMoveAbove: Category[] }>(client, categoryMoveAboveDoc, 'categoryMoveAbove', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryMoveAbove as Category[];
    },
    /**
       Reorder a category so it appears immediately after another category within the same parent.
       */
    async categoryMoveBelow(variables: CategoryMoveBelowVariables): Promise<Category[]> {
      const result = await runOperation<{ categoryMoveBelow: Category[] }>(client, categoryMoveBelowDoc, 'categoryMoveBelow', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.categoryMoveBelow as Category[];
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
   */
  getCategory(variables: CategoryQueryVariables, fetchOptions?: GraphQLFetchOptions): Promise<Category> { return this._svc.getCategory(variables, fetchOptions); }
  /**
   * Creates a new category
   * @param variables Category creation input data
   */
  createCategory(variables: CategoryCreateVariables): Promise<Category> { return this._svc.createCategory(variables); }
  /**
   * Updates an existing category
   * @param variables Category update input data
   */
  updateCategory(variables: CategoryUpdateVariables): Promise<Category> { return this._svc.updateCategory(variables); }
  /**
   * Imports categories from CSV
   * @param input CSV import input data
   */
  importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse> { return this._svc.importCategoriesCsv(input); }
  /**
   * Adds products/clusters to a category
   * @param variables Category add products/clusters input data
   */
  addProductsClustersToCategory(variables: CategoryAddProductsClustersVariables): Promise<CategoryAddProductsClustersResponse> { return this._svc.addProductsClustersToCategory(variables); }
  /**
   * Removes products/clusters from a category
   * @param variables Category remove products/clusters input data
   */
  removeProductsClustersFromCategory(variables: CategoryRemoveProductsClustersVariables): Promise<CategoryRemoveProductsClustersResponse> { return this._svc.removeProductsClustersFromCategory(variables); }
  /**
   * Fetches attribute results for a category
   * @param categoryId Category ID
   * @param input Attribute result search input
   */
  getAttributeResultByCategoryId(categoryId: number, input: AttributeResultSearchInput): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByCategoryId(categoryId, input); }
  getCategoryBySlug(variables: CategoryBySlugVariables): Promise<Category> { return this._svc.getCategoryBySlug(variables); }
  getCategoryBySource(variables: CategoryBySourceVariables): Promise<Category> { return this._svc.getCategoryBySource(variables); }
  getCategoryChildren(variables: CategoryChildrenVariables): Promise<Category[]> { return this._svc.getCategoryChildren(variables); }
  getCategoryHierarchy(variables: CategoryHierarchyVariables): Promise<Category[]> { return this._svc.getCategoryHierarchy(variables); }
  categoryMoveAbove(variables: CategoryMoveAboveVariables): Promise<Category[]> { return this._svc.categoryMoveAbove(variables); }
  categoryMoveBelow(variables: CategoryMoveBelowVariables): Promise<Category[]> { return this._svc.categoryMoveBelow(variables); }
}
