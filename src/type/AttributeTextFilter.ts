import { IAttributeTextFilter } from './IAttributeTextFilter';
/**
 Object class for AttributeTextFilter
 */
export class AttributeTextFilter implements IAttributeTextFilter {
  /** The value of the attribute */
  private _value: string;
  /** The number of products found with this attribute value with all attributes applied.     */
  private _count: number;
  /** The number of products found with this attribute value  without any attribute filters applied.  */
  private _countTotal?: number;
  /** The number of products found with this attribute value without all attributes except it's own applied.
    This can be used to display the active filter's totals  */
  private _countActive?: number;
  /** Indicates whehter this values is currently selected */
  private _isSelected: boolean;
  /**
   Creates a new instance of AttributeTextFilter
   */
  constructor(data: Partial<AttributeTextFilter> = {}) {
    this._value = data.value!;
    this._count = data.count!;
    this._countTotal = data.countTotal;
    this._countActive = data.countActive;
    this._isSelected = data.isSelected!;
  }
  /**
   The value of the attribute
   */
  get value(): string {
    return this._value;
  }
  /**
   The value of the attribute
   */
  set value(value: string) {
    this._value = value;
  }
  /**
   The number of products found with this attribute value with all attributes applied.
   */
  get count(): number {
    return this._count;
  }
  /**
   The number of products found with this attribute value with all attributes applied.
   */
  set count(value: number) {
    this._count = value;
  }
  /**
   The number of products found with this attribute value  without any attribute filters applied.
   */
  get countTotal(): number | undefined {
    return this._countTotal;
  }
  /**
   The number of products found with this attribute value  without any attribute filters applied.
   */
  set countTotal(value: number | undefined) {
    this._countTotal = value;
  }
  /**
   The number of products found with this attribute value without all attributes except it's own applied.
    This can be used to display the active filter's totals
   */
  get countActive(): number | undefined {
    return this._countActive;
  }
  /**
   The number of products found with this attribute value without all attributes except it's own applied.
    This can be used to display the active filter's totals
   */
  set countActive(value: number | undefined) {
    this._countActive = value;
  }
  /**
   Indicates whehter this values is currently selected
   */
  get isSelected(): boolean {
    return this._isSelected;
  }
  /**
   Indicates whehter this values is currently selected
   */
  set isSelected(value: boolean) {
    this._isSelected = value;
  }
}