import { SourceInput } from './SourceInput';
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
  /** isRequired input field */
  isRequired?: YesNo;
  /** Cluster option hidden status, defaults to N */
  hidden: YesNo;

  /** Identifier of the product preselected as the default choice for the option. */
  defaultProductId?: number;
  /** Products that the customer can pick from for the option. */
  productIds?: number[];
  /** Pairs of external system names and the identifiers each system assigned to the cluster option. */
  sources?: SourceInput[];
}