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
  attribute?: Attribute;
  /** The Attribute Description */
  attributeDescription!: AttributeDescription;
  /** The Attribute Value, either from the Attribute on the Class, or from the AttributeDescription when it's an inherited defaultValue. */
  value!: AttributeValue;
  constructor(data: Partial<AttributeResult> = {}) {
    Object.assign(this, data);
  }
}