import { TaxCode } from '../enum/TaxCode';
/**
 Object class for Tax
 */
export interface Tax {
  /** Tax primary identifier */
  id: string;
  /** Tax code */
  code?: TaxCode;
  /** Tax zone */
  zone: string;
  /** Tax percentage  */
  percentage?: number;
  /** Tax export code */
  exportCode?: string;
  /** Tax initial creation timestamp */
  createdAt: string;
  /** Reference to the user that created the tax initially */
  createdBy?: number;
  /** Tax last update timestamp */
  lastModifiedAt: string;
  /** Reference to the user that last modified the tax */
  lastModifiedBy?: number;
}