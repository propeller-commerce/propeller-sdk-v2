/**
 Object class for LocalizedTemplateContent
 */
export class LocalizedTemplateContent {
  /** The language code */
  language!: string;
  /** Contents of the handlebars template file */
  content!: string;
  /** Contents of the the precompiled handlebars template file */
  precompiled?: string;
  constructor(data: Partial<LocalizedTemplateContent> = {}) {
    Object.assign(this, data);
  }
}