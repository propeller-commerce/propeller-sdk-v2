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
        <pre>{{ JSON.stringify(viewer, null, 2) }}</pre>
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
        <h3>{{ getLocalized(currentCategory.names, 'NL') }}</h3>
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
          <h4>{{ getLocalized(product.names, 'NL') }}</h4>
          <span class="sku">{{ product.sku }}</span>
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
import { ref, onMounted, watch } from 'vue'
import {
  createClient,
  productService,
  categoryService,
  userService,
  orderService,
  getLocalized,
  OrderType,
  ProductStatus,
  type Product,
  type Category,
  type ViewerResult,
  type Order,
  type OrderCreateInput,
  type TransformationsInput,
} from '@propeller-commerce/propeller-sdk-v2'

// v0.10.0: create the client once and pass it to the tree-shakeable
// service factories (no global singleton).
const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',
  clientId: 'my-vue-app',
  defaultLanguage: 'NL',
})

const products$ = productService(client)
const categories$ = categoryService(client)
const users$ = userService(client)
const orders$ = orderService(client)

// `imageVariantFilters` is a required variable on product/category operations.
const imageVariantFilters: TransformationsInput = {
  transformations: [
    { name: 'thumb', transformation: { width: 300, height: 300 } },
  ],
}

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

const loadUserProfile = async () => {
  try {
    userLoading.value = true
    viewer.value = await users$.getViewer({})
  } catch (error) {
    console.error('Failed to load user profile:', error)
  } finally {
    userLoading.value = false
  }
}

const loadProducts = async () => {
  try {
    productsLoading.value = true
    productsError.value = null
    const result = await products$.getProducts({
      input: {
        language: 'NL',
        page: 1,
        offset: 20,
        statuses: [ProductStatus.A],
      },
      imageVariantFilters,
      language: 'NL',
    })
    products.value = result.items as Product[]
  } catch (error) {
    productsError.value =
      error instanceof Error ? error.message : 'Failed to load products'
  } finally {
    productsLoading.value = false
  }
}

const refreshProducts = () => {
  loadProducts()
}

const loadCategory = async (slug: string) => {
  try {
    categoryLoading.value = true
    currentCategory.value = await categories$.getCategory({
      slug,
      imageVariantFilters,
      language: 'NL',
    })
  } catch (error) {
    console.error('Failed to load category:', error)
  } finally {
    categoryLoading.value = false
  }
}

// `createOrder` takes OrderCreateVariables: { order: OrderCreateInput, ... }.
const createSampleOrder = async () => {
  if (!viewer.value) return
  try {
    orderLoading.value = true
    // OrderCreateInput requires items/paymentData/postageData/total — fill
    // these from your catalog/checkout state. Cast keeps the example focused
    // on the SDK call shape rather than a full order schema.
    const orderInput = {
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
    } as unknown as OrderCreateInput
    const order = await orders$.createOrder({
      order: orderInput,
      imageVariantFilters,
      language: 'NL',
    })
    orderResult.value = order
  } catch (error) {
    console.error('Failed to create order:', error)
  } finally {
    orderLoading.value = false
  }
}

watch(selectedCategorySlug, (newSlug) => {
  loadCategory(newSlug)
})

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