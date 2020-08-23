
export default {
    setFooter({ commit, state }, text) {
        state.footer = text
    },
    setAbout({ commit, state }, text) {
        state.name = text.name
        state.since = text.since
        state.about = text.about
    },
}