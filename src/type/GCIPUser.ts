import { GCIPMetadata } from './GCIPMetadata';
import { GCIPProviderData } from './GCIPProviderData';
import { MultiFactor } from './MultiFactor';
/**
 Google Cloud Identity Platform User
 */
export class GCIPUser {
  /** Unique identifier for the user, either supplied by user creation or generated */
  uid!: string;
  /** The email address of the user */
  email?: string;
  /** Flags whether the email address has been verified by the user */
  emailVerified?: boolean;
  /** The display name of the user */
  displayName?: string;
  /** The user's photo URL */
  photoUrl?: string;
  /** The phone number of the user */
  phoneNumber?: string;
  /** Flags whether the user had been disabled */
  disabled?: boolean;
  /** Flags whether the user is an anonymous user */
  isAnonymous?: boolean;
  /** Metadata associated with the user */
  metadata?: GCIPMetadata;
  /** tokensValidAfterTime field */
  tokensValidAfterTime?: string;
  /** The tenant ID associated with the user */
  tenantId?: string;
  /** The providers associated with the user */
  providerData?: GCIPProviderData[];
  /** The password hash associated with the user */
  passwordHash?: string;
  /** The password salt associated with the user */
  passwordSalt?: string;
  /** The user's authentication domain */
  authDomain?: string;
  /** The last time the user logged in */
  lastLoginAt?: string;
  /** The creation time of the user */
  createdAt?: string;
  /** Access token for the user */
  accessToken!: string;
  /** Refresh token for the user */
  refreshToken!: string;
  /** The expiration time of the access token */
  expirationTime?: string;
  /** Multi-factor authentication details for the user */
  multiFactor?: MultiFactor;
  constructor(data: Partial<GCIPUser> = {}) {
    Object.assign(this, data);
  }

  /** Returns `uid`. */
  getUid(): string {
    return this.uid;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `emailVerified`. */
  getEmailVerified(): boolean | undefined {
    return this.emailVerified;
  }
  /** Returns `displayName`. */
  getDisplayName(): string | undefined {
    return this.displayName;
  }
  /** Returns `photoUrl`. */
  getPhotoUrl(): string | undefined {
    return this.photoUrl;
  }
  /** Returns `phoneNumber`. */
  getPhoneNumber(): string | undefined {
    return this.phoneNumber;
  }
  /** Returns `disabled`. */
  getDisabled(): boolean | undefined {
    return this.disabled;
  }
  /** Returns `isAnonymous`. */
  getIsAnonymous(): boolean | undefined {
    return this.isAnonymous;
  }
  /** Returns `metadata` as a GCIPMetadata instance (coerced on first access). */
  getMetadata(): GCIPMetadata | undefined {
    if (this.metadata == null) return undefined;
    if (!(this.metadata instanceof GCIPMetadata)) {
      this.metadata = new GCIPMetadata(this.metadata as any);
    }
    return this.metadata;
  }
  /** Returns `tokensValidAfterTime`. */
  getTokensValidAfterTime(): string | undefined {
    return this.tokensValidAfterTime;
  }
  /** Returns `tenantId`. */
  getTenantId(): string | undefined {
    return this.tenantId;
  }
  /** Returns `providerData` as GCIPProviderData instances (coerced on first access). */
  getProviderData(): GCIPProviderData[] | undefined {
    if (!this.providerData) return undefined;
    this.providerData = this.providerData.map((x: any) => x instanceof GCIPProviderData ? x : new GCIPProviderData(x));
    return this.providerData;
  }
  /** Returns `passwordHash`. */
  getPasswordHash(): string | undefined {
    return this.passwordHash;
  }
  /** Returns `passwordSalt`. */
  getPasswordSalt(): string | undefined {
    return this.passwordSalt;
  }
  /** Returns `authDomain`. */
  getAuthDomain(): string | undefined {
    return this.authDomain;
  }
  /** Returns `lastLoginAt`. */
  getLastLoginAt(): string | undefined {
    return this.lastLoginAt;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `accessToken`. */
  getAccessToken(): string {
    return this.accessToken;
  }
  /** Returns `refreshToken`. */
  getRefreshToken(): string {
    return this.refreshToken;
  }
  /** Returns `expirationTime`. */
  getExpirationTime(): string | undefined {
    return this.expirationTime;
  }
  /** Returns `multiFactor` as a MultiFactor instance (coerced on first access). */
  getMultiFactor(): MultiFactor | undefined {
    if (this.multiFactor == null) return undefined;
    if (!(this.multiFactor instanceof MultiFactor)) {
      this.multiFactor = new MultiFactor(this.multiFactor as any);
    }
    return this.multiFactor;
  }
}