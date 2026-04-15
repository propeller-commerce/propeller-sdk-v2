import { BaseService } from './BaseService';
import { Company } from '../type/Company';
import { CompaniesResponse } from '../type/CompaniesResponse';
import { CreateCompanyInput } from '../type/CreateCompanyInput';
import { UpdateCompanyInput } from '../type/UpdateCompanyInput';
import { CompanyCsvInput } from '../type/CompanyCsvInput';
import { AttributeResultSearchInput, CompanySearchArguments, ContactPurchaseAuthorizationConfigSearchInput, ContactSearchArguments } from '../type';
/**
 Service for managing companies
 * @extends BaseService
 */
export interface CompanyVariables {
  id: number;
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  companyAttributesInput: AttributeResultSearchInput
  contactSearchArguments: ContactSearchArguments
}

export interface CompanySearchVariables {
  input: CompanySearchArguments;
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  companyAttributesInput: AttributeResultSearchInput
  contactSearchArguments: ContactSearchArguments
}

export interface CompanyCreateVariables {
  input: CreateCompanyInput;
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  companyAttributesInput: AttributeResultSearchInput
  contactSearchArguments: ContactSearchArguments
}

export interface CompanyUpdateVariables {
  id: number;
  input: UpdateCompanyInput;
  contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  companyAttributesInput: AttributeResultSearchInput
  contactSearchArguments: ContactSearchArguments
}

export class CompanyService extends BaseService {
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
    const result = await this.executeQuery('company', variables);
    return new Company(result.data.company);
  }
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
    const result = await this.executeQuery('companies', variables);
    return new CompaniesResponse(result.data.companies);
  }
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
    const result = await this.executeMutation('companyCreate', variables);
    return new Company(result.data.companyCreate);
  }
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
    const result = await this.executeMutation('companyUpdate', variables);
    return new Company(result.data.companyUpdate);
  }
  /**
   Imports companies from CSV file
   * @param input Company CSV import input
   * @returns Promise<Company[]> Array of imported companies
   */
  async importCompaniesCsv(input: CompanyCsvInput): Promise<Company[]> {
    const variables = { input };
    const result = await this.executeMutation('companyCsvImport', variables);
    return result.data.companyCsvImport.map((company: any) => new Company(company));
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}