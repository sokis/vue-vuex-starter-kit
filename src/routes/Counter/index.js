// Sync route definition
export default {
  name: 'counter',
  title: '计数器',
  exact: true,
  component: resolve => require(['./components/CounterView'], resolve)
}
