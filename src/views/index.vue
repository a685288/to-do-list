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
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1 class="title">To do list</h1>
    <button>全部</button>
    <button>已完成</button>
    <button>未完成</button>
    <br />
    <input type="text" placeholder="加入一個新工作" class="input" />
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
.title {
  
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

