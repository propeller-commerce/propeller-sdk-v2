import { IEventActionConfig } from './IEventActionConfig';
/**
 Object class for EventActionConfigResponse
 */
export class EventActionConfigResponse {
  /** List of items of type IEventActionConfig */
  items!: IEventActionConfig[];
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
  constructor(data: Partial<EventActionConfigResponse> = {}) {
    Object.assign(this, data);
  }
}