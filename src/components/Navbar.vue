<template>
  <ul>
    <li v-for="route in _routes">
      <router-link :to="father + route.path">{{ route.title }}</router-link>
      <template v-if="route.children">
        <v-navbar :father="route.path" :routes="route.children"></v-navbar>
      </template>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'v-navbar',
    props: {
      routes: {
        type: Array,
        default: []
      },
      father: {
        type: String,
        default: ''
      }
    },

    computed: {
      _routes() {
        return walkRoutes(this.routes)
      }
    }
  }

  function walkRoutes(routes) {
    return routes.map(({ path, children, meta }) => {
      const { title, name } = meta || {}
      return {
        path,
        name: name || '',
        title: title || '',
        children
      }
    })
  }

</script>
