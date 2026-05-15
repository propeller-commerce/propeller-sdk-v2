import { LocalizedString } from './LocalizedString';
/**
 Object class for PayMethod
 */
export class PayMethod {
  /** Primary identifier */
  id!: number;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Name per language */
  names!: LocalizedString[];
  /** External code */
  externalCode!: string;
  /** Logo url */
  logo?: string;
  constructor(data: Partial<PayMethod> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `externalCode`. */
  getExternalCode(): string {
    return this.externalCode;
  }
  /** Returns `logo`. */
  getLogo(): string | undefined {
    return this.logo;
  }
}