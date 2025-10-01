import { ContactActionsData } from './ContactActionsData';
/**
 Object class for ContactActionsResponse
 */
export class ContactActionsResponse {
  /** List of output messaged for actions performed */
  private _data: ContactActionsData[];
  /** List of extra messages */
  private _messages: string[];
  /**
   Creates a new instance of ContactActionsResponse
   */
  constructor(data: Partial<ContactActionsResponse> = {}) {
    this._data = data.data!;
    this._messages = data.messages!;
  }
  /**
   List of output messaged for actions performed
   */
  get data(): ContactActionsData[] {
    return this._data;
  }
  /**
   List of output messaged for actions performed
   */
  set data(value: ContactActionsData[]) {
    this._data = value;
  }
  /**
   List of extra messages
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   List of extra messages
   */
  set messages(value: string[]) {
    this._messages = value;
  }
}