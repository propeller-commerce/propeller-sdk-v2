import { Gender } from '../enum/Gender';
/**
 Input object for CreateWarehouseAddressInput
 */
export interface CreateWarehouseAddressInput {
  /** User first name the address applies to */
  firstName?: string;
  /** User middle name the address applies to */
  middleName?: string;
  /** User last name the address applies to */
  lastName?: string;
  /** User gender the address applies to */
  gender?: Gender;
  /** User company the address applies to */
  company?: string;
  /** User street address */
  street: string;
  /** User street number */
  number?: string;
  /** User street number extension */
  numberExtension?: string;
  /** Address postal code */
  postalCode: string;
  /** Address city */
  city: string;
  /** Address region */
  region?: string;
  /** Address country */
  country: string;
  /** Address fixed phone number [min: 6, max: 30] */
  phone?: string;
  /** Address mobile number [min: 6, max: 30] */
  mobile?: string;
  /** Address email [valid email format required] */
  email?: string;
  /** Address code */
  code?: string;
  /** Address delivery notes */
  notes?: string;
}