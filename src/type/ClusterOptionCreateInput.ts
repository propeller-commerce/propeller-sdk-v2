import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ClusterOptionCreateInput
 */
export interface ClusterOptionCreateInput {
  /** names input field */
  names?: LocalizedStringInput[];
  /** descriptions input field */
  descriptions?: LocalizedStringInput[];
  /** shortDescriptions input field */
  shortDescriptions?: LocalizedStringInput[];
  /** defaultLanguage input field */
  defaultLanguage?: string;
  /** isRequired input field */
  isRequired?: YesNo;
  /** Cluster option hidden status, defaults to N */
  hidden: YesNo;
}