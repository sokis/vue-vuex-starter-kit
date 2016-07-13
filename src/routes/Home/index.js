// Sync route definition
export default {
  icon: 'home',
  title: '首页',
  exact: true,
  component: resolve => require(['./components/HomeView'], resolve)
}
