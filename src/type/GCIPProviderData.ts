/**
 Object class for GCIPProviderData
 */
export class GCIPProviderData {
  /** uid field */
  uid?: string;
  /** providerId field */
  providerId?: string;
  /** displayName field */
  displayName?: string;
  /** photoUrl field */
  photoUrl?: string;
  /** federatedId field */
  federatedId?: string;
  /** email field */
  email?: string;
  /** rawId field */
  rawId?: string;
  /** screenName field */
  screenName?: string;
  /** phoneNumber field */
  phoneNumber?: string;
  constructor(data: Partial<GCIPProviderData> = {}) {
    Object.assign(this, data);
  }
}