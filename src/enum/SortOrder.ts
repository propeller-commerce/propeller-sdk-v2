/**
 * @enum SortOrder
 Sort order enumeration for database queries
 */
export enum SortOrder {
  /** Ascending order (lowercase) */
  /** @deprecated Use ASC instead */
  asc = "asc",
  /** Descending order (lowercase) */
  /** @deprecated Use DESC instead */
  desc = "desc",
  /** Ascending order (uppercase) */
  ASC = "ASC",
  /** Descending order (uppercase) */
  DESC = "DESC",
}