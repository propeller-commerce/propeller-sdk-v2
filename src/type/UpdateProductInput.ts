import { ProductStatus } from '../enum/ProductStatus';
import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for UpdateProductInput
 */
export interface UpdateProductInput {
  /** The id of the category the product should be created in */
  categoryId?: number;
  /** The names of this product per language */
  names?: LocalizedStringInput[];
  /** The descriptions of this product per language */
  descriptions?: LocalizedStringInput[];
  /** The short descriptions of this product per language */
  shortDescriptions?: LocalizedStringInput[];
  /** Additional keywords of this product per language. Added by the supplier */
  keywords?: LocalizedStringInput[];
  /** Additional keywords of this product per language. Added via the PIM */
  customKeywords?: LocalizedStringInput[];
  /** The SKU (stock keeping unit) of this product */
  sku?: string;
  /** The status of this product */
  status?: ProductStatus;
  /** The extra status of this product, commonly linked to a custom valueset */
  statusExtra?: string;
  /** The supplier of this product */
  supplier?: string;
  /** The supplier code of this product */
  supplierCode?: string;
  /** The bar code of this product */
  barCode?: string;
  /** The Original Equipment Manufacturer code (OEM) of this product */
  manufacturerCode?: string;
  /** The European Article Number (EAN) code of this product */
  eanCode?: string;
  /** The manufacturer of this product */
  manufacturer?: string;
  /** The package type of this product. i.e.: PIECE, BOX, BLISTER */
  package?: string;
  /** Description of what an item within a package looks like, i.e.: PIECE or BOX */
  packageUnit?: string;
  /** The unit in which the product can be ordered when creating a purchase order */
  purchaseUnit?: number;
  /** The minimum quantity of products that can be ordered when creating a purchase order */
  purchaseMinimumQuantity?: number;
  /** The orderable from date of this product */
  orderableFrom?: string;
  /** The orderable to date of this product */
  orderableTo?: string;
  /** The release date of this product */
  releaseDate?: string;
  /** The turnover group that classifies the product within the financial structure */
  turnoverGroup?: string;
  /** The price group the product belongs to, this field can be used for price calculations */
  priceGroup?: string;
  /** The taxonomy the product belongs to */
  taxonomy?: string;
  /** The short name for the product, used for abbreviated orderlines */
  shortName?: string;
  /** The package description of this product per language */
  packageDescriptions?: LocalizedStringInput[];
  /** Notes on the product for internal use */
  notes?: LocalizedStringInput[];
  /** The products priority, this field can be used to sort the products */
  priority?: number;
  /** [SEO] Metadata title in different languages. */
  metadataTitles?: LocalizedStringInput[];
  /** [SEO] Metadata description in different languages. */
  metadataDescriptions?: LocalizedStringInput[];
  /** [SEO] Metadata keywords in different languages. */
  metadataKeywords?: LocalizedStringInput[];
  /** [SEO] Metadata canonical urls in different languages. */
  metadataCanonicalUrls?: LocalizedStringInput[];
  /** The unit in which the product can be ordered */
  unit?: number;
  /** The minimum quantity of products that can be ordered */
  minimumQuantity?: number;
  /** The quantity that provides the best value for money for this product */
  economicOrderQuantity?: number;
  /** Is this product orderable */
  orderable?: YesNo;
  /** Is this product returnable */
  returnable?: YesNo;
  /** Is it a physical product or a service, download or warranty */
  physical?: YesNo;
  /** Number of items within the package */
  packageUnitQuantity?: string;
  /** Product hidden status */
  hidden?: YesNo;
}