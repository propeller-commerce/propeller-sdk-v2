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

  /** Returns `data` as CategoryActionsData instances (coerced on first access). */
  getData(): CategoryActionsData[] {
    if (!this.data) return [];
    this.data = this.data.map((x: any) => x instanceof CategoryActionsData ? x : new CategoryActionsData(x));
    return this.data;
  }
  /** Returns `messages`. */
  getMessages(): string[] | undefined {
    return this.messages;
  }
}