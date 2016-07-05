import createLogger from 'vuex/logger'
import createPromise from 'vuex-promise'

import {
  SET_PROGRESS,
  ADD_TOAST,
  DELETE_TOAST
} from '../types'

import {
  PROMISE_PENDING,
  PROMISE_SUCCESS,
  PROMISE_FAILURE
} from '../constants'

const plugins = [
  // createPromise({
  //   debug: __DEV__,
  //   status: {
  //     PENDING: PROMISE_PENDING,
  //     SUCCESS: PROMISE_SUCCESS,
  //     FAILURE: PROMISE_FAILURE
  //   },
  //   silent: false
  // }),
  store => {
    // 实现进度掉、错误提示
    store.subscribe((mutation, { meta, payload }) => {
      switch (meta) {
        case PROMISE_PENDING:
          setProgress(60, store)
          break
        case PROMISE_SUCCESS:
          setProgress(100, store)
          break
        case PROMISE_FAILURE:
          setProgress(100, store)
          addToast(payload, store)
          break
        default:
        // setProgress(0)
      }
    })
  }
]

if (__DEV__) {
  plugins.unshift(createLogger())
}

function setProgress(progress, store) {
  store.dispatch(SET_PROGRESS, progress)
  if (progress === 100) {
    setTimeout(() => {
      store.dispatch(SET_PROGRESS, 0)
    }, 500)
  }
}

function addToast(toast, store) {
  if (typeof toast === 'string') {
    toast = {
      name: 'Error',
      message: toast
    }
  }
  toast._id = Date.now()
  store.dispatch(ADD_TOAST, toast)
  setTimeout(() => {
    store.dispatch(DELETE_TOAST, toast)
  }, 3000)
}

export default plugins
