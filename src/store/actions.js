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
    addReward ({ commit }) {
        commit(types.ADD_REWARD, name, reward)
    },
    removeReward ({ commit }){
        commit(types.REMOVE_REWARD, name, reward)
    },
    removeAllReward ({ commit }) {
        commit(types.REMOVE_ALL_REWARD)
    }
}


export default actions