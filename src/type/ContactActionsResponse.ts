import { ContactActionsData } from './ContactActionsData';
/**
 Object class for ContactActionsResponse
 */
export class ContactActionsResponse {
  /** List of output messaged for actions performed */
  data!: ContactActionsData[];
  /** List of extra messages */
  messages!: string[];
  constructor(data: Partial<ContactActionsResponse> = {}) {
    Object.assign(this, data);
  }
}