import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for EmailSenderInput
 */
export interface EmailSenderInput {
  /** Email address of the contact */
  email?: string;
  /** Name of the contact */
  names?: LocalizedStringInput[];
}