<template>
	<div>
		<h1>Vue Vuex Starter Kit</h1>
		<ul>
			<li v-for="l in routes"><a v-link="l.link">{{l.text}}</a></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'Header',
		data(){
			return {
				routes:[
					{ text:"首页", link:"/"},
					{ text:"计数器", link:"/counter"}
				]
			}
		}
	}
</script>