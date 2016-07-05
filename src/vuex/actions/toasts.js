import { ADD_TOAST, DELETE_TOAST } from '../types'

export default {
  addToast ({ dispatch }, payload) {
    dispatch(ADD_TOAST, payload)
  },

  deleteToast ({ dispatch }, payload) {
    dispatch(DELETE_TOAST, payload)
  }
}
