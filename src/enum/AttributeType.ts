/**
 * @enum AttributeType
 Types of attributes supported in the system
 */
export enum AttributeType {
  /** Text/string attribute type */
  TEXT = "TEXT",
  /** Enumeration attribute type with predefined values */
  ENUM = "ENUM",
  /** Color attribute type for hex/rgb values */
  COLOR = "COLOR",
  /** Date and time attribute type */
  DATETIME = "DATETIME",
  /** Integer number attribute type */
  INT = "INT",
  /** Decimal/float number attribute type */
  DECIMAL = "DECIMAL",
}