import { Attribute } from './Attribute';
import { AttributeDescription } from './AttributeDescription';
import { AttributeValue } from './AttributeValue';
/**
 The AttributeResult is an entity that gets returned when a search is done on attributes from a Class' perspective.
The AttributeResult has 3 fields,
- attributeDescription: The AttributeDescription Entity
- attribute: The Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on it.
- value: The AttributeValue, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
 */
export class AttributeResult {
  /** The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on */
  private _attribute?: Attribute;
  /** The Attribute Description */
  private _attributeDescription: AttributeDescription;
  /** The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue. */
  private _value: AttributeValue;
  /**
   Creates a new instance of AttributeResult
   */
  constructor(data: Partial<AttributeResult> = {}) {
    this._attribute = data.attribute;
    this._attributeDescription = data.attributeDescription!;
    this._value = data.value!;
  }
  /**
   The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
   */
  get attribute(): Attribute | undefined {
    return this._attribute;
  }
  /**
   The Attribute Entity that link the value to the AttributeDescription Entity and the Class. This field can be null. In that case the Class does not have an AttributeValue set on
   */
  set attribute(value: Attribute | undefined) {
    this._attribute = value;
  }
  /**
   The Attribute Description
   */
  get attributeDescription(): AttributeDescription {
    return this._attributeDescription;
  }
  /**
   The Attribute Description
   */
  set attributeDescription(value: AttributeDescription) {
    this._attributeDescription = value;
  }
  /**
   The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
   */
  get value(): AttributeValue {
    return this._value;
  }
  /**
   The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue.
   */
  set value(value: AttributeValue) {
    this._value = value;
  }
}