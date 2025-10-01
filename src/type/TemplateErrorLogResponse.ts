import { TemplateErrorLog } from './TemplateErrorLog';
/**
 Paginated response containing template error log search results
 * Provides comprehensive pagination metadata along with the filtered list of template error logs for efficient data retrieval and navigation.
 */
export interface TemplateErrorLogResponse {
  /** List of template error logs */
  items: TemplateErrorLog[];
  /** Total number of items found */
  itemsFound: number;
  /** Current page number */
  page: number;
  /** Number of items per page */
  offset: number;
  /** Total number of pages */
  pages: number;
  /** Starting item number */
  start: number;
  /** Ending item number */
  end: number;
}