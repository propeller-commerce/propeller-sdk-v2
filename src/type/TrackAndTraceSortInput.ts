import { TrackAndTraceSortField } from '../enum/TrackAndTraceSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for TrackAndTraceSortInput
 */
export interface TrackAndTraceSortInput {
  /** Field to sort by */
  field: TrackAndTraceSortField;
  /** Option to sort by */
  order: SortOrder;
}