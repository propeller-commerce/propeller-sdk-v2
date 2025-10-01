/**
 Statistical summary of template error logs
 * Provides aggregated metrics and counts for template error logs, including total counts by error type and date ranges for monitoring and analysis purposes.
 */
export interface TemplateErrorLogStats {
  /** Total number of error logs */
  totalCount: number;
  /** Number of render errors */
  renderErrorCount: number;
  /** Number of custom query errors */
  customQueryErrorCount: number;
  /** Date of the oldest error log entry */
  oldestEntry?: string;
  /** Date of the newest error log entry */
  newestEntry?: string;
}