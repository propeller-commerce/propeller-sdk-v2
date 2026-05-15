import { TemplateErrorType } from '../enum/TemplateErrorType';
/**
 Error log entry for template processing failures
 * Records detailed information about errors that occur during template rendering or custom query execution, including stack traces, error messages, and context information for debugging and monitoring purposes.
 */
export class TemplateErrorLog {
  /** Unique identifier for the error log */
  id!: string;
  /** Stack trace of the error */
  stackTrace!: string;
  /** When the error occurred */
  createdAt!: string;
  /** Event instance data that caused the error */
  eventInstance?: string;
  /** Topic name for the event */
  topicName?: string;
  /** Type of error that occurred */
  errorType!: TemplateErrorType;
  /** Error message */
  errorMessage!: string;
  /** ID of the template that caused the error */
  templateId?: string;
  /** Name of the specific field that caused the render error */
  fieldName?: string;
  constructor(data: Partial<TemplateErrorLog> = {}) {
    Object.assign(this, data);
  }
}