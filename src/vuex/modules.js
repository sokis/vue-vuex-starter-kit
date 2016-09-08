const modulesContext = require.context('../routes/', true, /modules\/.*\.js$/)

export default modulesContext.keys().reduce((modules, key) => {
  let _key = key.replace(/[^\/]*[\/]+/g, '').replace(/(^\.\/)|(\.js$)/g, '')

  // 为止BUG。。。
  modules[_key] = modulesContext(key).default
  return modules
}, {})