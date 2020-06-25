import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import * as States from "./interfaces/index"
import * as Actions from "./actions/index"
import * as Mutations from "./mutations/index"
import * as Getters from './getters/index'


let vuex = new Vuex.Store({
        state: States.states,
        getters: Getters.getters,
	mutations: Mutations.mutations,
        actions: Actions.actions
})

export default vuex