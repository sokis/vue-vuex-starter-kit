// 中间件
import createLogger from 'vuex/logger'


const plugins = []

if (__DEV__) {
  plugins.unshift(createLogger())
}

export default plugins
