import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
/**
 Represents a business rule field definition group
 */
export class BusinessRuleFieldDefinitionGroup {
  /** The ID of the business rule field definition group */
  id!: string | number;
  /** The name of the business rule field definition group */
  name!: string;
  /** Indicates whether the business rule field definition group is a root group or not */
  isRoot!: boolean;
  /** The business rule field definitions in the business rule field definition group */
  definitions!: BusinessRuleFieldDefinition[];
  constructor(data: Partial<BusinessRuleFieldDefinitionGroup> = {}) {
    Object.assign(this, data);
  }
}