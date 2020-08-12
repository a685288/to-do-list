<script>
import list from "@/components/list.vue";
import { getTodo, addTodo, getStatus, delTodo, doneTodo, updateTodo } from "@/api/api.js";
export default {
	name: "index",
	components: {
		list,
	},
	mounted() {
		this.allTodo();
	},
	data() {
		return {
			newTodo: "",
			listdata: [],
		};
	},
	methods: {
		allTodo() {
			getTodo()
				.then((res) => {
					if (res.status == 200) {
						this.listdata = res.data.data;
					}
				})
				.catch((err) => {
					alert(`error: ${err}`);
				});
		},
		addNewTodo() {
			addTodo({
				'thing': this.newTodo
			})
				.then((res) => {
					this.allTodo();
					this.newTodo = '';
				})
				.catch((err) => {
					alert(`error ${err}`);
				});
		},
		changeTodoList(status){
			switch(status){
				case '0':
					getStatus(0)
						.then((res) => {
							if (res.data.status.code == 404){
								this.listdata = [];
							}else{
								this.listdata = res.data.data;
							}
						})
						.catch((err) => {
							alert(`error ${err}`);
						})
					break;

				case '1':
					getStatus(1)
						.then((res) => {
							if (res.data.status.code == 404){
								this.listdata = [];
							}else{
								this.listdata = res.data.data;
							}
						})
						.catch((err) => {
							alert(`error ${err}`);
						})
					break;
			}
		},
		editTodoItem(id, thing){
			updateTodo(id, {
				thing: thing
			})
				.then((res) => {
					this.allTodo();
				})
				.catch((err) => {
					alert(`error ${err}`);
				})
		},
		finTodoItem(id){
			doneTodo(id)
				.then((res) => {
					this.allTodo();
				})
				.catch((err) => {
					alert(`error ${err}`);
				})
		},
		delTodoItem(id){
			delTodo(id)
				.then((res) => {
					this.allTodo();
				})
				.catch((err) => {
					alert(`error ${err}`);
				})
		}
	},
};
</script>
<template>
	<div class="div">
		<div class="titleback">
			<h1 class="title">To do list</h1>
		</div>
		<button @click="allTodo">全部</button>
		<button @click="changeTodoList('1')">已完成</button>
		<button @click="changeTodoList('0')">未完成</button>
		<br />
		<input
			class="input"
			type="text"
			placeholder="加入一個新工作"
			v-model="this.newTodo"
			@keyup.enter="addNewTodo"
		/>
		<ul>
			<list v-for="(item) in this.listdata" :key='item.id' :todo='item' @editTodo='editTodoItem' @finTodo='finTodoItem' @delTodo='delTodoItem' ></list>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
.div {
	margin: 0px 20%;
	background-color: #f4eee1;
}

.titleback {
	background-color: #90604c;
	width: 50%;
	margin: 10px auto;
}
.title {
	color: #ffffff;
}
.input {
	width: 40%;
	border: 1px solid #ddd;
	border-radius: 10px;
	color: #525252;
	height: 30px;
	padding: 5px;
	margin: 10px;
}
button {
	border: 1px solid #ccc;
	cursor: pointer;
	display: inline-block;
	padding: 5px 10px;
	text-align: center;
	font-size: 20px;
	width: 100px;
}
</style>
