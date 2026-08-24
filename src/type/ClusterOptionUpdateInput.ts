import { SourceInput } from './SourceInput';
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
  /** isRequired input field */
  isRequired?: YesNo;
  /** defaultProductId input field */
  defaultProductId?: number;
  /** Cluster option hidden status */
  hidden?: YesNo;

  /** IDs of products available for this cluster option */
  productIds?: number[];
  /** Source/SourceId combinations for external system lookup */
  sources?: SourceInput[];
}