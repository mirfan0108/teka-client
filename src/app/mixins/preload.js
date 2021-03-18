export default {
    data() {
        return {
            onLoad: true
        }
    },
    methods: {
        hidePreload() {
            this.onLoad = false
            if ($('.preloader').length) {

                $('.preloader').delay(1000).fadeOut(500);
                
            }
        }
    }
}