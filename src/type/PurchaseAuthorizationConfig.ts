import { PurchaseRole } from '../enum/PurchaseRole';
import { Company } from './Company';
import { Contact } from './Contact';
/**
 Object class for PurchaseAuthorizationConfig
 */
export class PurchaseAuthorizationConfig {
  /** The primary ID of the purchase authorization config, uuid v7 format */
  private _id: string;
  /** The purchase role of the contact within the company. Defaults to PURCHASER */
  private _purchaseRole: PurchaseRole;
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  private _authorizationLimit?: number;
  /** The creation date of this PurchaseAuthorizationConfig */
  private _createdAt: string;
  /** The last modified date of this PurchaseAuthorizationConfig */
  private _lastModifiedAt: string;
  /** The company the purchase authorization config is valid for */
  private _company?: Company;
  /** The contact the purchase authorization config is valid for */
  private _contact?: Contact;
  /**
   Creates a new instance of PurchaseAuthorizationConfig
   */
  constructor(data: Partial<PurchaseAuthorizationConfig> = {}) {
    this._id = data.id!;
    this._purchaseRole = data.purchaseRole!;
    this._authorizationLimit = data.authorizationLimit;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._company = data.company;
    this._contact = data.contact;
  }
  /**
   The primary ID of the purchase authorization config, uuid v7 format
   */
  get id(): string {
    return this._id;
  }
  /**
   The primary ID of the purchase authorization config, uuid v7 format
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   The purchase role of the contact within the company. Defaults to PURCHASER
   */
  get purchaseRole(): PurchaseRole {
    return this._purchaseRole;
  }
  /**
   The purchase role of the contact within the company. Defaults to PURCHASER
   */
  set purchaseRole(value: PurchaseRole) {
    this._purchaseRole = value;
  }
  /**
   The purchaser's authorization limit i.e. maximum amount that can be spent per order
   */
  get authorizationLimit(): number | undefined {
    return this._authorizationLimit;
  }
  /**
   The purchaser's authorization limit i.e. maximum amount that can be spent per order
   */
  set authorizationLimit(value: number | undefined) {
    this._authorizationLimit = value;
  }
  /**
   The creation date of this PurchaseAuthorizationConfig
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The creation date of this PurchaseAuthorizationConfig
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The last modified date of this PurchaseAuthorizationConfig
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The last modified date of this PurchaseAuthorizationConfig
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   The company the purchase authorization config is valid for
   */
  get company(): Company | undefined {
    return this._company;
  }
  /**
   The company the purchase authorization config is valid for
   */
  set company(value: Company | undefined) {
    this._company = value;
  }
  /**
   The contact the purchase authorization config is valid for
   */
  get contact(): Contact | undefined {
    return this._contact;
  }
  /**
   The contact the purchase authorization config is valid for
   */
  set contact(value: Contact | undefined) {
    this._contact = value;
  }
}