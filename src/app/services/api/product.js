import _DUMMY_PRODUCT from "../_DUMMY/product"


class Product {
    static getProduct(page = 1, search = '' , specie = '', construction = 0, rangeWidth = '', rangeThickness = '', rangeLength = '', color = 0) {
        let queries = `?page=${page}&search=${search}&specie=${specie}&construction=${construction}&width=${rangeWidth}&thickness=${rangeThickness}&Length=${rangeLength}&color=${color}`
        return _DUMMY_PRODUCT.list
    }

    static getDetail_Product(id) {
        return _DUMMY_PRODUCT.detail
    }

    static getSpecies() {
        return _DUMMY_PRODUCT.species
    }

    static getConstruction() {
        return _DUMMY_PRODUCT.construction
    }

}

export default Product