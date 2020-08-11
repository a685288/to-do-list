<script>
export default {
  name: "index",
  data() {
    return {

    };
  },
  components: {},
};
</script>
<template>
  <div class="div">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>To do list</h1>
    <button>全部</button>
    <button>已完成</button>
    <button>未完成</button>
    <br />
    <input type="text" placeholder="加入一個新工作" class="input"/>
    <ul>
      <li>Meet George</li>
      <li>Buy eggs</li>
      <li>Read a book</li>
      <li>Organize office</li>
    </ul>
  </div>
</template>
<style scoped>
.div {
  margin: 0px 20%;
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
.input{
  
}
</style>

