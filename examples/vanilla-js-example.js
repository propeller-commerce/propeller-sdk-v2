// Vanilla JavaScript example for Propeller SDK v0.10.0
// Works in any modern browser (ES modules) or Node.js.
//
// v0.10.0: create the client once with `createClient()` and pass it to the
// tree-shakeable service factories. Service methods take a single variables
// object that mirrors the GraphQL operation's declared variables.

import {
  createClient,
  productService,
  categoryService,
  userService,
  orderService,
  getLocalized,
  ProductStatus,
  OrderType,
} from 'propeller-sdk-v2';

const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',
  clientId: 'my-vanilla-app',
  defaultLanguage: 'NL',
});

const products = productService(client);
const categories = categoryService(client);
const users = userService(client);
const orders = orderService(client);

// `imageVariantFilters` is a required variable on product/category operations.
const imageVariantFilters = {
  transformations: [
    { name: 'thumb', transformation: { width: 300, height: 300 } },
  ],
};

// A fully-formed ProductSearchInput (language + statuses are schema-required).
function searchInput(over = {}) {
  return {
    language: 'NL',
    page: 1,
    offset: 20,
    statuses: [ProductStatus.A],
    ...over,
  };
}

// DOM elements
const productList = document.getElementById('product-list');
const categorySelect = document.getElementById('category-select');
const userProfile = document.getElementById('user-profile');
const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

function showLoading(show = true) {
  loadingIndicator.style.display = show ? 'block' : 'none';
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 5000);
}

function clearError() {
  errorMessage.style.display = 'none';
}

const productName = (p) => getLocalized(p.names, 'NL') || p.sku;

// `getProducts` returns a ProductsResponse — the list is `.items`.
async function loadProducts(over = {}) {
  try {
    showLoading(true);
    clearError();
    const res = await products.getProducts({
      input: searchInput(over),
      imageVariantFilters,
      language: 'NL',
    });
    displayProducts(res.items);
  } catch (error) {
    showError(`Failed to load products: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

function displayProducts(items) {
  productList.innerHTML = '';
  if (!items.length) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }
  items.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${productName(product)}</h3>
      <p class="sku">${product.sku}</p>
      <button onclick="viewProductDetails(${product.id})">View Details</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// `getCategories(filter?, userId?)` returns a CategoryResponse — the list is
// `.items`. Both params are optional.
async function loadCategories() {
  try {
    const res = await categories.getCategories();
    displayCategories(res.items);
  } catch (error) {
    showError(`Failed to load categories: ${error.message}`);
  }
}

function displayCategories(items) {
  categorySelect.innerHTML = '<option value="">Select a category</option>';
  (items ?? []).forEach((category) => {
    const option = document.createElement('option');
    // Category.slug is LocalizedString[]; use the numeric categoryId as value.
    option.value = String(category.categoryId);
    option.textContent =
      getLocalized(category.names, 'NL') ?? `Category ${category.categoryId}`;
    categorySelect.appendChild(option);
  });
}

async function loadUserProfile() {
  try {
    const viewer = await users.getViewer({});
    userProfile.innerHTML = `<pre>${JSON.stringify(viewer, null, 2)}</pre>`;
  } catch {
    userProfile.innerHTML = '<p>Not logged in</p>';
  }
}

// `getProduct` takes ProductQueryVariables.
async function viewProductDetails(productId) {
  try {
    showLoading(true);
    const product = await products.getProduct({
      productId,
      imageVariantFilters,
      language: 'NL',
    });
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${productName(product)}</h2>
        <p class="sku">${product.sku}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
  } catch (error) {
    showError(`Failed to load product details: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

function closeModal() {
  document.querySelector('.modal')?.remove();
}

let cart = [];

async function addToCart(productId) {
  try {
    const product = await products.getProduct({
      productId,
      imageVariantFilters,
      language: 'NL',
    });
    const existing = cart.find((i) => i.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: productId, name: productName(product), quantity: 1 });
    updateCartDisplay();
    showNotification(`${productName(product)} added to cart!`);
  } catch (error) {
    showError(`Failed to add product to cart: ${error.message}`);
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.reduce((s, i) => s + i.quantity, 0);
}

function showNotification(message) {
  const n = document.createElement('div');
  n.className = 'notification';
  n.textContent = message;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 3000);
}

// `createOrder` takes OrderCreateVariables: { order: OrderCreateInput, ... }.
// OrderCreateInput requires items/paymentData/postageData/total — fill these
// from your real checkout state; this keeps the example focused on the call.
async function createOrder() {
  if (!cart.length) {
    showError('Cart is empty');
    return;
  }
  try {
    showLoading(true);
    const order = await orders.createOrder({
      order: {
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
      },
      imageVariantFilters,
      language: 'NL',
    });
    cart = [];
    updateCartDisplay();
    showNotification(`Order created! ID: ${order.orderId ?? order.id}`);
  } catch (error) {
    showError(`Failed to create order: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

// Search via `getProducts` with a search term.
async function searchProducts(query) {
  if (!query.trim()) {
    loadProducts();
    return;
  }
  try {
    showLoading(true);
    const res = await products.getProducts({
      input: searchInput({ term: query }),
      imageVariantFilters,
      language: 'NL',
    });
    displayProducts(res.items);
  } catch (error) {
    showError(`Search failed: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

async function loadCategoryProducts(categoryId) {
  try {
    showLoading(true);
    const res = await products.getProducts({
      input: searchInput({ categoryId: Number(categoryId) }),
      imageVariantFilters,
      language: 'NL',
    });
    displayProducts(res.items);
  } catch (error) {
    showError(`Failed to load category products: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadCategories();
  loadUserProfile();

  const searchField = document.getElementById('search-input');
  document.getElementById('search-button').addEventListener('click', () => {
    searchProducts(searchField.value);
  });
  searchField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchProducts(searchField.value);
  });

  categorySelect.addEventListener('change', (e) => {
    if (e.target.value) loadCategoryProducts(e.target.value);
    else loadProducts();
  });

  document
    .getElementById('refresh-button')
    .addEventListener('click', () => loadProducts());
  document
    .getElementById('checkout-button')
    .addEventListener('click', createOrder);
});

// Expose handlers used by inline onclick attributes.
window.viewProductDetails = viewProductDetails;
window.addToCart = addToCart;
window.closeModal = closeModal;

export {
  loadProducts,
  loadCategories,
  loadUserProfile,
  searchProducts,
  addToCart,
  createOrder,
};
