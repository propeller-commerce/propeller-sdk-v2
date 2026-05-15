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

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `stackTrace`. */
  getStackTrace(): string {
    return this.stackTrace;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `eventInstance`. */
  getEventInstance(): string | undefined {
    return this.eventInstance;
  }
  /** Returns `topicName`. */
  getTopicName(): string | undefined {
    return this.topicName;
  }
  /** Returns `errorType`. */
  getErrorType(): TemplateErrorType {
    return this.errorType;
  }
  /** Returns `errorMessage`. */
  getErrorMessage(): string {
    return this.errorMessage;
  }
  /** Returns `templateId`. */
  getTemplateId(): string | undefined {
    return this.templateId;
  }
  /** Returns `fieldName`. */
  getFieldName(): string | undefined {
    return this.fieldName;
  }
}