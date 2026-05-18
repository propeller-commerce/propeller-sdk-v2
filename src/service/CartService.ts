import { BulkResponseData } from '../type/BulkResponseData';
import { Cart } from '../type/Cart';
import { CartResponse } from '../type/CartResponse';
import { CartSearchInput } from '../type/CartSearchInput';
import { CartSetCustomerInput } from '../type/CartSetCustomerInput';
import { CartSetContactInput } from '../type/CartSetContactInput';
import { CartSetUserInput } from '../type/CartSetUserInput';
import { CartActionCodeInput, CartDeleteItemInput, CartProcessResponse, CartUpdateItemInput } from '../type';
import { CartStartInput } from '../type/CartStartInput';
import { CartAddItemInput } from '../type/CartAddItemInput';
import { CartUpdateInput } from '../type/CartUpdateInput';
import { CartUpdateAddressInput } from '../type/CartUpdateAddressInput';
import { CartAddBundleInput } from '../type/CartAddBundleInput';
import { CartProcessInput } from '../type/CartProcessInput';
import { CartChildItemBulkInput } from '../type/CartChildItemBulkInput';
import { CartAcceptPurchaseAuthorizationRequestInput } from '../type/CartAcceptPurchaseAuthorizationRequestInput';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
/**
 * Variables for `cart update` — updates a cart
 */
