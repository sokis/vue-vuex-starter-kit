import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'
import { routes, alias }  from './routes'
import { env } from 'vuex/getters'

if (module.hot) {
	module.hot.accept()
}

Vue.config.debug = __DEV__

// global mixins
Vue.mixin({
	// vuex: {
	// 	getters: { env }
	// }
})

Vue.use(Router)

const router = new Router({
	history: false,
	saveScrollPosition: true,
	linkActiveClass: 'link-active'
})

// register routes
router.map(routes)
router.alias(alias)

router.beforeEach(transition => {
	if (transition.to.auth && !env(store.state).authorized) {
		transition.abort()
	} else {
		transition.next()
	}
})

router.afterEach(transition => {
	window.scrollTo(0, 0)
})

router.start(App, '#app')
