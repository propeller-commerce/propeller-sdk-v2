import { Address } from './Address';
import { ExternalAddress } from './ExternalAddress';
import { AdminUser } from './AdminUser';
import { AdminUserTenant } from './AdminUserTenant';
import { AttributeDescription } from './AttributeDescription';
import { CsvImportResponse } from './CsvImportResponse';
import { Attribute } from './Attribute';
import { Login } from './Login';
import { Logout } from './Logout';
import { VerifyToken } from './VerifyToken';
import { RefreshTokenResponse } from './RefreshTokenResponse';
import { MagicToken } from './MagicToken';
import { Bundle } from './Bundle';
import { BundleItem } from './BundleItem';
import { BusinessRule } from './BusinessRule';
import { BusinessRuleDecisionTable } from './BusinessRuleDecisionTable';
import { Carrier } from './Carrier';
import { Cart } from './Cart';
import { CartProcessResponse } from './CartProcessResponse';
import { BulkResponseData } from './BulkResponseData';
import { CategoryAddProductsClustersResponse } from './CategoryAddProductsClustersResponse';
import { CategoryRemoveProductsClustersResponse } from './CategoryRemoveProductsClustersResponse';
import { Category } from './Category';
import { Payment } from './Payment';
import { Crossupsell } from './Crossupsell';
import { EventToEmailConfig } from './EventToEmailConfig';
import { EventToWebHookConfig } from './EventToWebHookConfig';
import { FavoriteList } from './FavoriteList';
import { InventoryResponse } from './InventoryResponse';
import { InventoryDeleteResponse } from './InventoryDeleteResponse';
import { MediaImage } from './MediaImage';
import { DeleteMediaImageResponse } from './DeleteMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { DeleteMediaVideoResponse } from './DeleteMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { DeleteMediaDocumentResponse } from './DeleteMediaDocumentResponse';
import { MediaAttachment } from './MediaAttachment';
import { DeleteMediaAttachmentResponse } from './DeleteMediaAttachmentResponse';
import { PublishEmailEventResponse } from './PublishEmailEventResponse';
import { EmailTemplate } from './EmailTemplate';
import { DocumentTemplate } from './DocumentTemplate';
import { Base64File } from './Base64File';
import { OrderStatus } from './OrderStatus';
import { OrderStatusSet } from './OrderStatusSet';
import { Order } from './Order';
import { SendOrderConfirmResponseType } from './SendOrderConfirmResponseType';
import { OrderItem } from './OrderItem';
import { OrderAddress } from './OrderAddress';
import { Shipment } from './Shipment';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
import { Orderlist } from './Orderlist';
import { PayMethod } from './PayMethod';
import { Price } from './Price';
import { CostPrice } from './CostPrice';
import { Pricesheet } from './Pricesheet';
import { Discount } from './Discount';
import { BulkPrice } from './BulkPrice';
import { BulkCostPrice } from './BulkCostPrice';
import { ZoneTaxCode } from './ZoneTaxCode';
import { Tax } from './Tax';
import { Product } from './Product';
import { ClusterOption } from './ClusterOption';
import { Cluster } from './Cluster';
import { ClusterAssignProductsResponse } from './ClusterAssignProductsResponse';
import { ClusterUnassignProductsResponse } from './ClusterUnassignProductsResponse';
import { ClusterConfigResponse } from './ClusterConfigResponse';
import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
import { UpdateClusterConfigSettingResponse } from './UpdateClusterConfigSettingResponse';
import { RoleDefinition } from './RoleDefinition';
import { Role } from './Role';
import { SparePartsMachine } from './SparePartsMachine';
import { Surcharge } from './Surcharge';
import { ConfirmationResponse } from './ConfirmationResponse';
import { Tender } from './Tender';
import { TenderResponse } from './TenderResponse';
import { TenderProcessResponse } from './TenderProcessResponse';
import { Usergroup } from './Usergroup';
import { Company } from './Company';
import { Contact } from './Contact';
import { RegisterContactResponse } from './RegisterContactResponse';
import { ContactAddToCompaniesResponse } from './ContactAddToCompaniesResponse';
import { ContactRemoveFromCompaniesResponse } from './ContactRemoveFromCompaniesResponse';
import { Customer } from './Customer';
import { RegisterCustomerResponse } from './RegisterCustomerResponse';
import { PurchaseAuthorizationConfig } from './PurchaseAuthorizationConfig';
import { Valueset } from './Valueset';
import { ValuesetItem } from './ValuesetItem';
import { Warehouse } from './Warehouse';
import { WarehouseAddress } from './WarehouseAddress';
/**
 Object class for Mutation
 */
