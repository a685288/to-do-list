<script>
export default {
	name:'index',
	methods: {
		todo(){
			this.$router.push("todo");
		}
	},
}
</script>
<template>
	<button @click='todo()'>go to to do list</button>
</template>