/**
 Object class for Source
 */
export class Source {
  /** Source ID */
  id?: string;
  /** Name of the source */
  name?: string;
  constructor(data: Partial<Source> = {}) {
    Object.assign(this, data);
  }
}