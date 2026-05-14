import { AttributeType } from '../enum/AttributeType';
/**
 Base interface for all attribute value types.

 Upstream the GraphQL `AttributeValue` interface exposes only `id`. The SDK
 surfaces `type` and `value` here as a TypeScript-only convenience so consumer
 code can discriminate on `attr.value.type` without first casting to a concrete
 subtype. Every concrete `Attribute*Value` interface declares its own `type` and
 `value`, so this is a structural compatibility shim — not added to the wire
 protocol.
 */
export interface AttributeValue {
  /** Unique identifier for this attribute value instance. */
  id: string;
  /** Discriminator — the concrete attribute type (TEXT, ENUM, INT, etc.). */
  type: AttributeType;
  /** Concrete value of the attribute. Inspect together with `type` for proper handling. */
  value: any;
}
