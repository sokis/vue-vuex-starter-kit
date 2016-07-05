import {
    INCREMENT,
    DOUBLE_ASYNC
} from '../types'

const state = {
    counter: 0
}

const mutations = {
    [INCREMENT](state, payload) {
        state.counter = state.counter + 1
    },

    [DOUBLE_ASYNC](state, payload) {
        state.counter = payload
    }
}

export default {
    state,
    mutations
}