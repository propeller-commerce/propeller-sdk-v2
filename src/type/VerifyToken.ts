import { Firebase } from './Firebase';
/**
 Object class for VerifyToken
 */
export class VerifyToken {
  /** uid field */
  uid!: string;
  /** name field */
  name!: string;
  /** claims field */
  claims?: any;
  /** iss field */
  iss!: string;
  /** aud field */
  aud!: string;
  /** auth_time field */
  auth_time!: number;
  /** user_id field */
  user_id!: string;
  /** sub field */
  sub!: string;
  /** iat field */
  iat!: number;
  /** exp field */
  exp!: number;
  /** email field */
  email!: string;
  /** email_verified field */
  email_verified!: boolean;
  /** firebase field */
  firebase?: Firebase;
  constructor(data: Partial<VerifyToken> = {}) {
    Object.assign(this, data);
  }

  /** Returns `uid`. */
  getUid(): string {
    return this.uid;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `claims`. */
  getClaims(): any | undefined {
    return this.claims;
  }
  /** Returns `iss`. */
  getIss(): string {
    return this.iss;
  }
  /** Returns `aud`. */
  getAud(): string {
    return this.aud;
  }
  /** Returns `auth_time`. */
  getAuth_time(): number {
    return this.auth_time;
  }
  /** Returns `user_id`. */
  getUser_id(): string {
    return this.user_id;
  }
  /** Returns `sub`. */
  getSub(): string {
    return this.sub;
  }
  /** Returns `iat`. */
  getIat(): number {
    return this.iat;
  }
  /** Returns `exp`. */
  getExp(): number {
    return this.exp;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `email_verified`. */
  getEmail_verified(): boolean {
    return this.email_verified;
  }
  /** Returns `firebase` as a Firebase instance (coerced on first access). */
  getFirebase(): Firebase | undefined {
    if (this.firebase == null) return undefined;
    if (!(this.firebase instanceof Firebase)) {
      this.firebase = new Firebase(this.firebase as any);
    }
    return this.firebase;
  }
}