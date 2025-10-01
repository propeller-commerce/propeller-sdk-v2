import { BaseService } from './BaseService';
import { Address } from '../type/Address';
import { CompanyAddressCreateInput } from '../type/CompanyAddressCreateInput';
import { CompanyAddressUpdateInput } from '../type/CompanyAddressUpdateInput';
import { CompanyAddressDeleteInput } from '../type/CompanyAddressDeleteInput';
import { CustomerAddressCreateInput } from '../type/CustomerAddressCreateInput';
import { CustomerAddressUpdateInput } from '../type/CustomerAddressUpdateInput';
import { CustomerAddressDeleteInput } from '../type/CustomerAddressDeleteInput';
/**
 Service class for Address-related GraphQL operations
 */
export class AddressService extends BaseService {
  /**
   Fetches addresses for a company
   * @param companyId Company ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByCompanyId(companyId: number): Promise<Address[]> {
    const variables = { companyId };
    const result = await this.executeQuery('addressesByCompanyId', variables);
    return result.data.addressesByCompanyId.map((address: any) => new Address(address));
  }
  /**
   Fetches addresses for a customer
   * @param customerId Customer ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByCustomerId(customerId: number): Promise<Address[]> {
    const variables = { customerId };
    const result = await this.executeQuery('addressesByCustomerId', variables);
    return result.data.addressesByCustomerId.map((address: any) => new Address(address));
  }
  /**
   Fetches addresses for an order
   * @param orderId Order ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByOrderId(orderId: number): Promise<Address[]> {
    const variables = { orderId };
    const result = await this.executeQuery('addressesByOrderId', variables);
    return result.data.addressesByOrderId.map((address: any) => new Address(address));
  }
  /**
   Fetches addresses for a user
   * @param userId User ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByUserId(userId: number): Promise<Address[]> {
    const variables = { userId };
    const result = await this.executeQuery('addressesByUserId', variables);
    return result.data.addressesByUserId.map((address: any) => new Address(address));
  }
  // Company Address Methods
  /**
   Creates a new address for a company
   * @param input Company address creation input data
   * @returns Promise<Address> The created address
   */
  async createCompanyAddress(input: CompanyAddressCreateInput): Promise<Address> {
    const variables = { input };
    const result = await this.executeMutation('companyAddressCreate', variables);
    return new Address(result.data.companyAddressCreate);
  }
  /**
   Updates an existing company address
   * @param input Company address update input data
   * @returns Promise<Address> The updated address
   */
  async updateCompanyAddress(input: CompanyAddressUpdateInput): Promise<Address> {
    const variables = { input };
    const result = await this.executeMutation('companyAddressUpdate', variables);
    return new Address(result.data.companyAddressUpdate);
  }
  /**
   Deletes a company address
   * @param input Company address deletion input data
   * @returns Promise<boolean> Success status of the deletion
   */
  async deleteCompanyAddress(input: CompanyAddressDeleteInput): Promise<boolean> {
    const variables = { input };
    const result = await this.executeMutation('companyAddressDelete', variables);
    return result.data.companyAddressDelete;
  }
  // Customer Address Methods
  /**
   Creates a new address for a customer
   * @param input Customer address creation input data
   * @returns Promise<Address> The created address
   */
  async createCustomerAddress(input: CustomerAddressCreateInput): Promise<Address> {
    const variables = { input };
    const result = await this.executeMutation('customerAddressCreate', variables);
    return new Address(result.data.customerAddressCreate);
  }
  /**
   Updates an existing customer address
   * @param input Customer address update input data
   * @returns Promise<Address> The updated address
   */
  async updateCustomerAddress(input: CustomerAddressUpdateInput): Promise<Address> {
    const variables = { input };
    const result = await this.executeMutation('customerAddressUpdate', variables);
    return new Address(result.data.customerAddressUpdate);
  }
  /**
   Deletes a customer address
   * @param input Customer address deletion input data
   * @returns Promise<boolean> Success status of the deletion
   */
  async deleteCustomerAddress(input: CustomerAddressDeleteInput): Promise<boolean> {
    const variables = { input };
    const result = await this.executeMutation('customerAddressDelete', variables);
    return result.data.customerAddressDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}