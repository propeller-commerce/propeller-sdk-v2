/**
 * @enum AttributeGroupType
 Types of attribute groups used for organizing product attributes
 */
export enum AttributeGroupType {
  /** System-defined attribute group */
  SYSTEM = "SYSTEM",
  /** Custom user-defined attribute group */
  CUSTOM = "CUSTOM",
  /** Technical specifications group */
  TECHNICAL = "TECHNICAL",
  /** Marketing attributes group */
  MARKETING = "MARKETING",
  /** Physical properties group */
  PHYSICAL = "PHYSICAL",
  /** Packaging information group */
  PACKAGING = "PACKAGING"
}