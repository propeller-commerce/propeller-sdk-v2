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

  /** Returns `uid`. */
  getUid(): string | undefined {
    return this.uid;
  }
  /** Returns `providerId`. */
  getProviderId(): string | undefined {
    return this.providerId;
  }
  /** Returns `displayName`. */
  getDisplayName(): string | undefined {
    return this.displayName;
  }
  /** Returns `photoUrl`. */
  getPhotoUrl(): string | undefined {
    return this.photoUrl;
  }
  /** Returns `federatedId`. */
  getFederatedId(): string | undefined {
    return this.federatedId;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `rawId`. */
  getRawId(): string | undefined {
    return this.rawId;
  }
  /** Returns `screenName`. */
  getScreenName(): string | undefined {
    return this.screenName;
  }
  /** Returns `phoneNumber`. */
  getPhoneNumber(): string | undefined {
    return this.phoneNumber;
  }
}