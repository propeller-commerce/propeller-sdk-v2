import { AttributeType } from '../enum/AttributeType';
/**
 Input object for ProductSearchFacetInput
 */
export interface ProductSearchFacetInput {
  /** ID of the attribute */
  id: string;
  /** Type of the attribute */
  type?: AttributeType;
}
