import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Input object for CreateContactInput
 */
export interface CreateContactInput {
  /** firstName input field */
  firstName?: string;
  /** middleName input field */
  middleName?: string;
  /** lastName input field */
  lastName?: string;
  /** gender input field */
  gender?: Gender;
  /** email input field */
  email?: string;
  /** homepage input field */
  homepage?: string;
  /** phone input field */
  phone?: string;
  /** mobile input field */
  mobile?: string;
  /** dateOfBirth input field */
  dateOfBirth?: string;
  /** mailingList input field */
  mailingList?: YesNo;
  /** The primary language of the contact. */
  primaryLanguage?: string;
  /** The debtor id of the contact. Deprecated in favor of company debtorId */
  debtorId?: string;
  /** The id of the company the contact should be created in. */
  parentId: number;
}