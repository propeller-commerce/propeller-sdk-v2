import { GCIPMetadata } from './GCIPMetadata';
import { GCIPProviderData } from './GCIPProviderData';
import { MultiFactor } from './MultiFactor';
/**
 Google Cloud Identity Platform User
 */
export class GCIPUser {
  /** Unique identifier for the user, either supplied by user creation or generated */
  private _uid: string;
  /** The email address of the user */
  private _email?: string;
  /** Flags whether the email address has been verified by the user */
  private _emailVerified?: boolean;
  /** The display name of the user */
  private _displayName?: string;
  /** The user's photo URL */
  private _photoUrl?: string;
  /** The phone number of the user */
  private _phoneNumber?: string;
  /** Flags whether the user had been disabled */
  private _disabled?: boolean;
  /** Flags whether the user is an anonymous user */
  private _isAnonymous?: boolean;
  /** Metadata associated with the user */
  private _metadata?: GCIPMetadata;
  /** tokensValidAfterTime field */
  private _tokensValidAfterTime?: string;
  /** The tenant ID associated with the user */
  private _tenantId?: string;
  /** The providers associated with the user */
  private _providerData?: GCIPProviderData[];
  /** The password hash associated with the user */
  private _passwordHash?: string;
  /** The password salt associated with the user */
  private _passwordSalt?: string;
  /** The user's authentication domain */
  private _authDomain?: string;
  /** The last time the user logged in */
  private _lastLoginAt?: string;
  /** The creation time of the user */
  private _createdAt?: string;
  /** Access token for the user */
  private _accessToken: string;
  /** Refresh token for the user */
  private _refreshToken: string;
  /** The expiration time of the access token */
  private _expirationTime?: string;
  /** Multi-factor authentication details for the user */
  private _multiFactor?: MultiFactor;
  /**
   Creates a new instance of GCIPUser
   */
  constructor(data: Partial<GCIPUser> = {}) {
    this._uid = data.uid!;
    this._email = data.email;
    this._emailVerified = data.emailVerified;
    this._displayName = data.displayName;
    this._photoUrl = data.photoUrl;
    this._phoneNumber = data.phoneNumber;
    this._disabled = data.disabled;
    this._isAnonymous = data.isAnonymous;
    this._metadata = data.metadata;
    this._tokensValidAfterTime = data.tokensValidAfterTime;
    this._tenantId = data.tenantId;
    this._providerData = data.providerData;
    this._passwordHash = data.passwordHash;
    this._passwordSalt = data.passwordSalt;
    this._authDomain = data.authDomain;
    this._lastLoginAt = data.lastLoginAt;
    this._createdAt = data.createdAt;
    this._accessToken = data.accessToken!;
    this._refreshToken = data.refreshToken!;
    this._expirationTime = data.expirationTime;
    this._multiFactor = data.multiFactor;
  }
  /**
   Unique identifier for the user, either supplied by user creation or generated
   */
  get uid(): string {
    return this._uid;
  }
  /**
   Unique identifier for the user, either supplied by user creation or generated
   */
  set uid(value: string) {
    this._uid = value;
  }
  /**
   The email address of the user
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   The email address of the user
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Flags whether the email address has been verified by the user
   */
  get emailVerified(): boolean | undefined {
    return this._emailVerified;
  }
  /**
   Flags whether the email address has been verified by the user
   */
  set emailVerified(value: boolean | undefined) {
    this._emailVerified = value;
  }
  /**
   The display name of the user
   */
  get displayName(): string | undefined {
    return this._displayName;
  }
  /**
   The display name of the user
   */
  set displayName(value: string | undefined) {
    this._displayName = value;
  }
  /**
   The user's photo URL
   */
  get photoUrl(): string | undefined {
    return this._photoUrl;
  }
  /**
   The user's photo URL
   */
  set photoUrl(value: string | undefined) {
    this._photoUrl = value;
  }
  /**
   The phone number of the user
   */
  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }
  /**
   The phone number of the user
   */
  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }
  /**
   Flags whether the user had been disabled
   */
  get disabled(): boolean | undefined {
    return this._disabled;
  }
  /**
   Flags whether the user had been disabled
   */
  set disabled(value: boolean | undefined) {
    this._disabled = value;
  }
  /**
   Flags whether the user is an anonymous user
   */
  get isAnonymous(): boolean | undefined {
    return this._isAnonymous;
  }
  /**
   Flags whether the user is an anonymous user
   */
  set isAnonymous(value: boolean | undefined) {
    this._isAnonymous = value;
  }
  /**
   Metadata associated with the user
   */
  get metadata(): GCIPMetadata | undefined {
    return this._metadata;
  }
  /**
   Metadata associated with the user
   */
  set metadata(value: GCIPMetadata | undefined) {
    this._metadata = value;
  }
  /**
   tokensValidAfterTime field
   */
  get tokensValidAfterTime(): string | undefined {
    return this._tokensValidAfterTime;
  }
  /**
   tokensValidAfterTime field
   */
  set tokensValidAfterTime(value: string | undefined) {
    this._tokensValidAfterTime = value;
  }
  /**
   The tenant ID associated with the user
   */
  get tenantId(): string | undefined {
    return this._tenantId;
  }
  /**
   The tenant ID associated with the user
   */
  set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  /**
   The providers associated with the user
   */
  get providerData(): GCIPProviderData[] | undefined {
    return this._providerData;
  }
  /**
   The providers associated with the user
   */
  set providerData(value: GCIPProviderData[] | undefined) {
    this._providerData = value;
  }
  /**
   The password hash associated with the user
   */
  get passwordHash(): string | undefined {
    return this._passwordHash;
  }
  /**
   The password hash associated with the user
   */
  set passwordHash(value: string | undefined) {
    this._passwordHash = value;
  }
  /**
   The password salt associated with the user
   */
  get passwordSalt(): string | undefined {
    return this._passwordSalt;
  }
  /**
   The password salt associated with the user
   */
  set passwordSalt(value: string | undefined) {
    this._passwordSalt = value;
  }
  /**
   The user's authentication domain
   */
  get authDomain(): string | undefined {
    return this._authDomain;
  }
  /**
   The user's authentication domain
   */
  set authDomain(value: string | undefined) {
    this._authDomain = value;
  }
  /**
   The last time the user logged in
   */
  get lastLoginAt(): string | undefined {
    return this._lastLoginAt;
  }
  /**
   The last time the user logged in
   */
  set lastLoginAt(value: string | undefined) {
    this._lastLoginAt = value;
  }
  /**
   The creation time of the user
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   The creation time of the user
   */
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }
  /**
   Access token for the user
   */
  get accessToken(): string {
    return this._accessToken;
  }
  /**
   Access token for the user
   */
  set accessToken(value: string) {
    this._accessToken = value;
  }
  /**
   Refresh token for the user
   */
  get refreshToken(): string {
    return this._refreshToken;
  }
  /**
   Refresh token for the user
   */
  set refreshToken(value: string) {
    this._refreshToken = value;
  }
  /**
   The expiration time of the access token
   */
  get expirationTime(): string | undefined {
    return this._expirationTime;
  }
  /**
   The expiration time of the access token
   */
  set expirationTime(value: string | undefined) {
    this._expirationTime = value;
  }
  /**
   Multi-factor authentication details for the user
   */
  get multiFactor(): MultiFactor | undefined {
    return this._multiFactor;
  }
  /**
   Multi-factor authentication details for the user
   */
  set multiFactor(value: MultiFactor | undefined) {
    this._multiFactor = value;
  }
}