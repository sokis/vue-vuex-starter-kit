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
      <button class='btn btn-default'  @click="doubleAsync">
        Double (Async)
      </button>
  </div>
</template>

<script>
import { increment, doubleAsync } from 'vx/actions'
import { counter } from 'vx/getters'

export default {
  vuex: {
    getters: {
      counter
    },
    actions: {
      increment,
      doubleAsync
    }
  }
}
</script>

<style src="./styles.css"></style>
