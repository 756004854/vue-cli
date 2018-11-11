<template>
  <div class="about">
    <h1>这是1页面</h1>
    <div @click="gotoGood1">跳转至商品详情页面</div>
    <div @click="gotoGood2">312312</div>
    <router-link :to="{name:'goods'}">商品页面</router-link>
    <div @click="getData">获取mock</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mas: "hellow vue"
    };
  },
  methods: {
    gotoGood1() {
      this.$router.push({
        path: "/goods?goodsId=555"
      });
    },
    gotoGood2() {
      this.$router.push({
        path: "/goods",
        query: {
          goodsId: "jgaodjfio的骄傲比较"
        }
      });
    },
    getData() {
      var url = "../static/index.json";
      this.$axios
        .get(url)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
