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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `isRoot`. */
  getIsRoot(): boolean {
    return this.isRoot;
  }
  /** Returns `definitions` as BusinessRuleFieldDefinition instances (coerced on first access). */
  getDefinitions(): BusinessRuleFieldDefinition[] {
    if (!this.definitions) return [];
    this.definitions = this.definitions.map((x: any) => x instanceof BusinessRuleFieldDefinition ? x : new BusinessRuleFieldDefinition(x));
    return this.definitions;
  }
}