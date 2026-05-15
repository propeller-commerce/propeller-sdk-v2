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
  /** Returns the fileName for the given language, falling back to NL. */
  getFileName(language: string = 'NL'): string | undefined {
    const arr = this.fileNames;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `isDefaultOrderPdf`. */
  getIsDefaultOrderPdf(): boolean {
    return this.isDefaultOrderPdf;
  }
  /** Returns `isDefaultQuotePdf`. */
  getIsDefaultQuotePdf(): boolean {
    return this.isDefaultQuotePdf;
  }
}