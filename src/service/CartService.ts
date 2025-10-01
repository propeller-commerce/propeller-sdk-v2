import { BaseService } from './BaseService';
import { Cart } from '../type/Cart';
import { CartResponse } from '../type/CartResponse';
import { CartSearchInput } from '../type/CartSearchInput';
import { CartSetCustomerInput } from '../type/CartSetCustomerInput';
import { CartSetContactInput } from '../type/CartSetContactInput';
import { CartSetUserInput } from '../type/CartSetUserInput';
import { CartDeleteItemInput, CartProcessResponse, CartUpdateItemInput } from '../type';
import { CartStartInput } from '../type/CartStartInput';
import { CartAddItemInput } from '../type/CartAddItemInput';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { CartUpdateVariables } from '../type/CartUpdateVariables';
import { CartUpdateAddressVariables } from '../type/CartUpdateAddressVariables';
import { CartAddBundleVariables } from '../type/CartAddBundleVariables';
import { CartProcessVariables } from '../type/CartProcessVariables';
import { CartDeleteVariables } from '../type/CartDeleteVariables';
import { CartActionCodeVariables } from '../type/CartActionCodeVariables';
import { CartItemBulkVariables } from '../type/CartItemBulkVariables';
import { CartPurchaseAuthorizationRequestVariables } from '../type/CartPurchaseAuthorizationRequestVariables';
import { CartAcceptPurchaseAuthorizationVariables } from '../type/CartAcceptPurchaseAuthorizationVariables';
/**
 * Cart query variables interface
 Variables for the cart query
 */
export interface CartQueryVariables {
  /** Cart ID to fetch */
  cartId: string;
  /** Language for localized content */
  language: string;
  /** Image search filters */
  imageSearchFilters: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters: TransformationsInput;
}
/**
 * Cart start variables interface
 Variables for starting a cart
 */
export interface CartStartVariables {
  /** Cart start input data */
  input: CartStartInput;
  /** Language for localized content */
  language: string;
  /** Image search filters */
  imageSearchFilters: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters: TransformationsInput;
}
/**
 * Cart add item variables interface
 Variables for adding an item to cart
 */
export interface CartAddItemVariables {
  /** Cart ID to add item to */
  id: string;
  /** Cart add item input data */
  input: CartAddItemInput;
  /** Language for localized content */
  language: string;
  /** Image search filters */
  imageSearchFilters: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters: TransformationsInput;
}
/**
 * Cart update item variables interface
 Variables for updating an item in the cart
 */
