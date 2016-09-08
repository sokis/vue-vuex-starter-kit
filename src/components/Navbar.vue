<template>
  <ul>
    <li v-for="route in _routes">
      <a v-link="{ exact: true , path: father + route.path }">
				{{route.title}}
			</a>
      <template v-if="route.subRoutes">
        <v-navbar :father="route.path" :routes="route.subRoutes"></v-navbar>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'v-navbar',
  props: {
    routes: {
      type: Object,
      default () {
        return {}
      }
    },
    father: {
      type: String,
      default: ''
    },
  },

  computed: {
    _routes () {
      return walkRoutes(this.routes)
    }
  }
}

function walkRoutes (routes) {
  return Object.keys(routes)
  .filter(key => !routes[key].hidden)
  .map(key => {
    const route = routes[key]
    return {
      path : route.path || key,
      name : route.name,
      title: route.title,
      subRoutes: route.subRoutes
    }
  })
}
</script>