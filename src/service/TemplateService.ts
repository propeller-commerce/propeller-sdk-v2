import { DocumentTemplate } from '../type/DocumentTemplate';
import { EmailTemplate } from '../type/EmailTemplate';
import { TemplateResponse } from '../type/TemplateResponse';
import { TemplateSearchInput } from '../type/TemplateSearchInput';
import { Base64File } from '../type/Base64File';
import { DocumentTemplateCreateInput } from '../type/DocumentTemplateCreateInput';
import { DocumentTemplateUpdateInput } from '../type/DocumentTemplateUpdateInput';
import { EmailTemplateCreateInput } from '../type/EmailTemplateCreateInput';
import { EmailTemplateUpdateInput } from '../type/EmailTemplateUpdateInput';
import { TemplateRenderInput } from '../type/TemplateRenderInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as templateDoc } from '../generated/operations/template';
import { document as templatesDoc } from '../generated/operations/templates';
import { document as documentTemplateCreateDoc } from '../generated/operations/documentTemplateCreate';
import { document as documentTemplateUpdateDoc } from '../generated/operations/documentTemplateUpdate';
import { document as documentTemplateRenderToPDFDoc } from '../generated/operations/documentTemplateRenderToPDF';
import { document as emailTemplateCreateDoc } from '../generated/operations/emailTemplateCreate';
import { document as emailTemplateUpdateDoc } from '../generated/operations/emailTemplateUpdate';
import { document as emailTemplateAddAttachmentDoc } from '../generated/operations/emailTemplateAddAttachment';
import { document as emailTemplateRemoveAttachmentDoc } from '../generated/operations/emailTemplateRemoveAttachment';
import type { DocumentTemplateRenderToPDFVariables, DocumentTemplateUpdateVariables, EmailTemplateAddAttachmentVariables, EmailTemplateRemoveAttachmentVariables, EmailTemplateUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing document and email templates
 */
export function templateService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific document template
       * @param id Document template ID
       * @returns Promise<DocumentTemplate> Document template data
       */
    async getDocumentTemplate(id: string): Promise<DocumentTemplate> {
      const result = await runOperation(client, templateDoc, 'template', { id });
      return result.data.template as DocumentTemplate;
    },
    /**
       Retrieves a specific email template
       * @param id Email template ID
       * @returns Promise<EmailTemplate> Email template data
       */
    async getEmailTemplate(id: string): Promise<EmailTemplate> {
      const result = await runOperation(client, templateDoc, 'template', { id });
      return result.data.template as EmailTemplate;
    },
    /**
       Fetches a list of templates with search criteria
       * @param input Template search input parameters
       * @returns Promise<TemplateResponse> The templates response data
       */
    async getTemplates(input?: TemplateSearchInput): Promise<TemplateResponse> {
      const result = await runOperation(client, templatesDoc, 'templates', { input });
      return result.data.templates as TemplateResponse;
    },
    /**
       Creates a new document template
       * @param input Document template creation input
       * @returns Promise<DocumentTemplate> The created document template
       */
    async createDocumentTemplate(input: DocumentTemplateCreateInput): Promise<DocumentTemplate> {
      const result = await runOperation(client, documentTemplateCreateDoc, 'documentTemplateCreate', { input });
      return result.data.documentTemplateCreate as DocumentTemplate;
    },
    /**
       Updates an existing document template
       * @param input Document template update input
       * @returns Promise<DocumentTemplate> The updated document template
       */
    async updateDocumentTemplate(variables: DocumentTemplateUpdateVariables): Promise<DocumentTemplate> {
      const result = await runOperation(client, documentTemplateUpdateDoc, 'documentTemplateUpdate', variables);
      return result.data.documentTemplateUpdate as DocumentTemplate;
    },
    /**
       Renders a document template to PDF
       * @param input Template render input data
       * @returns Promise<any> The PDF response
       */
    async renderDocumentTemplateToPDF(variables: DocumentTemplateRenderToPDFVariables): Promise<Base64File> {
      const result = await runOperation(client, documentTemplateRenderToPDFDoc, 'documentTemplateRenderToPDF', variables);
      return result.data.documentTemplateRenderToPDF as Base64File;
    },
    /**
       Creates a new email template
       * @param input Email template creation input
       * @returns Promise<EmailTemplate> The created email template
       */
    async createEmailTemplate(input: EmailTemplateCreateInput): Promise<EmailTemplate> {
      const result = await runOperation(client, emailTemplateCreateDoc, 'emailTemplateCreate', { input });
      return result.data.emailTemplateCreate as EmailTemplate;
    },
    /**
       Updates an existing email template
       * @param input Email template update input
       * @returns Promise<EmailTemplate> The updated email template
       */
    async updateEmailTemplate(variables: EmailTemplateUpdateVariables): Promise<EmailTemplate> {
      const result = await runOperation(client, emailTemplateUpdateDoc, 'emailTemplateUpdate', variables);
      return result.data.emailTemplateUpdate as EmailTemplate;
    },
    /**
       Adds an attachment to email template
       * @param input Attachment input data
       * @returns Promise<EmailTemplate> The updated email template
       */
    async addAttachmentToEmailTemplate(variables: EmailTemplateAddAttachmentVariables): Promise<EmailTemplate> {
      const result = await runOperation(client, emailTemplateAddAttachmentDoc, 'emailTemplateAddAttachment', variables);
      return result.data.emailTemplateAddAttachment as EmailTemplate;
    },
    /**
       Removes an attachment from email template
       * @param input Attachment removal input data
       * @returns Promise<EmailTemplate> The updated email template
       */
    async removeAttachmentFromEmailTemplate(variables: EmailTemplateRemoveAttachmentVariables): Promise<EmailTemplate> {
      const result = await runOperation(client, emailTemplateRemoveAttachmentDoc, 'emailTemplateRemoveAttachment', variables);
      return result.data.emailTemplateRemoveAttachment as EmailTemplate;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `templateService(client)`.
 */
export class TemplateService {
  private readonly _svc: ReturnType<typeof templateService>;
  constructor(client: GraphQLClient) { this._svc = templateService(client); }
  /**
   * Retrieves a specific document template
   * @param id Document template ID
   */
  getDocumentTemplate(id: string): Promise<DocumentTemplate> { return this._svc.getDocumentTemplate(id); }
  /**
   * Retrieves a specific email template
   * @param id Email template ID
   */
  getEmailTemplate(id: string): Promise<EmailTemplate> { return this._svc.getEmailTemplate(id); }
  /**
   * Fetches a list of templates with search criteria
   * @param input Template search input parameters
   */
  getTemplates(input?: TemplateSearchInput): Promise<TemplateResponse> { return this._svc.getTemplates(input); }
  /**
   * Creates a new document template
   * @param input Document template creation input
   */
  createDocumentTemplate(input: DocumentTemplateCreateInput): Promise<DocumentTemplate> { return this._svc.createDocumentTemplate(input); }
  /**
   * Updates an existing document template
   * @param input Document template update input
   */
  updateDocumentTemplate(variables: DocumentTemplateUpdateVariables): Promise<DocumentTemplate> { return this._svc.updateDocumentTemplate(variables); }
  /**
   * Renders a document template to PDF
   * @param input Template render input data
   */
  renderDocumentTemplateToPDF(variables: DocumentTemplateRenderToPDFVariables): Promise<Base64File> { return this._svc.renderDocumentTemplateToPDF(variables); }
  /**
   * Creates a new email template
   * @param input Email template creation input
   */
  createEmailTemplate(input: EmailTemplateCreateInput): Promise<EmailTemplate> { return this._svc.createEmailTemplate(input); }
  /**
   * Updates an existing email template
   * @param input Email template update input
   */
  updateEmailTemplate(variables: EmailTemplateUpdateVariables): Promise<EmailTemplate> { return this._svc.updateEmailTemplate(variables); }
  /**
   * Adds an attachment to email template
   * @param input Attachment input data
   */
  addAttachmentToEmailTemplate(variables: EmailTemplateAddAttachmentVariables): Promise<EmailTemplate> { return this._svc.addAttachmentToEmailTemplate(variables); }
  /**
   * Removes an attachment from email template
   * @param input Attachment removal input data
   */
  removeAttachmentFromEmailTemplate(variables: EmailTemplateRemoveAttachmentVariables): Promise<EmailTemplate> { return this._svc.removeAttachmentFromEmailTemplate(variables); }
}
