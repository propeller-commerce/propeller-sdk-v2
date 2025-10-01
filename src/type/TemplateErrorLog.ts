import { TemplateErrorType } from '../enum/TemplateErrorType';
/**
 Error log entry for template processing failures
 * Records detailed information about errors that occur during template rendering or custom query execution, including stack traces, error messages, and context information for debugging and monitoring purposes.
 */
export class TemplateErrorLog {
  /** Unique identifier for the error log */
  private _id: string;
  /** Stack trace of the error */
  private _stackTrace: string;
  /** When the error occurred */
  private _createdAt: string;
  /** Event instance data that caused the error */
  private _eventInstance?: string;
  /** Topic name for the event */
  private _topicName?: string;
  /** Type of error that occurred */
  private _errorType: TemplateErrorType;
  /** Error message */
  private _errorMessage: string;
  /** ID of the template that caused the error */
  private _templateId?: string;
  /** Name of the specific field that caused the render error */
  private _fieldName?: string;
  /**
   Creates a new instance of TemplateErrorLog
   */
  constructor(data: Partial<TemplateErrorLog> = {}) {
    this._id = data.id!;
    this._stackTrace = data.stackTrace!;
    this._createdAt = data.createdAt!;
    this._eventInstance = data.eventInstance;
    this._topicName = data.topicName;
    this._errorType = data.errorType!;
    this._errorMessage = data.errorMessage!;
    this._templateId = data.templateId;
    this._fieldName = data.fieldName;
  }
  /**
   Unique identifier for the error log
   */
  get id(): string {
    return this._id;
  }
  /**
   Unique identifier for the error log
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Stack trace of the error
   */
  get stackTrace(): string {
    return this._stackTrace;
  }
  /**
   Stack trace of the error
   */
  set stackTrace(value: string) {
    this._stackTrace = value;
  }
  /**
   When the error occurred
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   When the error occurred
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Event instance data that caused the error
   */
  get eventInstance(): string | undefined {
    return this._eventInstance;
  }
  /**
   Event instance data that caused the error
   */
  set eventInstance(value: string | undefined) {
    this._eventInstance = value;
  }
  /**
   Topic name for the event
   */
  get topicName(): string | undefined {
    return this._topicName;
  }
  /**
   Topic name for the event
   */
  set topicName(value: string | undefined) {
    this._topicName = value;
  }
  /**
   Type of error that occurred
   */
  get errorType(): TemplateErrorType {
    return this._errorType;
  }
  /**
   Type of error that occurred
   */
  set errorType(value: TemplateErrorType) {
    this._errorType = value;
  }
  /**
   Error message
   */
  get errorMessage(): string {
    return this._errorMessage;
  }
  /**
   Error message
   */
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  /**
   ID of the template that caused the error
   */
  get templateId(): string | undefined {
    return this._templateId;
  }
  /**
   ID of the template that caused the error
   */
  set templateId(value: string | undefined) {
    this._templateId = value;
  }
  /**
   Name of the specific field that caused the render error
   */
  get fieldName(): string | undefined {
    return this._fieldName;
  }
  /**
   Name of the specific field that caused the render error
   */
  set fieldName(value: string | undefined) {
    this._fieldName = value;
  }
}