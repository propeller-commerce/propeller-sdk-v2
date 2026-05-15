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

  /** Returns `data` as ClusterProductsActionData instances (coerced on first access). */
  getData(): ClusterProductsActionData[] {
    if (!this.data) return [];
    this.data = this.data.map((x: any) => x instanceof ClusterProductsActionData ? x : new ClusterProductsActionData(x));
    return this.data;
  }
  /** Returns `messages`. */
  getMessages(): string[] {
    return this.messages;
  }
}