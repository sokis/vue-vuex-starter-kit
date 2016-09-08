import api from '../../../api/counter'


// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT = 'INCREMENT'
export const DOUBLE_ASYNC = 'DOUBLE_ASYNC'

// ------------------------------------
// States
// ------------------------------------
const state = {
    counter: 0
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	counter: state => state.counter
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    increment({ commit }, payload) {
        commit(INCREMENT, payload)
    },
    doubleAsync({ commit, state }, payload) {
        api.doubleAsync(state.counter
		, counter => {
			commit(DOUBLE_ASYNC, counter)
		})
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
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
	getters,
	actions,
	mutations
}