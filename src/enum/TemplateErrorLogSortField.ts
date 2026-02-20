/**
 * @enum TemplateErrorLogSortField
 * Available fields for sorting template error log search results.
 * Determines the ordering criteria for error log listings, enabling systematic analysis
 * of template processing failures and debugging workflows.
 */
export enum TemplateErrorLogSortField {
  /** Sort by the timestamp when the error occurred. Useful for chronological analysis of errors. */
  CREATED_AT = "CREATED_AT",
  /** Sort by the classification of error that occurred. Groups similar error types together for systematic debugging. */
  ERROR_TYPE = "ERROR_TYPE",
  /** Sort by the unique identifier of the template that caused the error. Groups errors by template for targeted debugging. */
  TEMPLATE_ID = "TEMPLATE_ID",
}
