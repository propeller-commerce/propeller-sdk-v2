import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
/**
 Object class for DocumentTemplate
 */
export class DocumentTemplate {
  /** A unique identifier for the template */
  id!: string;
  /** Uploaded handlebars template content, per given language */
  contents?: LocalizedTemplateContent[];
  /** The name of the template per given language */
  names!: LocalizedString[];
  /** The content of the template */
  content?: string;
  /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
  customQuery?: string;
  /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
  queryVariables?: string;
  /** The creation date of this Template */
  createdAt!: string;
  /** The last modified date of this Template */
  lastModifiedAt!: string;
  /** ID of the user who created this Template */
  createdBy?: number;
  /** ID of the user who last modified this Template */
  lastModifiedBy?: number;
  /** File name to use when rendering a document template per given language, supports handlebars variables */
  fileNames!: LocalizedString[];
  /** Indicates whether the template is used for default order PDF generation */
  isDefaultOrderPdf!: boolean;
  /** Indicates whether the template is used for default quote PDF generation */
  isDefaultQuotePdf!: boolean;
  constructor(data: Partial<DocumentTemplate> = {}) {
    Object.assign(this, data);
  }
}