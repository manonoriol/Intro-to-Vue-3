app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/

    `      <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :class="{ 'out-of-stock-img': !inStock }" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p>{{ sale }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <product-details :details="details"></product-details>
        <a :href="url" target="_blank">Click here</a>

        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style=" { backgroundColor: variant.color }">
      </div>
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        <button
          class="button"
          :class=" { disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart">
          Add to Cart
      </button>
        <button class="button" v-on:click="removeFromCart">Remove</button>
        
      </div>
    </div>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'Handmade in France',
        details: ['70% cotton', '20% wool', '10% bamboo fibers'],
        selectedVariant: 0,
        onSale: true,
        url: 'https://s3.eu-west-2.amazonaws.com/craft-world/cms/content/2021/04/pileofsocks.png',
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ],
        sizes: ['XS', 'S', 'M', 'L']
    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    removeFromCart() {
        if (this.cart >= 1) {
            this.cart -= 1
        }
    },
    updateVariant(index) {
        this.selectedVariant = index
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    sale() {
        if(this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale'
        }
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return '2.99'
    }
}

})