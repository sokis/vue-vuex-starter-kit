<template>
	<div>
		<core-layout>
		</core-layout>
	</div>
</template>

<script>

import store from 'vuex/store'
import CoreLayout from './layouts/CoreLayout'

export default {
  name: 'App',
	store,
  components:{
	  CoreLayout
  }
}
</script>
<style src="./styles/app.css"></style>