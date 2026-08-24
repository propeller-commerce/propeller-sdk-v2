import { AgentInteractionMode } from '../enum/AgentInteractionMode';
import { AgentSortInput } from './AgentSortInput';
import { AgentTrigger } from '../enum/AgentTrigger';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for AgentSearchInput
 */
export interface AgentSearchInput {
  /** Page number for paginated results. */
  page: number;
  /** Number of items to return per page. */
  offset: number;
  /** Filter by specific agent identifiers.

Validation: Must be valid UUIDs. */
  ids?: string[];
  /** Filter by active status. */
  active?: boolean;
  /** Filter by classification types. */
  types?: string[];
  /** Filter by trigger mechanisms. */
  triggers?: AgentTrigger[];
  /** Filter by interaction modes. */
  interactionModes?: AgentInteractionMode[];
  /** Filter by admin user IDs who created the agents. */
  createdByAdminUserIds?: number[];
  /** Filter by admin user IDs who last modified the agents. */
  lastModifiedByAdminUserIds?: number[];
  /** Filter by creation date range. */
  createdAt?: DateSearchInput;
  /** Filter by last modification date range. */
  lastModifiedAt?: DateSearchInput;
  /** Sorting criteria for result organization. */
  sortInputs?: AgentSortInput[];
}
