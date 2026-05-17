import { RegisterContactResponse } from '../type/RegisterContactResponse';
import { RegisterContactInput } from '../type/RegisterContactInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as contactRegisterDoc } from '../generated/operations/contactRegister';
import type { ContactRegisterVariables } from '../generated/operationVariables';
/**
 Service class for RegisterContactResponse-related GraphQL operations
 */
export function registerContactResponseService(client: GraphQLClient) {
  return {
    /**
       Registers a new contact and returns response
       * @param input RegisterContact input data
       * @returns Promise<RegisterContactResponse> The register contact response data
       */
    async registerContact(variables: ContactRegisterVariables): Promise<RegisterContactResponse> {
      const result = await runOperation(client, contactRegisterDoc, 'contactRegister', variables);
      return result.data.contactRegister as RegisterContactResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `registerContactResponseService(client)`.
 */
export class RegisterContactResponseService {
  private readonly _svc: ReturnType<typeof registerContactResponseService>;
  constructor(client: GraphQLClient) { this._svc = registerContactResponseService(client); }
  /**
   * Registers a new contact and returns response
   * @param input RegisterContact input data
   */
  registerContact(variables: ContactRegisterVariables): Promise<RegisterContactResponse> { return this._svc.registerContact(variables); }
}
