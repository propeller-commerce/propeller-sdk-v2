import { GCIPUser } from './GCIPUser';
/**
 Object class for Login
 */
export class Login {
  /** providerId field */
  providerId?: string;
  /** operationType field */
  operationType?: string;
  /** session field */
  session?: GCIPUser;
  constructor(data: Partial<Login> = {}) {
    Object.assign(this, data);
  }

  /** Returns `providerId`. */
  getProviderId(): string | undefined {
    return this.providerId;
  }
  /** Returns `operationType`. */
  getOperationType(): string | undefined {
    return this.operationType;
  }
  /** Returns `session` as a GCIPUser instance (coerced on first access). */
  getSession(): GCIPUser | undefined {
    if (this.session == null) return undefined;
    if (!(this.session instanceof GCIPUser)) {
      this.session = new GCIPUser(this.session as any);
    }
    return this.session;
  }
}