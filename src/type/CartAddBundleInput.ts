/**
 Input object for CartAddBundleInput
 */
export interface CartAddBundleInput {
  /** Item quantity */
  quantity?: number;
  /** Item notes */
  notes?: string;
  /** Bundle identifier */
  bundleId: string;
}