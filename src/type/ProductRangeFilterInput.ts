import { AttributeType } from '../enum/AttributeType';
/**
 Input object for ProductRangeFilterInput
 */
export interface ProductRangeFilterInput {
  /** Price from filter */
  from: number;
  /** Price to filter */
  to: number;
  /** ID of the attribute, either id or name is required */
  id?: string;
  /** NAME of the attribute, either id or name is required */
  name?: string;
  /** Range filter exclude */
  exclude: boolean;
  /** Range filter type */
  type?: AttributeType;
}