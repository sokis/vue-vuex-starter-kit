import {
  GET_COMMITS
} from '../types'

import {
  PROMISE_SUCCESS
} from '../constants'

const state = {
  commits: null
}

const mutations = {
  [GET_COMMITS] (state, { payload, meta }) {
    if (meta === PROMISE_SUCCESS) {
      state.commits = payload
    }
  }
}

export default {
  state,
  mutations
}
