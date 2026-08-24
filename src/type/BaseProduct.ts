import type { Product } from './Product';
import type { Cluster } from './Cluster';

/**
 * Union type BaseProduct
 */
export type BaseProduct =
  | Product
  | Cluster;
