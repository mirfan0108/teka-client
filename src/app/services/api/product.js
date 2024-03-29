import _DUMMY_PRODUCT from "../_DUMMY/product"
import axios from 'axios'
const ENV = process.env.BASE_API
class Product {
    static getProduct(page = 1, search = '', specie = '', construction = 0, rangeWidth = '', rangeThickness = '', rangeLength = '', color = 0) {
        let content_type = sessionStorage.getItem('__STARTER') == 'professional' ? 2 : 1
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        let queries = `page=${page}&search=${search}&specie=${specie}&construction=${construction}&width=${rangeWidth}&thickness=${rangeThickness}&Length=${rangeLength}&color=${color}&content_type=${content_type}&id_lang=${lang}`
        return axios.get(`${ENV}/api/v1/products/all?${queries}`)
    }

    static getDetail_Product(id) {
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        return axios.get(`${ENV}/api/v1/products/detail/${id}?id_lang=${lang}`)
    }

    static getSpecies() {
        return axios.get(`${ENV}/api/v1/products/species`)
    }

    static getConstruction() {
        return axios.get(`${ENV}/api/v1/products/construction`)
    }
    static getBlob(image) {
        return axios.get(`${ENV}/blob/${image}`)
    }

    static getCatalogue(id_lang) {
        let content_type = sessionStorage.getItem('__STARTER') == 'professional' ? 2 : 1
        let queries = `id_lang=${id_lang}&content_type=${content_type}`
        return axios.get(`${ENV}/api/v1/global/catalogue?${queries}`)
    }

    static getTrendAndPrefered(module) {
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        let content_type = sessionStorage.getItem('__STARTER') == 'professional' ? 2 : 1
        if (module == 1) {
            return axios.get(`${ENV}/api/v1/prefered/${content_type}?id_lang=${lang}`)
        } else {
            return axios.get(`${ENV}/api/v1/trending/${content_type}?id_lang=${lang}`)
        }
    }


}

export default Product