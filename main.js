const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description : '100% wool and handmade in France',
            image : './assets/images/socks_green.jpg',
            url : 'https://s3.eu-west-2.amazonaws.com/craft-world/cms/content/2021/04/pileofsocks.png',
            inventory : 8,
            onSale : true
        }
    }
})