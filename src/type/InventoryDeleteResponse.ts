/**
 Object class for InventoryDeleteResponse
 */
export class InventoryDeleteResponse {
  /** Error messages */
  /** @deprecated No longer used */
  messages!: string[];
  constructor(data: Partial<InventoryDeleteResponse> = {}) {
    Object.assign(this, data);
  }
}