import { Address } from '../type/Address';
import { CompanyAddressCreateInput } from '../type/CompanyAddressCreateInput';
import { CompanyAddressUpdateInput } from '../type/CompanyAddressUpdateInput';
import { CompanyAddressDeleteInput } from '../type/CompanyAddressDeleteInput';
import { CustomerAddressCreateInput } from '../type/CustomerAddressCreateInput';
import { CustomerAddressUpdateInput } from '../type/CustomerAddressUpdateInput';
import { CustomerAddressDeleteInput } from '../type/CustomerAddressDeleteInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as addressesByCompanyIdDoc } from '../generated/operations/addressesByCompanyId';
import { document as addressesByCustomerIdDoc } from '../generated/operations/addressesByCustomerId';
import { document as addressesByOrderIdDoc } from '../generated/operations/addressesByOrderId';
import { document as companyAddressCreateDoc } from '../generated/operations/companyAddressCreate';
import { document as companyAddressUpdateDoc } from '../generated/operations/companyAddressUpdate';
import { document as companyAddressDeleteDoc } from '../generated/operations/companyAddressDelete';
import { document as customerAddressCreateDoc } from '../generated/operations/customerAddressCreate';
import { document as customerAddressUpdateDoc } from '../generated/operations/customerAddressUpdate';
import { document as customerAddressDeleteDoc } from '../generated/operations/customerAddressDelete';
/**
 Service class for Address-related GraphQL operations
 */
export function addressService(client: GraphQLClient) {
  return {
    /**
       Fetches addresses for a company
       * @param companyId Company ID
       * @returns Promise<Address[]> The addresses array
       */
    async getAddressesByCompanyId(companyId: number): Promise<Address[]> {
      const result = await runOperation<{ addressesByCompanyId: Address[] }>(client, addressesByCompanyIdDoc, 'addressesByCompanyId', { companyId });
      return result.data.addressesByCompanyId as Address[];
    },
    /**
       Fetches addresses for a customer
       * @param customerId Customer ID
       * @returns Promise<Address[]> The addresses array
       */
    async getAddressesByCustomerId(customerId: number): Promise<Address[]> {
      const result = await runOperation<{ addressesByCustomerId: Address[] }>(client, addressesByCustomerIdDoc, 'addressesByCustomerId', { customerId });
      return result.data.addressesByCustomerId as Address[];
    },
    /**
       Fetches addresses for an order
       * @deprecated The upstream `addressesByOrderId` query is deprecated. Use `OrderService.getOrderAddresses` instead.
       * @param orderId Order ID
       * @returns Promise<Address[]> The addresses array
       */
    async getAddressesByOrderId(orderId: number): Promise<Address[]> {
      const result = await runOperation<{ addressesByOrderId: Address[] }>(client, addressesByOrderIdDoc, 'addressesByOrderId', { orderId });
      return result.data.addressesByOrderId as Address[];
    },
    /**
       Creates a new address for a company
       * @param input Company address creation input data
       * @returns Promise<Address> The created address
       */
    async createCompanyAddress(input: CompanyAddressCreateInput): Promise<Address> {
      const result = await runOperation<{ companyAddressCreate: Address }>(client, companyAddressCreateDoc, 'companyAddressCreate', { input });
      return result.data.companyAddressCreate as Address;
    },
    /**
       Updates an existing company address
       * @param input Company address update input data
       * @returns Promise<Address> The updated address
       */
    async updateCompanyAddress(input: CompanyAddressUpdateInput): Promise<Address> {
      const result = await runOperation<{ companyAddressUpdate: Address }>(client, companyAddressUpdateDoc, 'companyAddressUpdate', { input });
      return result.data.companyAddressUpdate as Address;
    },
    /**
       Deletes a company address
       * @param input Company address deletion input data
       * @returns Promise<boolean> Success status of the deletion
       */
    async deleteCompanyAddress(input: CompanyAddressDeleteInput): Promise<boolean> {
      const result = await runOperation<{ companyAddressDelete: boolean }>(client, companyAddressDeleteDoc, 'companyAddressDelete', { input });
      return result.data.companyAddressDelete;
    },
    /**
       Creates a new address for a customer
       * @param input Customer address creation input data
       * @returns Promise<Address> The created address
       */
    async createCustomerAddress(input: CustomerAddressCreateInput): Promise<Address> {
      const result = await runOperation<{ customerAddressCreate: Address }>(client, customerAddressCreateDoc, 'customerAddressCreate', { input });
      return result.data.customerAddressCreate as Address;
    },
    /**
       Updates an existing customer address
       * @param input Customer address update input data
       * @returns Promise<Address> The updated address
       */
    async updateCustomerAddress(input: CustomerAddressUpdateInput): Promise<Address> {
      const result = await runOperation<{ customerAddressUpdate: Address }>(client, customerAddressUpdateDoc, 'customerAddressUpdate', { input });
      return result.data.customerAddressUpdate as Address;
    },
    /**
       Deletes a customer address
       * @param input Customer address deletion input data
       * @returns Promise<boolean> Success status of the deletion
       */
    async deleteCustomerAddress(input: CustomerAddressDeleteInput): Promise<boolean> {
      const result = await runOperation<{ customerAddressDelete: boolean }>(client, customerAddressDeleteDoc, 'customerAddressDelete', { input });
      return result.data.customerAddressDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `addressService(client)`.
 */
export class AddressService {
  private readonly _svc: ReturnType<typeof addressService>;
  constructor(client: GraphQLClient) { this._svc = addressService(client); }
  /**
   * Fetches addresses for a company
   * @param companyId Company ID
   */
  getAddressesByCompanyId(companyId: number): Promise<Address[]> { return this._svc.getAddressesByCompanyId(companyId); }
  /**
   * Fetches addresses for a customer
   * @param customerId Customer ID
   */
  getAddressesByCustomerId(customerId: number): Promise<Address[]> { return this._svc.getAddressesByCustomerId(customerId); }
  /**
   * Fetches addresses for an order
   * @param orderId Order ID
   */
  getAddressesByOrderId(orderId: number): Promise<Address[]> { return this._svc.getAddressesByOrderId(orderId); }
  /**
   * Creates a new address for a company
   * @param input Company address creation input data
   */
  createCompanyAddress(input: CompanyAddressCreateInput): Promise<Address> { return this._svc.createCompanyAddress(input); }
  /**
   * Updates an existing company address
   * @param input Company address update input data
   */
  updateCompanyAddress(input: CompanyAddressUpdateInput): Promise<Address> { return this._svc.updateCompanyAddress(input); }
  /**
   * Deletes a company address
   * @param input Company address deletion input data
   */
  deleteCompanyAddress(input: CompanyAddressDeleteInput): Promise<boolean> { return this._svc.deleteCompanyAddress(input); }
  /**
   * Creates a new address for a customer
   * @param input Customer address creation input data
   */
  createCustomerAddress(input: CustomerAddressCreateInput): Promise<Address> { return this._svc.createCustomerAddress(input); }
  /**
   * Updates an existing customer address
   * @param input Customer address update input data
   */
  updateCustomerAddress(input: CustomerAddressUpdateInput): Promise<Address> { return this._svc.updateCustomerAddress(input); }
  /**
   * Deletes a customer address
   * @param input Customer address deletion input data
   */
  deleteCustomerAddress(input: CustomerAddressDeleteInput): Promise<boolean> { return this._svc.deleteCustomerAddress(input); }
}
