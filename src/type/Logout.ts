/**
 Object class for Logout
 */
export class Logout {
  /** todo field */
  private _todo?: string;
  /**
   Creates a new instance of Logout
   */
  constructor(data: Partial<Logout> = {}) {
    this._todo = data.todo;
  }
  /**
   todo field
   */
  get todo(): string | undefined {
    return this._todo;
  }
  /**
   todo field
   */
  set todo(value: string | undefined) {
    this._todo = value;
  }
}