import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Base interface for cluster option entities
 */
export interface IClusterOption {
  /** Option identifier */
  id: string;
  /** Option name */
  name: string;
  /** Option description */
  description?: string;
  /** Option value */
  value?: any;
  /** Whether the option is enabled */
  enabled: boolean;
}