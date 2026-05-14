/**
 Object class for ProductOffer
 */
export interface ProductOffer {
  /** The id of the offer. */
  id: string;
  /** The calculated price for this offer. */
  price: number;
  /** validFrom field */
  validFrom: string;
  /** validTo field */
  validTo: string;
  /** formula field */
  formula: string;
}