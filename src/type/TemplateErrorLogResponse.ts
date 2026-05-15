import { TemplateErrorLog } from './TemplateErrorLog';
/**
 Paginated response containing template error log search results
 */
export class TemplateErrorLogResponse {
  /** List of template error logs */
  items!: TemplateErrorLog[];
  /** Total number of items found */
  itemsFound!: number;
  /** Current page number */
  page!: number;
  /** Number of items per page */
  offset!: number;
  /** Total number of pages */
  pages!: number;
  /** Starting item number */
  start!: number;
  /** Ending item number */
  end!: number;
  constructor(data: Partial<TemplateErrorLogResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as TemplateErrorLog instances (coerced on first access). */
  getItems(): TemplateErrorLog[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof TemplateErrorLog ? x : new TemplateErrorLog(x));
    return this.items;
  }
  /** Returns `itemsFound`. */
  getItemsFound(): number { return this.itemsFound; }
  /** Returns `page`. */
  getPage(): number { return this.page; }
  /** Returns `offset`. */
  getOffset(): number { return this.offset; }
  /** Returns `pages`. */
  getPages(): number { return this.pages; }
  /** Returns `start`. */
  getStart(): number { return this.start; }
  /** Returns `end`. */
  getEnd(): number { return this.end; }
}
