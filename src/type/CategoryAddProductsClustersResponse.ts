import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryAddProductsClustersResponse
 */
export class CategoryAddProductsClustersResponse {
  /** The category object */
  private _category: Category;
  /** Output messages about the actions performed. */
  private _actions: CategoryActionsResponse;
  /**
   Creates a new instance of CategoryAddProductsClustersResponse
   */
  constructor(data: Partial<CategoryAddProductsClustersResponse> = {}) {
    this._category = data.category!;
    this._actions = data.actions!;
  }
  /**
   The category object
   */
  get category(): Category {
    return this._category;
  }
  /**
   The category object
   */
  set category(value: Category) {
    this._category = value;
  }
  /**
   Output messages about the actions performed.
   */
  get actions(): CategoryActionsResponse {
    return this._actions;
  }
  /**
   Output messages about the actions performed.
   */
  set actions(value: CategoryActionsResponse) {
    this._actions = value;
  }
}