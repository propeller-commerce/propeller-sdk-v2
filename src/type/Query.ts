import { Address } from './Address';
import { ExternalAddress } from './ExternalAddress';
import { AdminUser } from './AdminUser';
import { UserResponse } from './UserResponse';
import { AdminUserTenant } from './AdminUserTenant';
import { AttributeDescription } from './AttributeDescription';
import { AttributeDescriptionResponse } from './AttributeDescriptionResponse';
import { Attribute } from './Attribute';
import { AttributeResponse } from './AttributeResponse';
import { AttributeResultResponse } from './AttributeResultResponse';
import { GCIPUser } from './GCIPUser';
import { MagicTokenResponse } from './MagicTokenResponse';
import { MagicToken } from './MagicToken';
import { BundlesResponse } from './BundlesResponse';
import { Bundle } from './Bundle';
import { BusinessRule } from './BusinessRule';
import { BusinessRuleResponse } from './BusinessRuleResponse';
import { BusinessRuleDecisionTable } from './BusinessRuleDecisionTable';
import { BusinessRuleFieldDefinitionGroup } from './BusinessRuleFieldDefinitionGroup';
import { CarriersResponse } from './CarriersResponse';
import { Carrier } from './Carrier';
import { Cart } from './Cart';
import { CartResponse } from './CartResponse';
import { Category } from './Category';
import { CategoryResponse } from './CategoryResponse';
import { Site } from './Site';
import { Channel } from './Channel';
import { Payment } from './Payment';
import { PaymentsResponse } from './PaymentsResponse';
import { CompanySearchResponse } from './CompanySearchResponse';
import { Crossupsell } from './Crossupsell';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { IEventActionConfig } from './IEventActionConfig';
import { EventActionConfigResponse } from './EventActionConfigResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { FavoriteList } from './FavoriteList';
import { InventoryResponse } from './InventoryResponse';
import { MediaImage } from './MediaImage';
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { Media } from './Media';
import { IBaseTemplate } from './IBaseTemplate';
import { TemplateResponse } from './TemplateResponse';
import { OrderStatusesResponse } from './OrderStatusesResponse';
import { OrderStatus } from './OrderStatus';
import { OrderStatusSetsResponse } from './OrderStatusSetsResponse';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderResponse } from './OrderResponse';
import { Order } from './Order';
import { Base64File } from './Base64File';
import { OrderAddress } from './OrderAddress';
import { Shipment } from './Shipment';
import { ShipmentResponse } from './ShipmentResponse';
import { ShipmentItem } from './ShipmentItem';
import { ShipmentItemResponse } from './ShipmentItemResponse';
import { TrackAndTrace } from './TrackAndTrace';
import { TrackAndTraceResponse } from './TrackAndTraceResponse';
import { Orderlist } from './Orderlist';
import { OrderlistsResponse } from './OrderlistsResponse';
import { PayMethod } from './PayMethod';
import { PayMethodsResponse } from './PayMethodsResponse';
import { Price } from './Price';
import { PriceResponse } from './PriceResponse';
import { CostPriceResponse } from './CostPriceResponse';
import { ProductPrice } from './ProductPrice';
import { Pricesheet } from './Pricesheet';
import { PricesheetResponse } from './PricesheetResponse';
import { Discount } from './Discount';
import { DiscountResponse } from './DiscountResponse';
import { BulkPriceResponse } from './BulkPriceResponse';
import { BulkCostPriceResponse } from './BulkCostPriceResponse';
import { ZoneTaxCode } from './ZoneTaxCode';
import { ZoneTaxCodeResponse } from './ZoneTaxCodeResponse';
import { Tax } from './Tax';
import { TaxesResponse } from './TaxesResponse';
import { Cluster } from './Cluster';
import { ProductsResponse } from './ProductsResponse';
import { Product } from './Product';
import { ClusterConfigResponse } from './ClusterConfigResponse';
import { RoleDefinitionResponse } from './RoleDefinitionResponse';
import { RoleDefinition } from './RoleDefinition';
import { Role } from './Role';
import { RoleResponse } from './RoleResponse';
import { Shop } from './Shop';
import { SparePartsMachine } from './SparePartsMachine';
import { SparePartsMachineResponse } from './SparePartsMachineResponse';
import { SurchargesResponse } from './SurchargesResponse';
import { Surcharge } from './Surcharge';
import { SurchargeProductResponse } from './SurchargeProductResponse';
import { Tender } from './Tender';
import { Usergroup } from './Usergroup';
import { UsergroupsResponse } from './UsergroupsResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
import { Contact } from './Contact';
import { ContactsResponse } from './ContactsResponse';
import { Customer } from './Customer';
import { CustomersResponse } from './CustomersResponse';
import { IBaseUser } from './IBaseUser';
import { PurchaseAuthorizationConfig } from './PurchaseAuthorizationConfig';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
import { Valueset } from './Valueset';
import { ValuesetResponse } from './ValuesetResponse';
import { ValuesetItemResponse } from './ValuesetItemResponse';
import { Warehouse } from './Warehouse';
import { WarehousesResponse } from './WarehousesResponse';
/**
 Object class for Query
 */
