import { RoleDefinitionSortInput } from './RoleDefinitionSortInput';
/**
 Input object for RoleDefinitionSearchInput
 */
export interface RoleDefinitionSearchInput {
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** Inputs to sort by */
  sortInputs?: RoleDefinitionSortInput[];
}