import axios from 'axios'
const ENV = process.env.BASE_API

class Content {
    static getFrame(page) {
        let lang = localStorage.getItem('_LANG') ?  localStorage.getItem('_LANG') : 2
        return axios.get(`${ENV}/content/page/${page}/lang/${lang}`)
    }

    static getSocial_Media() {
        return axios.get(`${ENV}/social-media`)
    }
    static getConstruction() {
        return axios.get(`${ENV}/menu/product-construction`)
    }

    static getBanner(lang) {
        return axios.get(`${ENV}/public/banner/${lang}`)
    }
}

export default Content