export interface CartUpdateVariables {
  /** Cart ID to update */
  id: string;
  /** Cart update input data */
  input: CartUpdateInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Variables for `cart update address` — updates a cart address
 */
export interface CartUpdateAddressVariables {
  /** Cart ID to update address for */
  id: string;
  /** Cart update address input data */
  input: CartUpdateAddressInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Variables for `cart add bundle` — adds a bundle to a cart
 */
export interface CartAddBundleVariables {
  /** Cart ID to add bundle to */
  id: string;
  /** Cart add bundle input data */
  input: CartAddBundleInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Variables for `cart process` — processes a cart (checkout)
 */
export interface CartProcessVariables {
  /** Cart ID to process */
  id: string;
  /** Cart process input data */
  input?: CartProcessInput;
}
/**
 * Variables for `cart delete` — deletes a cart
 */
export interface CartDeleteVariables {
  /** Cart ID to delete */
  id: string;
}
/**
 * Variables for `cart action code` — adds an action code to a cart
 */
export interface CartActionCodeVariables {
  /** Cart ID to add action code to */
  id: string;
  /** Cart action code input data */
  input: CartActionCodeInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Variables for `cart accept purchase authorization` — accepts a purchase authorization request for a cart
 */
export interface CartAcceptPurchaseAuthorizationVariables {
  /** Cart ID to accept purchase authorization for */
  id: string;
  /** Cart accept purchase authorization input data */
  input?: CartAcceptPurchaseAuthorizationRequestInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
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
  /** Image transformation filters. Optional — the SDK defaults this to
   * `{ transformations: [] }` when omitted (findings #4/#8). */
  imageVariantFilters?: TransformationsInput;
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
  /** Image transformation filters. Optional — the SDK defaults this to
   * `{ transformations: [] }` when omitted (findings #4/#8). */
  imageVariantFilters?: TransformationsInput;
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
  /** Image transformation filters. Optional — the SDK defaults this to
   * `{ transformations: [] }` when omitted (findings #4/#8). */
  imageVariantFilters?: TransformationsInput;
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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as cartDoc } from '../generated/operations/cart';
import { document as cartsDoc } from '../generated/operations/carts';
import { document as cartStartDoc } from '../generated/operations/cartStart';
import { document as cartAddItemDoc } from '../generated/operations/cartAddItem';
import { document as cartUpdateItemDoc } from '../generated/operations/cartUpdateItem';
import { document as cartDeleteItemDoc } from '../generated/operations/cartDeleteItem';
import { document as cartUpdateDoc } from '../generated/operations/cartUpdate';
import { document as cartUpdateAddressDoc } from '../generated/operations/cartUpdateAddress';
import { document as cartAddBundleDoc } from '../generated/operations/cartAddBundle';
import { document as cartSetCustomerDoc } from '../generated/operations/cartSetCustomer';
import { document as cartSetContactDoc } from '../generated/operations/cartSetContact';
import { document as cartSetUserDoc } from '../generated/operations/cartSetUser';
import { document as cartProcessDoc } from '../generated/operations/cartProcess';
import { document as cartDeleteDoc } from '../generated/operations/cartDelete';
import { document as cartAddActionCodeDoc } from '../generated/operations/cartAddActionCode';
import { document as cartRemoveActionCodeDoc } from '../generated/operations/cartRemoveActionCode';
import { document as cartItemBulkDoc } from '../generated/operations/cartItemBulk';
import { document as cartRequestPurchaseAuthorizationDoc } from '../generated/operations/cartRequestPurchaseAuthorization';
import { document as cartAcceptPurchaseAuthorizationRequestDoc } from '../generated/operations/cartAcceptPurchaseAuthorizationRequest';
import type { CartDeleteItemVariables, CartItemBulkVariables, CartRequestPurchaseAuthorizationVariables, CartSetContactVariables, CartSetCustomerVariables, CartSetUserVariables } from '../generated/operationVariables';
/**
 Service class for Cart-related GraphQL operations
 */
export function cartService(client: GraphQLClient) {
  return {
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
      const result = await runOperation<{ cart: Cart }>(client, cartDoc, 'cart', variables);
      return result.data.cart as Cart;
    },
    /**
       Fetches a list of carts with search criteria
       * @param input Cart search input parameters
       * @returns Promise<CartResponse> The carts response data
       */
    async getCarts(input?: CartSearchInput): Promise<CartResponse> {
      const result = await runOperation<{ carts: CartResponse }>(client, cartsDoc, 'carts', { input });
      return result.data.carts as CartResponse;
    },
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
      const result = await runOperation<{ cartStart: Cart }>(client, cartStartDoc, 'cartStart', variables);
      return result.data.cartStart as Cart;
    },
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
      const result = await runOperation<{ cartAddItem: Cart }>(client, cartAddItemDoc, 'cartAddItem', variables);
      return result.data.cartAddItem as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartUpdateItem: Cart }>(client, cartUpdateItemDoc, 'cartUpdateItem', { ...variables, language });
      return result.data.cartUpdateItem as Cart;
    },
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
      const result = await runOperation<{ cartDeleteItem: Cart }>(client, cartDeleteItemDoc, 'cartDeleteItem', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.cartDeleteItem as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartUpdate: Cart }>(client, cartUpdateDoc, 'cartUpdate', { ...variables, language });
      return result.data.cartUpdate as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartUpdateAddress: Cart }>(client, cartUpdateAddressDoc, 'cartUpdateAddress', { ...variables, language });
      return result.data.cartUpdateAddress as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartAddBundle: Cart }>(client, cartAddBundleDoc, 'cartAddBundle', { ...variables, language });
      return result.data.cartAddBundle as Cart;
    },
    /**
       Sets the customer for a cart
       * @param variables Cart set customer input data
       * @returns Promise<Cart> The updated cart
       */
    async setCartCustomer(variables: CartSetCustomerVariables): Promise<Cart> {
      const result = await runOperation<{ cartSetCustomer: Cart }>(client, cartSetCustomerDoc, 'cartSetCustomer', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.cartSetCustomer as Cart;
    },
    /**
       Sets the contact for a cart
       * @param variables Cart set contact input data
       * @returns Promise<Cart> The updated cart
       */
    async setCartContact(variables: CartSetContactVariables): Promise<Cart> {
      const result = await runOperation<{ cartSetContact: Cart }>(client, cartSetContactDoc, 'cartSetContact', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.cartSetContact as Cart;
    },
    /**
       Sets the user for a cart
       * @deprecated The upstream `cartSetUser` mutation is deprecated. Use `setCartContact` or `setCartCustomer` instead.
       * @param variables Cart set user input data
       * @returns Promise<Cart> The updated cart
       */
    async setCartUser(variables: CartSetUserVariables): Promise<Cart> {
      const result = await runOperation<{ cartSetUser: Cart }>(client, cartSetUserDoc, 'cartSetUser', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.cartSetUser as Cart;
    },
    /**
       Processes a cart (checkout)
       * @param variables
       * - id: string - Cart ID to process
       * - input: CartProcessInput - Cart process input data
       * @returns Promise<CartProcessResponse> The processed cart
       */
    async processCart(variables: CartProcessVariables): Promise<CartProcessResponse> {
      const result = await runOperation<{ cartProcess: CartProcessResponse }>(client, cartProcessDoc, 'cartProcess', variables);
      return result.data.cartProcess as CartProcessResponse;
    },
    /**
       Deletes a cart
       * @param variables
       * - id: string - Cart ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteCart(variables: CartDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ cartDelete: boolean }>(client, cartDeleteDoc, 'cartDelete', variables);
      return result.data.cartDelete;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartAddActionCode: Cart }>(client, cartAddActionCodeDoc, 'cartAddActionCode', { ...variables, language });
      return result.data.cartAddActionCode as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartRemoveActionCode: Cart }>(client, cartRemoveActionCodeDoc, 'cartRemoveActionCode', { ...variables, language });
      return result.data.cartRemoveActionCode as Cart;
    },
    /**
       Bulk updates cart items
       * @param variables
       * - input: CartItemBulkInput - Cart item bulk input data
       * @returns Promise<Cart> The updated cart
       */
    async bulkUpdateCartItems(variables: CartItemBulkVariables): Promise<BulkResponseData> {
      const result = await runOperation<{ cartItemBulk: BulkResponseData }>(client, cartItemBulkDoc, 'cartItemBulk', variables);
      return result.data.cartItemBulk as BulkResponseData;
    },
    /**
       Requests purchase authorization for a cart
       * @param variables
       * - input: CartPurchaseAuthorizationRequestInput - Cart purchase authorization request input data
       * @returns Promise<Cart> The updated cart
       */
    async requestPurchaseAuthorization(variables: CartRequestPurchaseAuthorizationVariables): Promise<Cart> {
      const result = await runOperation<{ cartRequestPurchaseAuthorization: Cart }>(client, cartRequestPurchaseAuthorizationDoc, 'cartRequestPurchaseAuthorization', variables);
      return result.data.cartRequestPurchaseAuthorization as Cart;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ cartAcceptPurchaseAuthorizationRequest: Cart }>(client, cartAcceptPurchaseAuthorizationRequestDoc, 'cartAcceptPurchaseAuthorizationRequest', { ...variables, language });
      return result.data.cartAcceptPurchaseAuthorizationRequest as Cart;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `cartService(client)`.
 */
export class CartService {
  private readonly _svc: ReturnType<typeof cartService>;
  constructor(client: GraphQLClient) { this._svc = cartService(client); }
  /**
   * Fetches a single cart by ID
   * @param variables Cart ID to fetch
   */
  getCart(variables: CartQueryVariables): Promise<Cart> { return this._svc.getCart(variables); }
  /**
   * Fetches a list of carts with search criteria
   * @param input Cart search input parameters
   */
  getCarts(input?: CartSearchInput): Promise<CartResponse> { return this._svc.getCarts(input); }
  /**
   * Starts a new cart
   * @param variables Cart start input data
   */
  startCart(variables: CartStartVariables): Promise<Cart> { return this._svc.startCart(variables); }
  /**
   * Adds an item to a cart
   * @param variables Cart ID to add item to
   */
  addItemToCart(variables: CartAddItemVariables): Promise<Cart> { return this._svc.addItemToCart(variables); }
  /**
   * Updates an item in a cart
   * @param variables Cart ID to update item in
   */
  updateCartItem(variables: CartUpdateItemVariables): Promise<Cart> { return this._svc.updateCartItem(variables); }
  /**
   * Deletes an item from a cart
   * @param variables Cart ID to delete item from
   */
  deleteCartItem(variables: CartDeleteItemVariables): Promise<Cart> { return this._svc.deleteCartItem(variables); }
  /**
   * Updates a cart
   * @param variables Cart ID to update
   */
  updateCart(variables: CartUpdateVariables): Promise<Cart> { return this._svc.updateCart(variables); }
  /**
   * Updates a cart address
   * @param variables Cart ID to update address for
   */
  updateCartAddress(variables: CartUpdateAddressVariables): Promise<Cart> { return this._svc.updateCartAddress(variables); }
  /**
   * Adds a bundle to a cart
   * @param variables Cart ID to add bundle to
   */
  addBundleToCart(variables: CartAddBundleVariables): Promise<Cart> { return this._svc.addBundleToCart(variables); }
  /**
   * Sets the customer for a cart
   * @param variables Cart set customer input data
   */
  setCartCustomer(variables: CartSetCustomerVariables): Promise<Cart> { return this._svc.setCartCustomer(variables); }
  /**
   * Sets the contact for a cart
   * @param variables Cart set contact input data
   */
  setCartContact(variables: CartSetContactVariables): Promise<Cart> { return this._svc.setCartContact(variables); }
  /**
   * Sets the user for a cart
   * @param variables Cart set user input data
   */
  setCartUser(variables: CartSetUserVariables): Promise<Cart> { return this._svc.setCartUser(variables); }
  /**
   * Processes a cart (checkout)
   * @param variables Cart ID to process
   */
  processCart(variables: CartProcessVariables): Promise<CartProcessResponse> { return this._svc.processCart(variables); }
  /**
   * Deletes a cart
   * @param variables Cart ID to delete
   */
  deleteCart(variables: CartDeleteVariables): Promise<boolean> { return this._svc.deleteCart(variables); }
  /**
   * Adds an action code to a cart
   * @param variables Cart ID to add action code to
   */
  addActionCodeToCart(variables: CartActionCodeVariables): Promise<Cart> { return this._svc.addActionCodeToCart(variables); }
  /**
   * Removes an action code from a cart
   * @param variables Cart ID to remove action code from
   */
  removeActionCodeFromCart(variables: CartActionCodeVariables): Promise<Cart> { return this._svc.removeActionCodeFromCart(variables); }
  /**
   * Bulk updates cart items
   * @param variables Cart item bulk input data
   */
  bulkUpdateCartItems(variables: CartItemBulkVariables): Promise<BulkResponseData> { return this._svc.bulkUpdateCartItems(variables); }
  /**
   * Requests purchase authorization for a cart
   * @param variables Cart purchase authorization request input data
   */
  requestPurchaseAuthorization(variables: CartRequestPurchaseAuthorizationVariables): Promise<Cart> { return this._svc.requestPurchaseAuthorization(variables); }
  /**
   * Accepts a purchase authorization request for a cart
   * @param variables Cart ID to accept purchase authorization for
   */
  acceptPurchaseAuthorizationRequest(variables: CartAcceptPurchaseAuthorizationVariables): Promise<Cart> { return this._svc.acceptPurchaseAuthorizationRequest(variables); }
}
