<template>
	<div className='container text-center'>
		<v-header></v-header>
		<div class="right">
			<router-view class="router-view" transition="slide-up" transition-mode="out-in" keep-alive></router-view>
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