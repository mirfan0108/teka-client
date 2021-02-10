import _DUMMY_PRODUCT from "../_DUMMY/product"
import axios from 'axios'
const ENV = process.env.BASE_API
class Product {
    static getProduct(page = 1, search = '', specie = '', construction = 0, rangeWidth = '', rangeThickness = '', rangeLength = '', color = 0) {
        let content_type = sessionStorage.getItem('__STARTER') == 'professional' ? 2 : 1
        let queries = `page=${page}&search=${search}&specie=${specie}&construction=${construction}&width=${rangeWidth}&thickness=${rangeThickness}&Length=${rangeLength}&color=${color}&content_type=${content_type}`
        return axios.get(`${ENV}/api/v1/products/all?${queries}`)
    }

    static getDetail_Product(id) {
        return axios.get(`${ENV}/api/v1/products/detail/${id}`)
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
        return axios.get(`${ENV}/api/v1/global/catalogue?id_lang=${id_lang}`)
    }


}

export default Product