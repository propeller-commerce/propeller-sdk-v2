import { AgentSortField } from '../enum/AgentSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for AgentSortInput
 */
export interface AgentSortInput {
  /** Agent field to use for sorting. */
  field: AgentSortField;
  /** Direction of sorting operation (ASC or DESC). */
  order: SortOrder;
}
