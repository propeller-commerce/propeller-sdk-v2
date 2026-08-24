import { CategoryProductSearchResult } from './CategoryProductSearchResult';
/**
 Object class for ProductSearchByCategoryResponse
 */
export interface ProductSearchByCategoryResponse {
  /** Search results grouped by category ID */
  results: CategoryProductSearchResult[];
}
