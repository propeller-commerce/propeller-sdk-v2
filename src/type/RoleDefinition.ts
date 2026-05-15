import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedString } from './LocalizedString';
import { Role } from './Role';
/**
 Object class for RoleDefinition
 */
export class RoleDefinition {
  /** The unique identifier of the role definition */
  id!: string | number;
  /** The domain name of the role definition */
  name!: string;
  /** The descriptions of the role definition */
  descriptions!: LocalizedString[];
  /** The default access for the role definition */
  defaultAccess!: RoleAccess;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** createdBy field */
  createdBy?: number;
  /** lastModifiedBy field */
  lastModifiedBy?: number;
  /** roles field */
  roles!: Role[];
  constructor(data: Partial<RoleDefinition> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `defaultAccess`. */
  getDefaultAccess(): RoleAccess {
    return this.defaultAccess;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `roles` as Role instances (coerced on first access). */
  getRoles(): Role[] {
    if (!this.roles) return [];
    this.roles = this.roles.map((x: any) => x instanceof Role ? x : new Role(x));
    return this.roles;
  }
}