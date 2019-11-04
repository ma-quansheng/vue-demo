<template>
  <div>
    <h2>
      <a href="http://api.komavideo.com/news/list">小马视频 API 接口</a>
    </h2>
    <button @click="axiosGet">get</button>
    <button @click="axiosPost">post</button>
    <ul>
      <li v-for="(item,index) in news" :key="index">
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import news from "../network/news.js";

export default {
  name: "axios-vue",
  data() {
    return {
      news: []
    };
  },
  created() {},
  methods: {
    axiosGet() {
      news.getList().then(res => {
        this.news = res;
      });
    },
    axiosPost() {
      news.postList().then(res => {
        this.news = res;
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
