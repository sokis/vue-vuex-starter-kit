// ======================================================
// webpack.config.js
// ======================================================
var config = require('vuex-cli-webpack/lib/config')
var paths = config.utils_paths

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      lib: paths.base('lib'),
      utils: paths.client('utils'),
      apis: paths.client('apis')
    }
  }
}
