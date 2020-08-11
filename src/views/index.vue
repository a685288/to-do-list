<script>
import list from "@/components/list.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: { list },
};
</script>
<template>
  <div class="div">
    <div class="titleback"> 
      <h1 class="title">To do list</h1>
    </div>
    <button>全部</button>
    <button>已完成</button>
    <button>未完成</button>
    <br />
    <input class="input" type="text" placeholder="加入一個新工作" />
    <ul>
      <list></list>
    </ul>
  </div>
</template>
<style scoped>
.div {
  margin: 0px 20%;
  background-color: #f4eee1;
}

.titleback{
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

