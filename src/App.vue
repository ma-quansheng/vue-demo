<template>
	<div id="app">
		<div class="navbar">
			<router-link to="/home">home</router-link>
			|
			<router-link to="/axios">axios</router-link>
			|
			<router-link to="/about">about</router-link>
		</div><hr>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data() {
			return {}
		}

	}
</script>

<style scoped>
	.navbar{
		text-align: center;
		font-size: 22px;
	}
	a{
		text-decoration: none;
	}
</style>
