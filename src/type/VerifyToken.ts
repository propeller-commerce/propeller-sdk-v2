import { Firebase } from './Firebase';
/**
 Object class for VerifyToken
 */
export class VerifyToken {
  /** uid field */
  private _uid: string;
  /** name field */
  private _name: string;
  /** claims field */
  private _claims?: any;
  /** iss field */
  private _iss: string;
  /** aud field */
  private _aud: string;
  /** auth_time field */
  private _auth_time: number;
  /** user_id field */
  private _user_id: string;
  /** sub field */
  private _sub: string;
  /** iat field */
  private _iat: number;
  /** exp field */
  private _exp: number;
  /** email field */
  private _email: string;
  /** email_verified field */
  private _email_verified: boolean;
  /** firebase field */
  private _firebase?: Firebase;
  /**
   Creates a new instance of VerifyToken
   */
  constructor(data: Partial<VerifyToken> = {}) {
    this._uid = data.uid!;
    this._name = data.name!;
    this._claims = data.claims;
    this._iss = data.iss!;
    this._aud = data.aud!;
    this._auth_time = data.auth_time!;
    this._user_id = data.user_id!;
    this._sub = data.sub!;
    this._iat = data.iat!;
    this._exp = data.exp!;
    this._email = data.email!;
    this._email_verified = data.email_verified!;
    this._firebase = data.firebase;
  }
  /**
   uid field
   */
  get uid(): string {
    return this._uid;
  }
  /**
   uid field
   */
  set uid(value: string) {
    this._uid = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   claims field
   */
  get claims(): any | undefined {
    return this._claims;
  }
  /**
   claims field
   */
  set claims(value: any | undefined) {
    this._claims = value;
  }
  /**
   iss field
   */
  get iss(): string {
    return this._iss;
  }
  /**
   iss field
   */
  set iss(value: string) {
    this._iss = value;
  }
  /**
   aud field
   */
  get aud(): string {
    return this._aud;
  }
  /**
   aud field
   */
  set aud(value: string) {
    this._aud = value;
  }
  /**
   auth_time field
   */
  get auth_time(): number {
    return this._auth_time;
  }
  /**
   auth_time field
   */
  set auth_time(value: number) {
    this._auth_time = value;
  }
  /**
   user_id field
   */
  get user_id(): string {
    return this._user_id;
  }
  /**
   user_id field
   */
  set user_id(value: string) {
    this._user_id = value;
  }
  /**
   sub field
   */
  get sub(): string {
    return this._sub;
  }
  /**
   sub field
   */
  set sub(value: string) {
    this._sub = value;
  }
  /**
   iat field
   */
  get iat(): number {
    return this._iat;
  }
  /**
   iat field
   */
  set iat(value: number) {
    this._iat = value;
  }
  /**
   exp field
   */
  get exp(): number {
    return this._exp;
  }
  /**
   exp field
   */
  set exp(value: number) {
    this._exp = value;
  }
  /**
   email field
   */
  get email(): string {
    return this._email;
  }
  /**
   email field
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   email_verified field
   */
  get email_verified(): boolean {
    return this._email_verified;
  }
  /**
   email_verified field
   */
  set email_verified(value: boolean) {
    this._email_verified = value;
  }
  /**
   firebase field
   */
  get firebase(): Firebase | undefined {
    return this._firebase;
  }
  /**
   firebase field
   */
  set firebase(value: Firebase | undefined) {
    this._firebase = value;
  }
}