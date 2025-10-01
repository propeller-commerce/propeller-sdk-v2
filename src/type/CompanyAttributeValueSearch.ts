/**
 Object class for CompanyAttributeValueSearch
 */
export class CompanyAttributeValueSearch {
  /** AttributeValue id */
  private _id: string;
  /** AttributeValue type */
  private _type: string;
  /**
   Creates a new instance of CompanyAttributeValueSearch
   */
  constructor(data: Partial<CompanyAttributeValueSearch> = {}) {
    this._id = data.id!;
    this._type = data.type!;
  }
  /**
   AttributeValue id
   */
  get id(): string {
    return this._id;
  }
  /**
   AttributeValue id
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   AttributeValue type
   */
  get type(): string {
    return this._type;
  }
  /**
   AttributeValue type
   */
  set type(value: string) {
    this._type = value;
  }
}