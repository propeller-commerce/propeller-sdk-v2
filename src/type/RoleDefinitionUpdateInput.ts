import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for RoleDefinitionUpdateInput
 */
export interface RoleDefinitionUpdateInput {
  /** Role definition name */
  name: string;
  /** Role definition descriptionRole definition description */
  descriptions: LocalizedStringInput[];
  /** The access for this role definition */
  defaultAccess: RoleAccess;
}