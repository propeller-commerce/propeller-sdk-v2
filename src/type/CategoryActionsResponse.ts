import { CategoryActionsData } from './CategoryActionsData';
/**
 Object class for CategoryActionsResponse
 */
export class CategoryActionsResponse {
  /** List of output messages for actions performed */
  data!: CategoryActionsData[];
  /** List of extra messages */
  messages?: string[];
  constructor(data: Partial<CategoryActionsResponse> = {}) {
    Object.assign(this, data);
  }
}