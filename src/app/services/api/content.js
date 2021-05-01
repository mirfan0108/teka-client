import _DUMMY_LANG from '../_DUMMY/lang'
import _DUMMY_CONSTRUCTION from "../_DUMMY/construction"
import _DUMMY_CONTENT from "../_DUMMY/content"
import _DUMMY_PARTNER from "../_DUMMY/partner"
import _DUMMY_CERT from "../_DUMMY/certificate"

import axios from 'axios'
const ENV = process.env.BASE_API
class Content {
    static getFrame(page) {
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        if (sessionStorage.getItem('__STARTER') == 'professional') {
            page = "profesional"
        }
        switch (page) {
            case "home":
                return axios.get(`${ENV}/api/v1/content/page/home/lang/${lang}`)
            case "profesional":
                return axios.get(`${ENV}/api/v1/content/page/professional/lang/${lang}`)
            default:
                break;
        }
    }

    static getImageProfile() {
        return axios.get(`${ENV}/api/v1/content/image-profle`)
    }

    static getImageFaq(type) {
        return axios.get(`${ENV}/api/v1/content/image-faq/${type}`)
    }

    static getPrefered(page) {
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        if (sessionStorage.getItem('__STARTER') == 'professional') {
            page = "profesional"
        }
        switch (page) {
            case "home":
                return axios.get(`${ENV}/api/v1/content/prefered/home/lang/${lang}?id_lang=${lang}`)
            case "profesional":
                return axios.get(`${ENV}/api/v1/content/prefered/professional/lang/${lang}?id_lang=${lang}`)
            default:
                break;
        }
    }

    static getTrends(page) {
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        if (sessionStorage.getItem('__STARTER') == 'professional') {
            page = "profesional"
        }
        switch (page) {
            case "home":
                return axios.get(`${ENV}/api/v1/content/trend/home/lang/${lang}?id_lang=${lang}`)
            case "profesional":
                return axios.get(`${ENV}/api/v1/content/trend/professional/lang/${lang}?id_lang=${lang}`)
            default:
                break;
        }
    }

    static getSocial_Media() {
        return axios.get(`${ENV}/social-media`)
    }
    static getConstruction() {
        return _DUMMY_CONSTRUCTION
    }
    static getMenus(id_lang) {
        return axios.get(`${ENV}/api/v1/content/menus/${id_lang}`)
    }

    static getTnc(id_lang) {
        return axios.get(`${ENV}/api/v1/content/tnc/${id_lang}`)
    }

    static getPP(id_lang) {
        return axios.get(`${ENV}/api/v1/content/pp/${id_lang}`)
    }

    static getResource(id) {
        return axios.get(`${ENV}/api/v1/content/resources-detail/${id}`)
    }

    static getGallery() {
        return axios.get(`${ENV}/project-gallery/all`)
    }

    static getLang() {
        return _DUMMY_LANG
    }

    static getBanner(lang) {
        return axios.get(`${ENV}/public/banner/${lang}`)
    }

    static getCert() {
        return axios.get(`${ENV}/api/v1/content/sertificate`)
    }

    static getPartner() {
        return axios.get(`${ENV}/api/v1/content/partner`)
    }

    static subscribe(req) {
        return axios.post(`${ENV}/api/v1/global/subscribe`, req)
    }

    static getDetailProven(req) {
        return axios.get(`${ENV}/api/v1/global/proven/${req}`)
    }

    static getBackground(page) {
        let type =  sessionStorage.getItem('__STARTER') == 'professional' ? 1 : 0
        
        let lang = sessionStorage.getItem('_LANG') ? sessionStorage.getItem('_LANG') : 2
        return axios.get(`${ENV}/api/v1/global/background-banner/${page}/lang/${lang}/type/${type}`)
    }
}

export default Content