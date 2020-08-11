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
        {
          list: "洗碗",
        },
        {
          list: "洗碗",
        },
        {
          list: "洗碗",
        },
        {
          list: "洗碗",
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
  <div v-for="(item,index) in listdata" class="list">
    <input type="checkbox" />
    <label class="txt">{{ item.list }}</label>
    <button class="btn">編輯</button>
    <button class="btn">刪除</button>
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