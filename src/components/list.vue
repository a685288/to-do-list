<script>
export default {
  name: `list`,
  props: {
    todo: Object,
  },
  data() {
    return {
      // isEdit: false,
    };
  },
  methods: {
    editTodo(id, thing) {
      if (thing == "") {
        alert("請輸入文字");
      } else {
        this.isEdit = !this.isEdit;

      }
    },
    // 完成資料
    finish(id) {

    },
    // 刪除資料
    deleteTodo(id) {

    },
  },
};
</script>
<template>
  <div class="list">
    <label v-if="!this.isEdit" class="txt">{{ todo.thing }}</label>
    <input v-else type="text" v-model="todo.thing" @keyup.enter="editTodo(todo.id, todo.thing)"  />
    <div class="btndiv">
      <button class="btn edit" v-if="!this.isEdit" @click="isEdit=!isEdit">編輯</button>
      <button class="btn finish" v-if="!this.isEdit" @click="finish(todo.id)">完成</button>
      <button class="btn del" @click="deleteTodo(todo.id)">刪除</button>
    </div>
  </div>
</template>
<style scoped>
.list {
	text-align: left;
}
.btndiv{
	display: inline-block;
	/* margin: 0px 20px; */
	float: right;
}
.btn {
  border: 0px;
  border-radius: 10px;
  /* cursor: pointer; */
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
  min-width: 30px;
  text-align: center;
}
.edit {
  background-color: #fbc78d;
}
.finish {
  background-color: #a7d676;
}
.del {
  background-color: #a8dee0;
}
</style>
