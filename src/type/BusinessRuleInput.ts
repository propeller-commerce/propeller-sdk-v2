import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Object class for BusinessRuleInput
 */
export class BusinessRuleInput implements IBusinessRuleNode {
  /** type field */
  private _type: BusinessRuleNodeType;
  /** id field */
  private _id: string | number;
  /** name field */
  private _name: string;
  /** description field */
  private _description: string;
  /**
   Creates a new instance of BusinessRuleInput
   */
  constructor(data: Partial<BusinessRuleInput> = {}) {
    this._type = data.type!;
    this._id = data.id!;
    this._name = data.name!;
    this._description = data.description!;
  }
  /**
   type field
   */
  get type(): BusinessRuleNodeType {
    return this._type;
  }
  /**
   type field
   */
  set type(value: BusinessRuleNodeType) {
    this._type = value;
  }
  /**
   id field
   */
  get id(): string | number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   description field
   */
  get description(): string {
    return this._description;
  }
  /**
   description field
   */
  set description(value: string) {
    this._description = value;
  }
}