import { BaseService } from './BaseService';
import { EventActionConfigResponse } from '../type/EventActionConfigResponse';
import { EventActionConfigSearchInput } from '../type/EventActionConfigSearchInput';
import { EventActionConfigSortInput } from '../type/EventActionConfigSortInput';
import { EventToEmailConfigCreateInput } from '../type/EventToEmailConfigCreateInput';
import { EventToEmailConfigUpdateInput } from '../type/EventToEmailConfigUpdateInput';
import { EventToWebHookConfigCreateInput } from '../type/EventToWebHookConfigCreateInput';
import { EventToWebHookConfigUpdateInput } from '../type/EventToWebHookConfigUpdateInput';
import { EmailEventInput } from '../type/EmailEventInput';
import { EmailSendEventInput } from '../type/EmailSendEventInput';
import { PasswordResetLinkEmailInput } from '../type/PasswordResetLinkEmailInput';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
/**
 Service for managing event action configurations
 * @extends BaseService
 */
export class EventActionConfigService extends BaseService {
  /**
   Retrieves a specific event action configuration
   * @param id Event action config ID
   * @returns Promise<EventActionConfigResponse> Event action configuration data
   */
  async getEventActionConfig(id: number): Promise<EventActionConfigResponse> {
    const variables = { id };
    const result = await this.executeQuery('eventActionConfig', variables);
    return new EventActionConfigResponse(result.data.eventActionConfig);
  }
  /**
   Retrieves event action configurations with optional search
   * @param input Search input parameters
   * @returns Promise<EventActionConfigResponse[]> List of event action configurations
   */
  async getEventActionConfigs(input?: EventActionConfigSearchInput): Promise<EventActionConfigResponse[]> {
    const variables = { input };
    const result = await this.executeQuery('eventActionConfigs', variables);
    return result.data.eventActionConfigs.map((config: any) => new EventActionConfigResponse(config));
  }
  /**
   Creates a new event to email configuration
   * @param input EventToEmailConfig creation input data
   * @returns Promise<EventActionConfig> The created event action config
   */
  async createEventToEmailConfig(input: EventToEmailConfigCreateInput): Promise<EventActionConfigResponse> {
    const variables = { input };
    const result = await this.executeMutation('eventToEmailConfigCreate', variables);
    return new EventActionConfigResponse(result.data.eventToEmailConfigCreate);
  }
  /**
   Updates an existing event to email configuration
   * @param input EventToEmailConfig update input data
   * @returns Promise<EventActionConfig> The updated event action config
   */
  async updateEventToEmailConfig(input: EventToEmailConfigUpdateInput): Promise<EventActionConfigResponse> {
    const variables = { input };
    const result = await this.executeMutation('eventToEmailConfigUpdate', variables);
    return new EventActionConfigResponse(result.data.eventToEmailConfigUpdate);
  }
  /**
   Creates a new event to webhook configuration
   * @param input EventToWebHookConfig creation input data
   * @returns Promise<EventActionConfig> The created event action config
   */
  async createEventToWebHookConfig(input: EventToWebHookConfigCreateInput): Promise<EventActionConfigResponse> {
    const variables = { input };
    const result = await this.executeMutation('eventToWebHookConfigCreate', variables);
    return new EventActionConfigResponse(result.data.eventToWebHookConfigCreate);
  }
  /**
   Updates an existing event to webhook configuration
   * @param input EventToWebHookConfig update input data
   * @returns Promise<EventActionConfig> The updated event action config
   */
  async updateEventToWebHookConfig(input: EventToWebHookConfigUpdateInput): Promise<EventActionConfigResponse> {
    const variables = { input };
    const result = await this.executeMutation('eventToWebHookConfigUpdate', variables);
    return new EventActionConfigResponse(result.data.eventToWebHookConfigUpdate);
  }
  /**
   Publishes an email event
   * @param input Email event input data
   * @returns Promise<PublishEmailEventResponse> The publish response
   */
  async publishEmailEvent(input: EmailEventInput): Promise<PublishEmailEventResponse> {
    const variables = { input };
    const result = await this.executeMutation('publishEmailEvent', variables);
    return new PublishEmailEventResponse(result.data.publishEmailEvent);
  }
  /**
   Publishes an email send event
   * @param input Email send event input data
   * @returns Promise<PublishEmailEventResponse> The publish response
   */
  async publishEmailSendEvent(input: EmailSendEventInput): Promise<PublishEmailEventResponse> {
    const variables = { input };
    const result = await this.executeMutation('publishEmailSendEvent', variables);
    return new PublishEmailEventResponse(result.data.publishEmailSendEvent);
  }
  /**
   Publishes a password reset email event
   * @param input Password reset email event input data
   * @returns Promise<PublishEmailEventResponse> The publish response
   */
  async publishPasswordResetEmailEvent(input: PasswordResetLinkEmailInput): Promise<PublishEmailEventResponse> {
    const variables = { input };
    const result = await this.executeMutation('publishPasswordResetEmailEvent', variables);
    return new PublishEmailEventResponse(result.data.publishPasswordResetEmailEvent);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}