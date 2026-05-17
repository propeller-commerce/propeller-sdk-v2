import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as templateErrorLogDoc } from '../generated/operations/templateErrorLog';
import { document as templateErrorLogsDoc } from '../generated/operations/templateErrorLogs';
import { document as templateErrorLogStatsDoc } from '../generated/operations/templateErrorLogStats';

import type { TemplateErrorLog } from '../type/TemplateErrorLog';
import type { TemplateErrorLogSearchInput } from '../type/TemplateErrorLogSearchInput';
import type { TemplateErrorLogResponse } from '../type/TemplateErrorLogResponse';
import type { TemplateErrorLogStats } from '../type/TemplateErrorLogStats';

/**
 * Factory for template-error-log GraphQL operations. Retrieval, paginated
 * search, and statistical summaries for monitoring and debugging templates.
 */
export function templateErrorLogService(client: GraphQLClient) {
  return {
    /**
     * Retrieve a specific template error log by ID.
     * @param id Unique identifier for the error log
     */
    async getTemplateErrorLog(id: string): Promise<TemplateErrorLog> {
      const result = await runOperation(client, templateErrorLogDoc, 'templateErrorLog', { id });
      return result.data.templateErrorLog as TemplateErrorLog;
    },

    /**
     * Search for template error logs with filtering and pagination.
     * @param input Search criteria and pagination parameters
     */
    async searchTemplateErrorLogs(
      input: TemplateErrorLogSearchInput
    ): Promise<TemplateErrorLogResponse> {
      const result = await runOperation(client, templateErrorLogsDoc, 'templateErrorLogs', { input });
      return result.data.templateErrorLogs as TemplateErrorLogResponse;
    },

    /**
     * Retrieve a statistical summary of template error logs.
     */
    async getTemplateErrorLogStats(): Promise<TemplateErrorLogStats> {
      const result = await runOperation(client, templateErrorLogStatsDoc, 'templateErrorLogStats');
      return result.data.templateErrorLogStats as TemplateErrorLogStats;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call
 * `templateErrorLogService(client)`.
 */
export class TemplateErrorLogService {
  private readonly _svc: ReturnType<typeof templateErrorLogService>;
  constructor(client: GraphQLClient) {
    this._svc = templateErrorLogService(client);
  }
  /**
   * Retrieve a specific template error log by ID.
   * @param id Unique identifier for the error log
   */
  getTemplateErrorLog(id: string): Promise<TemplateErrorLog> {
    return this._svc.getTemplateErrorLog(id);
  }
  /**
   * Search for template error logs with filtering and pagination.
   * @param input Search criteria and pagination parameters
   */
  searchTemplateErrorLogs(input: TemplateErrorLogSearchInput): Promise<TemplateErrorLogResponse> {
    return this._svc.searchTemplateErrorLogs(input);
  }
  /**
   * Retrieve a statistical summary of template error logs.
   */
  getTemplateErrorLogStats(): Promise<TemplateErrorLogStats> {
    return this._svc.getTemplateErrorLogStats();
  }
}
