import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleActionField } from './BusinessRuleActionField';
/**
 Represents a business rule field definition
 */
export class BusinessRuleFieldDefinition {
  /** The ID for this field definition */
  id!: string | number;
  /** The descriptive name of the field */
  name!: LocalizedString[];
  /** The expected path to the field in the input payload */
  path!: string;
  /** The expected type of the field */
  type!: BusinessRuleExpressionTypes;
  /** The actionable sub-fields when the type is 'complex' */
  fields?: BusinessRuleActionField[];
  /** The potential sub-fields when the type is 'complex' */
  expressions?: BusinessRuleFieldDefinition[];
  constructor(data: Partial<BusinessRuleFieldDefinition> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `path`. */
  getPath(): string {
    return this.path;
  }
  /** Returns `type`. */
  getType(): BusinessRuleExpressionTypes {
    return this.type;
  }
  /** Returns `fields` as BusinessRuleActionField instances (coerced on first access). */
  getFields(): BusinessRuleActionField[] | undefined {
    if (!this.fields) return undefined;
    this.fields = this.fields.map((x: any) => x instanceof BusinessRuleActionField ? x : new BusinessRuleActionField(x));
    return this.fields;
  }
  /** Returns `expressions` as BusinessRuleFieldDefinition instances (coerced on first access). */
  getExpressions(): BusinessRuleFieldDefinition[] | undefined {
    if (!this.expressions) return undefined;
    this.expressions = this.expressions.map((x: any) => x instanceof BusinessRuleFieldDefinition ? x : new BusinessRuleFieldDefinition(x));
    return this.expressions;
  }
}