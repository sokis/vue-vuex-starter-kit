# 配置文件目录

本目录是用于配置`vuex-cli-webpack`的。

## 一些约束
默认的配置是按照目前流行的配置方案来做的，实际开发中多少会需要修改
这个时候，你只需要在项目根目录下创建`config`文件夹，并且在文件夹下添加对应的配置文件即可
```
config
├── development.conf.js      # 开发环境配置
├── production.conf.js		 # 生产环境配置
├── ... ...					 # 测试等
└── webpack.config.js		 # webpack配置
```

## development.conf.js

开发环境下的配置文件

```javascript
// ======================================================
// NODE_ENV === 'development'
// ======================================================

var config = require('vuex-cli-webpack/lib/config')

module.exports = {
	compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
	proxy: {
		enabled: true,
		options: {
			host: 'http://cnodejs.org/',
			match: /^\/api\/.*/
		}
	}
}
```

## production.conf.js

生产环境下的配置文件

```javascript
// ======================================================
// NODE_ENV === 'production'
// ======================================================
module.exports = {
	compiler_public_path: '/',
	compiler_hash_type: 'chunkhash',
	compiler_devtool: null,
	compiler_stats: {
		chunks: true,
		chunkModules: true,
		colors: true
	}
}
```

### 一部分配置项说明

+ **compiler_public_path**：webpack.publicPath 用法相同
+ **proxy**：用于配置代理服务器
	- enabled: 是否启用代理
	- options: 具体可以参考`koa-proxy`
+ **compiler_hash_type**：设置文件名中hash命名类型


## webpack.config.js

默认提供了一套配置，当需要修改配置请在项目根路径下`config`目录中添加 `webpack.config.js`

```javascript
// ======================================================
// webpack.config.js
// ======================================================

var config = require('vuex-cli-webpack/lib/config')
var paths = config.utils_paths

module.exports  = {
	entry: {
		app: './src/main.js'
	},
	resolve: {
		alias: {
			"store": paths.client('vuex'),
			"components": paths.client('components')
		}
	}
}
```