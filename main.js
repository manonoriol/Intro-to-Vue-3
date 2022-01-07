const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Handmade in France',
            image: './assets/images/socks_green.jpg',
            url: 'https://s3.eu-west-2.amazonaws.com/craft-world/cms/content/2021/04/pileofsocks.png',
            inventory: 8,
            onSale: false,
            details: ['70% cotton', '20% wool', '10% bamboo fibers'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['XS', 'S', 'M', 'L']
        }
    }
})