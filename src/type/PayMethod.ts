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
}