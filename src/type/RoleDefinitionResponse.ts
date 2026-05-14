import { RoleDefinition } from './RoleDefinition';
/**
 Object class for RoleDefinitionResponse
 */
export class RoleDefinitionResponse {
  /** List of items of type RoleDefinition */
  items!: RoleDefinition[];
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
  constructor(data: Partial<RoleDefinitionResponse> = {}) {
    Object.assign(this, data);
  }
}