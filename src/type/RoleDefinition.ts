import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedString } from './LocalizedString';
import { Role } from './Role';
/**
 Object class for RoleDefinition
 */
export class RoleDefinition {
  /** The unique identifier of the role definition */
  private _id: string | number;
  /** The domain name of the role definition */
  private _name: string;
  /** The descriptions of the role definition */
  private _descriptions: LocalizedString[];
  /** The default access for the role definition */
  private _defaultAccess: RoleAccess;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** createdBy field */
  private _createdBy?: number;
  /** lastModifiedBy field */
  private _lastModifiedBy?: number;
  /** roles field */
  private _roles: Role[];
  /**
   Creates a new instance of RoleDefinition
   */
  constructor(data: Partial<RoleDefinition> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._descriptions = data.descriptions!;
    this._defaultAccess = data.defaultAccess!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._roles = data.roles!;
  }
  /**
   The unique identifier of the role definition
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The unique identifier of the role definition
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The domain name of the role definition
   */
  get name(): string {
    return this._name;
  }
  /**
   The domain name of the role definition
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The descriptions of the role definition
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   The descriptions of the role definition
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   The default access for the role definition
   */
  get defaultAccess(): RoleAccess {
    return this._defaultAccess;
  }
  /**
   The default access for the role definition
   */
  set defaultAccess(value: RoleAccess) {
    this._defaultAccess = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   createdBy field
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   createdBy field
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   lastModifiedBy field
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   lastModifiedBy field
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   roles field
   */
  get roles(): Role[] {
    return this._roles;
  }
  /**
   roles field
   */
  set roles(value: Role[]) {
    this._roles = value;
  }
}