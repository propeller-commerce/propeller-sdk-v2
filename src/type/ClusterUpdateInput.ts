import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ClusterUpdateInput
 */
export interface ClusterUpdateInput {
  /** names input field */
  names?: LocalizedStringInput[];
  /** descriptions input field */
  descriptions?: LocalizedStringInput[];
  /** shortDescriptions input field */
  shortDescriptions?: LocalizedStringInput[];
  /** defaultLanguage input field */
  defaultLanguage?: string;
  /** parentId input field */
  parentId?: number;
  /** code input field */
  code?: string;
  /** clusterConfigId input field */
  clusterConfigId?: number;
  /** priority input field */
  priority?: number;
  /** [SEO] Metadata title in different languages. */
  metadataTitles?: LocalizedStringInput[];
  /** [SEO] Metadata description in different languages. */
  metadataDescriptions?: LocalizedStringInput[];
  /** [SEO] Metadata keywords in different languages. */
  metadataKeywords?: LocalizedStringInput[];
  /** [SEO] Metadata canonical urls in different languages. */
  metadataCanonicalUrls?: LocalizedStringInput[];
  /** defaultProductId input field */
  defaultProductId?: number;
  /** Cluster hidden status */
  hidden?: YesNo;
}