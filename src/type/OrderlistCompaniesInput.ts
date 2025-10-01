import { SourceInput } from './SourceInput';
/**
 Input object for OrderlistCompaniesInput
 */
export interface OrderlistCompaniesInput {
  /** List of company ids */
  companyIds: number[];
  /** List of company sources */
  companySources?: SourceInput[];
}