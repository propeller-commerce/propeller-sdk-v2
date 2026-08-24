import { LocalizedStringInput } from './LocalizedStringInput';
import { LocalizedTemplateContentInput } from './LocalizedTemplateContentInput';
import { EmailSenderInput } from './EmailSenderInput';
import { EmailContactInput } from './EmailContactInput';
/**
 Input object for EmailTemplateUpdateInput
 */
export interface EmailTemplateUpdateInput {
  /** The name of the template per given language */
  names?: LocalizedStringInput[];
  /** Uploaded handlebars template content, per given language */
  contents?: LocalizedTemplateContentInput[];
  /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
  customQuery?: string;
  /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
  queryVariables?: string;
  /** Subject for the email per given language, supports handlebars variables */
  subjects?: LocalizedStringInput[];
  /** From EmailContact for the email */
  from?: EmailSenderInput;
  /** To EmailContacts for the email */
  tos?: EmailContactInput[];
  /** CC EmailContacts for the email */
  ccs?: EmailContactInput[];
  /** BCC EmailContacts for the email */
  bccs?: EmailContactInput[];
}