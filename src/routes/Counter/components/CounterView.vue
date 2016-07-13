<template>
  <div>
    <h2 class="counterContainer">
      Counter:
      <span class="counter-green">
          {{counter}}
        </span>
    </h2>
    <button class='btn btn-default' @click="increment">
        Increment
      </button>
    <button class='btn btn-default' @click="doubleAsync">
        Double (Async)
      </button>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['counter'])
  },
  methods: mapActions(['increment', 'doubleAsync'])
}
</script>

<style src="./styles.css"></style>