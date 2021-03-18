export default {
    data() {
        return {
            errorProduct_NotFound: [
                {
                    lang: 1,
                    text: `Maaf produk tidak tersedia dalam regional anda`
                },
                {
                    lang: 2,
                    text: `Sorry the product is not available in your region`
                },
                {
                    lang: 3,
                    text: `Leider ist das Produkt in Ihrer Region nicht verfügbar`
                }
            ],
            navigateTo_ListProduct: [
                {
                    lang: 1,
                    text: `Ke produk yang tersedia`
                },
                {
                    lang: 2,
                    text: `Go to available products `
                },
                {
                    lang: 3,
                    text: `Produkte verfügbar`
                }
            ]
        }
    },
    methods: {
        getNot_FoundProduct() {
            let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
            return this.errorProduct_NotFound[this.errorProduct_NotFound.findIndex(_id => _id.lang == lang)].text
        },
        navigateTo_list() {
            let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
            return this.navigateTo_ListProduct[this.navigateTo_ListProduct.findIndex(_id => _id.lang == lang)].text
        }
    }
}