import { AttributeType } from '../enum/AttributeType';
/**
 Input object for ProductSearchTextFilterInput
 */
export interface ProductSearchTextFilterInput {
  /** ID (UUID) of the attribute */
  id: string;
  /** Text filter value */
  values: string[];
  /** Text filter exclude */
  exclude: boolean;
  /** Text filter type */
  type?: AttributeType;
}
