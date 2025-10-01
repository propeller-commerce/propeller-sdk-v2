import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedString } from './LocalizedString';
/**
 The configuration for posting a payload to a WebHook when an event gets triggered which has the url as a field to store where to post the payload to.
 */
export class EventToWebHookConfig {
  /** The ID of the event, uuid v7 format */
  private _id: string;
  /** The event to trigger the action defined in the event action config */
  private _trigger: EventTrigger;
  /** The event code to use when the trigger is [CUSTOM_EVENT] */
  private _code?: string;
  /** The creation date of this EventActionConfig */
  private _createdAt: string;
  /** The last modified date of this EventActionConfig */
  private _lastModifiedAt: string;
  /** ID of the user who created this EventActionConfig */
  private _createdBy?: number;
  /** ID of the user who last modified this EventActionConfig */
  private _lastModifiedBy?: number;
  /** names field */
  private _names: LocalizedString[];
  /** The URL of the webhook to send the payload to */
  private _url: string;
  /**
   Creates a new instance of EventToWebHookConfig
   */
  constructor(data: Partial<EventToWebHookConfig> = {}) {
    this._id = data.id!;
    this._trigger = data.trigger!;
    this._code = data.code;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._names = data.names!;
    this._url = data.url!;
  }
  /**
   The ID of the event, uuid v7 format
   */
  get id(): string {
    return this._id;
  }
  /**
   The ID of the event, uuid v7 format
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   The event to trigger the action defined in the event action config
   */
  get trigger(): EventTrigger {
    return this._trigger;
  }
  /**
   The event to trigger the action defined in the event action config
   */
  set trigger(value: EventTrigger) {
    this._trigger = value;
  }
  /**
   The event code to use when the trigger is [CUSTOM_EVENT]
   */
  get code(): string | undefined {
    return this._code;
  }
  /**
   The event code to use when the trigger is [CUSTOM_EVENT]
   */
  set code(value: string | undefined) {
    this._code = value;
  }
  /**
   The creation date of this EventActionConfig
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The creation date of this EventActionConfig
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The last modified date of this EventActionConfig
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The last modified date of this EventActionConfig
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   ID of the user who created this EventActionConfig
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   ID of the user who created this EventActionConfig
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   ID of the user who last modified this EventActionConfig
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   ID of the user who last modified this EventActionConfig
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   names field
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   names field
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   The URL of the webhook to send the payload to
   */
  get url(): string {
    return this._url;
  }
  /**
   The URL of the webhook to send the payload to
   */
  set url(value: string) {
    this._url = value;
  }
}