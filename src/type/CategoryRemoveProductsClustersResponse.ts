import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryRemoveProductsClustersResponse
 */
export interface CategoryRemoveProductsClustersResponse {
  /** The category object */
  category: Category;
  /** Output messages about the actions performed. */
  actions: CategoryActionsResponse;
}