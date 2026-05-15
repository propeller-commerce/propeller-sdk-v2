import { LocalizedString } from './LocalizedString';
/**
 Object class for BusinessRuleActionField
 */
export class BusinessRuleActionField {
  /** name field */
  name!: LocalizedString[];
  /** path field */
  path!: string;
  constructor(data: Partial<BusinessRuleActionField> = {}) {
    Object.assign(this, data);
  }

  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `path`. */
  getPath(): string {
    return this.path;
  }
}