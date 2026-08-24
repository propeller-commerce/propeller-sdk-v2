/**
 Input object for CartPaymentDataInput
 */
export interface CartPaymentDataInput {
  /** Selected paymethod for this cart. */
  method?: string;
  /** Status of the payment */
  status?: string;
  /** Transaction cost excluding VAT based on external payment calculation. If value is set, payment priceMode is set to 'EXTERNAL' for this cart. */
  price?: number;
}