export class Mutation {
  /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _userAddressCreate: Address;
  /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _customerAddressCreate: Address;
  /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _companyAddressCreate: Address;
  /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _externalAddressCreate: ExternalAddress;
  /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _userAddressUpdate: Address;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _customerAddressUpdate: Address;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _companyAddressUpdate: Address;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _externalAddressUpdate: ExternalAddress;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _userAddressDelete: boolean;
  /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _customerAddressDelete: boolean;
  /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _companyAddressDelete: boolean;
  /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _externalAddressDelete: boolean;
  /** AUTH: Role=[role.OWNER] */
  private _adminUserCreate: AdminUser;
  /** AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT')) */
  private _adminUserUpdate: AdminUser;
  /** AUTH: Role=[role.OWNER] */
  private _adminUserDelete: boolean;
  /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
  private _adminUserTenantCreate: AdminUserTenant;
  /** AUTH: Role=[role.OWNER] */
  private _adminUserTenantDelete: AdminUserTenant;
  /** attributeDescriptionCreate field */
  private _attributeDescriptionCreate: AttributeDescription;
  /** attributeDescriptionUpdate field */
  private _attributeDescriptionUpdate: AttributeDescription;
  /** attributeDescriptionDelete field */
  private _attributeDescriptionDelete: boolean;
  /** attributeDescriptionCsvImport field */
  private _attributeDescriptionCsvImport: CsvImportResponse;
  /** attributeCreate field */
  private _attributeCreate: Attribute;
  /** attributeUpdate field */
  private _attributeUpdate: Attribute;
  /** attributeDelete field */
  private _attributeDelete: boolean;
  /** attributeCsvImport field */
  private _attributeCsvImport: CsvImportResponse;
  /** Starts an anonymous firebase session */
  private _startSession: Login;
  /** Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken. */
  private _login: Login;
  /** AUTH: Role=[] OR ('user is authenticated') */
  /** @deprecated signOut mutation will be available in the future */
  private _logout?: Logout;
  /** AUTH: Role=[system] OR ('user is anonymous') */
  private _authenticationCreate: Login;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _authenticationDelete: boolean;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _claimsReset: boolean;
  /** verifyToken field */
  private _verifyToken: VerifyToken;
  /** exchangeRefreshToken field */
  private _exchangeRefreshToken: RefreshTokenResponse;
  /** Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined') */
  private _triggerPasswordSendResetEmailEvent: boolean;
  /** Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER] */
  private _triggerPasswordSendInitEmailEvent: string;
  /** Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER] */
  private _passwordResetLink: string;
  /** AUTH: Role=[system] */
  private _magicTokenCreate: MagicToken;
  /** AUTH: Role=[system] */
  private _magicTokenUpdate: MagicToken;
  /** AUTH: Role=[system] */
  private _magicTokenDelete: boolean;
  /** Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens. */
  private _magicTokenLogin: Login;
  /** bundleCreate field */
  private _bundleCreate: Bundle;
  /** bundleUpdate field */
  private _bundleUpdate: Bundle;
  /** bundleDelete field */
  private _bundleDelete: boolean;
  /** bundleAddItems field */
  private _bundleAddItems: BundleItem[];
  /** bundleRemoveItem field */
  private _bundleRemoveItem: boolean;
  /** AUTH: Role=[configuration.OWNER] */
  private _businessRuleCreate: BusinessRule;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleUpdate: BusinessRule;
  /** AUTH: Role=[configuration.OWNER] */
  private _businessRuleDelete: boolean;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableAddColumn: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableUpdate: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableDeleteColumn: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableAddRow: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableMoveRow: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableDeleteRow: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _businessRuleDecisionTableSetCell: BusinessRuleDecisionTable;
  /** AUTH: Role=[configuration.OWNER] */
  private _incentiveRuleCreate: BusinessRule;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _incentiveRuleSetOrderItemConditions: BusinessRule;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _incentiveRuleSetAction: BusinessRule;
  /** AUTH: Role=[logistics.OWNER] */
  private _carrierCreate: Carrier;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _carrierUpdate: Carrier;
  /** AUTH: Role=[logistics.OWNER] */
  private _carrierDelete: boolean;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _carrierAssignWarehouse: boolean;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _carrierUnassignWarehouse: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _cartStart: Cart;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  /** @deprecated Will be removed in the future, please use `cartSetContact` or `cartSetCustomer` mutations instead. */
  private _cartSetUser: Cart;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _cartSetContact: Cart;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _cartSetCustomer: Cart;
  /** Update existing cart */
  private _cartUpdate: Cart;
  /** Delete existing cart */
  private _cartDelete: boolean;
  /** Process cart */
  private _cartProcess: CartProcessResponse;
  /** Add action code to the cart */
  private _cartAddActionCode: Cart;
  /** Remove action code from the cart */
  private _cartRemoveActionCode: Cart;
  /** Update cart address */
  private _cartUpdateAddress: Cart;
  /** Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated') */
  private _cartRequestPurchaseAuthorization: Cart;
  /** Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
  private _cartAcceptPurchaseAuthorizationRequest: Cart;
  /** Add item to the cart */
  private _cartAddItem: Cart;
  /** Add bundle item to the cart */
  private _cartAddBundle: Cart;
  /** Update item in the cart */
  private _cartUpdateItem: Cart;
  /** Update multiple items in the cart */
  private _cartItemBulk: BulkResponseData;
  /** Delete item from the cart */
  private _cartDeleteItem: Cart;
  /** Invalidate cache for a specific cart or all carts if no id is provided */
  private _cartInvalidateCache: boolean;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _categoryAddProductsClusters: CategoryAddProductsClustersResponse;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _categoryRemoveProductsClusters: CategoryRemoveProductsClustersResponse;
  /** AUTH: Role=[product.OWNER] OR ('user is authenticated') */
  private _categoryCreate: Category;
  /** AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated') */
  private _categoryUpdate: Category;
  /** AUTH: Role=[product.OWNER] OR ('user is authenticated') */
  private _categoryCsvImport: CsvImportResponse;
  /** Delete category by category Id */
  private _categoryDelete: boolean;
  /** channelInvalidateCache field */
  private _channelInvalidateCache: boolean;
  /** AUTH: Role=[order.OWNER] */
  private _paymentCreate: Payment;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _paymentUpdate: Payment;
  /** AUTH: Role=[order.OWNER] */
  private _paymentDelete: Payment;
  /** AUTH: Role=[product.OWNER] */
  private _crossupsellCreate: Crossupsell;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _crossupsellUpdate: Crossupsell;
  /** AUTH: Role=[product.OWNER] */
  private _crossupsellDelete: boolean;
  /** Deletes an EventActionConfig entity by ID */
  private _eventActionConfigDelete: boolean;
  /** Triggers a custom event with a custom payload */
  private _triggerCustomEvent: boolean;
  /** Creates a new EventToEmailConfig entity */
  private _eventToEmailConfigCreate: EventToEmailConfig;
  /** Updates an existing EventToEmailConfig entity */
  private _eventToEmailConfigUpdate: EventToEmailConfig;
  /** Creates a new EventToWebHookConfig entity */
  private _eventToWebHookConfigCreate: EventToWebHookConfig;
  /** Updates an existing  entity */
  private _eventToWebHookConfigUpdate: EventToWebHookConfig;
  /** AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined')) */
  private _favoriteListCreate: FavoriteList;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteListUpdate: FavoriteList;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteListDelete: boolean;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteListAddItems: FavoriteList;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteListRemoveItems: FavoriteList;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteListClearItems: FavoriteList;
  /** AUTH: Role=[logistics.OWNER] */
  private _inventoryCreate: InventoryResponse;
  /** AUTH: Role=[logistics.OWNER] */
  private _inventoryCsvImport: CsvImportResponse;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _inventoryUpdate: InventoryResponse;
  /** AUTH: Role=[logistics.OWNER] */
  private _inventoryDelete: InventoryDeleteResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaImageCreate: MediaImage;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _mediaImageUpdate: MediaImage;
  /** AUTH: Role=[product.OWNER] */
  private _mediaImageDelete: DeleteMediaImageResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaImageCsvImport: CsvImportResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaVideoCreate: MediaVideo;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _mediaVideoUpdate: MediaVideo;
  /** AUTH: Role=[product.OWNER] */
  private _mediaVideoDelete: DeleteMediaVideoResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaVideoCsvImport: CsvImportResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaDocumentCreate: MediaDocument;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _mediaDocumentUpdate: MediaDocument;
  /** AUTH: Role=[product.OWNER] */
  private _mediaDocumentDelete: DeleteMediaDocumentResponse;
  /** AUTH: Role=[product.OWNER] */
  private _mediaDocumentCsvImport: CsvImportResponse;
  /** AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT')) */
  private _mediaAttachmentCreate: MediaAttachment;
  /** AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR] */
  private _mediaAttachmentUpdate: MediaAttachment;
  /** AUTH: Role=[order.OWNER,product.OWNER] */
  private _mediaAttachmentDelete: DeleteMediaAttachmentResponse;
  /** Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system] */
  private _publishEmailEvent: PublishEmailEventResponse;
  /** Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system] */
  private _publishEmailSendEvent: PublishEmailEventResponse;
  /** Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link */
  /** @deprecated Deprecated in favor of using the triggerPasswordSendResetEmailEvent that utilizes the event-action-manager and template-engine */
  private _publishPasswordResetEmailEvent: PublishEmailEventResponse;
  /** Create a new EmailTemplateAUTH: Role=[configuration.OWNER] */
  private _emailTemplateCreate: EmailTemplate;
  /** Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _emailTemplateUpdate: EmailTemplate;
  /** Create a new DocumentTemplateAUTH: Role=[configuration.OWNER] */
  private _documentTemplateCreate: DocumentTemplate;
  /** Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _documentTemplateUpdate: DocumentTemplate;
  /** Delete an existing Template by IDAUTH: Role=[configuration.OWNER] */
  private _templateDelete: boolean;
  /** Add an attachment to an EmailTemplate by ID */
  private _emailTemplateAddAttachment: EmailTemplate;
  /** Remove an attachment from an EmailTemplate by ID */
  private _emailTemplateRemoveAttachment: EmailTemplate;
  /** Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _templateRenderToHTML: string;
  /** Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _emailTemplateRenderAndSend: boolean;
  /** Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _documentTemplateRenderToPDF: Base64File;
  /** AUTH: Role=[order.OWNER] */
  private _orderStatusCreate: OrderStatus;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderStatusUpdate: OrderStatus;
  /** AUTH: Role=[order.OWNER] */
  private _orderStatusDelete: boolean;
  /** AUTH: Role=[order.OWNER] */
  private _orderStatusSetCreate: OrderStatusSet;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderStatusSetUpdate: OrderStatusSet;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderStatusSetAddOrderStatuses: OrderStatusSet;
  /** AUTH: Role=[order.OWNER] */
  private _orderStatusSetRemoveOrderStatuses: OrderStatusSet;
  /** AUTH: Role=[order.OWNER] */
  private _orderStatusSetDelete: boolean;
  /** AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _orderCreate: Order;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderUpdate: Order;
  /** AUTH: Role=[order.OWNER] */
  private _orderDelete: boolean;
  /** Deprecated in favor of using triggerOrderSendConfirm */
  private _orderSendConfirmationEmail: SendOrderConfirmResponseType;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _triggerOrderSendConfirm: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _triggerQuoteSendRequest: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _triggerQuoteSendValidation: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _triggerQuoteSend: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderSetStatus: Order;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderItemCreate: OrderItem;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderItemUpdate: OrderItem;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderItemDelete: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _orderAddressUpdate: OrderAddress;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  /** @deprecated Use orderAddressUpdate */
  private _orderUpdateAddress: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentCreate: Shipment;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentUpdate: Shipment;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentDelete: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentItemCreate: ShipmentItem;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentItemUpdate: ShipmentItem;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _shipmentItemDelete: boolean;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _trackAndTraceCreate: TrackAndTrace;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _trackAndTraceUpdate: TrackAndTrace;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _trackAndTraceDelete: boolean;
  /** AUTH: Role=[shop.OWNER] OR ('user is authenticated') */
  private _orderlistCreate: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistUpdate: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistAddItems: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistRemoveItems: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistAssignUsers: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistUnassignUsers: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistAssignCompanies: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
  private _orderlistUnassignCompanies: Orderlist;
  /** AUTH: Role=[shop.OWNER] */
  private _orderlistDelete: boolean;
  /** AUTH: Role=[configuration.OWNER] */
  private _payMethodCreate: PayMethod;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _payMethodUpdate: PayMethod;
  /** AUTH: Role=[configuration.OWNER] */
  private _payMethodDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _priceCreate: Price;
  /** AUTH: Role=[pricing.OWNER] */
  private _priceCsvImport: CsvImportResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _priceUpdate: Price;
  /** AUTH: Role=[pricing.OWNER] */
  private _priceDelete: boolean;
  /** costPriceCreate field */
  private _costPriceCreate: CostPrice;
  /** costPriceUpdate field */
  private _costPriceUpdate: CostPrice;
  /** costPriceDelete field */
  private _costPriceDelete: boolean;
  /** costPricesBulk field */
  private _costPricesBulk: BulkResponseData;
  /** costPricesDelete field */
  private _costPricesDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _pricesheetCreate: Pricesheet;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _pricesheetUpdate: Pricesheet;
  /** AUTH: Role=[pricing.OWNER] */
  private _pricesheetCsvImport: CsvImportResponse;
  /** AUTH: Role=[pricing.OWNER] */
  private _pricesheetDelete: boolean;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _pricesheetAssign: Pricesheet;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _pricesheetUnassign: Pricesheet;
  /** AUTH: Role=[pricing.OWNER] */
  private _discountCreate: Discount;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _discountUpdate: Discount;
  /** AUTH: Role=[pricing.OWNER] */
  private _discountDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _discountsDeleteByPricesheetId: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _discountCsvImport: CsvImportResponse;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkPriceCreate: BulkPrice;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _bulkPriceUpdate: BulkPrice;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkPriceCsvImport: CsvImportResponse;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkPriceDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkPricesCreate: BulkResponseData;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkPricesDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkCostPriceCreate: BulkCostPrice;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _bulkCostPriceUpdate: BulkCostPrice;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkCostPriceCsvImport: CsvImportResponse;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkCostPriceDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkCostPricesBulk: BulkResponseData;
  /** AUTH: Role=[pricing.OWNER] */
  private _bulkCostPricesDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _zoneTaxCodeCreate: ZoneTaxCode;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _zoneTaxCodeUpdate: ZoneTaxCode;
  /** AUTH: Role=[pricing.OWNER] */
  private _zoneTaxCodeDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _zoneTaxCodesCreate: ZoneTaxCode;
  /** AUTH: Role=[pricing.OWNER] */
  private _zoneTaxCodesDelete: boolean;
  /** AUTH: Role=[pricing.OWNER] */
  private _taxCreate: Tax;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _taxUpdate: Tax;
  /** AUTH: Role=[pricing.OWNER] */
  private _taxDelete: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _productCreate: Product;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _productUpdate: Product;
  /** AUTH: Role=[product.OWNER] */
  private _productDelete: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _productCsvImport: CsvImportResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterOptionCreate: ClusterOption;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _clusterOptionUpdate: ClusterOption;
  /** AUTH: Role=[product.OWNER] */
  private _clusterOptionDelete: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _clusterProductCreate: Product;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _clusterProductUpdate: Product;
  /** AUTH: Role=[product.OWNER] */
  private _clusterProductDelete: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _clusterCreate: Cluster;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _clusterUpdate: Cluster;
  /** AUTH: Role=[product.OWNER] */
  private _clusterCsvImport: CsvImportResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterDelete: boolean;
  /** AUTH: Role=[product.OWNER] Assigns existing products to a cluster. */
  private _clusterAssignProducts: ClusterAssignProductsResponse;
  /** AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster. */
  private _clusterUnassignProducts: ClusterUnassignProductsResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterConfigCreate: ClusterConfigResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterConfigDelete: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _clusterConfigAddSetting: ClusterConfigSettingResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterConfigUpdateSetting: UpdateClusterConfigSettingResponse;
  /** AUTH: Role=[product.OWNER] */
  private _clusterConfigRemoveSetting: boolean;
  /** roleDefinitionCreate field */
  private _roleDefinitionCreate: RoleDefinition;
  /** roleDefinitionUpdate field */
  private _roleDefinitionUpdate: RoleDefinition;
  /** roleDefinitionDelete field */
  private _roleDefinitionDelete: boolean;
  /** AUTH: Role=[role.OWNER] */
  private _roleCreate: Role;
  /** AUTH: Role=[role.OWNER,role.EDITOR] */
  private _roleUpdate: Role;
  /** AUTH: Role=[role.OWNER] */
  private _roleDelete: boolean;
  /** shopInvalidateCache field */
  private _shopInvalidateCache: boolean;
  /** AUTH: Role=[product.OWNER] */
  private _machineCreate: SparePartsMachine;
  /** AUTH: Role=[product.OWNER] */
  private _machineDelete: boolean;
  /** AUTH: Role=[product.OWNER,product.EDITOR] */
  private _machineUpsert: SparePartsMachine;
  /** AUTH: Role=[pricing.OWNER] */
  private _surchargeCreate: Surcharge;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _surchargeUpdate: Surcharge;
  /** AUTH: Role=[pricing.OWNER] */
  private _surchargeDelete: Surcharge;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _addSurchargesToProduct: ConfirmationResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
  private _removeSurchargesFromProduct: ConfirmationResponse;
  /** AUTH: Role=[order.OWNER] */
  private _tenderStart: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdateAddress: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderAddItems: TenderResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdateItem: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderDeleteItem: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdateInvoiceUser: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdate: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdateDiscount: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdatePostage: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderUpdatePayment: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderApplyIncentives: Tender;
  /** AUTH: Role=[order.OWNER,order.EDITOR] */
  private _tenderProcess: TenderProcessResponse;
  /** AUTH: Role=[order.OWNER] */
  private _tenderDelete: string;
  /** usergroupCreate field */
  /** @deprecated This mutation is deprecated and will be removed in a future */
  private _usergroupCreate: Usergroup;
  /** usergroupUpdate field */
  /** @deprecated This mutation is deprecated and will be removed in a future */
  private _usergroupUpdate: Usergroup;
  /** usergroupDelete field */
  /** @deprecated This mutation is deprecated and will be removed in a future */
  private _usergroupDelete: boolean;
  /** AUTH: Role=[user.OWNER] */
  private _companyCreate: Company;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _companyUpdate: Company;
  /** AUTH: Role=[user.OWNER] */
  private _companyDelete: string;
  /** AUTH: Role=[user.OWNER] */
  private _companyCsvImport: CsvImportResponse;
  /** Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER] */
  private _contactCreate: Contact;
  /** Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER] */
  private _contactRegister: RegisterContactResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
  private _contactUpdate: Contact;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
  private _contactAddToCompanies: ContactAddToCompaniesResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
  private _contactRemoveFromCompanies: ContactRemoveFromCompaniesResponse;
  /** AUTH: Role=[user.OWNER] */
  private _contactDelete: boolean;
  /** AUTH: Role=[user.OWNER] */
  private _contactCreateAccount: RegisterContactResponse;
  /** AUTH: Role=[user.OWNER] */
  private _contactDeleteAccount: boolean;
  /** AUTH: Role=[user.OWNER] */
  private _contactCsvImport: CsvImportResponse;
  /** triggerContactSendWelcomeEmailEvent field */
  private _triggerContactSendWelcomeEmailEvent: boolean;
  /** Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER] */
  private _customerCreate: Customer;
  /** Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER] */
  private _customerRegister: RegisterCustomerResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _customerUpdate: Customer;
  /** AUTH: Role=[user.OWNER] */
  private _customerDelete: boolean;
  /** AUTH: Role=[user.OWNER] */
  private _customerCreateAccount: RegisterCustomerResponse;
  /** AUTH: Role=[user.OWNER] */
  private _customerDeleteAccount: boolean;
  /** triggerCustomerSendWelcomeEmailEvent field */
  private _triggerCustomerSendWelcomeEmailEvent: boolean;
  /** AUTH: Role=[user.OWNER] */
  private _customerCsvImport: CsvImportResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR] */
  private _addCompanyManager: string;
  /** AUTH: Role=[user.OWNER,user.EDITOR] */
  private _removeCompanyManager: string;
  /** Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')), */
  private _purchaseAuthorizationConfigCreate: PurchaseAuthorizationConfig;
  /** Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'), */
  private _purchaseAuthorizationConfigUpdate: PurchaseAuthorizationConfig;
  /** Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'), */
  private _purchaseAuthorizationConfigDelete: boolean;
  /** AUTH: Role=[configuration.OWNER] */
  private _valuesetCreate: Valueset;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _valuesetUpdate: Valueset;
  /** AUTH: Role=[configuration.OWNER] */
  private _valuesetDelete: boolean;
  /** AUTH: Role=[configuration.OWNER] */
  private _valuesetItemCreate: ValuesetItem;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
  private _valuesetItemUpdate: ValuesetItem;
  /** AUTH: Role=[configuration.OWNER] */
  private _valuesetItemDelete: boolean;
  /** AUTH: Role=[logistics.OWNER] */
  private _warehouseCreate: Warehouse;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _warehouseUpdate: Warehouse;
  /** AUTH: Role=[logistics.OWNER] */
  private _warehouseDelete: Warehouse;
  /** AUTH: Role=[logistics.OWNER] */
  private _warehouseAddressCreate: WarehouseAddress;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
  private _warehouseAddressUpdate: WarehouseAddress;
  /** AUTH: Role=[logistics.OWNER] */
  private _warehouseAddressDelete: boolean;
  /**
   Creates a new instance of Mutation
   */
  constructor(data: Partial<Mutation> = {}) {
    this._userAddressCreate = data.userAddressCreate!;
    this._customerAddressCreate = data.customerAddressCreate!;
    this._companyAddressCreate = data.companyAddressCreate!;
    this._externalAddressCreate = data.externalAddressCreate!;
    this._userAddressUpdate = data.userAddressUpdate!;
    this._customerAddressUpdate = data.customerAddressUpdate!;
    this._companyAddressUpdate = data.companyAddressUpdate!;
    this._externalAddressUpdate = data.externalAddressUpdate!;
    this._userAddressDelete = data.userAddressDelete!;
    this._customerAddressDelete = data.customerAddressDelete!;
    this._companyAddressDelete = data.companyAddressDelete!;
    this._externalAddressDelete = data.externalAddressDelete!;
    this._adminUserCreate = data.adminUserCreate!;
    this._adminUserUpdate = data.adminUserUpdate!;
    this._adminUserDelete = data.adminUserDelete!;
    this._adminUserTenantCreate = data.adminUserTenantCreate!;
    this._adminUserTenantDelete = data.adminUserTenantDelete!;
    this._attributeDescriptionCreate = data.attributeDescriptionCreate!;
    this._attributeDescriptionUpdate = data.attributeDescriptionUpdate!;
    this._attributeDescriptionDelete = data.attributeDescriptionDelete!;
    this._attributeDescriptionCsvImport = data.attributeDescriptionCsvImport!;
    this._attributeCreate = data.attributeCreate!;
    this._attributeUpdate = data.attributeUpdate!;
    this._attributeDelete = data.attributeDelete!;
    this._attributeCsvImport = data.attributeCsvImport!;
    this._startSession = data.startSession!;
    this._login = data.login!;
    this._logout = data.logout;
    this._authenticationCreate = data.authenticationCreate!;
    this._authenticationDelete = data.authenticationDelete!;
    this._claimsReset = data.claimsReset!;
    this._verifyToken = data.verifyToken!;
    this._exchangeRefreshToken = data.exchangeRefreshToken!;
    this._triggerPasswordSendResetEmailEvent = data.triggerPasswordSendResetEmailEvent!;
    this._triggerPasswordSendInitEmailEvent = data.triggerPasswordSendInitEmailEvent!;
    this._passwordResetLink = data.passwordResetLink!;
    this._magicTokenCreate = data.magicTokenCreate!;
    this._magicTokenUpdate = data.magicTokenUpdate!;
    this._magicTokenDelete = data.magicTokenDelete!;
    this._magicTokenLogin = data.magicTokenLogin!;
    this._bundleCreate = data.bundleCreate!;
    this._bundleUpdate = data.bundleUpdate!;
    this._bundleDelete = data.bundleDelete!;
    this._bundleAddItems = data.bundleAddItems!;
    this._bundleRemoveItem = data.bundleRemoveItem!;
    this._businessRuleCreate = data.businessRuleCreate!;
    this._businessRuleUpdate = data.businessRuleUpdate!;
    this._businessRuleDelete = data.businessRuleDelete!;
    this._businessRuleDecisionTableAddColumn = data.businessRuleDecisionTableAddColumn!;
    this._businessRuleDecisionTableUpdate = data.businessRuleDecisionTableUpdate!;
    this._businessRuleDecisionTableDeleteColumn = data.businessRuleDecisionTableDeleteColumn!;
    this._businessRuleDecisionTableAddRow = data.businessRuleDecisionTableAddRow!;
    this._businessRuleDecisionTableMoveRow = data.businessRuleDecisionTableMoveRow!;
    this._businessRuleDecisionTableDeleteRow = data.businessRuleDecisionTableDeleteRow!;
    this._businessRuleDecisionTableSetCell = data.businessRuleDecisionTableSetCell!;
    this._incentiveRuleCreate = data.incentiveRuleCreate!;
    this._incentiveRuleSetOrderItemConditions = data.incentiveRuleSetOrderItemConditions!;
    this._incentiveRuleSetAction = data.incentiveRuleSetAction!;
    this._carrierCreate = data.carrierCreate!;
    this._carrierUpdate = data.carrierUpdate!;
    this._carrierDelete = data.carrierDelete!;
    this._carrierAssignWarehouse = data.carrierAssignWarehouse!;
    this._carrierUnassignWarehouse = data.carrierUnassignWarehouse!;
    this._cartStart = data.cartStart!;
    this._cartSetUser = data.cartSetUser!;
    this._cartSetContact = data.cartSetContact!;
    this._cartSetCustomer = data.cartSetCustomer!;
    this._cartUpdate = data.cartUpdate!;
    this._cartDelete = data.cartDelete!;
    this._cartProcess = data.cartProcess!;
    this._cartAddActionCode = data.cartAddActionCode!;
    this._cartRemoveActionCode = data.cartRemoveActionCode!;
    this._cartUpdateAddress = data.cartUpdateAddress!;
    this._cartRequestPurchaseAuthorization = data.cartRequestPurchaseAuthorization!;
    this._cartAcceptPurchaseAuthorizationRequest = data.cartAcceptPurchaseAuthorizationRequest!;
    this._cartAddItem = data.cartAddItem!;
    this._cartAddBundle = data.cartAddBundle!;
    this._cartUpdateItem = data.cartUpdateItem!;
    this._cartItemBulk = data.cartItemBulk!;
    this._cartDeleteItem = data.cartDeleteItem!;
    this._cartInvalidateCache = data.cartInvalidateCache!;
    this._categoryAddProductsClusters = data.categoryAddProductsClusters!;
    this._categoryRemoveProductsClusters = data.categoryRemoveProductsClusters!;
    this._categoryCreate = data.categoryCreate!;
    this._categoryUpdate = data.categoryUpdate!;
    this._categoryCsvImport = data.categoryCsvImport!;
    this._categoryDelete = data.categoryDelete!;
    this._channelInvalidateCache = data.channelInvalidateCache!;
    this._paymentCreate = data.paymentCreate!;
    this._paymentUpdate = data.paymentUpdate!;
    this._paymentDelete = data.paymentDelete!;
    this._crossupsellCreate = data.crossupsellCreate!;
    this._crossupsellUpdate = data.crossupsellUpdate!;
    this._crossupsellDelete = data.crossupsellDelete!;
    this._eventActionConfigDelete = data.eventActionConfigDelete!;
    this._triggerCustomEvent = data.triggerCustomEvent!;
    this._eventToEmailConfigCreate = data.eventToEmailConfigCreate!;
    this._eventToEmailConfigUpdate = data.eventToEmailConfigUpdate!;
    this._eventToWebHookConfigCreate = data.eventToWebHookConfigCreate!;
    this._eventToWebHookConfigUpdate = data.eventToWebHookConfigUpdate!;
    this._favoriteListCreate = data.favoriteListCreate!;
    this._favoriteListUpdate = data.favoriteListUpdate!;
    this._favoriteListDelete = data.favoriteListDelete!;
    this._favoriteListAddItems = data.favoriteListAddItems!;
    this._favoriteListRemoveItems = data.favoriteListRemoveItems!;
    this._favoriteListClearItems = data.favoriteListClearItems!;
    this._inventoryCreate = data.inventoryCreate!;
    this._inventoryCsvImport = data.inventoryCsvImport!;
    this._inventoryUpdate = data.inventoryUpdate!;
    this._inventoryDelete = data.inventoryDelete!;
    this._mediaImageCreate = data.mediaImageCreate!;
    this._mediaImageUpdate = data.mediaImageUpdate!;
    this._mediaImageDelete = data.mediaImageDelete!;
    this._mediaImageCsvImport = data.mediaImageCsvImport!;
    this._mediaVideoCreate = data.mediaVideoCreate!;
    this._mediaVideoUpdate = data.mediaVideoUpdate!;
    this._mediaVideoDelete = data.mediaVideoDelete!;
    this._mediaVideoCsvImport = data.mediaVideoCsvImport!;
    this._mediaDocumentCreate = data.mediaDocumentCreate!;
    this._mediaDocumentUpdate = data.mediaDocumentUpdate!;
    this._mediaDocumentDelete = data.mediaDocumentDelete!;
    this._mediaDocumentCsvImport = data.mediaDocumentCsvImport!;
    this._mediaAttachmentCreate = data.mediaAttachmentCreate!;
    this._mediaAttachmentUpdate = data.mediaAttachmentUpdate!;
    this._mediaAttachmentDelete = data.mediaAttachmentDelete!;
    this._publishEmailEvent = data.publishEmailEvent!;
    this._publishEmailSendEvent = data.publishEmailSendEvent!;
    this._publishPasswordResetEmailEvent = data.publishPasswordResetEmailEvent!;
    this._emailTemplateCreate = data.emailTemplateCreate!;
    this._emailTemplateUpdate = data.emailTemplateUpdate!;
    this._documentTemplateCreate = data.documentTemplateCreate!;
    this._documentTemplateUpdate = data.documentTemplateUpdate!;
    this._templateDelete = data.templateDelete!;
    this._emailTemplateAddAttachment = data.emailTemplateAddAttachment!;
    this._emailTemplateRemoveAttachment = data.emailTemplateRemoveAttachment!;
    this._templateRenderToHTML = data.templateRenderToHTML!;
    this._emailTemplateRenderAndSend = data.emailTemplateRenderAndSend!;
    this._documentTemplateRenderToPDF = data.documentTemplateRenderToPDF!;
    this._orderStatusCreate = data.orderStatusCreate!;
    this._orderStatusUpdate = data.orderStatusUpdate!;
    this._orderStatusDelete = data.orderStatusDelete!;
    this._orderStatusSetCreate = data.orderStatusSetCreate!;
    this._orderStatusSetUpdate = data.orderStatusSetUpdate!;
    this._orderStatusSetAddOrderStatuses = data.orderStatusSetAddOrderStatuses!;
    this._orderStatusSetRemoveOrderStatuses = data.orderStatusSetRemoveOrderStatuses!;
    this._orderStatusSetDelete = data.orderStatusSetDelete!;
    this._orderCreate = data.orderCreate!;
    this._orderUpdate = data.orderUpdate!;
    this._orderDelete = data.orderDelete!;
    this._orderSendConfirmationEmail = data.orderSendConfirmationEmail!;
    this._triggerOrderSendConfirm = data.triggerOrderSendConfirm!;
    this._triggerQuoteSendRequest = data.triggerQuoteSendRequest!;
    this._triggerQuoteSendValidation = data.triggerQuoteSendValidation!;
    this._triggerQuoteSend = data.triggerQuoteSend!;
    this._orderSetStatus = data.orderSetStatus!;
    this._orderItemCreate = data.orderItemCreate!;
    this._orderItemUpdate = data.orderItemUpdate!;
    this._orderItemDelete = data.orderItemDelete!;
    this._orderAddressUpdate = data.orderAddressUpdate!;
    this._orderUpdateAddress = data.orderUpdateAddress!;
    this._shipmentCreate = data.shipmentCreate!;
    this._shipmentUpdate = data.shipmentUpdate!;
    this._shipmentDelete = data.shipmentDelete!;
    this._shipmentItemCreate = data.shipmentItemCreate!;
    this._shipmentItemUpdate = data.shipmentItemUpdate!;
    this._shipmentItemDelete = data.shipmentItemDelete!;
    this._trackAndTraceCreate = data.trackAndTraceCreate!;
    this._trackAndTraceUpdate = data.trackAndTraceUpdate!;
    this._trackAndTraceDelete = data.trackAndTraceDelete!;
    this._orderlistCreate = data.orderlistCreate!;
    this._orderlistUpdate = data.orderlistUpdate!;
    this._orderlistAddItems = data.orderlistAddItems!;
    this._orderlistRemoveItems = data.orderlistRemoveItems!;
    this._orderlistAssignUsers = data.orderlistAssignUsers!;
    this._orderlistUnassignUsers = data.orderlistUnassignUsers!;
    this._orderlistAssignCompanies = data.orderlistAssignCompanies!;
    this._orderlistUnassignCompanies = data.orderlistUnassignCompanies!;
    this._orderlistDelete = data.orderlistDelete!;
    this._payMethodCreate = data.payMethodCreate!;
    this._payMethodUpdate = data.payMethodUpdate!;
    this._payMethodDelete = data.payMethodDelete!;
    this._priceCreate = data.priceCreate!;
    this._priceCsvImport = data.priceCsvImport!;
    this._priceUpdate = data.priceUpdate!;
    this._priceDelete = data.priceDelete!;
    this._costPriceCreate = data.costPriceCreate!;
    this._costPriceUpdate = data.costPriceUpdate!;
    this._costPriceDelete = data.costPriceDelete!;
    this._costPricesBulk = data.costPricesBulk!;
    this._costPricesDelete = data.costPricesDelete!;
    this._pricesheetCreate = data.pricesheetCreate!;
    this._pricesheetUpdate = data.pricesheetUpdate!;
    this._pricesheetCsvImport = data.pricesheetCsvImport!;
    this._pricesheetDelete = data.pricesheetDelete!;
    this._pricesheetAssign = data.pricesheetAssign!;
    this._pricesheetUnassign = data.pricesheetUnassign!;
    this._discountCreate = data.discountCreate!;
    this._discountUpdate = data.discountUpdate!;
    this._discountDelete = data.discountDelete!;
    this._discountsDeleteByPricesheetId = data.discountsDeleteByPricesheetId!;
    this._discountCsvImport = data.discountCsvImport!;
    this._bulkPriceCreate = data.bulkPriceCreate!;
    this._bulkPriceUpdate = data.bulkPriceUpdate!;
    this._bulkPriceCsvImport = data.bulkPriceCsvImport!;
    this._bulkPriceDelete = data.bulkPriceDelete!;
    this._bulkPricesCreate = data.bulkPricesCreate!;
    this._bulkPricesDelete = data.bulkPricesDelete!;
    this._bulkCostPriceCreate = data.bulkCostPriceCreate!;
    this._bulkCostPriceUpdate = data.bulkCostPriceUpdate!;
    this._bulkCostPriceCsvImport = data.bulkCostPriceCsvImport!;
    this._bulkCostPriceDelete = data.bulkCostPriceDelete!;
    this._bulkCostPricesBulk = data.bulkCostPricesBulk!;
    this._bulkCostPricesDelete = data.bulkCostPricesDelete!;
    this._zoneTaxCodeCreate = data.zoneTaxCodeCreate!;
    this._zoneTaxCodeUpdate = data.zoneTaxCodeUpdate!;
    this._zoneTaxCodeDelete = data.zoneTaxCodeDelete!;
    this._zoneTaxCodesCreate = data.zoneTaxCodesCreate!;
    this._zoneTaxCodesDelete = data.zoneTaxCodesDelete!;
    this._taxCreate = data.taxCreate!;
    this._taxUpdate = data.taxUpdate!;
    this._taxDelete = data.taxDelete!;
    this._productCreate = data.productCreate!;
    this._productUpdate = data.productUpdate!;
    this._productDelete = data.productDelete!;
    this._productCsvImport = data.productCsvImport!;
    this._clusterOptionCreate = data.clusterOptionCreate!;
    this._clusterOptionUpdate = data.clusterOptionUpdate!;
    this._clusterOptionDelete = data.clusterOptionDelete!;
    this._clusterProductCreate = data.clusterProductCreate!;
    this._clusterProductUpdate = data.clusterProductUpdate!;
    this._clusterProductDelete = data.clusterProductDelete!;
    this._clusterCreate = data.clusterCreate!;
    this._clusterUpdate = data.clusterUpdate!;
    this._clusterCsvImport = data.clusterCsvImport!;
    this._clusterDelete = data.clusterDelete!;
    this._clusterAssignProducts = data.clusterAssignProducts!;
    this._clusterUnassignProducts = data.clusterUnassignProducts!;
    this._clusterConfigCreate = data.clusterConfigCreate!;
    this._clusterConfigDelete = data.clusterConfigDelete!;
    this._clusterConfigAddSetting = data.clusterConfigAddSetting!;
    this._clusterConfigUpdateSetting = data.clusterConfigUpdateSetting!;
    this._clusterConfigRemoveSetting = data.clusterConfigRemoveSetting!;
    this._roleDefinitionCreate = data.roleDefinitionCreate!;
    this._roleDefinitionUpdate = data.roleDefinitionUpdate!;
    this._roleDefinitionDelete = data.roleDefinitionDelete!;
    this._roleCreate = data.roleCreate!;
    this._roleUpdate = data.roleUpdate!;
    this._roleDelete = data.roleDelete!;
    this._shopInvalidateCache = data.shopInvalidateCache!;
    this._machineCreate = data.machineCreate!;
    this._machineDelete = data.machineDelete!;
    this._machineUpsert = data.machineUpsert!;
    this._surchargeCreate = data.surchargeCreate!;
    this._surchargeUpdate = data.surchargeUpdate!;
    this._surchargeDelete = data.surchargeDelete!;
    this._addSurchargesToProduct = data.addSurchargesToProduct!;
    this._removeSurchargesFromProduct = data.removeSurchargesFromProduct!;
    this._tenderStart = data.tenderStart!;
    this._tenderUpdateAddress = data.tenderUpdateAddress!;
    this._tenderAddItems = data.tenderAddItems!;
    this._tenderUpdateItem = data.tenderUpdateItem!;
    this._tenderDeleteItem = data.tenderDeleteItem!;
    this._tenderUpdateInvoiceUser = data.tenderUpdateInvoiceUser!;
    this._tenderUpdate = data.tenderUpdate!;
    this._tenderUpdateDiscount = data.tenderUpdateDiscount!;
    this._tenderUpdatePostage = data.tenderUpdatePostage!;
    this._tenderUpdatePayment = data.tenderUpdatePayment!;
    this._tenderApplyIncentives = data.tenderApplyIncentives!;
    this._tenderProcess = data.tenderProcess!;
    this._tenderDelete = data.tenderDelete!;
    this._usergroupCreate = data.usergroupCreate!;
    this._usergroupUpdate = data.usergroupUpdate!;
    this._usergroupDelete = data.usergroupDelete!;
    this._companyCreate = data.companyCreate!;
    this._companyUpdate = data.companyUpdate!;
    this._companyDelete = data.companyDelete!;
    this._companyCsvImport = data.companyCsvImport!;
    this._contactCreate = data.contactCreate!;
    this._contactRegister = data.contactRegister!;
    this._contactUpdate = data.contactUpdate!;
    this._contactAddToCompanies = data.contactAddToCompanies!;
    this._contactRemoveFromCompanies = data.contactRemoveFromCompanies!;
    this._contactDelete = data.contactDelete!;
    this._contactCreateAccount = data.contactCreateAccount!;
    this._contactDeleteAccount = data.contactDeleteAccount!;
    this._contactCsvImport = data.contactCsvImport!;
    this._triggerContactSendWelcomeEmailEvent = data.triggerContactSendWelcomeEmailEvent!;
    this._customerCreate = data.customerCreate!;
    this._customerRegister = data.customerRegister!;
    this._customerUpdate = data.customerUpdate!;
    this._customerDelete = data.customerDelete!;
    this._customerCreateAccount = data.customerCreateAccount!;
    this._customerDeleteAccount = data.customerDeleteAccount!;
    this._triggerCustomerSendWelcomeEmailEvent = data.triggerCustomerSendWelcomeEmailEvent!;
    this._customerCsvImport = data.customerCsvImport!;
    this._addCompanyManager = data.addCompanyManager!;
    this._removeCompanyManager = data.removeCompanyManager!;
    this._purchaseAuthorizationConfigCreate = data.purchaseAuthorizationConfigCreate!;
    this._purchaseAuthorizationConfigUpdate = data.purchaseAuthorizationConfigUpdate!;
    this._purchaseAuthorizationConfigDelete = data.purchaseAuthorizationConfigDelete!;
    this._valuesetCreate = data.valuesetCreate!;
    this._valuesetUpdate = data.valuesetUpdate!;
    this._valuesetDelete = data.valuesetDelete!;
    this._valuesetItemCreate = data.valuesetItemCreate!;
    this._valuesetItemUpdate = data.valuesetItemUpdate!;
    this._valuesetItemDelete = data.valuesetItemDelete!;
    this._warehouseCreate = data.warehouseCreate!;
    this._warehouseUpdate = data.warehouseUpdate!;
    this._warehouseDelete = data.warehouseDelete!;
    this._warehouseAddressCreate = data.warehouseAddressCreate!;
    this._warehouseAddressUpdate = data.warehouseAddressUpdate!;
    this._warehouseAddressDelete = data.warehouseAddressDelete!;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get userAddressCreate(): Address {
    return this._userAddressCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set userAddressCreate(value: Address) {
    this._userAddressCreate = value;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get customerAddressCreate(): Address {
    return this._customerAddressCreate;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set customerAddressCreate(value: Address) {
    this._customerAddressCreate = value;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get companyAddressCreate(): Address {
    return this._companyAddressCreate;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set companyAddressCreate(value: Address) {
    this._companyAddressCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get externalAddressCreate(): ExternalAddress {
    return this._externalAddressCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set externalAddressCreate(value: ExternalAddress) {
    this._externalAddressCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get userAddressUpdate(): Address {
    return this._userAddressUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set userAddressUpdate(value: Address) {
    this._userAddressUpdate = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get customerAddressUpdate(): Address {
    return this._customerAddressUpdate;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set customerAddressUpdate(value: Address) {
    this._customerAddressUpdate = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get companyAddressUpdate(): Address {
    return this._companyAddressUpdate;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set companyAddressUpdate(value: Address) {
    this._companyAddressUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get externalAddressUpdate(): ExternalAddress {
    return this._externalAddressUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set externalAddressUpdate(value: ExternalAddress) {
    this._externalAddressUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get userAddressDelete(): boolean {
    return this._userAddressDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set userAddressDelete(value: boolean) {
    this._userAddressDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get customerAddressDelete(): boolean {
    return this._customerAddressDelete;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set customerAddressDelete(value: boolean) {
    this._customerAddressDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get companyAddressDelete(): boolean {
    return this._companyAddressDelete;
  }
  /**
   AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set companyAddressDelete(value: boolean) {
    this._companyAddressDelete = value;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get externalAddressDelete(): boolean {
    return this._externalAddressDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set externalAddressDelete(value: boolean) {
    this._externalAddressDelete = value;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  get adminUserCreate(): AdminUser {
    return this._adminUserCreate;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  set adminUserCreate(value: AdminUser) {
    this._adminUserCreate = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
   */
  get adminUserUpdate(): AdminUser {
    return this._adminUserUpdate;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
   */
  set adminUserUpdate(value: AdminUser) {
    this._adminUserUpdate = value;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  get adminUserDelete(): boolean {
    return this._adminUserDelete;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  set adminUserDelete(value: boolean) {
    this._adminUserDelete = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  get adminUserTenantCreate(): AdminUserTenant {
    return this._adminUserTenantCreate;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  set adminUserTenantCreate(value: AdminUserTenant) {
    this._adminUserTenantCreate = value;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  get adminUserTenantDelete(): AdminUserTenant {
    return this._adminUserTenantDelete;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  set adminUserTenantDelete(value: AdminUserTenant) {
    this._adminUserTenantDelete = value;
  }
  /**
   attributeDescriptionCreate field
   */
  get attributeDescriptionCreate(): AttributeDescription {
    return this._attributeDescriptionCreate;
  }
  /**
   attributeDescriptionCreate field
   */
  set attributeDescriptionCreate(value: AttributeDescription) {
    this._attributeDescriptionCreate = value;
  }
  /**
   attributeDescriptionUpdate field
   */
  get attributeDescriptionUpdate(): AttributeDescription {
    return this._attributeDescriptionUpdate;
  }
  /**
   attributeDescriptionUpdate field
   */
  set attributeDescriptionUpdate(value: AttributeDescription) {
    this._attributeDescriptionUpdate = value;
  }
  /**
   attributeDescriptionDelete field
   */
  get attributeDescriptionDelete(): boolean {
    return this._attributeDescriptionDelete;
  }
  /**
   attributeDescriptionDelete field
   */
  set attributeDescriptionDelete(value: boolean) {
    this._attributeDescriptionDelete = value;
  }
  /**
   attributeDescriptionCsvImport field
   */
  get attributeDescriptionCsvImport(): CsvImportResponse {
    return this._attributeDescriptionCsvImport;
  }
  /**
   attributeDescriptionCsvImport field
   */
  set attributeDescriptionCsvImport(value: CsvImportResponse) {
    this._attributeDescriptionCsvImport = value;
  }
  /**
   attributeCreate field
   */
  get attributeCreate(): Attribute {
    return this._attributeCreate;
  }
  /**
   attributeCreate field
   */
  set attributeCreate(value: Attribute) {
    this._attributeCreate = value;
  }
  /**
   attributeUpdate field
   */
  get attributeUpdate(): Attribute {
    return this._attributeUpdate;
  }
  /**
   attributeUpdate field
   */
  set attributeUpdate(value: Attribute) {
    this._attributeUpdate = value;
  }
  /**
   attributeDelete field
   */
  get attributeDelete(): boolean {
    return this._attributeDelete;
  }
  /**
   attributeDelete field
   */
  set attributeDelete(value: boolean) {
    this._attributeDelete = value;
  }
  /**
   attributeCsvImport field
   */
  get attributeCsvImport(): CsvImportResponse {
    return this._attributeCsvImport;
  }
  /**
   attributeCsvImport field
   */
  set attributeCsvImport(value: CsvImportResponse) {
    this._attributeCsvImport = value;
  }
  /**
   Starts an anonymous firebase session
   */
  get startSession(): Login {
    return this._startSession;
  }
  /**
   Starts an anonymous firebase session
   */
  set startSession(value: Login) {
    this._startSession = value;
  }
  /**
   Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
   */
  get login(): Login {
    return this._login;
  }
  /**
   Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
   */
  set login(value: Login) {
    this._login = value;
  }
  /**
   AUTH: Role=[] OR ('user is authenticated')
   */
  get logout(): Logout | undefined {
    return this._logout;
  }
  /**
   AUTH: Role=[] OR ('user is authenticated')
   */
  set logout(value: Logout | undefined) {
    this._logout = value;
  }
  /**
   AUTH: Role=[system] OR ('user is anonymous')
   */
  get authenticationCreate(): Login {
    return this._authenticationCreate;
  }
  /**
   AUTH: Role=[system] OR ('user is anonymous')
   */
  set authenticationCreate(value: Login) {
    this._authenticationCreate = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get authenticationDelete(): boolean {
    return this._authenticationDelete;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set authenticationDelete(value: boolean) {
    this._authenticationDelete = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get claimsReset(): boolean {
    return this._claimsReset;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set claimsReset(value: boolean) {
    this._claimsReset = value;
  }
  /**
   verifyToken field
   */
  get verifyToken(): VerifyToken {
    return this._verifyToken;
  }
  /**
   verifyToken field
   */
  set verifyToken(value: VerifyToken) {
    this._verifyToken = value;
  }
  /**
   exchangeRefreshToken field
   */
  get exchangeRefreshToken(): RefreshTokenResponse {
    return this._exchangeRefreshToken;
  }
  /**
   exchangeRefreshToken field
   */
  set exchangeRefreshToken(value: RefreshTokenResponse) {
    this._exchangeRefreshToken = value;
  }
  /**
   Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
   */
  get triggerPasswordSendResetEmailEvent(): boolean {
    return this._triggerPasswordSendResetEmailEvent;
  }
  /**
   Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
   */
  set triggerPasswordSendResetEmailEvent(value: boolean) {
    this._triggerPasswordSendResetEmailEvent = value;
  }
  /**
   Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
   */
  get triggerPasswordSendInitEmailEvent(): string {
    return this._triggerPasswordSendInitEmailEvent;
  }
  /**
   Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
   */
  set triggerPasswordSendInitEmailEvent(value: string) {
    this._triggerPasswordSendInitEmailEvent = value;
  }
  /**
   Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
   */
  get passwordResetLink(): string {
    return this._passwordResetLink;
  }
  /**
   Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
   */
  set passwordResetLink(value: string) {
    this._passwordResetLink = value;
  }
  /**
   AUTH: Role=[system]
   */
  get magicTokenCreate(): MagicToken {
    return this._magicTokenCreate;
  }
  /**
   AUTH: Role=[system]
   */
  set magicTokenCreate(value: MagicToken) {
    this._magicTokenCreate = value;
  }
  /**
   AUTH: Role=[system]
   */
  get magicTokenUpdate(): MagicToken {
    return this._magicTokenUpdate;
  }
  /**
   AUTH: Role=[system]
   */
  set magicTokenUpdate(value: MagicToken) {
    this._magicTokenUpdate = value;
  }
  /**
   AUTH: Role=[system]
   */
  get magicTokenDelete(): boolean {
    return this._magicTokenDelete;
  }
  /**
   AUTH: Role=[system]
   */
  set magicTokenDelete(value: boolean) {
    this._magicTokenDelete = value;
  }
  /**
   Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
   */
  get magicTokenLogin(): Login {
    return this._magicTokenLogin;
  }
  /**
   Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
   */
  set magicTokenLogin(value: Login) {
    this._magicTokenLogin = value;
  }
  /**
   bundleCreate field
   */
  get bundleCreate(): Bundle {
    return this._bundleCreate;
  }
  /**
   bundleCreate field
   */
  set bundleCreate(value: Bundle) {
    this._bundleCreate = value;
  }
  /**
   bundleUpdate field
   */
  get bundleUpdate(): Bundle {
    return this._bundleUpdate;
  }
  /**
   bundleUpdate field
   */
  set bundleUpdate(value: Bundle) {
    this._bundleUpdate = value;
  }
  /**
   bundleDelete field
   */
  get bundleDelete(): boolean {
    return this._bundleDelete;
  }
  /**
   bundleDelete field
   */
  set bundleDelete(value: boolean) {
    this._bundleDelete = value;
  }
  /**
   bundleAddItems field
   */
  get bundleAddItems(): BundleItem[] {
    return this._bundleAddItems;
  }
  /**
   bundleAddItems field
   */
  set bundleAddItems(value: BundleItem[]) {
    this._bundleAddItems = value;
  }
  /**
   bundleRemoveItem field
   */
  get bundleRemoveItem(): boolean {
    return this._bundleRemoveItem;
  }
  /**
   bundleRemoveItem field
   */
  set bundleRemoveItem(value: boolean) {
    this._bundleRemoveItem = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get businessRuleCreate(): BusinessRule {
    return this._businessRuleCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set businessRuleCreate(value: BusinessRule) {
    this._businessRuleCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleUpdate(): BusinessRule {
    return this._businessRuleUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleUpdate(value: BusinessRule) {
    this._businessRuleUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get businessRuleDelete(): boolean {
    return this._businessRuleDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set businessRuleDelete(value: boolean) {
    this._businessRuleDelete = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableAddColumn(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableAddColumn;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableAddColumn(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableAddColumn = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableUpdate(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableUpdate(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableDeleteColumn(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableDeleteColumn;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableDeleteColumn(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableDeleteColumn = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableAddRow(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableAddRow;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableAddRow(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableAddRow = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableMoveRow(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableMoveRow;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableMoveRow(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableMoveRow = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableDeleteRow(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableDeleteRow;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableDeleteRow(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableDeleteRow = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get businessRuleDecisionTableSetCell(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTableSetCell;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set businessRuleDecisionTableSetCell(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTableSetCell = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get incentiveRuleCreate(): BusinessRule {
    return this._incentiveRuleCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set incentiveRuleCreate(value: BusinessRule) {
    this._incentiveRuleCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get incentiveRuleSetOrderItemConditions(): BusinessRule {
    return this._incentiveRuleSetOrderItemConditions;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set incentiveRuleSetOrderItemConditions(value: BusinessRule) {
    this._incentiveRuleSetOrderItemConditions = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get incentiveRuleSetAction(): BusinessRule {
    return this._incentiveRuleSetAction;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set incentiveRuleSetAction(value: BusinessRule) {
    this._incentiveRuleSetAction = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get carrierCreate(): Carrier {
    return this._carrierCreate;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set carrierCreate(value: Carrier) {
    this._carrierCreate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get carrierUpdate(): Carrier {
    return this._carrierUpdate;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set carrierUpdate(value: Carrier) {
    this._carrierUpdate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get carrierDelete(): boolean {
    return this._carrierDelete;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set carrierDelete(value: boolean) {
    this._carrierDelete = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get carrierAssignWarehouse(): boolean {
    return this._carrierAssignWarehouse;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set carrierAssignWarehouse(value: boolean) {
    this._carrierAssignWarehouse = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get carrierUnassignWarehouse(): boolean {
    return this._carrierUnassignWarehouse;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set carrierUnassignWarehouse(value: boolean) {
    this._carrierUnassignWarehouse = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get cartStart(): Cart {
    return this._cartStart;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set cartStart(value: Cart) {
    this._cartStart = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get cartSetUser(): Cart {
    return this._cartSetUser;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set cartSetUser(value: Cart) {
    this._cartSetUser = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get cartSetContact(): Cart {
    return this._cartSetContact;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set cartSetContact(value: Cart) {
    this._cartSetContact = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get cartSetCustomer(): Cart {
    return this._cartSetCustomer;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set cartSetCustomer(value: Cart) {
    this._cartSetCustomer = value;
  }
  /**
   Update existing cart
   */
  get cartUpdate(): Cart {
    return this._cartUpdate;
  }
  /**
   Update existing cart
   */
  set cartUpdate(value: Cart) {
    this._cartUpdate = value;
  }
  /**
   Delete existing cart
   */
  get cartDelete(): boolean {
    return this._cartDelete;
  }
  /**
   Delete existing cart
   */
  set cartDelete(value: boolean) {
    this._cartDelete = value;
  }
  /**
   Process cart
   */
  get cartProcess(): CartProcessResponse {
    return this._cartProcess;
  }
  /**
   Process cart
   */
  set cartProcess(value: CartProcessResponse) {
    this._cartProcess = value;
  }
  /**
   Add action code to the cart
   */
  get cartAddActionCode(): Cart {
    return this._cartAddActionCode;
  }
  /**
   Add action code to the cart
   */
  set cartAddActionCode(value: Cart) {
    this._cartAddActionCode = value;
  }
  /**
   Remove action code from the cart
   */
  get cartRemoveActionCode(): Cart {
    return this._cartRemoveActionCode;
  }
  /**
   Remove action code from the cart
   */
  set cartRemoveActionCode(value: Cart) {
    this._cartRemoveActionCode = value;
  }
  /**
   Update cart address
   */
  get cartUpdateAddress(): Cart {
    return this._cartUpdateAddress;
  }
  /**
   Update cart address
   */
  set cartUpdateAddress(value: Cart) {
    this._cartUpdateAddress = value;
  }
  /**
   Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
   */
  get cartRequestPurchaseAuthorization(): Cart {
    return this._cartRequestPurchaseAuthorization;
  }
  /**
   Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
   */
  set cartRequestPurchaseAuthorization(value: Cart) {
    this._cartRequestPurchaseAuthorization = value;
  }
  /**
   Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  get cartAcceptPurchaseAuthorizationRequest(): Cart {
    return this._cartAcceptPurchaseAuthorizationRequest;
  }
  /**
   Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  set cartAcceptPurchaseAuthorizationRequest(value: Cart) {
    this._cartAcceptPurchaseAuthorizationRequest = value;
  }
  /**
   Add item to the cart
   */
  get cartAddItem(): Cart {
    return this._cartAddItem;
  }
  /**
   Add item to the cart
   */
  set cartAddItem(value: Cart) {
    this._cartAddItem = value;
  }
  /**
   Add bundle item to the cart
   */
  get cartAddBundle(): Cart {
    return this._cartAddBundle;
  }
  /**
   Add bundle item to the cart
   */
  set cartAddBundle(value: Cart) {
    this._cartAddBundle = value;
  }
  /**
   Update item in the cart
   */
  get cartUpdateItem(): Cart {
    return this._cartUpdateItem;
  }
  /**
   Update item in the cart
   */
  set cartUpdateItem(value: Cart) {
    this._cartUpdateItem = value;
  }
  /**
   Update multiple items in the cart
   */
  get cartItemBulk(): BulkResponseData {
    return this._cartItemBulk;
  }
  /**
   Update multiple items in the cart
   */
  set cartItemBulk(value: BulkResponseData) {
    this._cartItemBulk = value;
  }
  /**
   Delete item from the cart
   */
  get cartDeleteItem(): Cart {
    return this._cartDeleteItem;
  }
  /**
   Delete item from the cart
   */
  set cartDeleteItem(value: Cart) {
    this._cartDeleteItem = value;
  }
  /**
   Invalidate cache for a specific cart or all carts if no id is provided
   */
  get cartInvalidateCache(): boolean {
    return this._cartInvalidateCache;
  }
  /**
   Invalidate cache for a specific cart or all carts if no id is provided
   */
  set cartInvalidateCache(value: boolean) {
    this._cartInvalidateCache = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get categoryAddProductsClusters(): CategoryAddProductsClustersResponse {
    return this._categoryAddProductsClusters;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set categoryAddProductsClusters(value: CategoryAddProductsClustersResponse) {
    this._categoryAddProductsClusters = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get categoryRemoveProductsClusters(): CategoryRemoveProductsClustersResponse {
    return this._categoryRemoveProductsClusters;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set categoryRemoveProductsClusters(value: CategoryRemoveProductsClustersResponse) {
    this._categoryRemoveProductsClusters = value;
  }
  /**
   AUTH: Role=[product.OWNER] OR ('user is authenticated')
   */
  get categoryCreate(): Category {
    return this._categoryCreate;
  }
  /**
   AUTH: Role=[product.OWNER] OR ('user is authenticated')
   */
  set categoryCreate(value: Category) {
    this._categoryCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
   */
  get categoryUpdate(): Category {
    return this._categoryUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
   */
  set categoryUpdate(value: Category) {
    this._categoryUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER] OR ('user is authenticated')
   */
  get categoryCsvImport(): CsvImportResponse {
    return this._categoryCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER] OR ('user is authenticated')
   */
  set categoryCsvImport(value: CsvImportResponse) {
    this._categoryCsvImport = value;
  }
  /**
   Delete category by category Id
   */
  get categoryDelete(): boolean {
    return this._categoryDelete;
  }
  /**
   Delete category by category Id
   */
  set categoryDelete(value: boolean) {
    this._categoryDelete = value;
  }
  /**
   channelInvalidateCache field
   */
  get channelInvalidateCache(): boolean {
    return this._channelInvalidateCache;
  }
  /**
   channelInvalidateCache field
   */
  set channelInvalidateCache(value: boolean) {
    this._channelInvalidateCache = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get paymentCreate(): Payment {
    return this._paymentCreate;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set paymentCreate(value: Payment) {
    this._paymentCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get paymentUpdate(): Payment {
    return this._paymentUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set paymentUpdate(value: Payment) {
    this._paymentUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get paymentDelete(): Payment {
    return this._paymentDelete;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set paymentDelete(value: Payment) {
    this._paymentDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get crossupsellCreate(): Crossupsell {
    return this._crossupsellCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set crossupsellCreate(value: Crossupsell) {
    this._crossupsellCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get crossupsellUpdate(): Crossupsell {
    return this._crossupsellUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set crossupsellUpdate(value: Crossupsell) {
    this._crossupsellUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get crossupsellDelete(): boolean {
    return this._crossupsellDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set crossupsellDelete(value: boolean) {
    this._crossupsellDelete = value;
  }
  /**
   Deletes an EventActionConfig entity by ID
   */
  get eventActionConfigDelete(): boolean {
    return this._eventActionConfigDelete;
  }
  /**
   Deletes an EventActionConfig entity by ID
   */
  set eventActionConfigDelete(value: boolean) {
    this._eventActionConfigDelete = value;
  }
  /**
   Triggers a custom event with a custom payload
   */
  get triggerCustomEvent(): boolean {
    return this._triggerCustomEvent;
  }
  /**
   Triggers a custom event with a custom payload
   */
  set triggerCustomEvent(value: boolean) {
    this._triggerCustomEvent = value;
  }
  /**
   Creates a new EventToEmailConfig entity
   */
  get eventToEmailConfigCreate(): EventToEmailConfig {
    return this._eventToEmailConfigCreate;
  }
  /**
   Creates a new EventToEmailConfig entity
   */
  set eventToEmailConfigCreate(value: EventToEmailConfig) {
    this._eventToEmailConfigCreate = value;
  }
  /**
   Updates an existing EventToEmailConfig entity
   */
  get eventToEmailConfigUpdate(): EventToEmailConfig {
    return this._eventToEmailConfigUpdate;
  }
  /**
   Updates an existing EventToEmailConfig entity
   */
  set eventToEmailConfigUpdate(value: EventToEmailConfig) {
    this._eventToEmailConfigUpdate = value;
  }
  /**
   Creates a new EventToWebHookConfig entity
   */
  get eventToWebHookConfigCreate(): EventToWebHookConfig {
    return this._eventToWebHookConfigCreate;
  }
  /**
   Creates a new EventToWebHookConfig entity
   */
  set eventToWebHookConfigCreate(value: EventToWebHookConfig) {
    this._eventToWebHookConfigCreate = value;
  }
  /**
   Updates an existing  entity
   */
  get eventToWebHookConfigUpdate(): EventToWebHookConfig {
    return this._eventToWebHookConfigUpdate;
  }
  /**
   Updates an existing  entity
   */
  set eventToWebHookConfigUpdate(value: EventToWebHookConfig) {
    this._eventToWebHookConfigUpdate = value;
  }
  /**
   AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
   */
  get favoriteListCreate(): FavoriteList {
    return this._favoriteListCreate;
  }
  /**
   AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
   */
  set favoriteListCreate(value: FavoriteList) {
    this._favoriteListCreate = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteListUpdate(): FavoriteList {
    return this._favoriteListUpdate;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteListUpdate(value: FavoriteList) {
    this._favoriteListUpdate = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteListDelete(): boolean {
    return this._favoriteListDelete;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteListDelete(value: boolean) {
    this._favoriteListDelete = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteListAddItems(): FavoriteList {
    return this._favoriteListAddItems;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteListAddItems(value: FavoriteList) {
    this._favoriteListAddItems = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteListRemoveItems(): FavoriteList {
    return this._favoriteListRemoveItems;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteListRemoveItems(value: FavoriteList) {
    this._favoriteListRemoveItems = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteListClearItems(): FavoriteList {
    return this._favoriteListClearItems;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteListClearItems(value: FavoriteList) {
    this._favoriteListClearItems = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get inventoryCreate(): InventoryResponse {
    return this._inventoryCreate;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set inventoryCreate(value: InventoryResponse) {
    this._inventoryCreate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get inventoryCsvImport(): CsvImportResponse {
    return this._inventoryCsvImport;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set inventoryCsvImport(value: CsvImportResponse) {
    this._inventoryCsvImport = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get inventoryUpdate(): InventoryResponse {
    return this._inventoryUpdate;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set inventoryUpdate(value: InventoryResponse) {
    this._inventoryUpdate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get inventoryDelete(): InventoryDeleteResponse {
    return this._inventoryDelete;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set inventoryDelete(value: InventoryDeleteResponse) {
    this._inventoryDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaImageCreate(): MediaImage {
    return this._mediaImageCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaImageCreate(value: MediaImage) {
    this._mediaImageCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get mediaImageUpdate(): MediaImage {
    return this._mediaImageUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set mediaImageUpdate(value: MediaImage) {
    this._mediaImageUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaImageDelete(): DeleteMediaImageResponse {
    return this._mediaImageDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaImageDelete(value: DeleteMediaImageResponse) {
    this._mediaImageDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaImageCsvImport(): CsvImportResponse {
    return this._mediaImageCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaImageCsvImport(value: CsvImportResponse) {
    this._mediaImageCsvImport = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaVideoCreate(): MediaVideo {
    return this._mediaVideoCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaVideoCreate(value: MediaVideo) {
    this._mediaVideoCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get mediaVideoUpdate(): MediaVideo {
    return this._mediaVideoUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set mediaVideoUpdate(value: MediaVideo) {
    this._mediaVideoUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaVideoDelete(): DeleteMediaVideoResponse {
    return this._mediaVideoDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaVideoDelete(value: DeleteMediaVideoResponse) {
    this._mediaVideoDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaVideoCsvImport(): CsvImportResponse {
    return this._mediaVideoCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaVideoCsvImport(value: CsvImportResponse) {
    this._mediaVideoCsvImport = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaDocumentCreate(): MediaDocument {
    return this._mediaDocumentCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaDocumentCreate(value: MediaDocument) {
    this._mediaDocumentCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get mediaDocumentUpdate(): MediaDocument {
    return this._mediaDocumentUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set mediaDocumentUpdate(value: MediaDocument) {
    this._mediaDocumentUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaDocumentDelete(): DeleteMediaDocumentResponse {
    return this._mediaDocumentDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaDocumentDelete(value: DeleteMediaDocumentResponse) {
    this._mediaDocumentDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get mediaDocumentCsvImport(): CsvImportResponse {
    return this._mediaDocumentCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set mediaDocumentCsvImport(value: CsvImportResponse) {
    this._mediaDocumentCsvImport = value;
  }
  /**
   AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
   */
  get mediaAttachmentCreate(): MediaAttachment {
    return this._mediaAttachmentCreate;
  }
  /**
   AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
   */
  set mediaAttachmentCreate(value: MediaAttachment) {
    this._mediaAttachmentCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
   */
  get mediaAttachmentUpdate(): MediaAttachment {
    return this._mediaAttachmentUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
   */
  set mediaAttachmentUpdate(value: MediaAttachment) {
    this._mediaAttachmentUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,product.OWNER]
   */
  get mediaAttachmentDelete(): DeleteMediaAttachmentResponse {
    return this._mediaAttachmentDelete;
  }
  /**
   AUTH: Role=[order.OWNER,product.OWNER]
   */
  set mediaAttachmentDelete(value: DeleteMediaAttachmentResponse) {
    this._mediaAttachmentDelete = value;
  }
  /**
   Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
   */
  get publishEmailEvent(): PublishEmailEventResponse {
    return this._publishEmailEvent;
  }
  /**
   Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
   */
  set publishEmailEvent(value: PublishEmailEventResponse) {
    this._publishEmailEvent = value;
  }
  /**
   Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
   */
  get publishEmailSendEvent(): PublishEmailEventResponse {
    return this._publishEmailSendEvent;
  }
  /**
   Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
   */
  set publishEmailSendEvent(value: PublishEmailEventResponse) {
    this._publishEmailSendEvent = value;
  }
  /**
   Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
   */
  get publishPasswordResetEmailEvent(): PublishEmailEventResponse {
    return this._publishPasswordResetEmailEvent;
  }
  /**
   Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
   */
  set publishPasswordResetEmailEvent(value: PublishEmailEventResponse) {
    this._publishPasswordResetEmailEvent = value;
  }
  /**
   Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
   */
  get emailTemplateCreate(): EmailTemplate {
    return this._emailTemplateCreate;
  }
  /**
   Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
   */
  set emailTemplateCreate(value: EmailTemplate) {
    this._emailTemplateCreate = value;
  }
  /**
   Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get emailTemplateUpdate(): EmailTemplate {
    return this._emailTemplateUpdate;
  }
  /**
   Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set emailTemplateUpdate(value: EmailTemplate) {
    this._emailTemplateUpdate = value;
  }
  /**
   Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
   */
  get documentTemplateCreate(): DocumentTemplate {
    return this._documentTemplateCreate;
  }
  /**
   Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
   */
  set documentTemplateCreate(value: DocumentTemplate) {
    this._documentTemplateCreate = value;
  }
  /**
   Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get documentTemplateUpdate(): DocumentTemplate {
    return this._documentTemplateUpdate;
  }
  /**
   Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set documentTemplateUpdate(value: DocumentTemplate) {
    this._documentTemplateUpdate = value;
  }
  /**
   Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
   */
  get templateDelete(): boolean {
    return this._templateDelete;
  }
  /**
   Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
   */
  set templateDelete(value: boolean) {
    this._templateDelete = value;
  }
  /**
   Add an attachment to an EmailTemplate by ID
   */
  get emailTemplateAddAttachment(): EmailTemplate {
    return this._emailTemplateAddAttachment;
  }
  /**
   Add an attachment to an EmailTemplate by ID
   */
  set emailTemplateAddAttachment(value: EmailTemplate) {
    this._emailTemplateAddAttachment = value;
  }
  /**
   Remove an attachment from an EmailTemplate by ID
   */
  get emailTemplateRemoveAttachment(): EmailTemplate {
    return this._emailTemplateRemoveAttachment;
  }
  /**
   Remove an attachment from an EmailTemplate by ID
   */
  set emailTemplateRemoveAttachment(value: EmailTemplate) {
    this._emailTemplateRemoveAttachment = value;
  }
  /**
   Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get templateRenderToHTML(): string {
    return this._templateRenderToHTML;
  }
  /**
   Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set templateRenderToHTML(value: string) {
    this._templateRenderToHTML = value;
  }
  /**
   Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get emailTemplateRenderAndSend(): boolean {
    return this._emailTemplateRenderAndSend;
  }
  /**
   Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set emailTemplateRenderAndSend(value: boolean) {
    this._emailTemplateRenderAndSend = value;
  }
  /**
   Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get documentTemplateRenderToPDF(): Base64File {
    return this._documentTemplateRenderToPDF;
  }
  /**
   Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set documentTemplateRenderToPDF(value: Base64File) {
    this._documentTemplateRenderToPDF = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderStatusCreate(): OrderStatus {
    return this._orderStatusCreate;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderStatusCreate(value: OrderStatus) {
    this._orderStatusCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderStatusUpdate(): OrderStatus {
    return this._orderStatusUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderStatusUpdate(value: OrderStatus) {
    this._orderStatusUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderStatusDelete(): boolean {
    return this._orderStatusDelete;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderStatusDelete(value: boolean) {
    this._orderStatusDelete = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderStatusSetCreate(): OrderStatusSet {
    return this._orderStatusSetCreate;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderStatusSetCreate(value: OrderStatusSet) {
    this._orderStatusSetCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderStatusSetUpdate(): OrderStatusSet {
    return this._orderStatusSetUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderStatusSetUpdate(value: OrderStatusSet) {
    this._orderStatusSetUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderStatusSetAddOrderStatuses(): OrderStatusSet {
    return this._orderStatusSetAddOrderStatuses;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderStatusSetAddOrderStatuses(value: OrderStatusSet) {
    this._orderStatusSetAddOrderStatuses = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderStatusSetRemoveOrderStatuses(): OrderStatusSet {
    return this._orderStatusSetRemoveOrderStatuses;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderStatusSetRemoveOrderStatuses(value: OrderStatusSet) {
    this._orderStatusSetRemoveOrderStatuses = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderStatusSetDelete(): boolean {
    return this._orderStatusSetDelete;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderStatusSetDelete(value: boolean) {
    this._orderStatusSetDelete = value;
  }
  /**
   AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get orderCreate(): Order {
    return this._orderCreate;
  }
  /**
   AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set orderCreate(value: Order) {
    this._orderCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderUpdate(): Order {
    return this._orderUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderUpdate(value: Order) {
    this._orderUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get orderDelete(): boolean {
    return this._orderDelete;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set orderDelete(value: boolean) {
    this._orderDelete = value;
  }
  /**
   Deprecated in favor of using triggerOrderSendConfirm
   */
  get orderSendConfirmationEmail(): SendOrderConfirmResponseType {
    return this._orderSendConfirmationEmail;
  }
  /**
   Deprecated in favor of using triggerOrderSendConfirm
   */
  set orderSendConfirmationEmail(value: SendOrderConfirmResponseType) {
    this._orderSendConfirmationEmail = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get triggerOrderSendConfirm(): boolean {
    return this._triggerOrderSendConfirm;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set triggerOrderSendConfirm(value: boolean) {
    this._triggerOrderSendConfirm = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get triggerQuoteSendRequest(): boolean {
    return this._triggerQuoteSendRequest;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set triggerQuoteSendRequest(value: boolean) {
    this._triggerQuoteSendRequest = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get triggerQuoteSendValidation(): boolean {
    return this._triggerQuoteSendValidation;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set triggerQuoteSendValidation(value: boolean) {
    this._triggerQuoteSendValidation = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get triggerQuoteSend(): boolean {
    return this._triggerQuoteSend;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set triggerQuoteSend(value: boolean) {
    this._triggerQuoteSend = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderSetStatus(): Order {
    return this._orderSetStatus;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderSetStatus(value: Order) {
    this._orderSetStatus = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderItemCreate(): OrderItem {
    return this._orderItemCreate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderItemCreate(value: OrderItem) {
    this._orderItemCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderItemUpdate(): OrderItem {
    return this._orderItemUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderItemUpdate(value: OrderItem) {
    this._orderItemUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderItemDelete(): boolean {
    return this._orderItemDelete;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderItemDelete(value: boolean) {
    this._orderItemDelete = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderAddressUpdate(): OrderAddress {
    return this._orderAddressUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderAddressUpdate(value: OrderAddress) {
    this._orderAddressUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get orderUpdateAddress(): boolean {
    return this._orderUpdateAddress;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set orderUpdateAddress(value: boolean) {
    this._orderUpdateAddress = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentCreate(): Shipment {
    return this._shipmentCreate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentCreate(value: Shipment) {
    this._shipmentCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentUpdate(): Shipment {
    return this._shipmentUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentUpdate(value: Shipment) {
    this._shipmentUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentDelete(): boolean {
    return this._shipmentDelete;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentDelete(value: boolean) {
    this._shipmentDelete = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentItemCreate(): ShipmentItem {
    return this._shipmentItemCreate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentItemCreate(value: ShipmentItem) {
    this._shipmentItemCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentItemUpdate(): ShipmentItem {
    return this._shipmentItemUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentItemUpdate(value: ShipmentItem) {
    this._shipmentItemUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get shipmentItemDelete(): boolean {
    return this._shipmentItemDelete;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set shipmentItemDelete(value: boolean) {
    this._shipmentItemDelete = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get trackAndTraceCreate(): TrackAndTrace {
    return this._trackAndTraceCreate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set trackAndTraceCreate(value: TrackAndTrace) {
    this._trackAndTraceCreate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get trackAndTraceUpdate(): TrackAndTrace {
    return this._trackAndTraceUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set trackAndTraceUpdate(value: TrackAndTrace) {
    this._trackAndTraceUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get trackAndTraceDelete(): boolean {
    return this._trackAndTraceDelete;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set trackAndTraceDelete(value: boolean) {
    this._trackAndTraceDelete = value;
  }
  /**
   AUTH: Role=[shop.OWNER] OR ('user is authenticated')
   */
  get orderlistCreate(): Orderlist {
    return this._orderlistCreate;
  }
  /**
   AUTH: Role=[shop.OWNER] OR ('user is authenticated')
   */
  set orderlistCreate(value: Orderlist) {
    this._orderlistCreate = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistUpdate(): Orderlist {
    return this._orderlistUpdate;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistUpdate(value: Orderlist) {
    this._orderlistUpdate = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistAddItems(): Orderlist {
    return this._orderlistAddItems;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistAddItems(value: Orderlist) {
    this._orderlistAddItems = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistRemoveItems(): Orderlist {
    return this._orderlistRemoveItems;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistRemoveItems(value: Orderlist) {
    this._orderlistRemoveItems = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistAssignUsers(): Orderlist {
    return this._orderlistAssignUsers;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistAssignUsers(value: Orderlist) {
    this._orderlistAssignUsers = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistUnassignUsers(): Orderlist {
    return this._orderlistUnassignUsers;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistUnassignUsers(value: Orderlist) {
    this._orderlistUnassignUsers = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistAssignCompanies(): Orderlist {
    return this._orderlistAssignCompanies;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistAssignCompanies(value: Orderlist) {
    this._orderlistAssignCompanies = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  get orderlistUnassignCompanies(): Orderlist {
    return this._orderlistUnassignCompanies;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR]
   */
  set orderlistUnassignCompanies(value: Orderlist) {
    this._orderlistUnassignCompanies = value;
  }
  /**
   AUTH: Role=[shop.OWNER]
   */
  get orderlistDelete(): boolean {
    return this._orderlistDelete;
  }
  /**
   AUTH: Role=[shop.OWNER]
   */
  set orderlistDelete(value: boolean) {
    this._orderlistDelete = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get payMethodCreate(): PayMethod {
    return this._payMethodCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set payMethodCreate(value: PayMethod) {
    this._payMethodCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get payMethodUpdate(): PayMethod {
    return this._payMethodUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set payMethodUpdate(value: PayMethod) {
    this._payMethodUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get payMethodDelete(): boolean {
    return this._payMethodDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set payMethodDelete(value: boolean) {
    this._payMethodDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get priceCreate(): Price {
    return this._priceCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set priceCreate(value: Price) {
    this._priceCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get priceCsvImport(): CsvImportResponse {
    return this._priceCsvImport;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set priceCsvImport(value: CsvImportResponse) {
    this._priceCsvImport = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get priceUpdate(): Price {
    return this._priceUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set priceUpdate(value: Price) {
    this._priceUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get priceDelete(): boolean {
    return this._priceDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set priceDelete(value: boolean) {
    this._priceDelete = value;
  }
  /**
   costPriceCreate field
   */
  get costPriceCreate(): CostPrice {
    return this._costPriceCreate;
  }
  /**
   costPriceCreate field
   */
  set costPriceCreate(value: CostPrice) {
    this._costPriceCreate = value;
  }
  /**
   costPriceUpdate field
   */
  get costPriceUpdate(): CostPrice {
    return this._costPriceUpdate;
  }
  /**
   costPriceUpdate field
   */
  set costPriceUpdate(value: CostPrice) {
    this._costPriceUpdate = value;
  }
  /**
   costPriceDelete field
   */
  get costPriceDelete(): boolean {
    return this._costPriceDelete;
  }
  /**
   costPriceDelete field
   */
  set costPriceDelete(value: boolean) {
    this._costPriceDelete = value;
  }
  /**
   costPricesBulk field
   */
  get costPricesBulk(): BulkResponseData {
    return this._costPricesBulk;
  }
  /**
   costPricesBulk field
   */
  set costPricesBulk(value: BulkResponseData) {
    this._costPricesBulk = value;
  }
  /**
   costPricesDelete field
   */
  get costPricesDelete(): boolean {
    return this._costPricesDelete;
  }
  /**
   costPricesDelete field
   */
  set costPricesDelete(value: boolean) {
    this._costPricesDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get pricesheetCreate(): Pricesheet {
    return this._pricesheetCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set pricesheetCreate(value: Pricesheet) {
    this._pricesheetCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get pricesheetUpdate(): Pricesheet {
    return this._pricesheetUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set pricesheetUpdate(value: Pricesheet) {
    this._pricesheetUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get pricesheetCsvImport(): CsvImportResponse {
    return this._pricesheetCsvImport;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set pricesheetCsvImport(value: CsvImportResponse) {
    this._pricesheetCsvImport = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get pricesheetDelete(): boolean {
    return this._pricesheetDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set pricesheetDelete(value: boolean) {
    this._pricesheetDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get pricesheetAssign(): Pricesheet {
    return this._pricesheetAssign;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set pricesheetAssign(value: Pricesheet) {
    this._pricesheetAssign = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get pricesheetUnassign(): Pricesheet {
    return this._pricesheetUnassign;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set pricesheetUnassign(value: Pricesheet) {
    this._pricesheetUnassign = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get discountCreate(): Discount {
    return this._discountCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set discountCreate(value: Discount) {
    this._discountCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get discountUpdate(): Discount {
    return this._discountUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set discountUpdate(value: Discount) {
    this._discountUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get discountDelete(): boolean {
    return this._discountDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set discountDelete(value: boolean) {
    this._discountDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get discountsDeleteByPricesheetId(): boolean {
    return this._discountsDeleteByPricesheetId;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set discountsDeleteByPricesheetId(value: boolean) {
    this._discountsDeleteByPricesheetId = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get discountCsvImport(): CsvImportResponse {
    return this._discountCsvImport;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set discountCsvImport(value: CsvImportResponse) {
    this._discountCsvImport = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkPriceCreate(): BulkPrice {
    return this._bulkPriceCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkPriceCreate(value: BulkPrice) {
    this._bulkPriceCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get bulkPriceUpdate(): BulkPrice {
    return this._bulkPriceUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set bulkPriceUpdate(value: BulkPrice) {
    this._bulkPriceUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkPriceCsvImport(): CsvImportResponse {
    return this._bulkPriceCsvImport;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkPriceCsvImport(value: CsvImportResponse) {
    this._bulkPriceCsvImport = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkPriceDelete(): boolean {
    return this._bulkPriceDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkPriceDelete(value: boolean) {
    this._bulkPriceDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkPricesCreate(): BulkResponseData {
    return this._bulkPricesCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkPricesCreate(value: BulkResponseData) {
    this._bulkPricesCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkPricesDelete(): boolean {
    return this._bulkPricesDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkPricesDelete(value: boolean) {
    this._bulkPricesDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkCostPriceCreate(): BulkCostPrice {
    return this._bulkCostPriceCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkCostPriceCreate(value: BulkCostPrice) {
    this._bulkCostPriceCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get bulkCostPriceUpdate(): BulkCostPrice {
    return this._bulkCostPriceUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set bulkCostPriceUpdate(value: BulkCostPrice) {
    this._bulkCostPriceUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkCostPriceCsvImport(): CsvImportResponse {
    return this._bulkCostPriceCsvImport;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkCostPriceCsvImport(value: CsvImportResponse) {
    this._bulkCostPriceCsvImport = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkCostPriceDelete(): boolean {
    return this._bulkCostPriceDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkCostPriceDelete(value: boolean) {
    this._bulkCostPriceDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkCostPricesBulk(): BulkResponseData {
    return this._bulkCostPricesBulk;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkCostPricesBulk(value: BulkResponseData) {
    this._bulkCostPricesBulk = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get bulkCostPricesDelete(): boolean {
    return this._bulkCostPricesDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set bulkCostPricesDelete(value: boolean) {
    this._bulkCostPricesDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get zoneTaxCodeCreate(): ZoneTaxCode {
    return this._zoneTaxCodeCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set zoneTaxCodeCreate(value: ZoneTaxCode) {
    this._zoneTaxCodeCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get zoneTaxCodeUpdate(): ZoneTaxCode {
    return this._zoneTaxCodeUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set zoneTaxCodeUpdate(value: ZoneTaxCode) {
    this._zoneTaxCodeUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get zoneTaxCodeDelete(): boolean {
    return this._zoneTaxCodeDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set zoneTaxCodeDelete(value: boolean) {
    this._zoneTaxCodeDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get zoneTaxCodesCreate(): ZoneTaxCode {
    return this._zoneTaxCodesCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set zoneTaxCodesCreate(value: ZoneTaxCode) {
    this._zoneTaxCodesCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get zoneTaxCodesDelete(): boolean {
    return this._zoneTaxCodesDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set zoneTaxCodesDelete(value: boolean) {
    this._zoneTaxCodesDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get taxCreate(): Tax {
    return this._taxCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set taxCreate(value: Tax) {
    this._taxCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get taxUpdate(): Tax {
    return this._taxUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set taxUpdate(value: Tax) {
    this._taxUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get taxDelete(): boolean {
    return this._taxDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set taxDelete(value: boolean) {
    this._taxDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get productCreate(): Product {
    return this._productCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set productCreate(value: Product) {
    this._productCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get productUpdate(): Product {
    return this._productUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set productUpdate(value: Product) {
    this._productUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get productDelete(): boolean {
    return this._productDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set productDelete(value: boolean) {
    this._productDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get productCsvImport(): CsvImportResponse {
    return this._productCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set productCsvImport(value: CsvImportResponse) {
    this._productCsvImport = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterOptionCreate(): ClusterOption {
    return this._clusterOptionCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterOptionCreate(value: ClusterOption) {
    this._clusterOptionCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get clusterOptionUpdate(): ClusterOption {
    return this._clusterOptionUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set clusterOptionUpdate(value: ClusterOption) {
    this._clusterOptionUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterOptionDelete(): boolean {
    return this._clusterOptionDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterOptionDelete(value: boolean) {
    this._clusterOptionDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterProductCreate(): Product {
    return this._clusterProductCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterProductCreate(value: Product) {
    this._clusterProductCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get clusterProductUpdate(): Product {
    return this._clusterProductUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set clusterProductUpdate(value: Product) {
    this._clusterProductUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterProductDelete(): boolean {
    return this._clusterProductDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterProductDelete(value: boolean) {
    this._clusterProductDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterCreate(): Cluster {
    return this._clusterCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterCreate(value: Cluster) {
    this._clusterCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get clusterUpdate(): Cluster {
    return this._clusterUpdate;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set clusterUpdate(value: Cluster) {
    this._clusterUpdate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterCsvImport(): CsvImportResponse {
    return this._clusterCsvImport;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterCsvImport(value: CsvImportResponse) {
    this._clusterCsvImport = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterDelete(): boolean {
    return this._clusterDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterDelete(value: boolean) {
    this._clusterDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
   */
  get clusterAssignProducts(): ClusterAssignProductsResponse {
    return this._clusterAssignProducts;
  }
  /**
   AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
   */
  set clusterAssignProducts(value: ClusterAssignProductsResponse) {
    this._clusterAssignProducts = value;
  }
  /**
   AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
   */
  get clusterUnassignProducts(): ClusterUnassignProductsResponse {
    return this._clusterUnassignProducts;
  }
  /**
   AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
   */
  set clusterUnassignProducts(value: ClusterUnassignProductsResponse) {
    this._clusterUnassignProducts = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterConfigCreate(): ClusterConfigResponse {
    return this._clusterConfigCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterConfigCreate(value: ClusterConfigResponse) {
    this._clusterConfigCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterConfigDelete(): boolean {
    return this._clusterConfigDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterConfigDelete(value: boolean) {
    this._clusterConfigDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterConfigAddSetting(): ClusterConfigSettingResponse {
    return this._clusterConfigAddSetting;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterConfigAddSetting(value: ClusterConfigSettingResponse) {
    this._clusterConfigAddSetting = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterConfigUpdateSetting(): UpdateClusterConfigSettingResponse {
    return this._clusterConfigUpdateSetting;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterConfigUpdateSetting(value: UpdateClusterConfigSettingResponse) {
    this._clusterConfigUpdateSetting = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get clusterConfigRemoveSetting(): boolean {
    return this._clusterConfigRemoveSetting;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set clusterConfigRemoveSetting(value: boolean) {
    this._clusterConfigRemoveSetting = value;
  }
  /**
   roleDefinitionCreate field
   */
  get roleDefinitionCreate(): RoleDefinition {
    return this._roleDefinitionCreate;
  }
  /**
   roleDefinitionCreate field
   */
  set roleDefinitionCreate(value: RoleDefinition) {
    this._roleDefinitionCreate = value;
  }
  /**
   roleDefinitionUpdate field
   */
  get roleDefinitionUpdate(): RoleDefinition {
    return this._roleDefinitionUpdate;
  }
  /**
   roleDefinitionUpdate field
   */
  set roleDefinitionUpdate(value: RoleDefinition) {
    this._roleDefinitionUpdate = value;
  }
  /**
   roleDefinitionDelete field
   */
  get roleDefinitionDelete(): boolean {
    return this._roleDefinitionDelete;
  }
  /**
   roleDefinitionDelete field
   */
  set roleDefinitionDelete(value: boolean) {
    this._roleDefinitionDelete = value;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  get roleCreate(): Role {
    return this._roleCreate;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  set roleCreate(value: Role) {
    this._roleCreate = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR]
   */
  get roleUpdate(): Role {
    return this._roleUpdate;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR]
   */
  set roleUpdate(value: Role) {
    this._roleUpdate = value;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  get roleDelete(): boolean {
    return this._roleDelete;
  }
  /**
   AUTH: Role=[role.OWNER]
   */
  set roleDelete(value: boolean) {
    this._roleDelete = value;
  }
  /**
   shopInvalidateCache field
   */
  get shopInvalidateCache(): boolean {
    return this._shopInvalidateCache;
  }
  /**
   shopInvalidateCache field
   */
  set shopInvalidateCache(value: boolean) {
    this._shopInvalidateCache = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get machineCreate(): SparePartsMachine {
    return this._machineCreate;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set machineCreate(value: SparePartsMachine) {
    this._machineCreate = value;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  get machineDelete(): boolean {
    return this._machineDelete;
  }
  /**
   AUTH: Role=[product.OWNER]
   */
  set machineDelete(value: boolean) {
    this._machineDelete = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  get machineUpsert(): SparePartsMachine {
    return this._machineUpsert;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR]
   */
  set machineUpsert(value: SparePartsMachine) {
    this._machineUpsert = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get surchargeCreate(): Surcharge {
    return this._surchargeCreate;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set surchargeCreate(value: Surcharge) {
    this._surchargeCreate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get surchargeUpdate(): Surcharge {
    return this._surchargeUpdate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set surchargeUpdate(value: Surcharge) {
    this._surchargeUpdate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get surchargeDelete(): Surcharge {
    return this._surchargeDelete;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set surchargeDelete(value: Surcharge) {
    this._surchargeDelete = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get addSurchargesToProduct(): ConfirmationResponse {
    return this._addSurchargesToProduct;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set addSurchargesToProduct(value: ConfirmationResponse) {
    this._addSurchargesToProduct = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  get removeSurchargesFromProduct(): ConfirmationResponse {
    return this._removeSurchargesFromProduct;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR]
   */
  set removeSurchargesFromProduct(value: ConfirmationResponse) {
    this._removeSurchargesFromProduct = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get tenderStart(): Tender {
    return this._tenderStart;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set tenderStart(value: Tender) {
    this._tenderStart = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdateAddress(): Tender {
    return this._tenderUpdateAddress;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdateAddress(value: Tender) {
    this._tenderUpdateAddress = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderAddItems(): TenderResponse {
    return this._tenderAddItems;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderAddItems(value: TenderResponse) {
    this._tenderAddItems = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdateItem(): Tender {
    return this._tenderUpdateItem;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdateItem(value: Tender) {
    this._tenderUpdateItem = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderDeleteItem(): Tender {
    return this._tenderDeleteItem;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderDeleteItem(value: Tender) {
    this._tenderDeleteItem = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdateInvoiceUser(): Tender {
    return this._tenderUpdateInvoiceUser;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdateInvoiceUser(value: Tender) {
    this._tenderUpdateInvoiceUser = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdate(): Tender {
    return this._tenderUpdate;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdate(value: Tender) {
    this._tenderUpdate = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdateDiscount(): Tender {
    return this._tenderUpdateDiscount;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdateDiscount(value: Tender) {
    this._tenderUpdateDiscount = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdatePostage(): Tender {
    return this._tenderUpdatePostage;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdatePostage(value: Tender) {
    this._tenderUpdatePostage = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderUpdatePayment(): Tender {
    return this._tenderUpdatePayment;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderUpdatePayment(value: Tender) {
    this._tenderUpdatePayment = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderApplyIncentives(): Tender {
    return this._tenderApplyIncentives;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderApplyIncentives(value: Tender) {
    this._tenderApplyIncentives = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  get tenderProcess(): TenderProcessResponse {
    return this._tenderProcess;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR]
   */
  set tenderProcess(value: TenderProcessResponse) {
    this._tenderProcess = value;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  get tenderDelete(): string {
    return this._tenderDelete;
  }
  /**
   AUTH: Role=[order.OWNER]
   */
  set tenderDelete(value: string) {
    this._tenderDelete = value;
  }
  /**
   usergroupCreate field
   */
  get usergroupCreate(): Usergroup {
    return this._usergroupCreate;
  }
  /**
   usergroupCreate field
   */
  set usergroupCreate(value: Usergroup) {
    this._usergroupCreate = value;
  }
  /**
   usergroupUpdate field
   */
  get usergroupUpdate(): Usergroup {
    return this._usergroupUpdate;
  }
  /**
   usergroupUpdate field
   */
  set usergroupUpdate(value: Usergroup) {
    this._usergroupUpdate = value;
  }
  /**
   usergroupDelete field
   */
  get usergroupDelete(): boolean {
    return this._usergroupDelete;
  }
  /**
   usergroupDelete field
   */
  set usergroupDelete(value: boolean) {
    this._usergroupDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get companyCreate(): Company {
    return this._companyCreate;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set companyCreate(value: Company) {
    this._companyCreate = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get companyUpdate(): Company {
    return this._companyUpdate;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set companyUpdate(value: Company) {
    this._companyUpdate = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get companyDelete(): string {
    return this._companyDelete;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set companyDelete(value: string) {
    this._companyDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get companyCsvImport(): CsvImportResponse {
    return this._companyCsvImport;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set companyCsvImport(value: CsvImportResponse) {
    this._companyCsvImport = value;
  }
  /**
   Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
   */
  get contactCreate(): Contact {
    return this._contactCreate;
  }
  /**
   Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
   */
  set contactCreate(value: Contact) {
    this._contactCreate = value;
  }
  /**
   Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
   */
  get contactRegister(): RegisterContactResponse {
    return this._contactRegister;
  }
  /**
   Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
   */
  set contactRegister(value: RegisterContactResponse) {
    this._contactRegister = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  get contactUpdate(): Contact {
    return this._contactUpdate;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  set contactUpdate(value: Contact) {
    this._contactUpdate = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  get contactAddToCompanies(): ContactAddToCompaniesResponse {
    return this._contactAddToCompanies;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  set contactAddToCompanies(value: ContactAddToCompaniesResponse) {
    this._contactAddToCompanies = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  get contactRemoveFromCompanies(): ContactRemoveFromCompaniesResponse {
    return this._contactRemoveFromCompanies;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  set contactRemoveFromCompanies(value: ContactRemoveFromCompaniesResponse) {
    this._contactRemoveFromCompanies = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get contactDelete(): boolean {
    return this._contactDelete;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set contactDelete(value: boolean) {
    this._contactDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get contactCreateAccount(): RegisterContactResponse {
    return this._contactCreateAccount;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set contactCreateAccount(value: RegisterContactResponse) {
    this._contactCreateAccount = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get contactDeleteAccount(): boolean {
    return this._contactDeleteAccount;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set contactDeleteAccount(value: boolean) {
    this._contactDeleteAccount = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get contactCsvImport(): CsvImportResponse {
    return this._contactCsvImport;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set contactCsvImport(value: CsvImportResponse) {
    this._contactCsvImport = value;
  }
  /**
   triggerContactSendWelcomeEmailEvent field
   */
  get triggerContactSendWelcomeEmailEvent(): boolean {
    return this._triggerContactSendWelcomeEmailEvent;
  }
  /**
   triggerContactSendWelcomeEmailEvent field
   */
  set triggerContactSendWelcomeEmailEvent(value: boolean) {
    this._triggerContactSendWelcomeEmailEvent = value;
  }
  /**
   Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
   */
  get customerCreate(): Customer {
    return this._customerCreate;
  }
  /**
   Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
   */
  set customerCreate(value: Customer) {
    this._customerCreate = value;
  }
  /**
   Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
   */
  get customerRegister(): RegisterCustomerResponse {
    return this._customerRegister;
  }
  /**
   Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
   */
  set customerRegister(value: RegisterCustomerResponse) {
    this._customerRegister = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get customerUpdate(): Customer {
    return this._customerUpdate;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set customerUpdate(value: Customer) {
    this._customerUpdate = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get customerDelete(): boolean {
    return this._customerDelete;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set customerDelete(value: boolean) {
    this._customerDelete = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get customerCreateAccount(): RegisterCustomerResponse {
    return this._customerCreateAccount;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set customerCreateAccount(value: RegisterCustomerResponse) {
    this._customerCreateAccount = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get customerDeleteAccount(): boolean {
    return this._customerDeleteAccount;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set customerDeleteAccount(value: boolean) {
    this._customerDeleteAccount = value;
  }
  /**
   triggerCustomerSendWelcomeEmailEvent field
   */
  get triggerCustomerSendWelcomeEmailEvent(): boolean {
    return this._triggerCustomerSendWelcomeEmailEvent;
  }
  /**
   triggerCustomerSendWelcomeEmailEvent field
   */
  set triggerCustomerSendWelcomeEmailEvent(value: boolean) {
    this._triggerCustomerSendWelcomeEmailEvent = value;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  get customerCsvImport(): CsvImportResponse {
    return this._customerCsvImport;
  }
  /**
   AUTH: Role=[user.OWNER]
   */
  set customerCsvImport(value: CsvImportResponse) {
    this._customerCsvImport = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR]
   */
  get addCompanyManager(): string {
    return this._addCompanyManager;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR]
   */
  set addCompanyManager(value: string) {
    this._addCompanyManager = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR]
   */
  get removeCompanyManager(): string {
    return this._removeCompanyManager;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR]
   */
  set removeCompanyManager(value: string) {
    this._removeCompanyManager = value;
  }
  /**
   Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
   */
  get purchaseAuthorizationConfigCreate(): PurchaseAuthorizationConfig {
    return this._purchaseAuthorizationConfigCreate;
  }
  /**
   Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
   */
  set purchaseAuthorizationConfigCreate(value: PurchaseAuthorizationConfig) {
    this._purchaseAuthorizationConfigCreate = value;
  }
  /**
   Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
   */
  get purchaseAuthorizationConfigUpdate(): PurchaseAuthorizationConfig {
    return this._purchaseAuthorizationConfigUpdate;
  }
  /**
   Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
   */
  set purchaseAuthorizationConfigUpdate(value: PurchaseAuthorizationConfig) {
    this._purchaseAuthorizationConfigUpdate = value;
  }
  /**
   Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
   */
  get purchaseAuthorizationConfigDelete(): boolean {
    return this._purchaseAuthorizationConfigDelete;
  }
  /**
   Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
   */
  set purchaseAuthorizationConfigDelete(value: boolean) {
    this._purchaseAuthorizationConfigDelete = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get valuesetCreate(): Valueset {
    return this._valuesetCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set valuesetCreate(value: Valueset) {
    this._valuesetCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get valuesetUpdate(): Valueset {
    return this._valuesetUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set valuesetUpdate(value: Valueset) {
    this._valuesetUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get valuesetDelete(): boolean {
    return this._valuesetDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set valuesetDelete(value: boolean) {
    this._valuesetDelete = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get valuesetItemCreate(): ValuesetItem {
    return this._valuesetItemCreate;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set valuesetItemCreate(value: ValuesetItem) {
    this._valuesetItemCreate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  get valuesetItemUpdate(): ValuesetItem {
    return this._valuesetItemUpdate;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR]
   */
  set valuesetItemUpdate(value: ValuesetItem) {
    this._valuesetItemUpdate = value;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  get valuesetItemDelete(): boolean {
    return this._valuesetItemDelete;
  }
  /**
   AUTH: Role=[configuration.OWNER]
   */
  set valuesetItemDelete(value: boolean) {
    this._valuesetItemDelete = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get warehouseCreate(): Warehouse {
    return this._warehouseCreate;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set warehouseCreate(value: Warehouse) {
    this._warehouseCreate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get warehouseUpdate(): Warehouse {
    return this._warehouseUpdate;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set warehouseUpdate(value: Warehouse) {
    this._warehouseUpdate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get warehouseDelete(): Warehouse {
    return this._warehouseDelete;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set warehouseDelete(value: Warehouse) {
    this._warehouseDelete = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get warehouseAddressCreate(): WarehouseAddress {
    return this._warehouseAddressCreate;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set warehouseAddressCreate(value: WarehouseAddress) {
    this._warehouseAddressCreate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  get warehouseAddressUpdate(): WarehouseAddress {
    return this._warehouseAddressUpdate;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR]
   */
  set warehouseAddressUpdate(value: WarehouseAddress) {
    this._warehouseAddressUpdate = value;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  get warehouseAddressDelete(): boolean {
    return this._warehouseAddressDelete;
  }
  /**
   AUTH: Role=[logistics.OWNER]
   */
  set warehouseAddressDelete(value: boolean) {
    this._warehouseAddressDelete = value;
  }
}