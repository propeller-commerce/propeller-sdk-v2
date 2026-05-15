/**
 Object class for ProductOffer
 */
export class ProductOffer {
  /** The id of the offer. */
  id!: string;
  /** The calculated price for this offer. */
  price!: number;
  /** validFrom field */
  validFrom!: string;
  /** validTo field */
  validTo!: string;
  /** formula field */
  formula!: string;
  constructor(data: Partial<ProductOffer> = {}) {
    Object.assign(this, data);
  }
}