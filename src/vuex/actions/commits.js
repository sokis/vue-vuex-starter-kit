import { GET_COMMITS } from '../types'
import request from 'plato-request'

export default {
  getCommits ({ dispatch }, payload) {
    dispatch(GET_COMMITS, request({
      url: 'https://api.github.com/repos/crossjs/plato/commits?per_page=3&sha=',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }))
  }
}
