// 中间件
import createLogger from 'vuex/dist/logger'

const plugins = []

if (__DEV__) {
  plugins.unshift(createLogger())
}

export default plugins
