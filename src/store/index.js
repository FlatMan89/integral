import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import storage from '../storage'

Vue.use(Vuex)

const state = {
    students: storage.fetch() || []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})