import { ClusterProductsActionData } from './ClusterProductsActionData';
/**
 Object class for ClusterProductsActionResponse
 */
export class ClusterProductsActionResponse {
  /** List of output messaged for actions performed */
  data!: ClusterProductsActionData[];
  /** List of extra messages */
  messages!: string[];
  constructor(data: Partial<ClusterProductsActionResponse> = {}) {
    Object.assign(this, data);
  }
}