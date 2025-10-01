import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Input for updating an existing customer
 */
export interface UpdateCustomerInput {
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
  /** phone input field */
  phone?: string;
  /** mobile input field */
  mobile?: string;
  /** dateOfBirth input field */
  dateOfBirth?: string;
  /** mailingList input field */
  mailingList?: YesNo;
  /** The primary language of the customer. */
  primaryLanguage?: string;
  /** The id of the usergroup the customer should be created in. */
  parentId?: number;
}