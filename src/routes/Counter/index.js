// Sync route definition
export default {
  path: '/counter',
  component: resolve => require(['./components/CounterView'], resolve),
  meta: {
    title: '计数器',
    icon: 'counter'
  }
}
