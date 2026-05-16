import { LocalizedString } from './LocalizedString';
/**
 Object class for PayMethod
 */
export interface PayMethod {
  /** Primary identifier */
  id: number;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Name per language */
  names: LocalizedString[];
  /** External code */
  externalCode: string;
  /** Logo url */
  logo?: string;
}