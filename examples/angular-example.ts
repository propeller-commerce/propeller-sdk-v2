import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { 
  initializeClient, 
  getClient, 
  ProductService, 
  CategoryService, 
  UserService,
  OrderService,
  type Product, 
  type Category, 
  type ViewerResult,
  type Order 
} from 'propeller-sdk-v2';

// Initialize Propeller client (do this in main.ts or app.module.ts)
export function initializePropellerClient() {
  initializeClient({
    endpoint: 'https://your-propeller-api.com/graphql',
    apiKey: 'your-api-key',
    orderEditorApiKey: 'your-order-editor-api-key'
  });
}

@Injectable({
  providedIn: 'root'
})
export class PropellerService {
  private client = getClient();
  private productService = new ProductService(this.client);
  private categoryService = new CategoryService(this.client);
  private userService = new UserService(this.client);
  private orderService = new OrderService(this.client);

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

    return from(this.userService.getViewer()).pipe(
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
   * Load products with optional filters
   */
  loadProducts(filters?: { limit?: number; offset?: number; search?: string }): Observable<Product[]> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return from(this.productService.getProducts(filters || { limit: 20 })).pipe(
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
   * Load single product by ID
   */
  loadProduct(productId: number): Observable<Product> {
    return from(this.productService.getProduct(productId)).pipe(
      catchError(error => {
        this.errorSubject.next(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Load category by slug
   */
  loadCategory(slug: string, userId?: number): Observable<Category> {
    return from(this.categoryService.getCategory({ 
      slug, 
      userId: userId || 1,
      hidden: 'No' 
    })).pipe(
      catchError(error => {
        this.errorSubject.next(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Create a new order
   */
  createOrder(orderData: { 
    customerId?: number; 
    items: Array<{ productId: number; quantity: number }> 
  }): Observable<Order> {
    this.loadingSubject.next(true);

    return from(this.orderService.createOrder(orderData)).pipe(
      tap(() => this.loadingSubject.next(false)),
      catchError(error => {
        this.errorSubject.next(error.message);
        this.loadingSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Search products
   */
  searchProducts(query: string, filters?: any): Observable<Product[]> {
    return from(this.productService.searchProducts({ 
      search: query,
      ...filters 
    })).pipe(
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
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span class="price">\${{ product.price }}</span>
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
    this.propellerService.loadProducts({ limit: this.pageSize })
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
      this.propellerService.loadProducts({ limit: this.pageSize })
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
  }

  loadMore() {
    this.currentOffset += this.pageSize;
    this.propellerService.loadProducts({ 
      limit: this.pageSize, 
      offset: this.currentOffset 
    })
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