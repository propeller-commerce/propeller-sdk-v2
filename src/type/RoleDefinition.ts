import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedString } from './LocalizedString';
import { Role } from './Role';
/**
 Object class for RoleDefinition
 */
export interface RoleDefinition {
  /** The unique identifier of the role definition */
  id: string | number;
  /** The domain name of the role definition */
  name: string;
  /** The descriptions of the role definition */
  descriptions: LocalizedString[];
  /** The default access for the role definition */
  defaultAccess: RoleAccess;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** createdBy field */
  createdBy?: number;
  /** lastModifiedBy field */
  lastModifiedBy?: number;
  /** roles field */
  roles: Role[];
}