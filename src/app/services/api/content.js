import _DUMMY_LANG from '../_DUMMY/lang'
import _DUMMY_CONSTRUCTION from "../_DUMMY/construction"
import _DUMMY_CONTENT from "../_DUMMY/content"
import _DUMMY_PARTNER from "../_DUMMY/partner"
import _DUMMY_CERT from "../_DUMMY/certificate"

import axios from 'axios'
const ENV = process.env.BASE_API
class Content {
    static getFrame(page) {
        let lang = sessionStorage.getItem('_LANG') ?  sessionStorage.getItem('_LANG') : 2
        switch (page) {
            case "home":
                return axios.get(`${ENV}/api/v1/content/page/home/lang/${lang}`)
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
}

export default Content