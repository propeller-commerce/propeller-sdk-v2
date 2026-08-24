import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
import { EmailSender } from './EmailSender';
import { EmailContact } from './EmailContact';
import { DocumentTemplate } from './DocumentTemplate';
/**
 Object class for EmailTemplate
 */
export interface EmailTemplate {
  /** A unique identifier for the template */
  id: string;
  /** Uploaded handlebars template content, per given language */
  contents?: LocalizedTemplateContent[];
  /** The name of the template per given language */
  names: LocalizedString[];
  /** The content of the template */
  content?: string;
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
  /** Subject for the email per given language, supports handlebars variables */
  subjects: LocalizedString[];
  /** From EmailContact for the email */
  from: EmailSender;
  /** To EmailContacts for the email */
  tos?: EmailContact[];
  /** CC EmailContacts for the email */
  ccs?: EmailContact[];
  /** BCC EmailContacts for the email */
  bccs?: EmailContact[];
  /** DocumentTemplates to attach to the email */
  attachments?: DocumentTemplate[];
}