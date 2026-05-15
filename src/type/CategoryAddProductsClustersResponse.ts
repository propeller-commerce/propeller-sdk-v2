import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryAddProductsClustersResponse
 */
export class CategoryAddProductsClustersResponse {
  /** The category object */
  category!: Category;
  /** Output messages about the actions performed. */
  actions!: CategoryActionsResponse;
  constructor(data: Partial<CategoryAddProductsClustersResponse> = {}) {
    Object.assign(this, data);
  }
}