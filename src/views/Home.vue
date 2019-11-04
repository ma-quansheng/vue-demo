<template>
  <div class="home">
    <nav-bar>
      <template #left>&lt;</template>
      <template #center>购物街</template>
      <template #right>aaa</template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
import NavBar from "../components/navbar/NavBar.vue";
import swiper from "../components/swiper/Swiper.vue";

export default {
  name: "home",
  components: {
    NavBar,
    swiper
  },
  data() {
    return {
      banners: [
        {
          link: "http://iph.href.lu/359x200?text=1",
          image: "http://iph.href.lu/359x200?text=1&bg=555555"
        },
        {
          link: "http://iph.href.lu/359x200?text=2",
          image: "http://iph.href.lu/359x200?text=2&bg=e3e3e3"
        },
        {
          link: "http://iph.href.lu/359x200?text=3",
          image: "http://iph.href.lu/359x200?text=3"
        }
      ]
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
