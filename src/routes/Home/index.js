// Sync route definition
export default {
  name: 'home',
  exact: true,
  component: resolve => require(['./components/HomeView.vue'], resolve)
}
