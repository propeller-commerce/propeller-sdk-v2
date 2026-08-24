import { SourceInput } from './SourceInput';
import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ClusterCreateInput
 */
export interface ClusterCreateInput {
  /** names input field */
  names?: LocalizedStringInput[];
  /** descriptions input field */
  descriptions?: LocalizedStringInput[];
  /** shortDescriptions input field */
  shortDescriptions?: LocalizedStringInput[];
  /** parentId input field */
  parentId?: number;
  /** code input field */
  code?: string;
  /** clusterConfigId input field */
  clusterConfigId: number;
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
  /** Cluster hidden status, defaults to N */
  hidden: YesNo;

  /** URL-friendly identifiers, one per language, used in human-readable links. */
  slugs?: LocalizedStringInput[];
  /** Default product ID for this cluster - Sets the default cluster-product relationship */
  defaultProductId?: number;
  /** Whether to auto-generate slugs from names. When true (default), slugs are always generated for languages with names unless explicitly provided. When false, slugs are only generated for languages without existing slugs. */
  autoGenerateSlugs?: boolean;
  /** Pairs of external system names and the identifiers each system assigned to the record. */
  sources?: SourceInput[];
}