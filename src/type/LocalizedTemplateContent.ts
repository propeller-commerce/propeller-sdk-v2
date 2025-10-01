/**
 Object class for LocalizedTemplateContent
 */
export class LocalizedTemplateContent {
  /** The language code */
  private _language: string;
  /** Contents of the handlebars template file */
  private _content: string;
  /** Contents of the the precompiled handlebars template file */
  private _precompiled?: string;
  /**
   Creates a new instance of LocalizedTemplateContent
   */
  constructor(data: Partial<LocalizedTemplateContent> = {}) {
    this._language = data.language!;
    this._content = data.content!;
    this._precompiled = data.precompiled;
  }
  /**
   The language code
   */
  get language(): string {
    return this._language;
  }
  /**
   The language code
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Contents of the handlebars template file
   */
  get content(): string {
    return this._content;
  }
  /**
   Contents of the handlebars template file
   */
  set content(value: string) {
    this._content = value;
  }
  /**
   Contents of the the precompiled handlebars template file
   */
  get precompiled(): string | undefined {
    return this._precompiled;
  }
  /**
   Contents of the the precompiled handlebars template file
   */
  set precompiled(value: string | undefined) {
    this._precompiled = value;
  }
}