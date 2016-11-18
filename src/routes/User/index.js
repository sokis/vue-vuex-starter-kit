// Sync route definition
import children from './routes'

// const Default = { template: '<div>default</div>' }
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const Baz = { template: '<div>baz</div>' }

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
