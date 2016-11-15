// Sync route definition
export default {
  path: '/',
  component: resolve => require(['./components/HomeView'], resolve),
  meta: {
    title: '首页',
    icon: 'home'
  }
}
