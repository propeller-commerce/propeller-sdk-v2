import { ClusterProductsActionData } from './ClusterProductsActionData';
/**
 Object class for ClusterProductsActionResponse
 */
export interface ClusterProductsActionResponse {
  /** List of output messaged for actions performed */
  data: ClusterProductsActionData[];
  /** List of extra messages */
  messages: string[];
}