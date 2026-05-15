/**
 Object class for Logout
 */
export class Logout {
  /** todo field */
  todo?: string;
  constructor(data: Partial<Logout> = {}) {
    Object.assign(this, data);
  }

  /** Returns `todo`. */
  getTodo(): string | undefined {
    return this.todo;
  }
}