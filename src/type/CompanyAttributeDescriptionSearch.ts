/**
 Object class for CompanyAttributeDescriptionSearch
 */
export class CompanyAttributeDescriptionSearch {
  /** AttributeDescription id */
  private _id: string;
  /** Descriptive identifier for this AttributeDescription */
  private _name: string;
  /**
   Creates a new instance of CompanyAttributeDescriptionSearch
   */
  constructor(data: Partial<CompanyAttributeDescriptionSearch> = {}) {
    this._id = data.id!;
    this._name = data.name!;
  }
  /**
   AttributeDescription id
   */
  get id(): string {
    return this._id;
  }
  /**
   AttributeDescription id
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Descriptive identifier for this AttributeDescription
   */
  get name(): string {
    return this._name;
  }
  /**
   Descriptive identifier for this AttributeDescription
   */
  set name(value: string) {
    this._name = value;
  }
}