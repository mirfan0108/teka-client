import _DUMMY_GALLERY from "../_DUMMY/gallery"
import axios from 'axios'
const ENV = process.env.BASE_API

class Gallery {
    static getGallery(lang, page = 1) {
        let queries = `page=${page}&lang=${lang}`
        return axios.get(`${ENV}/api/v1/project-gallery/all?${queries}`)
    }

    static getDetail_Gallery(id, lang) {
        return axios.get(`${ENV}/api/v1/project-gallery/detail/${id}`)
    }

}

export default Gallery