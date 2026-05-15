import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryRemoveProductsClustersResponse
 */
export class CategoryRemoveProductsClustersResponse {
  /** The category object */
  category!: Category;
  /** Output messages about the actions performed. */
  actions!: CategoryActionsResponse;
  constructor(data: Partial<CategoryRemoveProductsClustersResponse> = {}) {
    Object.assign(this, data);
  }
}