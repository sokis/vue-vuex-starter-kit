import { createAction, handleAction } from 'vuex-actions'
import * as API from 'apis/user/list'

// ------------------------------------
// States
// ------------------------------------
const state = {
  list: []
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  userList: state => state.list.users
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  list: createAction(API.USER_LIST, API.list)
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  [API.USER_LIST]: handleAction({
    success(state, mutation) {
      state.list = mutation.entities
    }
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}
