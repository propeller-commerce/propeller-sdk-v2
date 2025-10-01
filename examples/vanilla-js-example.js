// Vanilla JavaScript example for Propeller V2
// This example works in any modern browser or Node.js environment

import { 
  initializeClient, 
  getClient, 
  ProductService, 
  CategoryService, 
  UserService,
  OrderService 
} from 'propeller-sdk-v2';

// Initialize the client
initializeClient({
  endpoint: 'https://your-propeller-api.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-api-key'
});

// Get client and create services
const client = getClient();
const productService = new ProductService(client);
const categoryService = new CategoryService(client);
const userService = new UserService(client);
const orderService = new OrderService(client);

// DOM elements
const productList = document.getElementById('product-list');
const categorySelect = document.getElementById('category-select');
const userProfile = document.getElementById('user-profile');
const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

// Utility functions
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

// Load and display products
async function loadProducts(filters = {}) {
  try {
    showLoading(true);
    clearError();
    
    const products = await productService.getProducts({
      limit: 20,
      offset: 0,
      ...filters
    });
    
    displayProducts(products);
  } catch (error) {
    showError(`Failed to load products: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

function displayProducts(products) {
  productList.innerHTML = '';
  
  if (products.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description || 'No description available'}</p>
      <div class="price">$${product.price}</div>
      <button onclick="viewProductDetails(${product.id})">View Details</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
}

// Load and display categories
async function loadCategories() {
  try {
    const categories = await categoryService.getCategories();
    displayCategories(categories);
  } catch (error) {
    showError(`Failed to load categories: ${error.message}`);
  }
}

function displayCategories(categories) {
  categorySelect.innerHTML = '<option value="">Select a category</option>';
  
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.slug;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });
}

// Load and display user profile
async function loadUserProfile() {
  try {
    const viewer = await userService.getViewer();
    displayUserProfile(viewer);
  } catch (error) {
    userProfile.innerHTML = '<p>Not logged in</p>';
  }
}

function displayUserProfile(viewer) {
  if (viewer.__typename === 'Customer') {
    userProfile.innerHTML = `
      <h3>Customer Profile</h3>
      <p><strong>Email:</strong> ${viewer.email}</p>
      <p><strong>Company:</strong> ${viewer.companyName}</p>
      <p><strong>Type:</strong> Customer</p>
    `;
  } else {
    userProfile.innerHTML = `
      <h3>Contact Profile</h3>
      <p><strong>Name:</strong> ${viewer.firstName} ${viewer.lastName}</p>
      <p><strong>Email:</strong> ${viewer.email}</p>
      <p><strong>Type:</strong> Contact</p>
    `;
  }
}

// Product details modal
async function viewProductDetails(productId) {
  try {
    showLoading(true);
    const product = await productService.getProduct(productId);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
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
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}

// Shopping cart functionality
let cart = [];

async function addToCart(productId) {
  try {
    const product = await productService.getProduct(productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
  } catch (error) {
    showError(`Failed to add product to cart: ${error.message}`);
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Create order from cart
async function createOrder() {
  if (cart.length === 0) {
    showError('Cart is empty');
    return;
  }
  
  try {
    showLoading(true);
    
    const orderData = {
      customerId: 1, // Replace with actual customer ID
      items: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity
      }))
    };
    
    const order = await orderService.createOrder(orderData);
    
    // Clear cart and show success
    cart = [];
    updateCartDisplay();
    showNotification(`Order created successfully! Order ID: ${order.id}`);
    
  } catch (error) {
    showError(`Failed to create order: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

// Search functionality
async function searchProducts(query) {
  if (!query.trim()) {
    loadProducts();
    return;
  }
  
  try {
    showLoading(true);
    const products = await productService.searchProducts({
      search: query,
      limit: 20
    });
    displayProducts(products);
  } catch (error) {
    showError(`Search failed: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Load initial data
  loadProducts();
  loadCategories();
  loadUserProfile();
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  searchButton.addEventListener('click', () => {
    searchProducts(searchInput.value);
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchProducts(searchInput.value);
    }
  });
  
  // Category filter
  categorySelect.addEventListener('change', (e) => {
    if (e.target.value) {
      loadCategoryProducts(e.target.value);
    } else {
      loadProducts();
    }
  });
  
  // Refresh button
  document.getElementById('refresh-button').addEventListener('click', () => {
    loadProducts();
  });
  
  // Checkout button
  document.getElementById('checkout-button').addEventListener('click', createOrder);
});

// Load products by category
async function loadCategoryProducts(categorySlug) {
  try {
    showLoading(true);
    
    const category = await categoryService.getCategory({
      slug: categorySlug,
      userId: 1,
      hidden: 'No'
    });
    
    // Load products for this category
    const products = await productService.getProducts({
      categoryId: category.id,
      limit: 20
    });
    
    displayProducts(products);
  } catch (error) {
    showError(`Failed to load category products: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

// Make functions globally available
window.viewProductDetails = viewProductDetails;
window.addToCart = addToCart;
window.closeModal = closeModal;

// Export for module usage
export {
  loadProducts,
  loadCategories,
  loadUserProfile,
  searchProducts,
  addToCart,
  createOrder
}; 