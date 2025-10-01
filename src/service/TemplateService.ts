import { BaseService } from './BaseService';
import { DocumentTemplate } from '../type/DocumentTemplate';
import { EmailTemplate } from '../type/EmailTemplate';
import { TemplateResponse } from '../type/TemplateResponse';
import { TemplateSearchInput } from '../type/TemplateSearchInput';
import { TemplateSortInput } from '../type/TemplateSortInput';
import { DocumentTemplateCreateInput } from '../type/DocumentTemplateCreateInput';
import { DocumentTemplateUpdateInput } from '../type/DocumentTemplateUpdateInput';
import { EmailTemplateCreateInput } from '../type/EmailTemplateCreateInput';
import { EmailTemplateUpdateInput } from '../type/EmailTemplateUpdateInput';
import { TemplateRenderInput } from '../type/TemplateRenderInput';
/**
 Service for managing document and email templates
 * @extends BaseService
 */
export class TemplateService extends BaseService {
  /**
   Retrieves a specific document template
   * @param id Document template ID
   * @returns Promise<DocumentTemplate> Document template data
   */
  async getDocumentTemplate(id: number): Promise<DocumentTemplate> {
    const variables = { id };
    const result = await this.executeQuery('documentTemplate', variables);
    return new DocumentTemplate(result.data.documentTemplate);
  }
  /**
   Retrieves a specific email template
   * @param id Email template ID
   * @returns Promise<EmailTemplate> Email template data
   */
  async getEmailTemplate(id: number): Promise<EmailTemplate> {
    const variables = { id };
    const result = await this.executeQuery('emailTemplate', variables);
    return new EmailTemplate(result.data.emailTemplate);
  }
  /**
   Fetches a list of templates with search criteria
   * @param input Template search input parameters
   * @returns Promise<TemplateResponse> The templates response data
   */
  async getTemplates(input?: TemplateSearchInput): Promise<TemplateResponse> {
    const variables = { input };
    const result = await this.executeQuery('templates', variables);
    return new TemplateResponse(result.data.templates);
  }
  /**
   Creates a new document template
   * @param input Document template creation input
   * @returns Promise<DocumentTemplate> The created document template
   */
  async createDocumentTemplate(input: DocumentTemplateCreateInput): Promise<DocumentTemplate> {
    const variables = { input };
    const result = await this.executeMutation('documentTemplateCreate', variables);
    return new DocumentTemplate(result.data.documentTemplateCreate);
  }
  /**
   Updates an existing document template
   * @param input Document template update input
   * @returns Promise<DocumentTemplate> The updated document template
   */
  async updateDocumentTemplate(input: DocumentTemplateUpdateInput): Promise<DocumentTemplate> {
    const variables = { input };
    const result = await this.executeMutation('documentTemplateUpdate', variables);
    return new DocumentTemplate(result.data.documentTemplateUpdate);
  }
  /**
   Renders a document template to PDF
   * @param input Template render input data
   * @returns Promise<any> The PDF response
   */
  async renderDocumentTemplateToPDF(input: TemplateRenderInput): Promise<any> {
    const variables = { input };
    const result = await this.executeMutation('documentTemplateRenderToPDF', variables);
    return result.data.documentTemplateRenderToPDF;
  }
  /**
   Creates a new email template
   * @param input Email template creation input
   * @returns Promise<EmailTemplate> The created email template
   */
  async createEmailTemplate(input: EmailTemplateCreateInput): Promise<EmailTemplate> {
    const variables = { input };
    const result = await this.executeMutation('emailTemplateCreate', variables);
    return new EmailTemplate(result.data.emailTemplateCreate);
  }
  /**
   Updates an existing email template
   * @param input Email template update input
   * @returns Promise<EmailTemplate> The updated email template
   */
  async updateEmailTemplate(input: EmailTemplateUpdateInput): Promise<EmailTemplate> {
    const variables = { input };
    const result = await this.executeMutation('emailTemplateUpdate', variables);
    return new EmailTemplate(result.data.emailTemplateUpdate);
  }
  /**
   Adds an attachment to email template
   * @param input Attachment input data
   * @returns Promise<EmailTemplate> The updated email template
   */
  async addAttachmentToEmailTemplate(input: any): Promise<EmailTemplate> {
    const variables = { input };
    const result = await this.executeMutation('emailTemplateAddAttachment', variables);
    return new EmailTemplate(result.data.emailTemplateAddAttachment);
  }
  /**
   Removes an attachment from email template
   * @param input Attachment removal input data
   * @returns Promise<EmailTemplate> The updated email template
   */
  async removeAttachmentFromEmailTemplate(input: any): Promise<EmailTemplate> {
    const variables = { input };
    const result = await this.executeMutation('emailTemplateRemoveAttachment', variables);
    return new EmailTemplate(result.data.emailTemplateRemoveAttachment);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}