/**
 * @enum TemplateErrorType
 Types of template errors that can occur during processing
 */
export enum TemplateErrorType {
  /** Error occurred during template rendering */
  RENDER_ERROR = 'RENDER_ERROR',
  /** Error occurred during custom query execution */
  CUSTOM_QUERY_ERROR = 'CUSTOM_QUERY_ERROR'
}