const actionsContext = require.context('./actions/', false, /\.js$/)

export default actionsContext.keys().reduce((actions, key) => {
  return Object.assign(actions, actionsContext(key))
}, {})
