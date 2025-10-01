import { OrderlistType } from '../enum/OrderlistType';
import { YesNo } from '../enum/YesNo';
import { SourceInput } from './SourceInput';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for OrderlistUpdateInput
 */
export interface OrderlistUpdateInput {
  /** List of product ids */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** List of cluster ids */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
  /** Orderlist type! One of: [POSITIVE, NEGATIVE] */
  type?: OrderlistType;
  /** Orderlist descriptions per language */
  descriptions?: LocalizedStringInput[];
  /** Extra field per language */
  extras?: LocalizedStringInput[];
  /** Orderlist code */
  code?: string;
  /** Valid from (Display only) */
  validFrom?: string;
  /** Valid to (Display only) */
  validTo?: string;
  /** List of user ids */
  userIds?: number[];
  /** List of user sources */
  userSources?: SourceInput[];
  /** Partner entity */
  partnerEntity?: string;
  /** Shows if the orderlist is active */
  active?: YesNo;
  /** List of company ids */
  companyIds?: number[];
  /** List of company sources */
  companySources?: SourceInput[];
}