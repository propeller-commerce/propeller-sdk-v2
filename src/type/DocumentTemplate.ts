import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
/**
 Object class for DocumentTemplate
 */
export class DocumentTemplate {
  /** A unique identifier for the template */
  private _id: string;
  /** Uploaded handlebars template content, per given language */
  private _contents?: LocalizedTemplateContent[];
  /** The name of the template per given language */
  private _names: LocalizedString[];
  /** The content of the template */
  private _content?: string;
  /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
  private _customQuery?: string;
  /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
  private _queryVariables?: string;
  /** The creation date of this Template */
  private _createdAt: string;
  /** The last modified date of this Template */
  private _lastModifiedAt: string;
  /** ID of the user who created this Template */
  private _createdBy?: number;
  /** ID of the user who last modified this Template */
  private _lastModifiedBy?: number;
  /** File name to use when rendering a document template per given language, supports handlebars variables */
  private _fileNames: LocalizedString[];
  /** Indicates whether the template is used for default order PDF generation */
  private _isDefaultOrderPdf: boolean;
  /** Indicates whether the template is used for default quote PDF generation */
  private _isDefaultQuotePdf: boolean;
  /**
   Creates a new instance of DocumentTemplate
   */
  constructor(data: Partial<DocumentTemplate> = {}) {
    this._id = data.id!;
    this._contents = data.contents;
    this._names = data.names!;
    this._content = data.content;
    this._customQuery = data.customQuery;
    this._queryVariables = data.queryVariables;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._fileNames = data.fileNames!;
    this._isDefaultOrderPdf = data.isDefaultOrderPdf!;
    this._isDefaultQuotePdf = data.isDefaultQuotePdf!;
  }
  /**
   A unique identifier for the template
   */
  get id(): string {
    return this._id;
  }
  /**
   A unique identifier for the template
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Uploaded handlebars template content, per given language
   */
  get contents(): LocalizedTemplateContent[] | undefined {
    return this._contents;
  }
  /**
   Uploaded handlebars template content, per given language
   */
  set contents(value: LocalizedTemplateContent[] | undefined) {
    this._contents = value;
  }
  /**
   The name of the template per given language
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   The name of the template per given language
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   The content of the template
   */
  get content(): string | undefined {
    return this._content;
  }
  /**
   The content of the template
   */
  set content(value: string | undefined) {
    this._content = value;
  }
  /**
   GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
   */
  get customQuery(): string | undefined {
    return this._customQuery;
  }
  /**
   GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
   */
  set customQuery(value: string | undefined) {
    this._customQuery = value;
  }
  /**
   Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
   */
  get queryVariables(): string | undefined {
    return this._queryVariables;
  }
  /**
   Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
   */
  set queryVariables(value: string | undefined) {
    this._queryVariables = value;
  }
  /**
   The creation date of this Template
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The creation date of this Template
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The last modified date of this Template
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The last modified date of this Template
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   ID of the user who created this Template
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   ID of the user who created this Template
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   ID of the user who last modified this Template
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   ID of the user who last modified this Template
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   File name to use when rendering a document template per given language, supports handlebars variables
   */
  get fileNames(): LocalizedString[] {
    return this._fileNames;
  }
  /**
   File name to use when rendering a document template per given language, supports handlebars variables
   */
  set fileNames(value: LocalizedString[]) {
    this._fileNames = value;
  }
  /**
   Indicates whether the template is used for default order PDF generation
   */
  get isDefaultOrderPdf(): boolean {
    return this._isDefaultOrderPdf;
  }
  /**
   Indicates whether the template is used for default order PDF generation
   */
  set isDefaultOrderPdf(value: boolean) {
    this._isDefaultOrderPdf = value;
  }
  /**
   Indicates whether the template is used for default quote PDF generation
   */
  get isDefaultQuotePdf(): boolean {
    return this._isDefaultQuotePdf;
  }
  /**
   Indicates whether the template is used for default quote PDF generation
   */
  set isDefaultQuotePdf(value: boolean) {
    this._isDefaultQuotePdf = value;
  }
}