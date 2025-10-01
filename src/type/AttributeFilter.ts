import { AttributeType } from '../enum/AttributeType';
import { AttributeDescription } from './AttributeDescription';
import { AttributeTextFilter } from './AttributeTextFilter';
import { AttributeIntegerRangeFilter } from './AttributeIntegerRangeFilter';
import { AttributeDecimalRangeFilter } from './AttributeDecimalRangeFilter';
import { IAttributeFilter } from './IAttributeFilter';
/**
 Object class for AttributeFilter
 */
export class AttributeFilter implements IAttributeFilter {
  /** Attribute filter id */
  private _id: string;
  /** attributeDescription field */
  private _attributeDescription?: AttributeDescription;
  /** The type of the attribute.
        Possible values:
        - text
        - list
        - enum
        - enumlist
        - color
        - date
        - datetime
        - object
        - integer
        - decimal */
  private _type: AttributeType;
  /** All available attribute text values within this search result for this particular attribute. */
  private _textFilters?: AttributeTextFilter[];
  /** Minimum and maximum value range for integer attributes */
  private _integerRangeFilter?: AttributeIntegerRangeFilter;
  /** Minimum and maximum value range for decimal attributes */
  private _decimalRangeFilter?: AttributeDecimalRangeFilter;
  /**
   Creates a new instance of AttributeFilter
   */
  constructor(data: Partial<AttributeFilter> = {}) {
    this._id = data.id!;
    this._attributeDescription = data.attributeDescription;
    this._type = data.type!;
    this._textFilters = data.textFilters;
    this._integerRangeFilter = data.integerRangeFilter;
    this._decimalRangeFilter = data.decimalRangeFilter;
  }
  /**
   Attribute filter id
   */
  get id(): string {
    return this._id;
  }
  /**
   Attribute filter id
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   attributeDescription field
   */
  get attributeDescription(): AttributeDescription | undefined {
    return this._attributeDescription;
  }
  /**
   attributeDescription field
   */
  set attributeDescription(value: AttributeDescription | undefined) {
    this._attributeDescription = value;
  }
  /**
   The type of the attribute.
        Possible values:
        - text
        - list
        - enum
        - enumlist
        - color
        - date
        - datetime
        - object
        - integer
        - decimal
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   The type of the attribute.
        Possible values:
        - text
        - list
        - enum
        - enumlist
        - color
        - date
        - datetime
        - object
        - integer
        - decimal
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   All available attribute text values within this search result for this particular attribute.
   */
  get textFilters(): AttributeTextFilter[] | undefined {
    return this._textFilters;
  }
  /**
   All available attribute text values within this search result for this particular attribute.
   */
  set textFilters(value: AttributeTextFilter[] | undefined) {
    this._textFilters = value;
  }
  /**
   Minimum and maximum value range for integer attributes
   */
  get integerRangeFilter(): AttributeIntegerRangeFilter | undefined {
    return this._integerRangeFilter;
  }
  /**
   Minimum and maximum value range for integer attributes
   */
  set integerRangeFilter(value: AttributeIntegerRangeFilter | undefined) {
    this._integerRangeFilter = value;
  }
  /**
   Minimum and maximum value range for decimal attributes
   */
  get decimalRangeFilter(): AttributeDecimalRangeFilter | undefined {
    return this._decimalRangeFilter;
  }
  /**
   Minimum and maximum value range for decimal attributes
   */
  set decimalRangeFilter(value: AttributeDecimalRangeFilter | undefined) {
    this._decimalRangeFilter = value;
  }
}