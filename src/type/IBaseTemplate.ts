import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
/**
 Base interface for template entities
 */
export interface IBaseTemplate {
  /** Template identifier */
  id: string;
  /** Template name */
  name: string;
  /** Template type */
  type: string;
  /** Template content */
  content: string;
  /** Template description */
  description?: string;
  /** Whether the template is enabled */
  enabled: boolean;
  /** Uploaded handlebars template content, per given language */
  contents?: LocalizedTemplateContent[];
  /** The name of the template per given language */
  names: LocalizedString[];
  /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
  customQuery?: string;
  /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
  queryVariables?: string;
  /** The creation date of this Template */
  createdAt: string;
  /** The last modified date of this Template */
  lastModifiedAt: string;
  /** ID of the user who created this Template */
  createdBy?: number;
  /** ID of the user who last modified this Template */
  lastModifiedBy?: number;
}