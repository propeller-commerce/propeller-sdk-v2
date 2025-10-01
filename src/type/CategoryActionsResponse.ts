import { CategoryActionsData } from './CategoryActionsData';
/**
 Object class for CategoryActionsResponse
 */
export class CategoryActionsResponse {
  /** List of output messages for actions performed */
  private _data: CategoryActionsData[];
  /** List of extra messages */
  private _messages?: string[];
  /**
   Creates a new instance of CategoryActionsResponse
   */
  constructor(data: Partial<CategoryActionsResponse> = {}) {
    this._data = data.data!;
    this._messages = data.messages;
  }
  /**
   List of output messages for actions performed
   */
  get data(): CategoryActionsData[] {
    return this._data;
  }
  /**
   List of output messages for actions performed
   */
  set data(value: CategoryActionsData[]) {
    this._data = value;
  }
  /**
   List of extra messages
   */
  get messages(): string[] | undefined {
    return this._messages;
  }
  /**
   List of extra messages
   */
  set messages(value: string[] | undefined) {
    this._messages = value;
  }
}