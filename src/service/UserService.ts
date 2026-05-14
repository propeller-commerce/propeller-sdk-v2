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
import { Address } from '../type/Address';
import { PasswordResetLinkEmailInput } from '../type/PasswordResetLinkEmailInput';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
import { EmailEventType } from '../enum/EmailEventType';
import { ClaimsResetAllResponse, ContactCompaniesSearchInput, PasswordRecoveryLinkInput, TriggerContactSendWelcomeEmailEventInput, TriggerCustomerSendWelcomeEmailEventInput } from '../type';
/**
 * Viewer result type alias
 * @type ViewerResult
 Union type for viewer query results
 */
export type ViewerResult = Contact | Customer;
/**
 * Input object for updating user information
 */
export interface UserUpdateInput {
    /** User ID */
    userId: number;
    /** First name */
    firstName?: string;
    /** Last name */
    lastName?: string;
    /** Email address */
    email?: string;
    /** Phone number */
    phone?: string;
    /** Mobile number */
    mobile?: string;
}
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
            return viewerData as Contact;
        } else if (viewerData.__typename === 'Customer') {
            return viewerData as Customer;
        }
        // Default to Contact if typename is unclear
        return viewerData as Contact;
    }
    /**
     * Login with credentials
     * @param input Login credentials
     * @returns Promise<Login> The login response with session information
     */
    async login(input: LoginInput): Promise<Login> {
        const result = await this.executeMutation('login', { input });
        return result.data.login as Login;
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
            return userData as Contact;
        } else if (userData.__typename === 'Customer') {
            return userData as Customer;
        }
        // Default to Contact if typename is unclear
        return userData as Contact;
    }
    /**
     * Get authentication information for user by email
     * @param email User email address
     * @returns Promise<GCIPUser> The authentication user information
     */
    async authenticate(email: string): Promise<GCIPUser> {
        const result = await this.executeQuery('authentication', { email });
        return result.data.authentication as GCIPUser;
    }
    /**
     * Logout current user
     * @returns Promise<Logout> The logout response
     */
    async logout(): Promise<Logout> {
        const result = await this.executeMutation('logout');
        return result.data.logout as Logout;
    }
    /**
     * Register new contact
     * @param variables Contact registration input data
     * @returns Promise<RegisterContactResponse> The registration response
     */
    async registerContact(variables: ContactRegisterInput): Promise<RegisterContactResponse> {
        const result = await this.executeMutation('contactRegister', variables);
        return result.data.contactRegister as RegisterContactResponse;
    }
    /**
     * Register new customer
     * @param variables Customer registration input data
     * @returns Promise<RegisterCustomerResponse> The registration response
     */
    async registerCustomer(variables: CustomerRegisterInput): Promise<RegisterCustomerResponse> {
        const result = await this.executeMutation('customerRegister', variables);
        return result.data.customerRegister as RegisterCustomerResponse;
    }
    /**
     * Update user information
     * @param input User update input data
     * @returns Promise<ViewerResult> The updated user
     */
    async updateUser(input: UserUpdateInput): Promise<ViewerResult> {
        const result = await this.executeMutation('updateUser', { input });
        const userData = result.data.updateUser;
        // Return appropriate type based on __typename
        if (userData.__typename === 'Contact') {
            return userData as Contact;
        } else if (userData.__typename === 'Customer') {
            return userData as Customer;
        }
        // Default to Contact if typename is unclear
        return userData as Contact;
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
     * Create user address
     * @param input User address creation input data
     * @returns Promise<Address> The created address
     */
    async createUserAddress(input: any): Promise<Address> {
        const result = await this.executeMutation('userAddressCreate', { input });
        return result.data.userAddressCreate as Address;
    }
    /**
     * Update user address
     * @param input User address update input data
     * @returns Promise<Address> The updated address
     */
    async updateUserAddress(input: any): Promise<Address> {
        const result = await this.executeMutation('userAddressUpdate', { input });
        return result.data.userAddressUpdate as Address;
    }
    /**
     * Delete user address
     * @param input User address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    async deleteUserAddress(input: any): Promise<boolean> {
        const result = await this.executeMutation('userAddressDelete', { input });
        return result.data.userAddressDelete;
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
    async triggerContactSendWelcomeEmailEvent(input: TriggerContactSendWelcomeEmailEventInput): Promise<any> {
        const result = await this.executeMutation('triggerContactSendWelcomeEmailEvent', { input });
        return result.data.triggerContactSendWelcomeEmailEvent;
    }

    /**
     * Sends a welcome email to a customer
     * @param input Customer welcome email event input data
     * @returns Promise<any> The response containing event details
     */
    async triggerCustomerSendWelcomeEmailEvent(input: TriggerCustomerSendWelcomeEmailEventInput): Promise<any> {
        const result = await this.executeMutation('triggerCustomerSendWelcomeEmailEvent', { input });
        return result.data.triggerCustomerSendWelcomeEmailEvent;
    }

}