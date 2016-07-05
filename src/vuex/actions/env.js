import { SET_ENV, SET_ENV_I18N } from '../types'
import request from 'plato-request'

export default {
  setEnv ({ dispatch }, payload) {
    dispatch(SET_ENV, payload)

    if (payload.lang) {
      dispatch(SET_ENV_I18N, request({
        url: `./i18n/${payload.lang}.json`
      }))
    }
  }
}
