// 中间件
import createLogger from 'vuex/dist/logger'

const plugins = [
  store => {
    store.subscribe(({ payload }) => {
      if (!payload || !payload.__status__) {
        return
      }
      switch (payload.__status__) {
        case 'pending':
          break
        case 'success':
          break
        case 'error':
          break
        default:
      }
    })
  }
]

if (__DEV__) {
  plugins.unshift(createLogger())
}

export default plugins
