/**
 Object class for UserClaims
 */
export class UserClaims {
  /** userId field */
  userId!: number;
  /** userDirectoryId field */
  userDirectoryId!: number;
  /** adminUserId field */
  adminUserId!: number;
  /** contactId field */
  contactId?: number;
  /** customerId field */
  customerId?: number;
  /** companyId field */
  companyId?: number;
  /** companyIds field */
  companyIds?: number[];
  /** roles field */
  roles!: string[];
  /** discounts field */
  discounts!: string[];
  /** acllist field */
  acllist!: number[];
  /** class field */
  class!: string;
  /** loginRoot field */
  loginRoot?: number;
  /** dateCreated field */
  dateCreated!: string;
  constructor(data: Partial<UserClaims> = {}) {
    Object.assign(this, data);
  }

  /** Returns `userId`. */
  getUserId(): number {
    return this.userId;
  }
  /** Returns `userDirectoryId`. */
  getUserDirectoryId(): number {
    return this.userDirectoryId;
  }
  /** Returns `adminUserId`. */
  getAdminUserId(): number {
    return this.adminUserId;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `companyIds`. */
  getCompanyIds(): number[] | undefined {
    return this.companyIds;
  }
  /** Returns `roles`. */
  getRoles(): string[] {
    return this.roles;
  }
  /** Returns `discounts`. */
  getDiscounts(): string[] {
    return this.discounts;
  }
  /** Returns `acllist`. */
  getAcllist(): number[] {
    return this.acllist;
  }
  /** Returns `class`. */
  getClass(): string {
    return this.class;
  }
  /** Returns `loginRoot`. */
  getLoginRoot(): number | undefined {
    return this.loginRoot;
  }
  /** Returns `dateCreated`. */
  getDateCreated(): string {
    return this.dateCreated;
  }
}