import { LocalizedStringInput } from './LocalizedStringInput';
import { LocalizedTemplateContentInput } from './LocalizedTemplateContentInput';
/**
 Input object for DocumentTemplateUpdateInput
 */
export interface DocumentTemplateUpdateInput {
  /** The name of the template per given language */
  names?: LocalizedStringInput[];
  /** Uploaded handlebars template content, per given language */
  contents?: LocalizedTemplateContentInput[];
  /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
  customQuery?: string;
  /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
  queryVariables?: string;
  /** File name to use when rendering a document template per given language, supports handlebars variables */
  fileNames?: LocalizedStringInput[];
  /** Indicates whether the template is used for default order PDF generation */
  isDefaultOrderPdf?: boolean;
  /** Indicates whether the template is used for default quote PDF generation */
  isDefaultQuotePdf?: boolean;
}