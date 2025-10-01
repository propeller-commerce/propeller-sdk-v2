import { GCIPUser } from './GCIPUser';
/**
 Object class for Login
 */
export class Login {
  /** providerId field */
  private _providerId?: string;
  /** operationType field */
  private _operationType?: string;
  /** session field */
  private _session?: GCIPUser;
  /**
   Creates a new instance of Login
   */
  constructor(data: Partial<Login> = {}) {
    this._providerId = data.providerId;
    this._operationType = data.operationType;
    this._session = data.session;
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
   operationType field
   */
  get operationType(): string | undefined {
    return this._operationType;
  }
  /**
   operationType field
   */
  set operationType(value: string | undefined) {
    this._operationType = value;
  }
  /**
   session field
   */
  get session(): GCIPUser | undefined {
    return this._session;
  }
  /**
   session field
   */
  set session(value: GCIPUser | undefined) {
    this._session = value;
  }
}