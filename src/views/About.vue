<template>
  <div class="wrapper" ref="mqs">
    <ul id="content">
      <li v-for="(item,index) in list" :key="index">{{item.id}} - {{item.title}}</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "about",
  data() {
    return {
      list: [],
      scroll: null
    };
  },
  beforeCreate() {},
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.list.push({ id: i + 1, title: `item ${i + 1}` });
    }
    this.scroll = new BScroll(".wrapper", {});
  }
};
</script>
<style scoped>
.wrapper {
  height: 200px;
  overflow: hidden;
  background-color: lightblue;
}
</style>