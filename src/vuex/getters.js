import modules from './modules'

const getters = {}

// defaults
Object.keys(modules).forEach(key => {
  getters[key] = state => state[key][key]
})

// customize, override defaults
const gettersContext = require.context('./getters/', false, /\.js$/)
export default gettersContext.keys().reduce((getters, key) => {
  return Object.assign(getters, gettersContext(key))
}, getters)
