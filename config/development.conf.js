// ======================================================
// NODE_ENV === 'development'
// ======================================================

var config = require('vuex-cli-webpack/lib/config')

module.exports = {
  compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
  proxy: {
    enabled: false,
    options: {
      match: /^\/apis\/.*/
    }
  }
}
