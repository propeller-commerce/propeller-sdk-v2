import { Taxcode } from '../enum/Taxcode';
/**
 Object class for Tax
 */
export class Tax {
  /** Tax primary identifier */
  id!: string;
  /** Shop identifier for the tax to apply to */
  /** @deprecated Shop is deprecated and will be removed in the future. */
  shopId!: number;
  /** Tax code */
  code?: Taxcode;
  /** Tax zone */
  zone!: string;
  /** Tax percentage  */
  percentage?: number;
  /** Tax export code */
  exportCode?: string;
  /** Tax initial creation timestamp */
  createdAt!: string;
  /** Reference to the user that created the tax initially */
  createdBy?: number;
  /** Tax last update timestamp */
  lastModifiedAt!: string;
  /** Reference to the user that last modified the tax */
  lastModifiedBy?: number;
  constructor(data: Partial<Tax> = {}) {
    Object.assign(this, data);
  }
}