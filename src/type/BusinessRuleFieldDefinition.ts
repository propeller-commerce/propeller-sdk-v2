import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleActionField } from './BusinessRuleActionField';
/**
 Represents a business rule field definition
 */
export class BusinessRuleFieldDefinition {
  /** The ID for this field definition */
  private _id: string | number;
  /** The descriptive name of the field */
  private _name: LocalizedString[];
  /** The expected path to the field in the input payload */
  private _path: string;
  /** The expected type of the field */
  private _type: BusinessRuleExpressionTypes;
  /** The actionable sub-fields when the type is 'complex' */
  private _fields?: BusinessRuleActionField[];
  /** The potential sub-fields when the type is 'complex' */
  private _expressions?: BusinessRuleFieldDefinition[];
  /**
   Creates a new instance of BusinessRuleFieldDefinition
   */
  constructor(data: Partial<BusinessRuleFieldDefinition> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._path = data.path!;
    this._type = data.type!;
    this._fields = data.fields;
    this._expressions = data.expressions;
  }
  /**
   The ID for this field definition
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The ID for this field definition
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The descriptive name of the field
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   The descriptive name of the field
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   The expected path to the field in the input payload
   */
  get path(): string {
    return this._path;
  }
  /**
   The expected path to the field in the input payload
   */
  set path(value: string) {
    this._path = value;
  }
  /**
   The expected type of the field
   */
  get type(): BusinessRuleExpressionTypes {
    return this._type;
  }
  /**
   The expected type of the field
   */
  set type(value: BusinessRuleExpressionTypes) {
    this._type = value;
  }
  /**
   The actionable sub-fields when the type is 'complex'
   */
  get fields(): BusinessRuleActionField[] | undefined {
    return this._fields;
  }
  /**
   The actionable sub-fields when the type is 'complex'
   */
  set fields(value: BusinessRuleActionField[] | undefined) {
    this._fields = value;
  }
  /**
   The potential sub-fields when the type is 'complex'
   */
  get expressions(): BusinessRuleFieldDefinition[] | undefined {
    return this._expressions;
  }
  /**
   The potential sub-fields when the type is 'complex'
   */
  set expressions(value: BusinessRuleFieldDefinition[] | undefined) {
    this._expressions = value;
  }
}