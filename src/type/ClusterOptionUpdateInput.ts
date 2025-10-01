import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ClusterOptionUpdateInput
 */
export interface ClusterOptionUpdateInput {
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
  /** defaultProductId input field */
  defaultProductId?: number;
  /** Cluster option hidden status */
  hidden?: YesNo;
}