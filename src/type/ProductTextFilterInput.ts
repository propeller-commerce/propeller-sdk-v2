import { AttributeType } from '../enum/AttributeType';
/**
 Input object for ProductTextFilterInput
 */
export interface ProductTextFilterInput {
  /** ID of the attribute, either id or name is required */
  id?: string;
  /** NAME of the attribute, either id or name is required */
  name?: string;
  /** Text filter value */
  values: string[];
  /** Text filter exclude */
  exclude: boolean;
  /** Text filter type */
  type?: AttributeType;
}