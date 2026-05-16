import { CategoryActionsData } from './CategoryActionsData';
/**
 Object class for CategoryActionsResponse
 */
export interface CategoryActionsResponse {
  /** List of output messages for actions performed */
  data: CategoryActionsData[];
  /** List of extra messages */
  messages?: string[];
}