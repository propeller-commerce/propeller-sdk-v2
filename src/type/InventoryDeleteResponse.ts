/**
 Object class for InventoryDeleteResponse
 */
export class InventoryDeleteResponse {
  /** Error messages */
  private _messages: string[];
  /**
   Creates a new instance of InventoryDeleteResponse
   */
  constructor(data: Partial<InventoryDeleteResponse> = {}) {
    this._messages = data.messages!;
  }
  /**
   Error messages
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   Error messages
   */
  set messages(value: string[]) {
    this._messages = value;
  }
}