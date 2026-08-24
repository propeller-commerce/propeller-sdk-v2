import { EventTrigger } from '../enum/EventTrigger';
import { EventActionConfigSortInput } from './EventActionConfigSortInput';
/**
 Input object for EventActionConfigSearchInput
 */
export interface EventActionConfigSearchInput {
  /** List of trigger names */
  triggers?: EventTrigger[];
  /** Codes to search for */
  codes?: string[];
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** Sorting options */
  sortInputs?: EventActionConfigSortInput[];
}