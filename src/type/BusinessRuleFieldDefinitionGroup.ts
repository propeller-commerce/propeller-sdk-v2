import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
/**
 Represents a business rule field definition group
 */
export class BusinessRuleFieldDefinitionGroup {
  /** The ID of the business rule field definition group */
  private _id: string | number;
  /** The name of the business rule field definition group */
  private _name: string;
  /** Indicates whether the business rule field definition group is a root group or not */
  private _isRoot: boolean;
  /** The business rule field definitions in the business rule field definition group */
  private _definitions: BusinessRuleFieldDefinition[];
  /**
   Creates a new instance of BusinessRuleFieldDefinitionGroup
   */
  constructor(data: Partial<BusinessRuleFieldDefinitionGroup> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._isRoot = data.isRoot!;
    this._definitions = data.definitions!;
  }
  /**
   The ID of the business rule field definition group
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The ID of the business rule field definition group
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The name of the business rule field definition group
   */
  get name(): string {
    return this._name;
  }
  /**
   The name of the business rule field definition group
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Indicates whether the business rule field definition group is a root group or not
   */
  get isRoot(): boolean {
    return this._isRoot;
  }
  /**
   Indicates whether the business rule field definition group is a root group or not
   */
  set isRoot(value: boolean) {
    this._isRoot = value;
  }
  /**
   The business rule field definitions in the business rule field definition group
   */
  get definitions(): BusinessRuleFieldDefinition[] {
    return this._definitions;
  }
  /**
   The business rule field definitions in the business rule field definition group
   */
  set definitions(value: BusinessRuleFieldDefinition[]) {
    this._definitions = value;
  }
}