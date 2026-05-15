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
  id!: string;
  /** attributeDescription field */
  attributeDescription?: AttributeDescription;
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
  type!: AttributeType;
  /** All available attribute text values within this search result for this particular attribute. */
  textFilters?: AttributeTextFilter[];
  /** Minimum and maximum value range for integer attributes */
  integerRangeFilter?: AttributeIntegerRangeFilter;
  /** Minimum and maximum value range for decimal attributes */
  decimalRangeFilter?: AttributeDecimalRangeFilter;
  constructor(data: Partial<AttributeFilter> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `attributeDescription` as a AttributeDescription instance (coerced on first access). */
  getAttributeDescription(): AttributeDescription | undefined {
    if (this.attributeDescription == null) return undefined;
    if (!(this.attributeDescription instanceof AttributeDescription)) {
      this.attributeDescription = new AttributeDescription(this.attributeDescription as any);
    }
    return this.attributeDescription;
  }
  /** Returns `type`. */
  getType(): AttributeType {
    return this.type;
  }
  /** Returns `textFilters` as AttributeTextFilter instances (coerced on first access). */
  getTextFilters(): AttributeTextFilter[] | undefined {
    if (!this.textFilters) return undefined;
    this.textFilters = this.textFilters.map((x: any) => x instanceof AttributeTextFilter ? x : new AttributeTextFilter(x));
    return this.textFilters;
  }
  /** Returns `integerRangeFilter` as a AttributeIntegerRangeFilter instance (coerced on first access). */
  getIntegerRangeFilter(): AttributeIntegerRangeFilter | undefined {
    if (this.integerRangeFilter == null) return undefined;
    if (!(this.integerRangeFilter instanceof AttributeIntegerRangeFilter)) {
      this.integerRangeFilter = new AttributeIntegerRangeFilter(this.integerRangeFilter as any);
    }
    return this.integerRangeFilter;
  }
  /** Returns `decimalRangeFilter` as a AttributeDecimalRangeFilter instance (coerced on first access). */
  getDecimalRangeFilter(): AttributeDecimalRangeFilter | undefined {
    if (this.decimalRangeFilter == null) return undefined;
    if (!(this.decimalRangeFilter instanceof AttributeDecimalRangeFilter)) {
      this.decimalRangeFilter = new AttributeDecimalRangeFilter(this.decimalRangeFilter as any);
    }
    return this.decimalRangeFilter;
  }
}