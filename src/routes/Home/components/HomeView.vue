<template>
  <div class="duck">
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Vuex!'
      :src='DuckImage' />
      111010
  </div>
</template>

<script>

export default {
  data () {
    return {
      DuckImage: require('../assets/Duck.jpg')
    }
  }
}
</script>

<style src="./styles.css"></style>
