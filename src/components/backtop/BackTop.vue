<template>
  <div id="back-top">
    <img :src="backtop" alt @click="backtop" />
  </div>
</template>

<script>
export default {
  name: "back-top",
  props: {
    backtop: null
  },
  data() {
    return {};
  },
  methods: {
    backtop() {
      console.log("back top");
    }
  }
};
</script>

<style scoped>
#back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}

#back-top img {
  width: 43px;
  height: 43px;
}
</style>
