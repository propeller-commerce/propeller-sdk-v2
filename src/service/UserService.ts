import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as viewerDoc } from '../generated/operations/viewer';
import { document as loginDoc } from '../generated/operations/login';
import { document as userDoc } from '../generated/operations/user';
import { document as authenticationDoc } from '../generated/operations/authentication';
import { document as logoutDoc } from '../generated/operations/logout';
import { document as contactRegisterDoc } from '../generated/operations/contactRegister';
import { document as customerRegisterDoc } from '../generated/operations/customerRegister';
import { document as triggerPasswordSendResetEmailEventDoc } from '../generated/operations/triggerPasswordSendResetEmailEvent';
import { document as claimsResetDoc } from '../generated/operations/claimsReset';
import { document as triggerContactSendWelcomeEmailEventDoc } from '../generated/operations/triggerContactSendWelcomeEmailEvent';
import { document as triggerCustomerSendWelcomeEmailEventDoc } from '../generated/operations/triggerCustomerSendWelcomeEmailEvent';

import type { Contact } from '../type/Contact';
import type { Customer } from '../type/Customer';
import type { LoginInput } from '../type/LoginInput';
import type { Login } from '../type/Login';
import type { GCIPUser } from '../type/GCIPUser';
import type { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import type { ContactPurchaseAuthorizationConfigSearchInput } from '../type/ContactPurchaseAuthorizationConfigSearchInput';
import type { RegisterContactInput } from '../type/RegisterContactInput';
import type { RegisterCustomerInput } from '../type/RegisterCustomerInput';
import type { RegisterContactResponse } from '../type/RegisterContactResponse';
import type { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import type { Logout } from '../type/Logout';
import type {
  ContactCompaniesSearchInput,
  PasswordRecoveryLinkInput,
  TriggerContactSendWelcomeEmailEventInput,
  TriggerCustomerSendWelcomeEmailEventInput,
} from '../type';
import type { ContactRegisterVariables, CustomerRegisterVariables, UserVariables, ViewerVariables } from '../generated/operationVariables';

/**
 * Union type for `viewer` / `user` query results — schema returns either a
 * Contact or a Customer, discriminated via `__typename`.
 */
export type ViewerResult = Contact | Customer;

/** Simplified input object for password reset requests. */
export interface PasswordResetInput {
  /** The email address of the user to generate the recovery link for */
  email: string;
  /** The page the user will be redirected to after the user changed their password */
  redirectUrl?: string;
  /** Text to display that will lead to link when clicked */
  linkText?: string;
  /** The subject of the email (optional, will use default if not provided) */
  subject?: string;
  /** Language for the email (optional) */
  language?: string;
  /** The id of the site to use when sending the email (optional) */
  siteId?: number;
}

/** Input arguments for the `viewer` query. */
export interface ViewerInput {
  /** Contact attributes input arguments */
  contactAttributesInput?: AttributeResultSearchInput;
  /** Contact purchase authorization config input arguments */
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  /** Company attributes input arguments */
  companyAttributesInput?: AttributeResultSearchInput;
  /** Customer attributes input arguments */
  customerAttributesInput?: AttributeResultSearchInput;
  /** Contact companies search input arguments */
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
}

/** Input arguments for the `contactRegister` mutation. */
export interface ContactRegisterInput {
  /** Contact registration input data */
  contactRegisterInput: RegisterContactInput;
  /** Contact attributes input arguments */
  contactAttributesInput?: AttributeResultSearchInput;
  /** Contact purchase authorization config input arguments */
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  /** Company attributes input arguments */
  companyAttributesInput?: AttributeResultSearchInput;
}

/** Input arguments for the `customerRegister` mutation. */
export interface CustomerRegisterInput {
  /** Customer registration input data */
  customerRegisterInput: RegisterCustomerInput;
  /** Customer attributes input arguments */
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Factory for user-related GraphQL operations. Methods preserve the v0.9.x
 * surface: same names, same parameter shapes, returns are now plain objects
 * (with `__typename` available for discrimination, not class instances).
 */
export function userService(client: GraphQLClient) {
  return {
    /**
     * Get current viewer information (authenticated user).
     * Returns `Contact | Customer` — discriminate on `result.__typename`.
     */
    async getViewer(variables: ViewerVariables): Promise<ViewerResult> {
      const result = await runOperation(client, viewerDoc, 'viewer', variables);
      return result.data.viewer as ViewerResult;
    },

    /** Login with credentials. */
    async login(input: LoginInput): Promise<Login> {
      const result = await runOperation(client, loginDoc, 'login', { input });
      return result.data.login as Login;
    },

    /**
     * Get user by id or login (mutually exclusive — provide one).
     * Returns `Contact | Customer` — discriminate on `result.__typename`.
     */
    async getUser(variables: UserVariables): Promise<ViewerResult> {
      const result = await runOperation(client, userDoc, 'user', variables);
      return result.data.user as ViewerResult;
    },

    /** Get authentication information for user by email. */
    async authenticate(email: string): Promise<GCIPUser> {
      const result = await runOperation(client, authenticationDoc, 'authentication', { email });
      return result.data.authentication as GCIPUser;
    },

    /**
     * Logout current user.
     * @deprecated The upstream `logout` mutation is deprecated; a `signOut`
     * mutation will be available in the future.
     */
    async logout(): Promise<Logout> {
      const result = await runOperation(client, logoutDoc, 'logout');
      return result.data.logout as Logout;
    },

    /** Register a new contact. */
    async registerContact(variables: ContactRegisterVariables): Promise<RegisterContactResponse> {
      const result = await runOperation(client, contactRegisterDoc, 'contactRegister', variables);
      return result.data.contactRegister as RegisterContactResponse;
    },

    /** Register a new customer. */
    async registerCustomer(variables: CustomerRegisterVariables): Promise<RegisterCustomerResponse> {
      const result = await runOperation(client, customerRegisterDoc, 'customerRegister', variables);
      return result.data.customerRegister as RegisterCustomerResponse;
    },

    /** Send a password reset email to the specified user. */
    async sendPasswordResetEmail(input: PasswordResetInput): Promise<boolean> {
      const passwordResetInput: PasswordRecoveryLinkInput = {
        email: input.email,
        redirectUrl: input.redirectUrl,
        language: input.language,
      };
      const result = await runOperation(
        client,
        triggerPasswordSendResetEmailEventDoc,
        'triggerPasswordSendResetEmailEvent',
        { input: passwordResetInput }
      );
      return result.data.triggerPasswordSendResetEmailEvent;
    },

    /** Resets all claims for a user by email. */
    async claimsReset(uid: string, email: string): Promise<boolean> {
      const result = await runOperation(client, claimsResetDoc, 'claimsReset', { uid, email });
      return result.data.claimsReset;
    },

    /** Sends a welcome email to a contact. */
    async triggerContactSendWelcomeEmailEvent(
      input: TriggerContactSendWelcomeEmailEventInput
    ): Promise<boolean> {
      const result = await runOperation(
        client,
        triggerContactSendWelcomeEmailEventDoc,
        'triggerContactSendWelcomeEmailEvent',
        { input }
      );
      return result.data.triggerContactSendWelcomeEmailEvent;
    },

    /** Sends a welcome email to a customer. */
    async triggerCustomerSendWelcomeEmailEvent(
      input: TriggerCustomerSendWelcomeEmailEventInput
    ): Promise<boolean> {
      const result = await runOperation(
        client,
        triggerCustomerSendWelcomeEmailEventDoc,
        'triggerCustomerSendWelcomeEmailEvent',
        { input }
      );
      return result.data.triggerCustomerSendWelcomeEmailEvent;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `userService(client)`.
 */
export class UserService {
  private readonly _svc: ReturnType<typeof userService>;
  constructor(client: GraphQLClient) {
    this._svc = userService(client);
  }
  /**
   * Get current viewer information (authenticated user).
   * Returns `Contact | Customer` — discriminate on `result.__typename`.
   */
  getViewer(variables: ViewerVariables): Promise<ViewerResult> {
    return this._svc.getViewer(variables);
  }
  /** Login with credentials. */
  login(input: LoginInput): Promise<Login> {
    return this._svc.login(input);
  }
  /**
   * Get user by id or login (mutually exclusive — provide one).
   * Returns `Contact | Customer` — discriminate on `result.__typename`.
   */
  getUser(variables: UserVariables): Promise<ViewerResult> {
    return this._svc.getUser(variables);
  }
  /** Get authentication information for user by email. */
  authenticate(email: string): Promise<GCIPUser> {
    return this._svc.authenticate(email);
  }
  /**
   * Logout current user.
   * @deprecated The upstream `logout` mutation is deprecated; a `signOut`
   * mutation will be available in the future.
   */
  logout(): Promise<Logout> {
    return this._svc.logout();
  }
  /** Register a new contact. */
  registerContact(variables: ContactRegisterVariables): Promise<RegisterContactResponse> {
    return this._svc.registerContact(variables);
  }
  /** Register a new customer. */
  registerCustomer(variables: CustomerRegisterVariables): Promise<RegisterCustomerResponse> {
    return this._svc.registerCustomer(variables);
  }
  /** Send a password reset email to the specified user. */
  sendPasswordResetEmail(input: PasswordResetInput): Promise<boolean> {
    return this._svc.sendPasswordResetEmail(input);
  }
  /** Resets all claims for a user by email. */
  claimsReset(uid: string, email: string): Promise<boolean> {
    return this._svc.claimsReset(uid, email);
  }
  /** Sends a welcome email to a contact. */
  triggerContactSendWelcomeEmailEvent(
    input: TriggerContactSendWelcomeEmailEventInput
  ): Promise<boolean> {
    return this._svc.triggerContactSendWelcomeEmailEvent(input);
  }
  /** Sends a welcome email to a customer. */
  triggerCustomerSendWelcomeEmailEvent(
    input: TriggerCustomerSendWelcomeEmailEventInput
  ): Promise<boolean> {
    return this._svc.triggerCustomerSendWelcomeEmailEvent(input);
  }
}
