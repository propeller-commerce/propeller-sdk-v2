import { Contact } from './Contact';
/**
 Object class for ContactsResponse
 */
export class ContactsResponse {
  /** List of items of type Contact */
  items!: Contact[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<ContactsResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as Contact instances (coerced on first access). */
  getItems(): Contact[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof Contact ? x : new Contact(x));
    return this.items;
  }
  /** Returns `itemsFound`. */
  getItemsFound(): number {
    return this.itemsFound;
  }
  /** Returns `offset`. */
  getOffset(): number {
    return this.offset;
  }
  /** Returns `page`. */
  getPage(): number {
    return this.page;
  }
  /** Returns `pages`. */
  getPages(): number {
    return this.pages;
  }
  /** Returns `start`. */
  getStart(): number {
    return this.start;
  }
  /** Returns `end`. */
  getEnd(): number {
    return this.end;
  }
}