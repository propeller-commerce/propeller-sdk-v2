import { LocalizedString } from './LocalizedString';
/**
 Object class for BusinessRuleActionField
 */
export class BusinessRuleActionField {
  /** name field */
  name!: LocalizedString[];
  /** path field */
  path!: string;
  constructor(data: Partial<BusinessRuleActionField> = {}) {
    Object.assign(this, data);
  }
}