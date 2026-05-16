import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryAddProductsClustersResponse
 */
export interface CategoryAddProductsClustersResponse {
  /** The category object */
  category: Category;
  /** Output messages about the actions performed. */
  actions: CategoryActionsResponse;
}