<template>
  <div class="swipper" ref="swipper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "better-scroll-vue",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(".swipper", {});
  }
};
</script>

<style>
</style>