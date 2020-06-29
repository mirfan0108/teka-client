import axios from 'axios'
const ENV = process.env.BASE_API
const BLOB_ = process.env.BASE_
class Product {
    static getProduct(page = 1, search = '' , specie = '', construction = 0, rangeWidth = '', rangeThickness = '', rangeLength = '', color = 0) {
        let queries = `?page=${page}&search=${search}&specie=${specie}&construction=${construction}&width=${rangeWidth}&thickness=${rangeThickness}&Length=${rangeLength}&color=${color}`
        return axios.get(`${ENV}/products/all${queries}`)
    }

    static getDetail_Product(id) {
        return axios.get(`${ENV}/products/detail/${id}`)
    }

    static getSpecies() {
        return axios.get(`${ENV}/products/species`)
    }

    static getConstruction() {
        return axios.get(`${ENV}/products/construction`)
    }

    static getBlob(image) {
        return axios.get(`${BLOB_}/blob/${image}`)
    }

}

export default Product