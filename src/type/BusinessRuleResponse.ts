import { BusinessRule } from './BusinessRule';
/**
 Paginated response of a BusinessRule search query
 */
export interface BusinessRuleResponse {
  /** List of items of type BusinessRule */
  items: BusinessRule[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
}