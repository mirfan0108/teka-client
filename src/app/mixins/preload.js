export default {
    methods: {
        hidePreload() {
            if ($('.preloader').length) {

                $('.preloader').delay(1000).fadeOut(500);

            }
        }
    }
}