/**
 Object class for InventoryDeleteResponse
 */
export class InventoryDeleteResponse {
  /** Error messages */
  messages!: string[];
  constructor(data: Partial<InventoryDeleteResponse> = {}) {
    Object.assign(this, data);
  }
}