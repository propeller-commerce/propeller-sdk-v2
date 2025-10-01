import { TemplateErrorType } from '../enum/TemplateErrorType';
/**
 Search criteria for filtering template error logs
 * Provides comprehensive filtering options including error types, template IDs, date ranges, and pagination settings for efficient error log retrieval and analysis.
 */
export interface TemplateErrorLogSearchInput {
  /** Filter by error types */
  errorTypes?: TemplateErrorType[];
  /** Filter by template IDs */
  templateIds?: string[];
  /** Filter errors from this date */
  dateFrom?: string;
  /** Filter errors until this date */
  dateTo?: string;
  /** Number of items per page */
  offset: number;
  /** Page number */
  page: number;
  /** Sort criteria */
  sortInputs?: any[];
}