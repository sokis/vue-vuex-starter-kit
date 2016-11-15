<template>
  <div class='container text-center'>
    <v-header></v-header>
    <div class="right">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import vHeader from '../../components/Header'
  export default {
    name: 'App',
    components: {
      vHeader
    }
  }

</script>
<style src="./styles.css"></style>
