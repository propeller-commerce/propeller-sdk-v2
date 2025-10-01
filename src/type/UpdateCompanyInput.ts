/**
 Input object for UpdateCompanyInput
 */
export interface UpdateCompanyInput {
  /** name input field */
  name?: string;
  /** taxNumber input field */
  taxNumber?: string;
  /** cocNumber input field */
  cocNumber?: string;
  /** debtorId input field */
  debtorId?: string;
  /** email input field */
  email?: string;
  /** phone input field */
  phone?: string;
  /** notes input field */
  notes?: string;
  /** The id of the usergroup the company should be created in. */
  parentId?: number;
}