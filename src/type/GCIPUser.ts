import { GCIPMetadata } from './GCIPMetadata';
import { GCIPProviderData } from './GCIPProviderData';
import { MultiFactor } from './MultiFactor';
/**
 Google Cloud Identity Platform User
 */
export interface GCIPUser {
  /** Unique identifier for the user, either supplied by user creation or generated */
  uid: string;
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
  accessToken: string;
  /** Refresh token for the user */
  refreshToken: string;
  /** The expiration time of the access token */
  expirationTime?: string;
  /** Multi-factor authentication details for the user */
  multiFactor?: MultiFactor;
}