import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Object class for BusinessRuleOutput
 */
export class BusinessRuleOutput implements IBusinessRuleNode {
  /** type field */
  type!: BusinessRuleNodeType;
  /** id field */
  id!: string | number;
  /** name field */
  name!: string;
  /** description field */
  description!: string;
  constructor(data: Partial<BusinessRuleOutput> = {}) {
    Object.assign(this, data);
  }

  /** Returns `type`. */
  getType(): BusinessRuleNodeType {
    return this.type;
  }
  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `description`. */
  getDescription(): string {
    return this.description;
  }
}