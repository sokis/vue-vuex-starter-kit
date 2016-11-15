// Sync route definition
export default {
  path: '/login',
  component: resolve => require(['./components/LoginView'], resolve)
}
