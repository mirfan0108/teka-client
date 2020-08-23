import _DUMMY_GALLERY from "../_DUMMY/gallery"
class Gallery {
    static getGallery(lang, page = 1) {
        return _DUMMY_GALLERY.list
    }

    static getDetail_Gallery(id, lang) {
        return new Promise((resolve, reject) => {
            resolve ({data: _DUMMY_GALLERY.detail})
        })
    }

}

export default Gallery