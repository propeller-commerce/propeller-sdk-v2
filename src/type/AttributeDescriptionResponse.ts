import { AttributeDescription } from './AttributeDescription';
/**
 Object class for AttributeDescriptionResponse
 */
export class AttributeDescriptionResponse {
  /** List of items of type AttributeDescription */
  items!: AttributeDescription[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<AttributeDescriptionResponse> = {}) {
    Object.assign(this, data);
  }
}