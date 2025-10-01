import { BaseService } from './BaseService';
import { TemplateErrorLog } from '../type/TemplateErrorLog';
import { TemplateErrorLogSearchInput } from '../type/TemplateErrorLogSearchInput';
import { TemplateErrorLogResponse } from '../type/TemplateErrorLogResponse';
import { TemplateErrorLogStats } from '../type/TemplateErrorLogStats';
/**
 Service for managing template error logs
 * Provides methods for retrieving, searching, and analyzing template error logs including individual error details, paginated search results, and statistical summaries for monitoring and debugging purposes.
 */
export class TemplateErrorLogService extends BaseService {
  /**
   Retrieve a specific template error log by ID
   * @param id - Unique identifier for the error log
   * @returns Promise resolving to the template error log
   */
  async getTemplateErrorLog(id: string): Promise<TemplateErrorLog> {
    const query = `
      query templateErrorLog($id: String!) {
        templateErrorLog(id: $id) {
          id
          stackTrace
          createdAt
          eventInstance
          topicName
          errorType
          errorMessage
          templateId
          fieldName
        }
      }
    `;
    const result = await this.client.query(query, { id });
    return new TemplateErrorLog(result.templateErrorLog);
  }
  /**
   Search for template error logs with filtering and pagination
   * @param input - Search criteria and pagination parameters
   * @returns Promise resolving to paginated template error log results
   */
  async searchTemplateErrorLogs(input: TemplateErrorLogSearchInput): Promise<TemplateErrorLogResponse> {
    const query = `
      query templateErrorLogs($input: TemplateErrorLogSearchInput!) {
        templateErrorLogs(input: $input) {
          items {
            id
            stackTrace
            createdAt
            eventInstance
            topicName
            errorType
            errorMessage
            templateId
            fieldName
          }
          itemsFound
          page
          offset
          pages
          start
          end
        }
      }
    `;
    const result = await this.client.query(query, { input });
    return {
      ...result.templateErrorLogs,
      items: result.templateErrorLogs.items.map((item: any) => new TemplateErrorLog(item))
    };
  }
  /**
   Retrieve statistical summary of template error logs
   * @returns Promise resolving to template error log statistics
   */
  async getTemplateErrorLogStats(): Promise<TemplateErrorLogStats> {
    const query = `
      query templateErrorLogStats {
        templateErrorLogStats {
          totalCount
          renderErrorCount
          customQueryErrorCount
          oldestEntry
          newestEntry
        }
      }
    `;
    const result = await this.client.query(query);
    return result.templateErrorLogStats;
  }
}