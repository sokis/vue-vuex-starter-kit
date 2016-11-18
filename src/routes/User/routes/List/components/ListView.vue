<template>
  <div>
    <h3>我是列表</h3>
    <ul>
      <li v-for='li in userList'>{{li.id}} - {{li.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['userList'])
    },
    methods: mapActions(['list']),
    mounted() {
      this.list()
    }
  }

</script>
