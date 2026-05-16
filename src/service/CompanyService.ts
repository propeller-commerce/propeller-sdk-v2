import { Company } from '../type/Company';
import { CompaniesResponse } from '../type/CompaniesResponse';
import { CreateCompanyInput } from '../type/CreateCompanyInput';
import { UpdateCompanyInput } from '../type/UpdateCompanyInput';
import { CompanyCsvInput } from '../type/CompanyCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { AttributeResultSearchInput, CompanySearchArguments, ContactPurchaseAuthorizationConfigSearchInput, ContactSearchArguments } from '../type';
/**
 Service for managing companies
 */
export interface CompanyVariables {
  /** Company ID */
  id: number;
  /** Contact purchase authorization config search input */
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  /** Company attributes search input */
  companyAttributesInput: AttributeResultSearchInput
  /** Contact search arguments */
  contactSearchArguments: ContactSearchArguments
}

/**
 * Variables for `company search` — retrieves companies with search criteria
 */
export interface CompanySearchVariables {
  /** Company search input */
  input: CompanySearchArguments;
  /** Contact purchase authorization config search input */
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  /** Company attributes search input */
  companyAttributesInput: AttributeResultSearchInput
  /** Contact search arguments */
  contactSearchArguments: ContactSearchArguments
}

/**
 * Variables for `company create` — creates a new company
 */
export interface CompanyCreateVariables {
  /** Company creation input */
  input: CreateCompanyInput;
  /** Contact purchase authorization config search input */
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  /** Company attributes search input */
  companyAttributesInput: AttributeResultSearchInput
  /** Contact search arguments */
  contactSearchArguments: ContactSearchArguments
}

/**
 * Variables for `company update` — updates an existing company
 */
export interface CompanyUpdateVariables {
  id: number;
  /** Company update input */
  input: UpdateCompanyInput;
  /** Contact purchase authorization config search input */
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  /** Company attributes search input */
  companyAttributesInput: AttributeResultSearchInput
  /** Contact search arguments */
  contactSearchArguments: ContactSearchArguments
}

import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as companyDoc } from '../generated/operations/company';
import { document as companiesDoc } from '../generated/operations/companies';
import { document as companyCreateDoc } from '../generated/operations/companyCreate';
import { document as companyUpdateDoc } from '../generated/operations/companyUpdate';
import { document as companyCsvImportDoc } from '../generated/operations/companyCsvImport';
export function companyService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific company
       * @param variables
       * - id: number - Company ID
       * - contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput - Contact purchase authorization config search input
       * - companyAttributesInput: AttributeResultSearchInput - Company attributes search input
       * - contactSearchArguments: ContactSearchArguments - Contact search arguments
       * @returns Promise<Company> Company data
       */
    async getCompany(variables: CompanyVariables): Promise<Company> {
      const result = await runOperation(client, companyDoc, 'company', variables);
      return result.data.company as Company;
    },
    /**
       Retrieves companies with search criteria
       * @param variables
       * - input: CompanySearchInput - Company search input
       * - contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput - Contact purchase authorization config search input
       * - companyAttributesInput: AttributeResultSearchInput - Company attributes search input
       * - contactSearchArguments: ContactSearchArguments - Contact search arguments
       * @returns Promise<CompaniesResponse> Companies response
       */
    async getCompanies(variables: CompanySearchVariables): Promise<CompaniesResponse> {
      const result = await runOperation(client, companiesDoc, 'companies', variables);
      return result.data.companies as CompaniesResponse;
    },
    /**
       Creates a new company
       * @param variables
       * - input: CreateCompanyInput - Company creation input
       * - contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput - Contact purchase authorization config search input
       * - companyAttributesInput: AttributeResultSearchInput - Company attributes search input
       * - contactSearchArguments: ContactSearchArguments - Contact search arguments
       * @returns Promise<Company> The created company
       */
    async createCompany(variables: CompanyCreateVariables): Promise<Company> {
      const result = await runOperation(client, companyCreateDoc, 'companyCreate', variables);
      return result.data.companyCreate as Company;
    },
    /**
       Updates an existing company
       * @param variables
       * - input: UpdateCompanyInput - Company update input
       * - contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput - Contact purchase authorization config search input
       * - companyAttributesInput: AttributeResultSearchInput - Company attributes search input
       * - contactSearchArguments: ContactSearchArguments - Contact search arguments
       * @returns Promise<Company> The updated company
       */
    async updateCompany(variables: CompanyUpdateVariables): Promise<Company> {
      const result = await runOperation(client, companyUpdateDoc, 'companyUpdate', variables);
      return result.data.companyUpdate as Company;
    },
    /**
       Imports companies from CSV file
       * @param input Company CSV import input
       * @returns Promise<Company[]> Array of imported companies
       */
    async importCompaniesCsv(input: CompanyCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation(client, companyCsvImportDoc, 'companyCsvImport', { input });
      return result.data.companyCsvImport as CsvImportResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `companyService(client)`.
 */
export class CompanyService {
  private readonly _svc: ReturnType<typeof companyService>;
  constructor(client: GraphQLClient) { this._svc = companyService(client); }
  /**
   * Retrieves a specific company
   * @param id Company ID
   * @param contactPAConfigInput Contact purchase authorization config search input
   * @param companyAttributesInput Company attributes search input
   * @param contactSearchArguments Contact search arguments
   */
  getCompany(variables: CompanyVariables): Promise<Company> { return this._svc.getCompany(variables); }
  /**
   * Retrieves companies with search criteria
   * @param input Company search input
   * @param contactPAConfigInput Contact purchase authorization config search input
   * @param companyAttributesInput Company attributes search input
   * @param contactSearchArguments Contact search arguments
   */
  getCompanies(variables: CompanySearchVariables): Promise<CompaniesResponse> { return this._svc.getCompanies(variables); }
  /**
   * Creates a new company
   * @param input Company creation input
   * @param contactPAConfigInput Contact purchase authorization config search input
   * @param companyAttributesInput Company attributes search input
   * @param contactSearchArguments Contact search arguments
   */
  createCompany(variables: CompanyCreateVariables): Promise<Company> { return this._svc.createCompany(variables); }
  /**
   * Updates an existing company
   * @param input Company update input
   * @param contactPAConfigInput Contact purchase authorization config search input
   * @param companyAttributesInput Company attributes search input
   * @param contactSearchArguments Contact search arguments
   */
  updateCompany(variables: CompanyUpdateVariables): Promise<Company> { return this._svc.updateCompany(variables); }
  /**
   * Imports companies from CSV file
   * @param input Company CSV import input
   */
  importCompaniesCsv(input: CompanyCsvInput): Promise<CsvImportResponse> { return this._svc.importCompaniesCsv(input); }
}
