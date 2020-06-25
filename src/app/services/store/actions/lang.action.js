
export default {
    setLang({ commit, state }, id) {
        state.lang_id = id
    },
    setActive_Page({ commit, state }, id) {
        state.activeMenu = id
    }
}