var config = require('vuex-cli-webpack/lib/config/merge')
var webpackConfig = require('vuex-cli-webpack/lib/build/merge')

const debug = require('debug')('app:karma')
debug('Create configuration.')

const karmaConfig = {
  basePath: '../../', // project root in relation to bin/karma.js
  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    './node_modules/sinon/pkg/sinon.js',
    {
      pattern: `./${config.dir_test}/unit/index.js`,
      watched: false,
      served: true,
      included: true
    }
  ],
  proxies: {
    // '/apis/': 'http://localhost:3000/apis/'
  },
  singleRun: config.coverage_enabled,
  frameworks: ['mocha', 'es6-shim'],
  preprocessors: {
    [`${config.dir_test}/unit/index.js`]: ['webpack', 'sourcemap']
  },
  reporters: ['mocha', 'coverage'],
  coverageReporter: {
    reporters: config.coverage_reporters
  },
  browsers: ['PhantomJS'],
  webpack: {
    devtool: webpackConfig.devtool,
    resolve: webpackConfig.resolve,
    plugins: webpackConfig.plugins,
    module: {
      loaders: webpackConfig.module.loaders
    },
    babel: webpackConfig.babel,
    vue: webpackConfig.vue
  },
  webpackMiddleware: {
    noInfo: true
  }
}

export default cfg => cfg.set(karmaConfig)