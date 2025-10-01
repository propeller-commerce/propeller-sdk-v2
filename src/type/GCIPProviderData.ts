/**
 Object class for GCIPProviderData
 */
export class GCIPProviderData {
  /** uid field */
  private _uid?: string;
  /** providerId field */
  private _providerId?: string;
  /** displayName field */
  private _displayName?: string;
  /** photoUrl field */
  private _photoUrl?: string;
  /** federatedId field */
  private _federatedId?: string;
  /** email field */
  private _email?: string;
  /** rawId field */
  private _rawId?: string;
  /** screenName field */
  private _screenName?: string;
  /** phoneNumber field */
  private _phoneNumber?: string;
  /**
   Creates a new instance of GCIPProviderData
   */
  constructor(data: Partial<GCIPProviderData> = {}) {
    this._uid = data.uid;
    this._providerId = data.providerId;
    this._displayName = data.displayName;
    this._photoUrl = data.photoUrl;
    this._federatedId = data.federatedId;
    this._email = data.email;
    this._rawId = data.rawId;
    this._screenName = data.screenName;
    this._phoneNumber = data.phoneNumber;
  }
  /**
   uid field
   */
  get uid(): string | undefined {
    return this._uid;
  }
  /**
   uid field
   */
  set uid(value: string | undefined) {
    this._uid = value;
  }
  /**
   providerId field
   */
  get providerId(): string | undefined {
    return this._providerId;
  }
  /**
   providerId field
   */
  set providerId(value: string | undefined) {
    this._providerId = value;
  }
  /**
   displayName field
   */
  get displayName(): string | undefined {
    return this._displayName;
  }
  /**
   displayName field
   */
  set displayName(value: string | undefined) {
    this._displayName = value;
  }
  /**
   photoUrl field
   */
  get photoUrl(): string | undefined {
    return this._photoUrl;
  }
  /**
   photoUrl field
   */
  set photoUrl(value: string | undefined) {
    this._photoUrl = value;
  }
  /**
   federatedId field
   */
  get federatedId(): string | undefined {
    return this._federatedId;
  }
  /**
   federatedId field
   */
  set federatedId(value: string | undefined) {
    this._federatedId = value;
  }
  /**
   email field
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   email field
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   rawId field
   */
  get rawId(): string | undefined {
    return this._rawId;
  }
  /**
   rawId field
   */
  set rawId(value: string | undefined) {
    this._rawId = value;
  }
  /**
   screenName field
   */
  get screenName(): string | undefined {
    return this._screenName;
  }
  /**
   screenName field
   */
  set screenName(value: string | undefined) {
    this._screenName = value;
  }
  /**
   phoneNumber field
   */
  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }
  /**
   phoneNumber field
   */
  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }
}