/**
 Object class for Source
 */
export class Source {
  /** Source ID */
  private _id?: string;
  /** Name of the source */
  private _name?: string;
  /**
   Creates a new instance of Source
   */
  constructor(data: Partial<Source> = {}) {
    this._id = data.id;
    this._name = data.name;
  }
  /**
   Source ID
   */
  get id(): string | undefined {
    return this._id;
  }
  /**
   Source ID
   */
  set id(value: string | undefined) {
    this._id = value;
  }
  /**
   Name of the source
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Name of the source
   */
  set name(value: string | undefined) {
    this._name = value;
  }
}