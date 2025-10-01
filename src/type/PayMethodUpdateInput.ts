import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for PayMethodUpdateInput
 */
export interface PayMethodUpdateInput {
  /** Name per language */
  names?: LocalizedStringInput[];
  /** External code (Screaming Snake Case) */
  externalCode?: string;
  /** Logo url */
  logo?: string;
}