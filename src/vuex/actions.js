const actionsContext = require.context('./actions/', false, /\.js$/)

export default actionsContext.keys().reduce((actions, key) => {
  console.log(actionsContext(key))
  return Object.assign(actions, actionsContext(key))
}, {})
