# vue-vuex-starter-kit
Vuex 版本的 ["React Redux Starter Kit"](https://github.com/davezuko/react-redux-starter-kit)实现。 
整合Vue + Vuex + Vue-Router


## 开始

如果你的开发环境符合版本要求，你可以用下面的步骤安装和启动项目。

```bash
$ git clone https://github.com/sokis/vue-vuex-starter-kit.git 
$ cd vue-vuex-starter-kit
$ npm install                   # 安装依赖
$ npm start                     # 编译及启动
```

如果一切正常，你将看到如下界面：



通常在开发中，主要使用`npm start` 来启动项目. 但是，这里也有提供你使用的其他Npm 脚本

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|



## 目录结构

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
├── src                      # Application source code
└── tests                    # Unit tests
```


