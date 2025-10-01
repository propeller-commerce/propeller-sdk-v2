import { ClusterProductsActionData } from './ClusterProductsActionData';
/**
 Object class for ClusterProductsActionResponse
 */
export class ClusterProductsActionResponse {
  /** List of output messaged for actions performed */
  private _data: ClusterProductsActionData[];
  /** List of extra messages */
  private _messages: string[];
  /**
   Creates a new instance of ClusterProductsActionResponse
   */
  constructor(data: Partial<ClusterProductsActionResponse> = {}) {
    this._data = data.data!;
    this._messages = data.messages!;
  }
  /**
   List of output messaged for actions performed
   */
  get data(): ClusterProductsActionData[] {
    return this._data;
  }
  /**
   List of output messaged for actions performed
   */
  set data(value: ClusterProductsActionData[]) {
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