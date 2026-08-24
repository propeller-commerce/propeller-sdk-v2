import { SourceInput } from './SourceInput';
/**
 Input object for OrderlistUsersInput
 */
export interface OrderlistUsersInput {
  /** List of user ids */
  userIds?: number[];
  /** List of user sources */
  userSources?: SourceInput[];
}