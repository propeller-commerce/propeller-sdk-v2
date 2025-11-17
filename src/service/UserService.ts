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
import { UserAddressCreateInput } from '../type/UserAddressCreateInput';
import { UserAddressUpdateInput } from '../type/UserAddressUpdateInput';
import { UserAddressDeleteInput } from '../type/UserAddressDeleteInput';
import { Address } from '../type/Address';
import { PasswordResetLinkEmailInput } from '../type/PasswordResetLinkEmailInput';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
import { EmailEventType } from '../enum/EmailEventType';
import { PasswordRecoveryLinkInput } from '../type';
/**
 * Viewer result type alias
 * @type ViewerResult
 Union type for viewer query results
 */
export type ViewerResult = Contact | Customer;
/**
 * Input object for searching users
 */
export interface UserSearchInput {
  /** User ID to search for */
  userId?: number;
  /** Email to search for */
  email?: string;
  /** Contact ID to search for */
  contactId?: number;
  /** Customer ID to search for */
  customerId?: number;
}
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
        const result = await this.executeQuery('viewer', { input });
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
     * Get user by search criteria
     * @param input User search input parameters
     * @returns Promise<ViewerResult> The user information
     */
    async getUser(input: UserSearchInput): Promise<ViewerResult> {
        const result = await this.executeQuery('user', { input });
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
     * @returns Promise<Logout> The logout response
     */
    async logout(): Promise<Logout> {
        const result = await this.executeMutation('logout');
        return new Logout(result.data.logout);
    }
    /**
     * Register new contact
     * @param input Contact registration input data
     * @returns Promise<RegisterContactResponse> The registration response
     */
    async registerContact(input: RegisterContactInput): Promise<RegisterContactResponse> {
        const result = await this.executeMutation('contactRegister', { input });
        return new RegisterContactResponse(result.data.contactRegister);
    }
    /**
     * Register new customer
     * @param input Customer registration input data
     * @returns Promise<RegisterCustomerResponse> The registration response
     */
    async registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse> {
        const result = await this.executeMutation('customerRegister', { input });
        return new RegisterCustomerResponse(result.data.customerRegister);
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
            return new Contact(userData);
        } else if (userData.__typename === 'Customer') {
            return new Customer(userData);
        }
        // Default to Contact if typename is unclear
        return new Contact(userData);
    }
    /**
     * Get users with search and pagination
     * @param searchInput Search criteria for users
     * @param limit Maximum number of results to return
     * @param offset Number of results to skip for pagination
     * @returns Promise<(Contact | Customer)[]> Array of users
     */
    async getUsers(searchInput?: UserSearchInput, limit?: number, offset?: number): Promise<(Contact | Customer)[]> {
        const result = await this.executeQuery('users', { searchInput, limit, offset });
        // Map each user to appropriate type based on __typename
        return result.data.users.map((userData: any) => {
            if (userData.__typename === 'Contact') {
                return new Contact(userData);
            } else if (userData.__typename === 'Customer') {
                return new Customer(userData);
            }
            // Default to Contact if typename is unclear
            return new Contact(userData);
        });
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
    async createUserAddress(input: UserAddressCreateInput): Promise<Address> {
        const result = await this.executeMutation('userAddressCreate', { input });
        return new Address(result.data.userAddressCreate);
    }
    /**
     * Update user address
     * @param input User address update input data
     * @returns Promise<Address> The updated address
     */
    async updateUserAddress(input: UserAddressUpdateInput): Promise<Address> {
        const result = await this.executeMutation('userAddressUpdate', { input });
        return new Address(result.data.userAddressUpdate);
    }
    /**
     * Delete user address
     * @param input User address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    async deleteUserAddress(input: UserAddressDeleteInput): Promise<boolean> {
        const result = await this.executeMutation('userAddressDelete', { input });
        return result.data.userAddressDelete;
    }
    /**
     * Initializes the service by preloading common fragments
     */
    async initializeService(): Promise<void> {
        // Service initialization logic if needed
    }
}