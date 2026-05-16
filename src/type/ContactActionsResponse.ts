import { ContactActionsData } from './ContactActionsData';
/**
 Object class for ContactActionsResponse
 */
export interface ContactActionsResponse {
  /** List of output messaged for actions performed */
  data: ContactActionsData[];
  /** List of extra messages */
  messages: string[];
}