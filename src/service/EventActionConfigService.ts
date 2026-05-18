import { EventActionConfigResponse } from '../type/EventActionConfigResponse';
import { EventActionConfigSearchInput } from '../type/EventActionConfigSearchInput';
import { IEventActionConfig } from '../type/IEventActionConfig';
import { EventToEmailConfig } from '../type/EventToEmailConfig';
import { EventToWebHookConfig } from '../type/EventToWebHookConfig';
import { EventToEmailConfigCreateInput } from '../type/EventToEmailConfigCreateInput';
import { EventToEmailConfigUpdateInput } from '../type/EventToEmailConfigUpdateInput';
import { EventToWebHookConfigCreateInput } from '../type/EventToWebHookConfigCreateInput';
import { EventToWebHookConfigUpdateInput } from '../type/EventToWebHookConfigUpdateInput';
import { EmailEventInput } from '../type/EmailEventInput';
import { EmailSendEventInput } from '../type/EmailSendEventInput';
import { PasswordResetLinkEmailInput } from '../type/PasswordResetLinkEmailInput';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as eventActionConfigDoc } from '../generated/operations/eventActionConfig';
import { document as eventActionConfigsDoc } from '../generated/operations/eventActionConfigs';
import { document as eventToEmailConfigCreateDoc } from '../generated/operations/eventToEmailConfigCreate';
import { document as eventToEmailConfigUpdateDoc } from '../generated/operations/eventToEmailConfigUpdate';
import { document as eventToWebHookConfigCreateDoc } from '../generated/operations/eventToWebHookConfigCreate';
import { document as eventToWebHookConfigUpdateDoc } from '../generated/operations/eventToWebHookConfigUpdate';
import { document as publishEmailEventDoc } from '../generated/operations/publishEmailEvent';
import { document as publishEmailSendEventDoc } from '../generated/operations/publishEmailSendEvent';
import { document as publishPasswordResetEmailEventDoc } from '../generated/operations/publishPasswordResetEmailEvent';
import type { EventToEmailConfigUpdateVariables, EventToWebHookConfigUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing event action configurations
 */
export function eventActionConfigService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific event action configuration
       * @param id Event action config ID
       * @returns Promise<IEventActionConfig> Event action configuration data
       */
    async getEventActionConfig(id: number): Promise<IEventActionConfig> {
      const result = await runOperation<{ eventActionConfig: IEventActionConfig }>(client, eventActionConfigDoc, 'eventActionConfig', { id });
      return result.data.eventActionConfig as IEventActionConfig;
    },
    /**
       Retrieves event action configurations with optional search
       * @param input Search input parameters
       * @returns Promise<EventActionConfigResponse> The event action configurations response
       */
    async getEventActionConfigs(input?: EventActionConfigSearchInput): Promise<EventActionConfigResponse> {
      const result = await runOperation<{ eventActionConfigs: EventActionConfigResponse }>(client, eventActionConfigsDoc, 'eventActionConfigs', { input });
      return result.data.eventActionConfigs as EventActionConfigResponse;
    },
    /**
       Creates a new event to email configuration
       * @param input EventToEmailConfig creation input data
       * @returns Promise<EventToEmailConfig> The created event-to-email config
       */
    async createEventToEmailConfig(input: EventToEmailConfigCreateInput): Promise<EventToEmailConfig> {
      const result = await runOperation<{ eventToEmailConfigCreate: EventToEmailConfig }>(client, eventToEmailConfigCreateDoc, 'eventToEmailConfigCreate', { input });
      return result.data.eventToEmailConfigCreate as EventToEmailConfig;
    },
    /**
       Updates an existing event to email configuration
       * @param variables EventToEmailConfig update input data
       * @returns Promise<EventToEmailConfig> The updated event-to-email config
       */
    async updateEventToEmailConfig(variables: EventToEmailConfigUpdateVariables): Promise<EventToEmailConfig> {
      const result = await runOperation<{ eventToEmailConfigUpdate: EventToEmailConfig }>(client, eventToEmailConfigUpdateDoc, 'eventToEmailConfigUpdate', variables);
      return result.data.eventToEmailConfigUpdate as EventToEmailConfig;
    },
    /**
       Creates a new event to webhook configuration
       * @param input EventToWebHookConfig creation input data
       * @returns Promise<EventToWebHookConfig> The created event-to-webhook config
       */
    async createEventToWebHookConfig(input: EventToWebHookConfigCreateInput): Promise<EventToWebHookConfig> {
      const result = await runOperation<{ eventToWebHookConfigCreate: EventToWebHookConfig }>(client, eventToWebHookConfigCreateDoc, 'eventToWebHookConfigCreate', { input });
      return result.data.eventToWebHookConfigCreate as EventToWebHookConfig;
    },
    /**
       Updates an existing event to webhook configuration
       * @param variables EventToWebHookConfig update input data
       * @returns Promise<EventToWebHookConfig> The updated event-to-webhook config
       */
    async updateEventToWebHookConfig(variables: EventToWebHookConfigUpdateVariables): Promise<EventToWebHookConfig> {
      const result = await runOperation<{ eventToWebHookConfigUpdate: EventToWebHookConfig }>(client, eventToWebHookConfigUpdateDoc, 'eventToWebHookConfigUpdate', variables);
      return result.data.eventToWebHookConfigUpdate as EventToWebHookConfig;
    },
    /**
       Publishes an email event
       * @param input Email event input data
       * @returns Promise<PublishEmailEventResponse> The publish response
       */
    async publishEmailEvent(input: EmailEventInput): Promise<PublishEmailEventResponse> {
      const result = await runOperation<{ publishEmailEvent: PublishEmailEventResponse }>(client, publishEmailEventDoc, 'publishEmailEvent', { input });
      return result.data.publishEmailEvent as PublishEmailEventResponse;
    },
    /**
       Publishes an email send event
       * @param input Email send event input data
       * @returns Promise<PublishEmailEventResponse> The publish response
       */
    async publishEmailSendEvent(input: EmailSendEventInput): Promise<PublishEmailEventResponse> {
      const result = await runOperation<{ publishEmailSendEvent: PublishEmailEventResponse }>(client, publishEmailSendEventDoc, 'publishEmailSendEvent', { input });
      return result.data.publishEmailSendEvent as PublishEmailEventResponse;
    },
    /**
       Publishes a password reset email event
       * @deprecated Use triggerPasswordSendResetEmailEvent (via UserService.sendPasswordResetEmail) which routes through the event-action-manager + template-engine instead.
       * @param input Password reset email event input data
       * @returns Promise<PublishEmailEventResponse> The publish response
       */
    async publishPasswordResetEmailEvent(input: PasswordResetLinkEmailInput): Promise<PublishEmailEventResponse> {
      const result = await runOperation<{ publishPasswordResetEmailEvent: PublishEmailEventResponse }>(client, publishPasswordResetEmailEventDoc, 'publishPasswordResetEmailEvent', { input });
      return result.data.publishPasswordResetEmailEvent as PublishEmailEventResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `eventActionConfigService(client)`.
 */
export class EventActionConfigService {
  private readonly _svc: ReturnType<typeof eventActionConfigService>;
  constructor(client: GraphQLClient) { this._svc = eventActionConfigService(client); }
  /**
   * Retrieves a specific event action configuration
   * @param id Event action config ID
   */
  getEventActionConfig(id: number): Promise<IEventActionConfig> { return this._svc.getEventActionConfig(id); }
  /**
   * Retrieves event action configurations with optional search
   * @param input Search input parameters
   */
  getEventActionConfigs(input?: EventActionConfigSearchInput): Promise<EventActionConfigResponse> { return this._svc.getEventActionConfigs(input); }
  /**
   * Creates a new event to email configuration
   * @param input EventToEmailConfig creation input data
   */
  createEventToEmailConfig(input: EventToEmailConfigCreateInput): Promise<EventToEmailConfig> { return this._svc.createEventToEmailConfig(input); }
  /**
   * Updates an existing event to email configuration
   * @param variables EventToEmailConfig update input data
   */
  updateEventToEmailConfig(variables: EventToEmailConfigUpdateVariables): Promise<EventToEmailConfig> { return this._svc.updateEventToEmailConfig(variables); }
  /**
   * Creates a new event to webhook configuration
   * @param input EventToWebHookConfig creation input data
   */
  createEventToWebHookConfig(input: EventToWebHookConfigCreateInput): Promise<EventToWebHookConfig> { return this._svc.createEventToWebHookConfig(input); }
  /**
   * Updates an existing event to webhook configuration
   * @param variables EventToWebHookConfig update input data
   */
  updateEventToWebHookConfig(variables: EventToWebHookConfigUpdateVariables): Promise<EventToWebHookConfig> { return this._svc.updateEventToWebHookConfig(variables); }
  /**
   * Publishes an email event
   * @param input Email event input data
   */
  publishEmailEvent(input: EmailEventInput): Promise<PublishEmailEventResponse> { return this._svc.publishEmailEvent(input); }
  /**
   * Publishes an email send event
   * @param input Email send event input data
   */
  publishEmailSendEvent(input: EmailSendEventInput): Promise<PublishEmailEventResponse> { return this._svc.publishEmailSendEvent(input); }
  /**
   * Publishes a password reset email event
   * @param input Password reset email event input data
   */
  publishPasswordResetEmailEvent(input: PasswordResetLinkEmailInput): Promise<PublishEmailEventResponse> { return this._svc.publishPasswordResetEmailEvent(input); }
}

