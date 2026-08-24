import { CategorySearchResponse } from './CategorySearchResponse';
/**
 Object class for CategoryProductSearchResult
 */
export interface CategoryProductSearchResult {
  /** The category ID this result belongs to */
  categoryId: number;
  /** The search results for this category */
  response: CategorySearchResponse;
}
