import { Company } from './Company';
/**
 Object class for CompaniesResponse
 */
export class CompaniesResponse {
  /** List of items of type Company */
  items!: Company[];
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
  constructor(data: Partial<CompaniesResponse> = {}) {
    Object.assign(this, data);
  }
}