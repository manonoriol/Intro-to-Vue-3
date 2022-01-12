const app = Vue.createApp({
    data() {
        return {
            cart : 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Handmade in France',
            selectedVariant: 0,
            onSale: true,
            url: 'https://s3.eu-west-2.amazonaws.com/craft-world/cms/content/2021/04/pileofsocks.png',
            details: ['70% cotton', '20% wool', '10% bamboo fibers'],
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
        }
    }
})