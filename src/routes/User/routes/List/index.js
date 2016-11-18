// Sync route definition
export default {
  path: 'list',
  component: resolve => require(['./components/ListView'], resolve),
  meta: {
    title: '用户列表',
    icon: 'list'
  }
}
