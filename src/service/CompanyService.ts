import { BaseService } from './BaseService';
import { Company } from '../type/Company';
import { CompaniesResponse } from '../type/CompaniesResponse';
import { CompanySearchInput } from '../type/CompanySearchInput';
import { CreateCompanyInput } from '../type/CreateCompanyInput';
import { UpdateCompanyInput } from '../type/UpdateCompanyInput';
import { CompanyCsvInput } from '../type/CompanyCsvInput';
/**
 Service for managing companies
 * @extends BaseService
 */
export class CompanyService extends BaseService {
  /**
   Retrieves a specific company
   * @param id Company ID
   * @returns Promise<Company> Company data
   */
  async getCompany(id: number): Promise<Company> {
    const variables = { id };
    const result = await this.executeQuery('company', variables);
    return new Company(result.data.company);
  }
  /**
   Retrieves companies with search criteria
   * @param input Search input parameters
   * @returns Promise<CompaniesResponse> Companies response
   */
  async getCompanies(input?: CompanySearchInput): Promise<CompaniesResponse> {
    const variables = { input };
    const result = await this.executeQuery('companies', variables);
    return new CompaniesResponse(result.data.companies);
  }
  /**
   Creates a new company
   * @param input Company creation input
   * @returns Promise<Company> The created company
   */
  async createCompany(input: CreateCompanyInput): Promise<Company> {
    const variables = { input };
    const result = await this.executeMutation('companyCreate', variables);
    return new Company(result.data.companyCreate);
  }
  /**
   Updates an existing company
   * @param input Company update input
   * @returns Promise<Company> The updated company
   */
  async updateCompany(input: UpdateCompanyInput): Promise<Company> {
    const variables = { input };
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