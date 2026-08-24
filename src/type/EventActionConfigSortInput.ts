import { EventActionConfigSortField } from '../enum/EventActionConfigSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for EventActionConfigSortInput
 */
export interface EventActionConfigSortInput {
  /** Field to sort by */
  field: EventActionConfigSortField;
  /** The sort order ASC/DESC */
  order: SortOrder;
}