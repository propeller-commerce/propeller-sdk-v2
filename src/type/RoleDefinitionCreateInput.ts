import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for RoleDefinitionCreateInput
 */
export interface RoleDefinitionCreateInput {
  /** Role definition name */
  name: string;
  /** Role definition description */
  descriptions: LocalizedStringInput[];
  /** The access for this role-definition */
  defaultAccess: RoleAccess;
}