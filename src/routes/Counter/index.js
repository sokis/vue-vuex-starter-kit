// Sync route definition
export default {
  name: 'counter',
  exact: true,
  component: resolve => require(['./components/CounterView.vue'], resolve)
}
