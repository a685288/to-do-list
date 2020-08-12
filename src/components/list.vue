<script>
export default {
	name: `list`,
	props: {
		todo: Object
	},
	data() {
		return {
			isEdit: false
		};
	},
	methods: {
		editTodo(id, thing){
			if(thing == ''){
				alert('請輸入文字');
			}else{
				this.isEdit = !this.isEdit;
				this.$emit('editTodo', id, thing);
			}
		},
		finish(id){
			this.$emit('finTodo', id);
		},
		deleteTodo(id){
			this.$emit('delTodo', id);
		}
	}
};
</script>
<template>
	<div class="list">
		<label v-if="!this.isEdit" class="txt">{{ todo.thing }}</label>
		<input v-else type="text" v-model="todo.thing" @keyup.enter="editTodo(todo.id, todo.thing)">
		<button class="btn" v-if='!this.isEdit' @click='isEdit=!isEdit'>編輯</button>
		<button class="btn" v-if="!this.isEdit" @click="finish(todo.id)">完成</button>
		<button class="btn" @click="deleteTodo(todo.id)">刪除</button>
	</div>
</template>
<style scoped>
.list {
	margin: 5px 0px;
}
.content {
	text-align: left;
}
.btn {
	border: 1px solid #ccc;
	border-radius: 10px;
	/* cursor: pointer; */
	display: inline-block;
	margin: 0 5px;
	padding: 5px 10px;
	min-width: 30px;
	text-align: center;
}
</style>
