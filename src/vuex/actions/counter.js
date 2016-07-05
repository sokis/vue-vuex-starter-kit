import { INCREMENT, DOUBLE_ASYNC} from '../types'
import api from '../../../api/counter'

export default {
  increment({ dispatch }, payload) {
    dispatch(INCREMENT, payload)
  },
  doubleAsync({ dispatch, state }, payload) {
    api.doubleAsync(state.counter.counter
    , counter => dispatch(DOUBLE_ASYNC, counter))
  }
}
