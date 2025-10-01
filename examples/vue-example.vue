<template>
  <div class="propeller-app">
    <header>
      <h1>Propeller eCommerce Demo (Vue)</h1>
    </header>
    
    <!-- User Profile Section -->
    <section class="user-profile">
      <h2>User Profile</h2>
      <div v-if="userLoading">Loading profile...</div>
      <div v-else-if="viewer">
        <div v-if="viewer.__typename === 'Customer'">
          <p>Type: Customer</p>
          <p>Email: {{ viewer.email }}</p>
          <p>Company: {{ viewer.companyName }}</p>
        </div>
        <div v-else>
          <p>Type: Contact</p>
          <p>Email: {{ viewer.email }}</p>
          <p>Name: {{ viewer.firstName }} {{ viewer.lastName }}</p>
        </div>
      </div>
      <div v-else>Not logged in</div>
    </section>

    <!-- Category Browser -->
    <section class="category-browser">
      <h2>Category Browser</h2>
      <div>
        <label>
          Category:
          <select v-model="selectedCategorySlug">
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </label>
      </div>
      
      <div v-if="categoryLoading">Loading category...</div>
      <div v-else-if="currentCategory" class="category-details">
        <h3>{{ currentCategory.name }}</h3>
        <p>{{ currentCategory.description }}</p>
      </div>
    </section>

    <!-- Product List -->
    <section class="product-list">
      <h2>Products</h2>
      <button @click="refreshProducts" :disabled="productsLoading">
        {{ productsLoading ? 'Loading...' : 'Refresh Products' }}
      </button>
      
      <div v-if="productsError" class="error">
        Error: {{ productsError }}
      </div>
      
      <div v-else-if="products.length" class="products-grid">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
        >
          <h4>{{ product.name }}</h4>
          <p>{{ product.description }}</p>
          <span class="price">${{ product.price }}</span>
        </div>
      </div>
      <div v-else-if="!productsLoading">No products found</div>
    </section>

    <!-- Order Management -->
    <section class="order-management" v-if="viewer">
      <h2>Order Management</h2>
      <button @click="createSampleOrder" :disabled="orderLoading">
        {{ orderLoading ? 'Creating...' : 'Create Sample Order' }}
      </button>
      
      <div v-if="orderResult" class="order-result">
        <h4>Order Created:</h4>
        <pre>{{ JSON.stringify(orderResult, null, 2) }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
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
} from 'propeller-sdk-v2'

// Initialize Propeller client
initializeClient({
  endpoint: 'https://your-propeller-api.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-api-key'
})

// Get client and create services
const client = getClient()
const productService = new ProductService(client)
const categoryService = new CategoryService(client)
const userService = new UserService(client)
const orderService = new OrderService(client)

// Reactive state
const viewer = ref<ViewerResult | null>(null)
const userLoading = ref(true)

const products = ref<Product[]>([])
const productsLoading = ref(false)
const productsError = ref<string | null>(null)

const currentCategory = ref<Category | null>(null)
const selectedCategorySlug = ref('electronics')
const categoryLoading = ref(false)

const orderResult = ref<Order | null>(null)
const orderLoading = ref(false)

// Computed properties
const isCustomer = computed(() => 
  viewer.value && viewer.value.__typename === 'Customer'
)

// Load user profile
const loadUserProfile = async () => {
  try {
    userLoading.value = true
    const viewerData = await userService.getViewer()
    viewer.value = viewerData
  } catch (error) {
    console.error('Failed to load user profile:', error)
  } finally {
    userLoading.value = false
  }
}

// Load products
const loadProducts = async () => {
  try {
    productsLoading.value = true
    productsError.value = null
    
    const productList = await productService.getProducts({
      limit: 20,
      offset: 0
    })
    
    products.value = productList
  } catch (error) {
    productsError.value = error instanceof Error ? error.message : 'Failed to load products'
  } finally {
    productsLoading.value = false
  }
}

const refreshProducts = () => {
  loadProducts()
}

// Load category
const loadCategory = async (slug: string) => {
  try {
    categoryLoading.value = true
    const categoryData = await categoryService.getCategory({
      slug,
      userId: 1,
      hidden: 'No'
    })
    currentCategory.value = categoryData
  } catch (error) {
    console.error('Failed to load category:', error)
  } finally {
    categoryLoading.value = false
  }
}

// Create sample order
const createSampleOrder = async () => {
  if (!viewer.value) return
  
  try {
    orderLoading.value = true
    
    // Example order creation - adjust based on your schema
    const order = await orderService.createOrder({
      customerId: viewer.value.__typename === 'Customer' ? viewer.value.id : null,
      items: [
        {
          productId: products.value[0]?.id || 1,
          quantity: 1
        }
      ]
    })
    
    orderResult.value = order
  } catch (error) {
    console.error('Failed to create order:', error)
  } finally {
    orderLoading.value = false
  }
}

// Watch category slug changes
watch(selectedCategorySlug, (newSlug) => {
  loadCategory(newSlug)
})

// Load initial data
onMounted(() => {
  loadUserProfile()
  loadProducts()
  loadCategory(selectedCategorySlug.value)
})
</script>

<style scoped>
.propeller-app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #f9f9f9;
}

.category-details {
  margin-top: 15px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 6px;
}

.error {
  color: red;
  padding: 10px;
  background: #fee;
  border-radius: 4px;
}

.order-result {
  margin-top: 15px;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 6px;
}

.price {
  font-weight: bold;
  color: #2563eb;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

select {
  margin-left: 10px;
  padding: 5px;
}
</style> 