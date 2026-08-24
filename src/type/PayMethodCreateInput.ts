import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for PayMethodCreateInput
 */
export interface PayMethodCreateInput {
  /** Name per language */
  names: LocalizedStringInput[];
  /** External code (Screaming Snake Case) */
  externalCode: string;
  /** Logo url */
  logo?: string;
}