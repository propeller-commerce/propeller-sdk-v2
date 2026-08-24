import { CompanyTermFieldName } from '../enum/CompanyTermFieldName';
/**
 Input object for CompanyTermFieldInput
 */
export interface CompanyTermFieldInput {
  /** List of available fields */
  fieldNames: CompanyTermFieldName[];
  /** Search boost value */
  boost?: number;
}