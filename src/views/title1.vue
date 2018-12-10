<template>
  <div class="about">
    <h1>这是1页面</h1>
    <div @click="gotoGood1">跳转至商品详情页面</div>
    <div @click="gotoGood2">312312</div>
    <router-link :to="{name:'goods'}">商品页面</router-link>
    <router-link :to="{name:'test'}">测试页面</router-link>
    <div @click="getData">获取mock</div>
    vuex.name
    {{ this.$store.state.name }}
    <add @childFn="parentFn"></add>
    
    {{message}}
  </div>
</template>

<script>

import add from "@/components/add"
export default {
  data() {
    return {
      mas: "hellow vue",
      message: "3232"
    };
  },
  components:{
    add
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
      var url = "/api/movie/top250";
      this.$axios
        .get(url)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    parentFn(payload){
    console.log(payload)
      //this.message = payload
    }
  }
};
</script>
