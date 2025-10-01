/**
 * @enum AttributeFieldName
 Enum for attribute field names used in Propeller eCommerce Platform
 */
export enum AttributeFieldName {
  /** [Required][String] The ID of the AttributeDescription, required if attributeDescriptionName is not provided */
  ATTRIBUTE_DESCRIPTION_ID = "ATTRIBUTE_DESCRIPTION_ID",
  /** [Required][String] The Name of the AttributeDescription, required if attributeDescriptionId is not provided */
  ATTRIBUTE_DESCRIPTION_NAME = "ATTRIBUTE_DESCRIPTION_NAME",
  /** [Optional][String] Attribute value descriptions per language, required for TEXT type attributes */
  TEXT_VALUES = "TEXT_VALUES",
  /** [Optional][String] Attribute value descriptions per language, required for TEXT type attributes */
  TEXT_VALUES_LANGUAGE = "TEXT_VALUES_LANGUAGE",
  /** [Optional][Array] Attribute enum values, required for ENUM type attributes */
  ENUM_VALUES = "ENUM_VALUES",
  /** [Optional][Integer] Attribute integer value, required for INTEGER type attributes */
  INT_VALUE = "INT_VALUE",
  /** [Optional][Decimal] Attribute decimal value, required for DECIMAL type attributes */
  DECIMAL_VALUE = "DECIMAL_VALUE",
  /** [Optional][DateTime] Attribute datetime value, required for DATETIME type attributes in ISO 8601 format 'YYYY-MM-DDThh:mm:ss.sssZ' (e.g., 2024-10-31T09:55:00.000Z) */
  DATE_TIME_VALUE = "DATE_TIME_VALUE",
  /** [Optional][String] Attribute color value, required for COLOR type attributes */
  COLOR_VALUE = "COLOR_VALUE",
  /** [Optional][Enum] The class the Attribute or AttributeDescription belongs to, must be one of the following: [products, clusters, categories, customers, contacts, companies] */
  ATTRIBUTE_CLASS = "ATTRIBUTE_CLASS",
  /** The lookupKey to find the resource by, i.e. id or sourceId */
  LOOKUP_KEY = "LOOKUP_KEY",
  /** The lookupValue to find the resource by, i.e. the id or the sourceId */
  LOOKUP_VALUE = "LOOKUP_VALUE",
  /** The source of the lookupValue when the lookupKey is a sourceId */
  SOURCE = "SOURCE"
}