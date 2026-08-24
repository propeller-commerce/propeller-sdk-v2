/**
 Object class for UserClaims
 */
export interface UserClaims {
  /** userId field */
  userId: number;
  /** userDirectoryId field */
  userDirectoryId: number;
  /** adminUserId field */
  adminUserId: number;
  /** contactId field */
  contactId?: number;
  /** customerId field */
  customerId?: number;
  /** companyId field */
  companyId?: number;
  /** companyIds field */
  companyIds?: number[];
  /** roles field */
  roles: string[];
  /** discounts field */
  discounts: string[];
  /** acllist field */
  acllist: number[];
  /** class field */
  class: string;
  /** loginRoot field */
  loginRoot?: number;
  /** dateCreated field */
  dateCreated: string;
}