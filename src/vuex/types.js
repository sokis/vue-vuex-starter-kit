const typesContext = require.context('./types/', false, /\.js$/)

export default typesContext.keys().reduce((types, key) => {
  return Object.assign(types, typesContext(key))
}, {})
