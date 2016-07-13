<template>
	<div>
		<h1>Vue Vuex Starter Kit</h1>
		<div  class="left">
			<v-navbar :routes="routes"></v-navbar>
		</div>
	</div>
</template>
<script>
	import VNavbar from './Navbar'
	import { routes } from '../routes'
	
	export default {
		name: 'header',
		data(){
			return {
				routes
			}
		},
		components:{
			VNavbar
		}
	}
</script>