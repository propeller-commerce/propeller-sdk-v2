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

  /** Returns `category` as a Category instance (coerced on first access). */
  getCategory(): Category | undefined {
    if (this.category == null) return undefined;
    if (!(this.category instanceof Category)) {
      this.category = new Category(this.category as any);
    }
    return this.category;
  }
  /** Returns `actions` as a CategoryActionsResponse instance (coerced on first access). */
  getActions(): CategoryActionsResponse | undefined {
    if (this.actions == null) return undefined;
    if (!(this.actions instanceof CategoryActionsResponse)) {
      this.actions = new CategoryActionsResponse(this.actions as any);
    }
    return this.actions;
  }
}