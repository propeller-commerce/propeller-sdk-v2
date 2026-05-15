import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Object class for ClusterOption
 */
export class ClusterOption {
  /** id field */
  id!: number;
  /** The classID of the cluster that represents this cluster */
  clusterOptionId!: number;
  /** Indicates whether an option is required or not */
  isRequired?: YesNo;
  /** Indicates whether an option is hidden or not */
  hidden?: YesNo;
  /** defaultProduct field */
  defaultProduct?: Product;
  /** products field */
  products?: Product[];
  /** names field */
  names!: LocalizedString[];
  /** descriptions field */
  descriptions!: LocalizedString[];
  /** shortDescriptions field */
  shortDescriptions!: LocalizedString[];
  constructor(data: Partial<ClusterOption> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `clusterOptionId`. */
  getClusterOptionId(): number {
    return this.clusterOptionId;
  }
  /** Returns `isRequired`. */
  getIsRequired(): YesNo | undefined {
    return this.isRequired;
  }
  /** Returns `hidden`. */
  getHidden(): YesNo | undefined {
    return this.hidden;
  }
  /** Returns `defaultProduct` as a Product instance (coerced on first access). */
  getDefaultProduct(): Product | undefined {
    if (this.defaultProduct == null) return undefined;
    if (!(this.defaultProduct instanceof Product)) {
      this.defaultProduct = new Product(this.defaultProduct as any);
    }
    return this.defaultProduct;
  }
  /** Returns `products` as Product instances (coerced on first access). */
  getProducts(): Product[] | undefined {
    if (!this.products) return undefined;
    this.products = this.products.map((x: any) => x instanceof Product ? x : new Product(x));
    return this.products;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the shortDescription for the given language, falling back to NL. */
  getShortDescription(language: string = 'NL'): string | undefined {
    const arr = this.shortDescriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
}