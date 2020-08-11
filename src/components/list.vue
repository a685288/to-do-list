<script>
export default {
  data() {
    return {
      listdata: [
        {
          list: "洗衣服",
        },
        {
          list: "洗碗",
        },
      ],
    };
  },
};
</script>
<template>
  <div v-for="(item,index) in listdata">
    <input type="checkbox" name id />
    <label>{{ item.list }}</label>
    <button class="btn">編輯</button>
    <button class="btn">刪除</button>
  </div>
</template>
<style scoped>
.btn{
  
}
</style>