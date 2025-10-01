import { RoleAccess } from '../enum/RoleAccess';
import { RoleDefinition } from './RoleDefinition';
/**
 Object class for Role
 */
export class Role {
  /** The unique identifier of the role */
  private _id: string | number;
  /** The role definition for this role */
  private _roleDefinition: RoleDefinition;
  /** The id of the user this role belongs to */
  private _userId: number;
  /** The access for this role */
  private _access: RoleAccess;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** createdBy field */
  private _createdBy?: number;
  /** lastModifiedBy field */
  private _lastModifiedBy?: number;
  /**
   Creates a new instance of Role
   */
  constructor(data: Partial<Role> = {}) {
    this._id = data.id!;
    this._roleDefinition = data.roleDefinition!;
    this._userId = data.userId!;
    this._access = data.access!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
  }
  /**
   The unique identifier of the role
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The unique identifier of the role
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The role definition for this role
   */
  get roleDefinition(): RoleDefinition {
    return this._roleDefinition;
  }
  /**
   The role definition for this role
   */
  set roleDefinition(value: RoleDefinition) {
    this._roleDefinition = value;
  }
  /**
   The id of the user this role belongs to
   */
  get userId(): number {
    return this._userId;
  }
  /**
   The id of the user this role belongs to
   */
  set userId(value: number) {
    this._userId = value;
  }
  /**
   The access for this role
   */
  get access(): RoleAccess {
    return this._access;
  }
  /**
   The access for this role
   */
  set access(value: RoleAccess) {
    this._access = value;
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
}