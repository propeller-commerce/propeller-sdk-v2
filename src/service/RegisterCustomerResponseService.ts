import { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import { RegisterCustomerInput } from '../type/RegisterCustomerInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as customerRegisterDoc } from '../generated/operations/customerRegister';
/**
 Service class for RegisterCustomerResponse-related GraphQL operations
 */
export function registerCustomerResponseService(client: GraphQLClient) {
  return {
    /**
       Registers a new customer and returns response
       * @param input RegisterCustomer input data
       * @returns Promise<RegisterCustomerResponse> The register customer response data
       */
    async registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse> {
      const result = await runOperation(client, customerRegisterDoc, 'customerRegister', { input });
      return result.data.customerRegister as RegisterCustomerResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `registerCustomerResponseService(client)`.
 */
export class RegisterCustomerResponseService {
  private readonly _svc: ReturnType<typeof registerCustomerResponseService>;
  constructor(client: GraphQLClient) { this._svc = registerCustomerResponseService(client); }
  /**
   * Registers a new customer and returns response
   * @param input RegisterCustomer input data
   */
  registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse> { return this._svc.registerCustomer(input); }
}
