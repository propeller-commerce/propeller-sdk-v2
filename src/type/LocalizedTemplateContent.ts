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

  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `content`. */
  getContent(): string {
    return this.content;
  }
  /** Returns `precompiled`. */
  getPrecompiled(): string | undefined {
    return this.precompiled;
  }
}