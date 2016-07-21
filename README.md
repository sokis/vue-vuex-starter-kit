# Vue Vuex Starter Kit

整合Vue + Vuex + Vue-Router。内置webpack配置，基于Koajs搭建开发服务框架，内置基本挡板中间件。
可以方便快速搭建自己的vuex应用程序。


## 开始

如果你的开发环境符合版本要求，你可以用下面的步骤安装和启动项目。

```bash
$ git clone https://github.com/sokis/vue-vuex-starter-kit.git 
$ cd vue-vuex-starter-kit
$ npm install                   # 安装依赖
$ npm start                     # 编译及启动
```

如果一切正常，你将看到如下界面：

<img src="http://i.imgur.com/zR7VRG6.png?2" />

通常在开发中，主要使用`npm start` 来启动项目. 但是，这里也有提供你使用的其他Npm 脚本

|`npm run <script>`|描述|
|------------------|-----------|
|`start`|启动App 本地开发服务，该环境下HMR也将运行。 `localhost:3000`.|
|`compile`|编译App到`dist`目录 (默认情况下在`~/dist`).|
|`dev`|同 `npm start`|
|`dev:mock`|同`npm run dev`，但是会加载mocking中间件|
|`dev:no-debug`|同`npm run dev`，但是会禁用控制台输出|
|`test`|运行Karma单元测试，并生成`coverage`代码覆盖测试|
|`test:dev`|同`npm run test`，但会开启代码监控。并且不会生成代码覆盖测试|
|`deploy`|运行测试，并且生成编译后的代码|
|`deploy:dev`|同 `deploy`，但是环境变量 `NODE_ENV` 为 "development".|
|`deploy:prod`|同 `deploy`，但是环境变量 `NODE_ENV` 为  "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|



## 目录结构

```
.
├──.tools
│   ├── bin                  # 编译和服务启动脚本
│   ├── build                # 所有构建及测试相关配置
│   └── config               # 项目相关配置   
├── server                   # 基于Koa.js 搭建的本地应用服务器 (使用webpack中间件)
├── src                      # 源码
└── tests                    # 单元测试
```

`src` 目录

```
src
├── components              # 公用组件
├── containers
├── layouts                 # 此处定义页面骨架组件
│   └── CoreLayout
├── routes                  # 路由及子路由配置
│       └── routes          
├── static
├── styles
└── vuex
    ├── constants
    ├── plugins
 ```

 `routes` 目录下面加入 modules 目录用于存放vuex 相关模块文件
```
src/routes
├── Counter
│   ├── components
│   └── modules
├── Home
│   ├── assets
│   └── components
└── User
    ├── components
    └── routes
        └── Login
            ├── components
            └── modules
```


## 备注
该工程，可以用 [`vuex-cli`](https://github.com/sokis/vuex-cli) 快速创建。

## 感谢
["React Redux Starter Kit"](https://github.com/davezuko/react-redux-starter-kit) 
