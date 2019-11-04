<template>
	<div class="nav-bar">
		<div id="left">
			<slot name="left">left</slot>
		</div>
		<div id="center">
			<slot name="center">center</slot>
		</div>
		<div id="right">
			<slot name="right">right</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nav-bar',
		props: {
			// bgColor:#fff,
			// textColor:#000,
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		text-align: center;
		height: 44px;
		line-height: 44px;
		display: flex;
		border-bottom: 2px solid #eee;
	}

	#left,
	#right {
		width: 60px;
	}

	#center {
		flex: 1;
	}
</style>
