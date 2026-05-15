import { BaseService } from './BaseService';
import { GraphQLClient } from '../client/GraphQLClient';
import { Contact } from '../type/Contact';
import { Customer } from '../type/Customer';
import { LoginInput } from '../type/LoginInput';
import { Login } from '../type/Login';
import { GCIPUser } from '../type/GCIPUser';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { ContactPurchaseAuthorizationConfigSearchInput } from '../type/ContactPurchaseAuthorizationConfigSearchInput';
import { RegisterContactInput } from '../type/RegisterContactInput';
import { RegisterCustomerInput } from '../type/RegisterCustomerInput';
import { RegisterContactResponse } from '../type/RegisterContactResponse';
import { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import { Logout } from '../type/Logout';
import { ContactCompaniesSearchInput, PasswordRecoveryLinkInput, TriggerContactSendWelcomeEmailEventInput, TriggerCustomerSendWelcomeEmailEventInput } from '../type';
/**
 * Viewer result type alias
 * @type ViewerResult
 Union type for viewer query results
 */
export type ViewerResult = Contact | Customer;
/**
 * Simplified input object for password reset requests
 */
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

export interface ViewerInput {
    /** Contact attributes input arguments */
    contactAttributesInput?: AttributeResultSearchInput;
    /** Contact purchase authorization config input arguments */
    contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
    /** Company attributes input arguments */
    companyAttributesInput?: AttributeResultSearchInput;
    /** CustomerAttributesInput attributes input arguments */
    customerAttributesInput?: AttributeResultSearchInput;
    /** Contact companies search input arguments */
    contactCompaniesSearchInput?: ContactCompaniesSearchInput;
}

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

export interface CustomerRegisterInput {
    /** Contact registration input data */
    customerRegisterInput: RegisterCustomerInput;
    /** CustomerAttributesInput attributes input arguments */
    customerAttributesInput?: AttributeResultSearchInput;
}


/**
 * Service class for user-related GraphQL operations
 */
export class UserService extends BaseService {
    constructor(client: GraphQLClient) {
        super(client);
    }
    /**
     * Get current viewer information (authenticated user)
     * @param input Viewer input arguments
     * @returns Promise<ViewerResult> The current viewer
     */
    async getViewer(input: ViewerInput): Promise<ViewerResult> {
        const result = await this.executeQuery('viewer', input);
        const viewerData = result.data.viewer;
        // Return appropriate type based on __typename
        if (viewerData.__typename === 'Contact') {
            return new Contact(viewerData);
        } else if (viewerData.__typename === 'Customer') {
            return new Customer(viewerData);
        }
        // Default to Contact if typename is unclear
        return new Contact(viewerData);
    }
    /**
     * Login with credentials
     * @param input Login credentials
     * @returns Promise<Login> The login response with session information
     */
    async login(input: LoginInput): Promise<Login> {
        const result = await this.executeMutation('login', { input });
        return new Login(result.data.login);
    }
    /**
     * Get user by id or login (mutually exclusive — provide one).
     * Upstream replaced the previous `input: UserSearchInput` argument with
     * direct `id: Int` and `login: String` arguments.
     * @param variables `{ id?: number; login?: string }`
     * @returns Promise<ViewerResult> The user information
     */
    async getUser(variables: { id?: number; login?: string }): Promise<ViewerResult> {
        const result = await this.executeQuery('user', variables);
        const userData = result.data.user;
        // Return appropriate type based on __typename
        if (userData.__typename === 'Contact') {
            return new Contact(userData);
        } else if (userData.__typename === 'Customer') {
            return new Customer(userData);
        }
        // Default to Contact if typename is unclear
        return new Contact(userData);
    }
    /**
     * Get authentication information for user by email
     * @param email User email address
     * @returns Promise<GCIPUser> The authentication user information
     */
    async authenticate(email: string): Promise<GCIPUser> {
        const result = await this.executeQuery('authentication', { email });
        return new GCIPUser(result.data.authentication);
    }
    /**
     * Logout current user
     * @deprecated The upstream `logout` mutation is deprecated; a `signOut` mutation will be available in the future.
     * @returns Promise<Logout> The logout response
     */
    async logout(): Promise<Logout> {
        const result = await this.executeMutation('logout');
        return new Logout(result.data.logout);
    }
    /**
     * Register new contact
     * @param variables Contact registration input data
     * @returns Promise<RegisterContactResponse> The registration response
     */
    async registerContact(variables: ContactRegisterInput): Promise<RegisterContactResponse> {
        const result = await this.executeMutation('contactRegister', variables);
        return new RegisterContactResponse(result.data.contactRegister);
    }
    /**
     * Register new customer
     * @param variables Customer registration input data
     * @returns Promise<RegisterCustomerResponse> The registration response
     */
    async registerCustomer(variables: CustomerRegisterInput): Promise<RegisterCustomerResponse> {
        const result = await this.executeMutation('customerRegister', variables);
        return new RegisterCustomerResponse(result.data.customerRegister);
    }
    /**
     * Send a password reset email to the specified user
     * @param input Password reset request input data
     * @returns Promise<string> The email send response
     */
    async sendPasswordResetEmail(input: PasswordResetInput): Promise<boolean> {
        // Build the full PasswordRecoveryLinkInput from the simplified input
        const passwordResetInput: PasswordRecoveryLinkInput = {
            email: input.email,
            redirectUrl: input.redirectUrl,
            language: input.language
        };
        const result = await this.executeMutation('triggerPasswordSendResetEmailEvent', { input: passwordResetInput });
        return result.data.triggerPasswordSendResetEmailEvent;
    }
    /**
     * Resets all claims for a user by email
     * @param uid The user ID
     * @param email The user email address
     * @returns Promise<boolean> The response containing reset statistics
     */
    async claimsReset(uid: string, email: string): Promise<boolean> {
        const result = await this.executeMutation('claimsReset', { uid, email });
        return result.data.claimsReset;
    }

    /**
     * Sends a welcome email to a contact
     * @param input Contact welcome email event input data
     * @returns Promise<any> The response containing event details
     */
    async triggerContactSendWelcomeEmailEvent(input: TriggerContactSendWelcomeEmailEventInput): Promise<boolean> {
        const result = await this.executeMutation('triggerContactSendWelcomeEmailEvent', { input });
        return result.data.triggerContactSendWelcomeEmailEvent;
    }

    /**
     * Sends a welcome email to a customer
     * @param input Customer welcome email event input data
     * @returns Promise<any> The response containing event details
     */
    async triggerCustomerSendWelcomeEmailEvent(input: TriggerCustomerSendWelcomeEmailEventInput): Promise<boolean> {
        const result = await this.executeMutation('triggerCustomerSendWelcomeEmailEvent', { input });
        return result.data.triggerCustomerSendWelcomeEmailEvent;
    }

}