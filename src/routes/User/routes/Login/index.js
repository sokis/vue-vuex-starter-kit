// Sync route definition
export default {
  path: '',
  component: resolve => require(['./components/LoginView'], resolve),
  meta: {
    title: '登陆',
    icon: 'login'
  }
}
