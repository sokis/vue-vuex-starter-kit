const modulesContext = require.context('./modules/', false, /\.js$/)

export default modulesContext.keys().reduce((modules, key) => {
  modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key)
  return modules
}, {})
