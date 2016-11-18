import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'
import store from 'store'
import routes from './routes'
import { sync } from 'vuex-router-sync'

if (module.hot) {
  module.hot.accept()
}

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
  linkActiveClass: 'link-active'
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// 全局钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 对用户身份进行验证...
    // transition.abort()
  } else {
    next()
  }
})

new Vue(
  Vue.util.extend({
    router,
    store
  }, App)).$mount('#app')
