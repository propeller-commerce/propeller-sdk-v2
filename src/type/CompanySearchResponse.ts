import { CompanySearch } from './CompanySearch';
/**
 Object class for CompanySearchResponse
 */
export class CompanySearchResponse {
  /** List of items of type CompanySearch */
  items!: CompanySearch[];
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
  constructor(data: Partial<CompanySearchResponse> = {}) {
    Object.assign(this, data);
  }
}