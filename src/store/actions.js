import types from './types'

const actions =  {
    newStudent ({ commit }, name) {
        commit(types.NEW_STUDENT, name)
    },
    removeStudent ({ commit }, name) {
        commit(types.REMOVE_STUDENT, name)
    },
    removeAllStudent ({ commit }) {
        commit(types.REMOVE_ALL_STUDENT)
    },
    addReward ({ commit }, {name, icon}) {
        commit(types.ADD_REWARD, {name: name, icon: icon})
    },
    removeReward ({ commit }, {name, index}){
        commit(types.REMOVE_REWARD, {name, index})
    },
    removeAllReward ({ commit }) {
        commit(types.REMOVE_ALL_REWARD)
    }
}


export default actions