import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
import { EmailSender } from './EmailSender';
import { EmailContact } from './EmailContact';
import { DocumentTemplate } from './DocumentTemplate';
/**
 Object class for EmailTemplate
 */
export class EmailTemplate {
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
  /** Subject for the email per given language, supports handlebars variables */
  subjects!: LocalizedString[];
  /** From EmailContact for the email */
  from!: EmailSender;
  /** To EmailContacts for the email */
  tos?: EmailContact[];
  /** CC EmailContacts for the email */
  ccs?: EmailContact[];
  /** BCC EmailContacts for the email */
  bccs?: EmailContact[];
  /** DocumentTemplates to attach to the email */
  attachments?: DocumentTemplate[];
  constructor(data: Partial<EmailTemplate> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns the content for the given language, falling back to NL. */
  getContent(language: string = 'NL'): string | undefined {
    const arr = this.contents;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.content;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `customQuery`. */
  getCustomQuery(): string | undefined {
    return this.customQuery;
  }
  /** Returns `queryVariables`. */
  getQueryVariables(): string | undefined {
    return this.queryVariables;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns the subject for the given language, falling back to NL. */
  getSubject(language: string = 'NL'): string | undefined {
    const arr = this.subjects;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `from` as a EmailSender instance (coerced on first access). */
  getFrom(): EmailSender | undefined {
    if (this.from == null) return undefined;
    if (!(this.from instanceof EmailSender)) {
      this.from = new EmailSender(this.from as any);
    }
    return this.from;
  }
  /** Returns `tos` as EmailContact instances (coerced on first access). */
  getTos(): EmailContact[] | undefined {
    if (!this.tos) return undefined;
    this.tos = this.tos.map((x: any) => x instanceof EmailContact ? x : new EmailContact(x));
    return this.tos;
  }
  /** Returns `ccs` as EmailContact instances (coerced on first access). */
  getCcs(): EmailContact[] | undefined {
    if (!this.ccs) return undefined;
    this.ccs = this.ccs.map((x: any) => x instanceof EmailContact ? x : new EmailContact(x));
    return this.ccs;
  }
  /** Returns `bccs` as EmailContact instances (coerced on first access). */
  getBccs(): EmailContact[] | undefined {
    if (!this.bccs) return undefined;
    this.bccs = this.bccs.map((x: any) => x instanceof EmailContact ? x : new EmailContact(x));
    return this.bccs;
  }
  /** Returns `attachments` as DocumentTemplate instances (coerced on first access). */
  getAttachments(): DocumentTemplate[] | undefined {
    if (!this.attachments) return undefined;
    this.attachments = this.attachments.map((x: any) => x instanceof DocumentTemplate ? x : new DocumentTemplate(x));
    return this.attachments;
  }
}