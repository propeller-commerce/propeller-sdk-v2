import { CacheControlType } from '../enum/CacheControlType';
/**
 Cache Control Input options!
  Defaults:
  	- type=public
  	- maxAge=7days
 */
export interface CacheControlInput {
  /** Cache control type */
  type?: CacheControlType;
  /** Cache max-age value */
  maxAge?: number;
}