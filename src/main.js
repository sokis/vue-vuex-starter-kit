import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'
import routes from './routes'

if (module.hot) {
  module.hot.accept()
}

Vue.use(Router)

const router = new Router({
  routes,
  linkActiveClass: 'link-active'
})

// 全局钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 对用户身份进行验证...
    // transition.abort()
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
