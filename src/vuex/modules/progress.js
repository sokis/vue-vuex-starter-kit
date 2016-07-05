import {
  SET_PROGRESS
} from '../types'

const state = {
  progress: 0
}

const mutations = {
  [SET_PROGRESS] (state, payload) {
    state.progress = payload
  }
}

export default {
  state,
  mutations
}
