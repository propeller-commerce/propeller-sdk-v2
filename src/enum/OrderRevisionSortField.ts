/**
 * @enum OrderRevisionSortField
 * Available fields for sorting order revision results in search operations
 */
export enum OrderRevisionSortField {
  /** Sort by revision number numerically (ascending shows oldest first) */
  REVISION_NUMBER = "REVISION_NUMBER",
  /** Sort by the date when revision was created (ascending shows oldest first) */
  CREATED_AT = "CREATED_AT",
}