export class Query {
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _addressesByUserId: Address[];
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _addressesByCustomerId: Address[];
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _addressesByCompanyId: Address[];
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated') */
  private _externalAddress: ExternalAddress;
  /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT')) */
  private _adminUser: AdminUser;
  /** AUTH: Role=[] OR ('user is authenticated') */
  private _adminUserViewer?: AdminUser;
  /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
  private _adminUsers: UserResponse;
  /** AUTH: Role=[role.OWNER,role.EDITOR] */
  private _adminUserTenant: AdminUserTenant;
  /** attributeDescription field */
  private _attributeDescription: AttributeDescription;
  /** attributeDescriptions field */
  private _attributeDescriptions: AttributeDescriptionResponse;
  /** attribute field */
  private _attribute: Attribute;
  /** attributes field */
  private _attributes: AttributeResponse;
  /** attributesByProductId field */
  private _attributesByProductId: AttributeResponse;
  /** attributeResultByProductId field */
  private _attributeResultByProductId: AttributeResultResponse;
  /** attributeResultByCategoryId field */
  private _attributeResultByCategoryId: AttributeResultResponse;
  /** attributeResultByCompanyId field */
  private _attributeResultByCompanyId: AttributeResultResponse;
  /** attributeResultByContactId field */
  private _attributeResultByContactId: AttributeResultResponse;
  /** attributeResultByCustomerId field */
  private _attributeResultByCustomerId: AttributeResultResponse;
  /** attributeResultByClusterId field */
  private _attributeResultByClusterId: AttributeResultResponse;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _authentication: GCIPUser;
  /** AUTH: Role=[system] */
  private _magicTokens: MagicTokenResponse;
  /** AUTH: Role=[system] */
  private _magicToken: MagicToken;
  /** bundles field */
  private _bundles: BundlesResponse;
  /** bundle field */
  private _bundle: Bundle;
  /** Returns a business rule by its ID. */
  private _businessRule: BusinessRule;
  /** Returns a paginated response of rules based on the provider filter */
  private _businessRules: BusinessRuleResponse;
  /** Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine */
  private _businessRuleJDM: any;
  /** Returns a decisionTable by ruleId and tableId */
  private _businessRuleDecisionTable: BusinessRuleDecisionTable;
  /** businessRuleFieldDefinitions field */
  private _businessRuleFieldDefinitions: BusinessRuleFieldDefinitionGroup;
  /** carriers field */
  private _carriers: CarriersResponse;
  /** carrier field */
  private _carrier: Carrier;
  /** cart field */
  private _cart: Cart;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _carts: CartResponse;
  /** category field */
  private _category: Category;
  /** categories field */
  private _categories: CategoryResponse;
  /** site field */
  /** @deprecated Deprecated in favor of channel */
  private _site: Site;
  /** channel field */
  private _channel: Channel;
  /** channels field */
  private _channels: Channel[];
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _payment?: Payment;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _payments: PaymentsResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
  private _companySearch: CompanySearchResponse;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  private _crossupsell: Crossupsell;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  private _crossupsells: CrossupsellsResponse;
  /** Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type */
  private _eventActionConfig?: IEventActionConfig;
  /** Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type */
  private _eventActionConfigs?: EventActionConfigResponse;
  /** Get favorite lists, use either an id or a source */
  private _favoriteLists: FavoriteListsResponse;
  /** AUTH: Role=[system] OR ('user is authenticated') */
  private _favoriteList: FavoriteList;
  /** AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER] */
  private _inventory: InventoryResponse;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.image` */
  private _mediaImage: MediaImage;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.images` */
  private _mediaImages: PaginatedMediaImageResponse;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.video` */
  private _mediaVideo: MediaVideo;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.videos` */
  private _mediaVideos: PaginatedMediaVideoResponse;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.document` */
  private _mediaDocument: MediaDocument;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  /** @deprecated Deprecated in favor of `media.documents` */
  private _mediaDocuments: PaginatedMediaDocumentResponse;
  /** media field */
  private _media?: Media;
  /** Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _template: IBaseTemplate;
  /** Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _templates: TemplateResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _orderStatuses: OrderStatusesResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _orderStatus: OrderStatus;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _orderStatusSets: OrderStatusSetsResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _orderStatusSet: OrderStatusSet;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _orders: OrderResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _order: Order;
  /** orderGetPDF field */
  private _orderGetPDF: Base64File;
  /** quoteGetPDF field */
  private _quoteGetPDF: Base64File;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _orderAddress: OrderAddress;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _orderAddresses: OrderAddress[];
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  /** @deprecated Use orderAddresses */
  private _addressesByOrderId: Address[];
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _shipment: Shipment;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _shipments: ShipmentResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _shipmentItem: ShipmentItem;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _shipmentItems: ShipmentItemResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _trackAndTrace: TrackAndTrace;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
  private _trackAndTraces: TrackAndTraceResponse;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated') */
  private _orderlist: Orderlist;
  /** AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated') */
  private _orderlists: OrderlistsResponse;
  /** payMethod field */
  private _payMethod: PayMethod;
  /** payMethods field */
  private _payMethods: PayMethodsResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _price: Price;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _prices: PriceResponse;
  /** costPrices field */
  private _costPrices: CostPriceResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _priceCalculate: ProductPrice;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _priceExplain: ProductPrice[];
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _priceDefault: ProductPrice[];
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _pricesheet: Pricesheet;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _pricesheets: PricesheetResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _discount: Discount;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _discounts: DiscountResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _bulkPrices: BulkPriceResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _bulkCostPrices: BulkCostPriceResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _zoneTaxCode: ZoneTaxCode;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _zoneTaxCodes: ZoneTaxCodeResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _tax: Tax;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _taxes: TaxesResponse;
  /** cluster field */
  private _cluster: Cluster;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
  private _products: ProductsResponse;
  /** product field */
  private _product: Product;
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  private _clusterConfigs: ClusterConfigResponse[];
  /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
  private _clusterConfig: ClusterConfigResponse;
  /** roleDefinitions field */
  private _roleDefinitions: RoleDefinitionResponse;
  /** roleDefinition field */
  private _roleDefinition: RoleDefinition;
  /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
  private _role: Role;
  /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _roles: RoleResponse;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _shop: Shop;
  /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
  private _shops: Shop[];
  /** Get a single machine, either by id, slug & language or by source & sourceId */
  private _machine?: SparePartsMachine;
  /** List machines */
  private _machines: SparePartsMachineResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _surcharges: SurchargesResponse;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _surcharge: Surcharge;
  /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
  private _productSurcharges: SurchargeProductResponse;
  /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
  private _tender: Tender;
  /** usergroup field */
  /** @deprecated This query is deprecated and will be removed in a future */
  private _usergroup: Usergroup;
  /** usergroups field */
  /** @deprecated This query is deprecated and will be removed in a future */
  private _usergroups: UsergroupsResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
  private _company: Company;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
  private _companies: CompaniesResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
  private _contact: Contact;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
  private _contacts: ContactsResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
  private _customer: Customer;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
  private _customers: CustomersResponse;
  /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
  private _user: IBaseUser;
  /** viewer field */
  private _viewer: IBaseUser;
  /** Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'), */
  private _purchaseAuthorizationConfig: PurchaseAuthorizationConfig;
  /** Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')), */
  private _purchaseAuthorizationConfigs: PurchaseAuthorizationConfigResponse;
  /** valueset field */
  private _valueset: Valueset;
  /** valuesets field */
  private _valuesets: ValuesetResponse;
  /** valuesetItems field */
  private _valuesetItems: ValuesetItemResponse;
  /** warehouse field */
  private _warehouse: Warehouse;
  /** warehouses field */
  private _warehouses: WarehousesResponse;
  /**
   Creates a new instance of Query
   */
  constructor(data: Partial<Query> = {}) {
    this._addressesByUserId = data.addressesByUserId!;
    this._addressesByCustomerId = data.addressesByCustomerId!;
    this._addressesByCompanyId = data.addressesByCompanyId!;
    this._externalAddress = data.externalAddress!;
    this._adminUser = data.adminUser!;
    this._adminUserViewer = data.adminUserViewer;
    this._adminUsers = data.adminUsers!;
    this._adminUserTenant = data.adminUserTenant!;
    this._attributeDescription = data.attributeDescription!;
    this._attributeDescriptions = data.attributeDescriptions!;
    this._attribute = data.attribute!;
    this._attributes = data.attributes!;
    this._attributesByProductId = data.attributesByProductId!;
    this._attributeResultByProductId = data.attributeResultByProductId!;
    this._attributeResultByCategoryId = data.attributeResultByCategoryId!;
    this._attributeResultByCompanyId = data.attributeResultByCompanyId!;
    this._attributeResultByContactId = data.attributeResultByContactId!;
    this._attributeResultByCustomerId = data.attributeResultByCustomerId!;
    this._attributeResultByClusterId = data.attributeResultByClusterId!;
    this._authentication = data.authentication!;
    this._magicTokens = data.magicTokens!;
    this._magicToken = data.magicToken!;
    this._bundles = data.bundles!;
    this._bundle = data.bundle!;
    this._businessRule = data.businessRule!;
    this._businessRules = data.businessRules!;
    this._businessRuleJDM = data.businessRuleJDM!;
    this._businessRuleDecisionTable = data.businessRuleDecisionTable!;
    this._businessRuleFieldDefinitions = data.businessRuleFieldDefinitions!;
    this._carriers = data.carriers!;
    this._carrier = data.carrier!;
    this._cart = data.cart!;
    this._carts = data.carts!;
    this._category = data.category!;
    this._categories = data.categories!;
    this._site = data.site!;
    this._channel = data.channel!;
    this._channels = data.channels!;
    this._payment = data.payment;
    this._payments = data.payments!;
    this._companySearch = data.companySearch!;
    this._crossupsell = data.crossupsell!;
    this._crossupsells = data.crossupsells!;
    this._eventActionConfig = data.eventActionConfig;
    this._eventActionConfigs = data.eventActionConfigs;
    this._favoriteLists = data.favoriteLists!;
    this._favoriteList = data.favoriteList!;
    this._inventory = data.inventory!;
    this._mediaImage = data.mediaImage!;
    this._mediaImages = data.mediaImages!;
    this._mediaVideo = data.mediaVideo!;
    this._mediaVideos = data.mediaVideos!;
    this._mediaDocument = data.mediaDocument!;
    this._mediaDocuments = data.mediaDocuments!;
    this._media = data.media;
    this._template = data.template!;
    this._templates = data.templates!;
    this._orderStatuses = data.orderStatuses!;
    this._orderStatus = data.orderStatus!;
    this._orderStatusSets = data.orderStatusSets!;
    this._orderStatusSet = data.orderStatusSet!;
    this._orders = data.orders!;
    this._order = data.order!;
    this._orderGetPDF = data.orderGetPDF!;
    this._quoteGetPDF = data.quoteGetPDF!;
    this._orderAddress = data.orderAddress!;
    this._orderAddresses = data.orderAddresses!;
    this._addressesByOrderId = data.addressesByOrderId!;
    this._shipment = data.shipment!;
    this._shipments = data.shipments!;
    this._shipmentItem = data.shipmentItem!;
    this._shipmentItems = data.shipmentItems!;
    this._trackAndTrace = data.trackAndTrace!;
    this._trackAndTraces = data.trackAndTraces!;
    this._orderlist = data.orderlist!;
    this._orderlists = data.orderlists!;
    this._payMethod = data.payMethod!;
    this._payMethods = data.payMethods!;
    this._price = data.price!;
    this._prices = data.prices!;
    this._costPrices = data.costPrices!;
    this._priceCalculate = data.priceCalculate!;
    this._priceExplain = data.priceExplain!;
    this._priceDefault = data.priceDefault!;
    this._pricesheet = data.pricesheet!;
    this._pricesheets = data.pricesheets!;
    this._discount = data.discount!;
    this._discounts = data.discounts!;
    this._bulkPrices = data.bulkPrices!;
    this._bulkCostPrices = data.bulkCostPrices!;
    this._zoneTaxCode = data.zoneTaxCode!;
    this._zoneTaxCodes = data.zoneTaxCodes!;
    this._tax = data.tax!;
    this._taxes = data.taxes!;
    this._cluster = data.cluster!;
    this._products = data.products!;
    this._product = data.product!;
    this._clusterConfigs = data.clusterConfigs!;
    this._clusterConfig = data.clusterConfig!;
    this._roleDefinitions = data.roleDefinitions!;
    this._roleDefinition = data.roleDefinition!;
    this._role = data.role!;
    this._roles = data.roles!;
    this._shop = data.shop!;
    this._shops = data.shops!;
    this._machine = data.machine;
    this._machines = data.machines!;
    this._surcharges = data.surcharges!;
    this._surcharge = data.surcharge!;
    this._productSurcharges = data.productSurcharges!;
    this._tender = data.tender!;
    this._usergroup = data.usergroup!;
    this._usergroups = data.usergroups!;
    this._company = data.company!;
    this._companies = data.companies!;
    this._contact = data.contact!;
    this._contacts = data.contacts!;
    this._customer = data.customer!;
    this._customers = data.customers!;
    this._user = data.user!;
    this._viewer = data.viewer!;
    this._purchaseAuthorizationConfig = data.purchaseAuthorizationConfig!;
    this._purchaseAuthorizationConfigs = data.purchaseAuthorizationConfigs!;
    this._valueset = data.valueset!;
    this._valuesets = data.valuesets!;
    this._valuesetItems = data.valuesetItems!;
    this._warehouse = data.warehouse!;
    this._warehouses = data.warehouses!;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get addressesByUserId(): Address[] {
    return this._addressesByUserId;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set addressesByUserId(value: Address[]) {
    this._addressesByUserId = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get addressesByCustomerId(): Address[] {
    return this._addressesByCustomerId;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set addressesByCustomerId(value: Address[]) {
    this._addressesByCustomerId = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get addressesByCompanyId(): Address[] {
    return this._addressesByCompanyId;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set addressesByCompanyId(value: Address[]) {
    this._addressesByCompanyId = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
   */
  get externalAddress(): ExternalAddress {
    return this._externalAddress;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
   */
  set externalAddress(value: ExternalAddress) {
    this._externalAddress = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
   */
  get adminUser(): AdminUser {
    return this._adminUser;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
   */
  set adminUser(value: AdminUser) {
    this._adminUser = value;
  }
  /**
   AUTH: Role=[] OR ('user is authenticated')
   */
  get adminUserViewer(): AdminUser | undefined {
    return this._adminUserViewer;
  }
  /**
   AUTH: Role=[] OR ('user is authenticated')
   */
  set adminUserViewer(value: AdminUser | undefined) {
    this._adminUserViewer = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  get adminUsers(): UserResponse {
    return this._adminUsers;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  set adminUsers(value: UserResponse) {
    this._adminUsers = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR]
   */
  get adminUserTenant(): AdminUserTenant {
    return this._adminUserTenant;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR]
   */
  set adminUserTenant(value: AdminUserTenant) {
    this._adminUserTenant = value;
  }
  /**
   attributeDescription field
   */
  get attributeDescription(): AttributeDescription {
    return this._attributeDescription;
  }
  /**
   attributeDescription field
   */
  set attributeDescription(value: AttributeDescription) {
    this._attributeDescription = value;
  }
  /**
   attributeDescriptions field
   */
  get attributeDescriptions(): AttributeDescriptionResponse {
    return this._attributeDescriptions;
  }
  /**
   attributeDescriptions field
   */
  set attributeDescriptions(value: AttributeDescriptionResponse) {
    this._attributeDescriptions = value;
  }
  /**
   attribute field
   */
  get attribute(): Attribute {
    return this._attribute;
  }
  /**
   attribute field
   */
  set attribute(value: Attribute) {
    this._attribute = value;
  }
  /**
   attributes field
   */
  get attributes(): AttributeResponse {
    return this._attributes;
  }
  /**
   attributes field
   */
  set attributes(value: AttributeResponse) {
    this._attributes = value;
  }
  /**
   attributesByProductId field
   */
  get attributesByProductId(): AttributeResponse {
    return this._attributesByProductId;
  }
  /**
   attributesByProductId field
   */
  set attributesByProductId(value: AttributeResponse) {
    this._attributesByProductId = value;
  }
  /**
   attributeResultByProductId field
   */
  get attributeResultByProductId(): AttributeResultResponse {
    return this._attributeResultByProductId;
  }
  /**
   attributeResultByProductId field
   */
  set attributeResultByProductId(value: AttributeResultResponse) {
    this._attributeResultByProductId = value;
  }
  /**
   attributeResultByCategoryId field
   */
  get attributeResultByCategoryId(): AttributeResultResponse {
    return this._attributeResultByCategoryId;
  }
  /**
   attributeResultByCategoryId field
   */
  set attributeResultByCategoryId(value: AttributeResultResponse) {
    this._attributeResultByCategoryId = value;
  }
  /**
   attributeResultByCompanyId field
   */
  get attributeResultByCompanyId(): AttributeResultResponse {
    return this._attributeResultByCompanyId;
  }
  /**
   attributeResultByCompanyId field
   */
  set attributeResultByCompanyId(value: AttributeResultResponse) {
    this._attributeResultByCompanyId = value;
  }
  /**
   attributeResultByContactId field
   */
  get attributeResultByContactId(): AttributeResultResponse {
    return this._attributeResultByContactId;
  }
  /**
   attributeResultByContactId field
   */
  set attributeResultByContactId(value: AttributeResultResponse) {
    this._attributeResultByContactId = value;
  }
  /**
   attributeResultByCustomerId field
   */
  get attributeResultByCustomerId(): AttributeResultResponse {
    return this._attributeResultByCustomerId;
  }
  /**
   attributeResultByCustomerId field
   */
  set attributeResultByCustomerId(value: AttributeResultResponse) {
    this._attributeResultByCustomerId = value;
  }
  /**
   attributeResultByClusterId field
   */
  get attributeResultByClusterId(): AttributeResultResponse {
    return this._attributeResultByClusterId;
  }
  /**
   attributeResultByClusterId field
   */
  set attributeResultByClusterId(value: AttributeResultResponse) {
    this._attributeResultByClusterId = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get authentication(): GCIPUser {
    return this._authentication;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set authentication(value: GCIPUser) {
    this._authentication = value;
  }
  /**
   AUTH: Role=[system]
   */
  get magicTokens(): MagicTokenResponse {
    return this._magicTokens;
  }
  /**
   AUTH: Role=[system]
   */
  set magicTokens(value: MagicTokenResponse) {
    this._magicTokens = value;
  }
  /**
   AUTH: Role=[system]
   */
  get magicToken(): MagicToken {
    return this._magicToken;
  }
  /**
   AUTH: Role=[system]
   */
  set magicToken(value: MagicToken) {
    this._magicToken = value;
  }
  /**
   bundles field
   */
  get bundles(): BundlesResponse {
    return this._bundles;
  }
  /**
   bundles field
   */
  set bundles(value: BundlesResponse) {
    this._bundles = value;
  }
  /**
   bundle field
   */
  get bundle(): Bundle {
    return this._bundle;
  }
  /**
   bundle field
   */
  set bundle(value: Bundle) {
    this._bundle = value;
  }
  /**
   Returns a business rule by its ID.
   */
  get businessRule(): BusinessRule {
    return this._businessRule;
  }
  /**
   Returns a business rule by its ID.
   */
  set businessRule(value: BusinessRule) {
    this._businessRule = value;
  }
  /**
   Returns a paginated response of rules based on the provider filter
   */
  get businessRules(): BusinessRuleResponse {
    return this._businessRules;
  }
  /**
   Returns a paginated response of rules based on the provider filter
   */
  set businessRules(value: BusinessRuleResponse) {
    this._businessRules = value;
  }
  /**
   Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
   */
  get businessRuleJDM(): any {
    return this._businessRuleJDM;
  }
  /**
   Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
   */
  set businessRuleJDM(value: any) {
    this._businessRuleJDM = value;
  }
  /**
   Returns a decisionTable by ruleId and tableId
   */
  get businessRuleDecisionTable(): BusinessRuleDecisionTable {
    return this._businessRuleDecisionTable;
  }
  /**
   Returns a decisionTable by ruleId and tableId
   */
  set businessRuleDecisionTable(value: BusinessRuleDecisionTable) {
    this._businessRuleDecisionTable = value;
  }
  /**
   businessRuleFieldDefinitions field
   */
  get businessRuleFieldDefinitions(): BusinessRuleFieldDefinitionGroup {
    return this._businessRuleFieldDefinitions;
  }
  /**
   businessRuleFieldDefinitions field
   */
  set businessRuleFieldDefinitions(value: BusinessRuleFieldDefinitionGroup) {
    this._businessRuleFieldDefinitions = value;
  }
  /**
   carriers field
   */
  get carriers(): CarriersResponse {
    return this._carriers;
  }
  /**
   carriers field
   */
  set carriers(value: CarriersResponse) {
    this._carriers = value;
  }
  /**
   carrier field
   */
  get carrier(): Carrier {
    return this._carrier;
  }
  /**
   carrier field
   */
  set carrier(value: Carrier) {
    this._carrier = value;
  }
  /**
   cart field
   */
  get cart(): Cart {
    return this._cart;
  }
  /**
   cart field
   */
  set cart(value: Cart) {
    this._cart = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get carts(): CartResponse {
    return this._carts;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set carts(value: CartResponse) {
    this._carts = value;
  }
  /**
   category field
   */
  get category(): Category {
    return this._category;
  }
  /**
   category field
   */
  set category(value: Category) {
    this._category = value;
  }
  /**
   categories field
   */
  get categories(): CategoryResponse {
    return this._categories;
  }
  /**
   categories field
   */
  set categories(value: CategoryResponse) {
    this._categories = value;
  }
  /**
   site field
   */
  get site(): Site {
    return this._site;
  }
  /**
   site field
   */
  set site(value: Site) {
    this._site = value;
  }
  /**
   channel field
   */
  get channel(): Channel {
    return this._channel;
  }
  /**
   channel field
   */
  set channel(value: Channel) {
    this._channel = value;
  }
  /**
   channels field
   */
  get channels(): Channel[] {
    return this._channels;
  }
  /**
   channels field
   */
  set channels(value: Channel[]) {
    this._channels = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get payment(): Payment | undefined {
    return this._payment;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set payment(value: Payment | undefined) {
    this._payment = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get payments(): PaymentsResponse {
    return this._payments;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set payments(value: PaymentsResponse) {
    this._payments = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  get companySearch(): CompanySearchResponse {
    return this._companySearch;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  set companySearch(value: CompanySearchResponse) {
    this._companySearch = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get crossupsell(): Crossupsell {
    return this._crossupsell;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set crossupsell(value: Crossupsell) {
    this._crossupsell = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get crossupsells(): CrossupsellsResponse {
    return this._crossupsells;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set crossupsells(value: CrossupsellsResponse) {
    this._crossupsells = value;
  }
  /**
   Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
   */
  get eventActionConfig(): IEventActionConfig | undefined {
    return this._eventActionConfig;
  }
  /**
   Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
   */
  set eventActionConfig(value: IEventActionConfig | undefined) {
    this._eventActionConfig = value;
  }
  /**
   Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
   */
  get eventActionConfigs(): EventActionConfigResponse | undefined {
    return this._eventActionConfigs;
  }
  /**
   Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
   */
  set eventActionConfigs(value: EventActionConfigResponse | undefined) {
    this._eventActionConfigs = value;
  }
  /**
   Get favorite lists, use either an id or a source
   */
  get favoriteLists(): FavoriteListsResponse {
    return this._favoriteLists;
  }
  /**
   Get favorite lists, use either an id or a source
   */
  set favoriteLists(value: FavoriteListsResponse) {
    this._favoriteLists = value;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  get favoriteList(): FavoriteList {
    return this._favoriteList;
  }
  /**
   AUTH: Role=[system] OR ('user is authenticated')
   */
  set favoriteList(value: FavoriteList) {
    this._favoriteList = value;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
   */
  get inventory(): InventoryResponse {
    return this._inventory;
  }
  /**
   AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
   */
  set inventory(value: InventoryResponse) {
    this._inventory = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaImage(): MediaImage {
    return this._mediaImage;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaImage(value: MediaImage) {
    this._mediaImage = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaImages(): PaginatedMediaImageResponse {
    return this._mediaImages;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaImages(value: PaginatedMediaImageResponse) {
    this._mediaImages = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaVideo(): MediaVideo {
    return this._mediaVideo;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaVideo(value: MediaVideo) {
    this._mediaVideo = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaVideos(): PaginatedMediaVideoResponse {
    return this._mediaVideos;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaVideos(value: PaginatedMediaVideoResponse) {
    this._mediaVideos = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaDocument(): MediaDocument {
    return this._mediaDocument;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaDocument(value: MediaDocument) {
    this._mediaDocument = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get mediaDocuments(): PaginatedMediaDocumentResponse {
    return this._mediaDocuments;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set mediaDocuments(value: PaginatedMediaDocumentResponse) {
    this._mediaDocuments = value;
  }
  /**
   media field
   */
  get media(): Media | undefined {
    return this._media;
  }
  /**
   media field
   */
  set media(value: Media | undefined) {
    this._media = value;
  }
  /**
   Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get template(): IBaseTemplate {
    return this._template;
  }
  /**
   Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set template(value: IBaseTemplate) {
    this._template = value;
  }
  /**
   Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get templates(): TemplateResponse {
    return this._templates;
  }
  /**
   Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set templates(value: TemplateResponse) {
    this._templates = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get orderStatuses(): OrderStatusesResponse {
    return this._orderStatuses;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set orderStatuses(value: OrderStatusesResponse) {
    this._orderStatuses = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set orderStatus(value: OrderStatus) {
    this._orderStatus = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get orderStatusSets(): OrderStatusSetsResponse {
    return this._orderStatusSets;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set orderStatusSets(value: OrderStatusSetsResponse) {
    this._orderStatusSets = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get orderStatusSet(): OrderStatusSet {
    return this._orderStatusSet;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set orderStatusSet(value: OrderStatusSet) {
    this._orderStatusSet = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get orders(): OrderResponse {
    return this._orders;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set orders(value: OrderResponse) {
    this._orders = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get order(): Order {
    return this._order;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set order(value: Order) {
    this._order = value;
  }
  /**
   orderGetPDF field
   */
  get orderGetPDF(): Base64File {
    return this._orderGetPDF;
  }
  /**
   orderGetPDF field
   */
  set orderGetPDF(value: Base64File) {
    this._orderGetPDF = value;
  }
  /**
   quoteGetPDF field
   */
  get quoteGetPDF(): Base64File {
    return this._quoteGetPDF;
  }
  /**
   quoteGetPDF field
   */
  set quoteGetPDF(value: Base64File) {
    this._quoteGetPDF = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get orderAddress(): OrderAddress {
    return this._orderAddress;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set orderAddress(value: OrderAddress) {
    this._orderAddress = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get orderAddresses(): OrderAddress[] {
    return this._orderAddresses;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set orderAddresses(value: OrderAddress[]) {
    this._orderAddresses = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get addressesByOrderId(): Address[] {
    return this._addressesByOrderId;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set addressesByOrderId(value: Address[]) {
    this._addressesByOrderId = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get shipment(): Shipment {
    return this._shipment;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set shipment(value: Shipment) {
    this._shipment = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get shipments(): ShipmentResponse {
    return this._shipments;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set shipments(value: ShipmentResponse) {
    this._shipments = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get shipmentItem(): ShipmentItem {
    return this._shipmentItem;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set shipmentItem(value: ShipmentItem) {
    this._shipmentItem = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get shipmentItems(): ShipmentItemResponse {
    return this._shipmentItems;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set shipmentItems(value: ShipmentItemResponse) {
    this._shipmentItems = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get trackAndTrace(): TrackAndTrace {
    return this._trackAndTrace;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set trackAndTrace(value: TrackAndTrace) {
    this._trackAndTrace = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  get trackAndTraces(): TrackAndTraceResponse {
    return this._trackAndTraces;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
   */
  set trackAndTraces(value: TrackAndTraceResponse) {
    this._trackAndTraces = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
   */
  get orderlist(): Orderlist {
    return this._orderlist;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
   */
  set orderlist(value: Orderlist) {
    this._orderlist = value;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
   */
  get orderlists(): OrderlistsResponse {
    return this._orderlists;
  }
  /**
   AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
   */
  set orderlists(value: OrderlistsResponse) {
    this._orderlists = value;
  }
  /**
   payMethod field
   */
  get payMethod(): PayMethod {
    return this._payMethod;
  }
  /**
   payMethod field
   */
  set payMethod(value: PayMethod) {
    this._payMethod = value;
  }
  /**
   payMethods field
   */
  get payMethods(): PayMethodsResponse {
    return this._payMethods;
  }
  /**
   payMethods field
   */
  set payMethods(value: PayMethodsResponse) {
    this._payMethods = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get price(): Price {
    return this._price;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set price(value: Price) {
    this._price = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get prices(): PriceResponse {
    return this._prices;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set prices(value: PriceResponse) {
    this._prices = value;
  }
  /**
   costPrices field
   */
  get costPrices(): CostPriceResponse {
    return this._costPrices;
  }
  /**
   costPrices field
   */
  set costPrices(value: CostPriceResponse) {
    this._costPrices = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get priceCalculate(): ProductPrice {
    return this._priceCalculate;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set priceCalculate(value: ProductPrice) {
    this._priceCalculate = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get priceExplain(): ProductPrice[] {
    return this._priceExplain;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set priceExplain(value: ProductPrice[]) {
    this._priceExplain = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get priceDefault(): ProductPrice[] {
    return this._priceDefault;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set priceDefault(value: ProductPrice[]) {
    this._priceDefault = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get pricesheet(): Pricesheet {
    return this._pricesheet;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set pricesheet(value: Pricesheet) {
    this._pricesheet = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get pricesheets(): PricesheetResponse {
    return this._pricesheets;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set pricesheets(value: PricesheetResponse) {
    this._pricesheets = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get discount(): Discount {
    return this._discount;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set discount(value: Discount) {
    this._discount = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get discounts(): DiscountResponse {
    return this._discounts;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set discounts(value: DiscountResponse) {
    this._discounts = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get bulkPrices(): BulkPriceResponse {
    return this._bulkPrices;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set bulkPrices(value: BulkPriceResponse) {
    this._bulkPrices = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get bulkCostPrices(): BulkCostPriceResponse {
    return this._bulkCostPrices;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set bulkCostPrices(value: BulkCostPriceResponse) {
    this._bulkCostPrices = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get zoneTaxCode(): ZoneTaxCode {
    return this._zoneTaxCode;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set zoneTaxCode(value: ZoneTaxCode) {
    this._zoneTaxCode = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get zoneTaxCodes(): ZoneTaxCodeResponse {
    return this._zoneTaxCodes;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set zoneTaxCodes(value: ZoneTaxCodeResponse) {
    this._zoneTaxCodes = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get tax(): Tax {
    return this._tax;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set tax(value: Tax) {
    this._tax = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get taxes(): TaxesResponse {
    return this._taxes;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set taxes(value: TaxesResponse) {
    this._taxes = value;
  }
  /**
   cluster field
   */
  get cluster(): Cluster {
    return this._cluster;
  }
  /**
   cluster field
   */
  set cluster(value: Cluster) {
    this._cluster = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  get products(): ProductsResponse {
    return this._products;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
   */
  set products(value: ProductsResponse) {
    this._products = value;
  }
  /**
   product field
   */
  get product(): Product {
    return this._product;
  }
  /**
   product field
   */
  set product(value: Product) {
    this._product = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get clusterConfigs(): ClusterConfigResponse[] {
    return this._clusterConfigs;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set clusterConfigs(value: ClusterConfigResponse[]) {
    this._clusterConfigs = value;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  get clusterConfig(): ClusterConfigResponse {
    return this._clusterConfig;
  }
  /**
   AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
   */
  set clusterConfig(value: ClusterConfigResponse) {
    this._clusterConfig = value;
  }
  /**
   roleDefinitions field
   */
  get roleDefinitions(): RoleDefinitionResponse {
    return this._roleDefinitions;
  }
  /**
   roleDefinitions field
   */
  set roleDefinitions(value: RoleDefinitionResponse) {
    this._roleDefinitions = value;
  }
  /**
   roleDefinition field
   */
  get roleDefinition(): RoleDefinition {
    return this._roleDefinition;
  }
  /**
   roleDefinition field
   */
  set roleDefinition(value: RoleDefinition) {
    this._roleDefinition = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  get role(): Role {
    return this._role;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
   */
  set role(value: Role) {
    this._role = value;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get roles(): RoleResponse {
    return this._roles;
  }
  /**
   AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set roles(value: RoleResponse) {
    this._roles = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get shop(): Shop {
    return this._shop;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set shop(value: Shop) {
    this._shop = value;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  get shops(): Shop[] {
    return this._shops;
  }
  /**
   AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
   */
  set shops(value: Shop[]) {
    this._shops = value;
  }
  /**
   Get a single machine, either by id, slug & language or by source & sourceId
   */
  get machine(): SparePartsMachine | undefined {
    return this._machine;
  }
  /**
   Get a single machine, either by id, slug & language or by source & sourceId
   */
  set machine(value: SparePartsMachine | undefined) {
    this._machine = value;
  }
  /**
   List machines
   */
  get machines(): SparePartsMachineResponse {
    return this._machines;
  }
  /**
   List machines
   */
  set machines(value: SparePartsMachineResponse) {
    this._machines = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get surcharges(): SurchargesResponse {
    return this._surcharges;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set surcharges(value: SurchargesResponse) {
    this._surcharges = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get surcharge(): Surcharge {
    return this._surcharge;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set surcharge(value: Surcharge) {
    this._surcharge = value;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  get productSurcharges(): SurchargeProductResponse {
    return this._productSurcharges;
  }
  /**
   AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
   */
  set productSurcharges(value: SurchargeProductResponse) {
    this._productSurcharges = value;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  get tender(): Tender {
    return this._tender;
  }
  /**
   AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
   */
  set tender(value: Tender) {
    this._tender = value;
  }
  /**
   usergroup field
   */
  get usergroup(): Usergroup {
    return this._usergroup;
  }
  /**
   usergroup field
   */
  set usergroup(value: Usergroup) {
    this._usergroup = value;
  }
  /**
   usergroups field
   */
  get usergroups(): UsergroupsResponse {
    return this._usergroups;
  }
  /**
   usergroups field
   */
  set usergroups(value: UsergroupsResponse) {
    this._usergroups = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  get company(): Company {
    return this._company;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
   */
  set company(value: Company) {
    this._company = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  get companies(): CompaniesResponse {
    return this._companies;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  set companies(value: CompaniesResponse) {
    this._companies = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  get contact(): Contact {
    return this._contact;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
   */
  set contact(value: Contact) {
    this._contact = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  get contacts(): ContactsResponse {
    return this._contacts;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  set contacts(value: ContactsResponse) {
    this._contacts = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  get customer(): Customer {
    return this._customer;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
   */
  set customer(value: Customer) {
    this._customer = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  get customers(): CustomersResponse {
    return this._customers;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
   */
  set customers(value: CustomersResponse) {
    this._customers = value;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  get user(): IBaseUser {
    return this._user;
  }
  /**
   AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
   */
  set user(value: IBaseUser) {
    this._user = value;
  }
  /**
   viewer field
   */
  get viewer(): IBaseUser {
    return this._viewer;
  }
  /**
   viewer field
   */
  set viewer(value: IBaseUser) {
    this._viewer = value;
  }
  /**
   Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
   */
  get purchaseAuthorizationConfig(): PurchaseAuthorizationConfig {
    return this._purchaseAuthorizationConfig;
  }
  /**
   Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
   */
  set purchaseAuthorizationConfig(value: PurchaseAuthorizationConfig) {
    this._purchaseAuthorizationConfig = value;
  }
  /**
   Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
   */
  get purchaseAuthorizationConfigs(): PurchaseAuthorizationConfigResponse {
    return this._purchaseAuthorizationConfigs;
  }
  /**
   Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
   */
  set purchaseAuthorizationConfigs(value: PurchaseAuthorizationConfigResponse) {
    this._purchaseAuthorizationConfigs = value;
  }
  /**
   valueset field
   */
  get valueset(): Valueset {
    return this._valueset;
  }
  /**
   valueset field
   */
  set valueset(value: Valueset) {
    this._valueset = value;
  }
  /**
   valuesets field
   */
  get valuesets(): ValuesetResponse {
    return this._valuesets;
  }
  /**
   valuesets field
   */
  set valuesets(value: ValuesetResponse) {
    this._valuesets = value;
  }
  /**
   valuesetItems field
   */
  get valuesetItems(): ValuesetItemResponse {
    return this._valuesetItems;
  }
  /**
   valuesetItems field
   */
  set valuesetItems(value: ValuesetItemResponse) {
    this._valuesetItems = value;
  }
  /**
   warehouse field
   */
  get warehouse(): Warehouse {
    return this._warehouse;
  }
  /**
   warehouse field
   */
  set warehouse(value: Warehouse) {
    this._warehouse = value;
  }
  /**
   warehouses field
   */
  get warehouses(): WarehousesResponse {
    return this._warehouses;
  }
  /**
   warehouses field
   */
  set warehouses(value: WarehousesResponse) {
    this._warehouses = value;
  }
}