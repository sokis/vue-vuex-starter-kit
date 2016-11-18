const modulesContext = require.context('../routes/', true, /modules\/.*\.js$/)

export default modulesContext.keys().reduce((modules, key) => {
  const _key = key.replace(/[^\/]*[\/]+/g, '').replace(/(^\.\/)|(\.js$)/g, '')
  modules[_key] = modulesContext(key)
  return modules
}, {})
