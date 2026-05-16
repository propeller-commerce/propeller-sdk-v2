/**
 Object class for LocalizedTemplateContent
 */
export interface LocalizedTemplateContent {
  /** The language code */
  language: string;
  /** Contents of the handlebars template file */
  content: string;
  /** Contents of the the precompiled handlebars template file */
  precompiled?: string;
}