export interface CartUpdateItemVariables {
  /** Cart ID to update the item to */
  id: string;
  /** Item ID to update in the cart */
  itemId: string;
  /** Cart update item input data */
  input?: CartUpdateItemInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Cart delete item variables interface
 Variables for deleting an item from the cart
 */
export interface CartDeleteItemVariables {
  /** Cart ID to delete item to */
  id: string;
  /** Item ID to update in the cart */
  itemId: string;
  /** Cart delete item input data */
  input?: CartDeleteItemInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 Service class for Cart-related GraphQL operations
 */
export class CartService extends BaseService {
  /**
   Fetches a single cart by ID
   * @param variables
   * - id: string - Cart ID to fetch
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The cart data
   */
  async getCart(variables: CartQueryVariables): Promise<Cart> {
    const result = await this.executeQuery('cart', variables);
    return new Cart(result.data.cart);
  }
  /**
   Fetches a list of carts with search criteria
   * @param input Cart search input parameters
   * @returns Promise<CartResponse> The carts response data
   */
  async getCarts(input?: CartSearchInput): Promise<CartResponse> {
    const variables = { input };
    const result = await this.executeQuery('carts', variables);
    return new CartResponse(result.data.carts);
  }
  /**
   Starts a new cart
   * @param variables
   * - input: CartStartInput - Cart start input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The started cart
   */
  async startCart(variables: CartStartVariables): Promise<Cart> {
    const result = await this.executeMutation('cartStart', variables);
    return new Cart(result.data.cartStart);
  }
  /**
   Adds an item to a cart
   * @param variables
   * - id: string - Cart ID to add item to
   * - input: CartAddItemInput - Cart add item input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async addItemToCart(variables: CartAddItemVariables): Promise<Cart> {
    const result = await this.executeMutation('cartAddItem', variables);
    return new Cart(result.data.cartAddItem);
  }
  /**
   Updates an item in a cart
   * @param variables
   * - id: string - Cart ID to update item in
   * - itemId: string - Item ID to update in the cart
   * - input: CartUpdateItemInput - Cart update item input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async updateCartItem(variables: CartUpdateItemVariables): Promise<Cart> {
    const result = await this.executeMutation('cartUpdateItem', variables);
    return new Cart(result.data.cartUpdateItem);
  }
  /**
   Deletes an item from a cart
   * @param variables
   * - id: string - Cart ID to delete item from
   * - input: CartDeleteItemInput - Cart delete item input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async deleteCartItem(variables: CartDeleteItemVariables): Promise<Cart> {
    const result = await this.executeMutation('cartDeleteItem', variables);
    return new Cart(result.data.cartDeleteItem);
  }
  /**
   Updates a cart
   * @param variables
   * - id: string - Cart ID to update
   * - input: CartUpdateInput - Cart update input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async updateCart(variables: CartUpdateVariables): Promise<Cart> {
    const result = await this.executeMutation('cartUpdate', variables);
    return new Cart(result.data.cartUpdate);
  }
  /**
   Updates a cart address
   * @param variables
   * - id: string - Cart ID to update address for
   * - input: CartUpdateAddressInput - Cart update address input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async updateCartAddress(variables: CartUpdateAddressVariables): Promise<Cart> {
    const result = await this.executeMutation('cartUpdateAddress', variables);
    return new Cart(result.data.cartUpdateAddress);
  }
  /**
   Adds a bundle to a cart
   * @param variables
   * - id: string - Cart ID to add bundle to
   * - input: CartAddBundleInput - Cart add bundle input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async addBundleToCart(variables: CartAddBundleVariables): Promise<Cart> {
    const result = await this.executeMutation('cartAddBundle', variables);
    return new Cart(result.data.cartAddBundle);
  }
  /**
   Sets the customer for a cart
   * @param input Cart set customer input data
   * @returns Promise<Cart> The updated cart
   */
  async setCartCustomer(input: CartSetCustomerInput): Promise<Cart> {
    const variables = { input };
    const result = await this.executeMutation('cartSetCustomer', variables);
    return new Cart(result.data.cartSetCustomer);
  }
  /**
   Sets the contact for a cart
   * @param input Cart set contact input data
   * @returns Promise<Cart> The updated cart
   */
  async setCartContact(input: CartSetContactInput): Promise<Cart> {
    const variables = { input };
    const result = await this.executeMutation('cartSetContact', variables);
    return new Cart(result.data.cartSetContact);
  }
  /**
   Sets the user for a cart
   * @param input Cart set user input data
   * @returns Promise<Cart> The updated cart
   */
  async setCartUser(input: CartSetUserInput): Promise<Cart> {
    const variables = { input };
    const result = await this.executeMutation('cartSetUser', variables);
    return new Cart(result.data.cartSetUser);
  }
  /**
   Processes a cart (checkout)
   * @param variables
   * - id: string - Cart ID to process
   * - input: CartProcessInput - Cart process input data
   * @returns Promise<CartProcessResponse> The processed cart
   */
  async processCart(variables: CartProcessVariables): Promise<CartProcessResponse> {
    const result = await this.executeMutation('cartProcess', variables);
    return new CartProcessResponse(result.data.cartProcess);
  }
  /**
   Deletes a cart
   * @param variables
   * - id: string - Cart ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteCart(variables: CartDeleteVariables): Promise<boolean> {
    const result = await this.executeMutation('cartDelete', variables);
    return result.data.cartDelete;
  }
  /**
   Adds an action code to a cart
   * @param variables
   * - id: string - Cart ID to add action code to
   * - input: CartActionCodeInput - Cart action code input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async addActionCodeToCart(variables: CartActionCodeVariables): Promise<Cart> {
    const result = await this.executeMutation('cartAddActionCode', variables);
    return new Cart(result.data.cartAddActionCode);
  }
  /**
   Removes an action code from a cart
   * @param variables
   * - id: string - Cart ID to remove action code from
   * - input: CartActionCodeInput - Cart action code input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async removeActionCodeFromCart(variables: CartActionCodeVariables): Promise<Cart> {
    const result = await this.executeMutation('cartRemoveActionCode', variables);
    return new Cart(result.data.cartRemoveActionCode);
  }
  /**
   Bulk updates cart items
   * @param variables
   * - input: CartItemBulkInput - Cart item bulk input data
   * @returns Promise<Cart> The updated cart
   */
  async bulkUpdateCartItems(variables: CartItemBulkVariables): Promise<Cart> {
    const result = await this.executeMutation('cartItemBulk', variables);
    return new Cart(result.data.cartItemBulk);
  }
  /**
   Requests purchase authorization for a cart
   * @param variables
   * - input: CartPurchaseAuthorizationRequestInput - Cart purchase authorization request input data
   * @returns Promise<Cart> The updated cart
   */
  async requestPurchaseAuthorization(variables: CartPurchaseAuthorizationRequestVariables): Promise<Cart> {
    const result = await this.executeMutation('cartRequestPurchaseAuthorization', variables);
    return new Cart(result.data.cartRequestPurchaseAuthorization);
  }
  /**
   Accepts a purchase authorization request for a cart
   * @param variables
   * - id: string - Cart ID to accept purchase authorization for
   * - input: CartAcceptPurchaseAuthorizationRequestInput - Cart accept purchase authorization input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Cart> The updated cart
   */
  async acceptPurchaseAuthorizationRequest(variables: CartAcceptPurchaseAuthorizationVariables): Promise<Cart> {
    const result = await this.executeMutation('cartAcceptPurchaseAuthorizationRequest', variables);
    return new Cart(result.data.cartAcceptPurchaseAuthorizationRequest);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}