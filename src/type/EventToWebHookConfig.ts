import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedString } from './LocalizedString';
/**
 The configuration for posting a payload to a WebHook when an event gets triggered which has the url as a field to store where to post the payload to.
 */
export class EventToWebHookConfig {
  /** The ID of the event, uuid v7 format */
  id!: string;
  /** The event to trigger the action defined in the event action config */
  trigger!: EventTrigger;
  /** The event code to use when the trigger is [CUSTOM_EVENT] */
  code?: string;
  /** The creation date of this EventActionConfig */
  createdAt!: string;
  /** The last modified date of this EventActionConfig */
  lastModifiedAt!: string;
  /** ID of the user who created this EventActionConfig */
  createdBy?: number;
  /** ID of the user who last modified this EventActionConfig */
  lastModifiedBy?: number;
  /** names field */
  names!: LocalizedString[];
  /** The URL of the webhook to send the payload to */
  url!: string;
  constructor(data: Partial<EventToWebHookConfig> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `trigger`. */
  getTrigger(): EventTrigger {
    return this.trigger;
  }
  /** Returns `code`. */
  getCode(): string | undefined {
    return this.code;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `url`. */
  getUrl(): string {
    return this.url;
  }
}