import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  createClient,
  productService,
  categoryService,
  userService,
  orderService,
  OrderType,
  ProductStatus,
  type GraphQLClient,
  type Product,
  type Category,
  type ViewerResult,
  type Order,
  type ProductSearchInput,
  type OrderCreateInput,
  type TransformationsInput,
} from '@propeller-commerce/propeller-sdk-v2';

// v0.10.0: create the client once (e.g. in main.ts) and provide it.
export function createPropellerClient(): GraphQLClient {
  return createClient({
    endpoint: 'https://your-proxy.example.com/api/graphql',
    securityMode: 'proxy',
    clientId: 'my-angular-app',
    defaultLanguage: 'NL',
  });
}

// `imageVariantFilters` is a required variable on product/category operations.
const imageVariantFilters: TransformationsInput = {
  transformations: [
    { name: 'thumb', transformation: { width: 300, height: 300 } },
  ],
};

// `products` requires a fully-formed ProductSearchInput (language + statuses
// are required by the schema). Helper to build one from optional overrides.
function searchInput(
  over: Partial<ProductSearchInput> = {}
): ProductSearchInput {
  return {
    language: 'NL',
    page: 1,
    offset: 20,
    statuses: [ProductStatus.A],
    ...over,
  };
}

@Injectable({
  providedIn: 'root',
})
export class PropellerService {
  private client = createPropellerClient();
  private products = productService(this.client);
  private categories = categoryService(this.client);
  private users = userService(this.client);
  private orders = orderService(this.client);

  // Reactive state subjects
  private viewerSubject = new BehaviorSubject<ViewerResult | null>(null);
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  // Public observables
  public viewer$ = this.viewerSubject.asObservable();
  public products$ = this.productsSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  /**
   * Load current user/viewer
   */
  loadViewer(): Observable<ViewerResult> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return from(this.users.getViewer({})).pipe(
      tap(viewer => {
        this.viewerSubject.next(viewer);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.errorSubject.next(error.message);
        this.loadingSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Load products. `getProducts` returns a ProductsResponse; `.items` is the
   * product list. Search is `input.term`, paging is `input.page/offset`.
   */
  loadProducts(input?: Partial<ProductSearchInput>): Observable<Product[]> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return from(
      this.products.getProducts({
        input: searchInput(input),
        imageVariantFilters,
        language: 'NL',
      })
    ).pipe(
      map(res => res.items as Product[]),
      tap(products => {
        this.productsSubject.next(products);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.errorSubject.next(error.message);
        this.loadingSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Load a single product. `getProduct` takes ProductQueryVariables.
   */
  loadProduct(productId: number): Observable<Product> {
    return from(
      this.products.getProduct({ productId, imageVariantFilters, language: 'NL' })
    ).pipe(
      catchError(error => {
        this.errorSubject.next(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Load category by slug.
   */
  loadCategory(slug: string): Observable<Category> {
    return from(
      this.categories.getCategory({ slug, imageVariantFilters, language: 'NL' })
    ).pipe(
      catchError(error => {
        this.errorSubject.next(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Create a new order. `createOrder` takes OrderCreateVariables.
   */
  createOrder(): Observable<Order> {
    this.loadingSubject.next(true);

    // OrderCreateInput requires items/paymentData/postageData/total — fill
    // these from your catalog/checkout state. Cast keeps the example focused
    // on the SDK call shape rather than a full order schema.
    const order = {
      userId: 1,
      status: 'NEW',
      type: OrderType.purchase,
      email: 'customer@example.com',
      currency: 'EUR',
      language: 'NL',
      shopId: 1,
      items: [],
      paymentData: {},
      postageData: {},
      total: {},
    } as unknown as OrderCreateInput;

    return from(
      this.orders.createOrder({ order, imageVariantFilters, language: 'NL' })
    ).pipe(
      tap(() => this.loadingSubject.next(false)),
      catchError(error => {
        this.errorSubject.next(error.message);
        this.loadingSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Search products via `getProducts` with a search term.
   */
  searchProducts(term: string): Observable<Product[]> {
    return from(
      this.products.getProducts({
        input: searchInput({ term }),
        imageVariantFilters,
        language: 'NL',
      })
    ).pipe(
      map(res => res.items as Product[]),
      catchError(error => {
        this.errorSubject.next(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Clear error state
   */
  clearError(): void {
    this.errorSubject.next(null);
  }

  /**
   * Get current viewer value
   */
  getCurrentViewer(): ViewerResult | null {
    return this.viewerSubject.value;
  }

  /**
   * Get current products value
   */
  getCurrentProducts(): Product[] {
    return this.productsSubject.value;
  }
}

// Example Component Usage
/*
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PropellerService } from './propeller.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="product-list">
      <h2>Products</h2>
      
      <div *ngIf="loading$ | async" class="loading">
        Loading products...
      </div>
      
      <div *ngIf="error$ | async as error" class="error">
        Error: {{ error }}
        <button (click)="clearError()">Clear</button>
      </div>
      
      <div class="search">
        <input 
          [(ngModel)]="searchQuery" 
          (keyup.enter)="search()"
          placeholder="Search products..."
        >
        <button (click)="search()">Search</button>
      </div>
      
      <div class="products-grid">
        <div
          *ngFor="let product of products$ | async"
          class="product-card"
        >
          <h3>{{ product.names?.[0]?.value }}</h3>
          <span class="sku">{{ product.sku }}</span>
          <button (click)="viewProduct(product.id)">View Details</button>
        </div>
      </div>
      
      <button (click)="loadMore()">Load More</button>
    </div>
  `,
  styles: [`
    .product-list { padding: 20px; }
    .products-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
      gap: 20px; 
      margin: 20px 0; 
    }
    .product-card { 
      border: 1px solid #ddd; 
      padding: 15px; 
      border-radius: 8px; 
    }
    .loading, .error { 
      padding: 15px; 
      margin: 10px 0; 
      border-radius: 4px; 
    }
    .loading { background: #f0f8ff; }
    .error { background: #fee; color: red; }
    .search { margin: 20px 0; }
    .search input { padding: 8px; margin-right: 10px; }
    button { 
      padding: 8px 16px; 
      border: none; 
      background: #2563eb; 
      color: white; 
      border-radius: 4px; 
      cursor: pointer; 
    }
  `]
})
export class ProductListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public searchQuery = '';
  private currentOffset = 0;
  private readonly pageSize = 20;
  
  // Expose observables for template
  public products$ = this.propellerService.products$;
  public loading$ = this.propellerService.loading$;
  public error$ = this.propellerService.error$;

  constructor(private propellerService: PropellerService) {}

  ngOnInit() {
    // Load initial products
    this.propellerService.loadProducts({ offset: this.pageSize })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  search() {
    if (this.searchQuery.trim()) {
      this.propellerService.searchProducts(this.searchQuery)
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    } else {
      this.propellerService.loadProducts({ offset: this.pageSize })
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
  }

  loadMore() {
    this.currentOffset += this.pageSize;
    this.propellerService.loadProducts({ offset: this.currentOffset })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  viewProduct(productId: number) {
    this.propellerService.loadProduct(productId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(product => {
        console.log('Product details:', product);
        // Navigate to product detail page
      });
  }

  clearError() {
    this.propellerService.clearError();
  }
}
*/ 