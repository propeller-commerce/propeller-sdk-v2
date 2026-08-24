import type { Address } from './Address';
import type { CartAddress } from './CartAddress';
import type { OrderAddress } from './OrderAddress';
import type { TenderAddress } from './TenderAddress';
import type { WarehouseAddress } from './WarehouseAddress';

/**
 * Discriminated union of every address-like response shape in the schema.
 *
 * The schema splits "address" into five entities (`Address`, `CartAddress`,
 * `OrderAddress`, `TenderAddress`, `WarehouseAddress`) — most share fields like
 * `street`, `city`, `country` but each adds context-specific properties.
 *
 * Use this when you need to render or pass around an address without caring
 * which flavor it is (e.g. an `<AddressCard>` UI component). When a specific
 * variant is required, import that interface directly.
 *
 * Discriminate at runtime via the `__typename` field if you select it in your
 * GraphQL document. The SDK does not inject `__typename` itself.
 */
export type AnyAddress =
  | Address
  | CartAddress
  | OrderAddress
  | TenderAddress
  | WarehouseAddress;
