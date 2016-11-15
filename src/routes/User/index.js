// Sync route definition
import children from './routes'

// Sync route definition
export default {
  path: '/user',
  component: resolve => require(['./components/UserView'], resolve),
  children,
  meta: {
    title: '用户',
    icon: 'user'
  }
}
