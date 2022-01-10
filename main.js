const app = Vue.createApp({
    data() {
        return {
            cart : 0,
            product: 'Socks',
            description: 'Handmade in France',
            image: './assets/images/socks_green.jpg',
            url: 'https://s3.eu-west-2.amazonaws.com/craft-world/cms/content/2021/04/pileofsocks.png',
            inventory: 8,
            onSale: false,
            details: ['70% cotton', '20% wool', '10% bamboo fibers'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
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
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})