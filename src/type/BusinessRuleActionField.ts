import { LocalizedString } from './LocalizedString';
/**
 Object class for BusinessRuleActionField
 */
export class BusinessRuleActionField {
  /** name field */
  private _name: LocalizedString[];
  /** path field */
  private _path: string;
  /**
   Creates a new instance of BusinessRuleActionField
   */
  constructor(data: Partial<BusinessRuleActionField> = {}) {
    this._name = data.name!;
    this._path = data.path!;
  }
  /**
   name field
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   name field
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   path field
   */
  get path(): string {
    return this._path;
  }
  /**
   path field
   */
  set path(value: string) {
    this._path = value;
  }
}