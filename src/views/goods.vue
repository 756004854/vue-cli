<template>
  <div class="goods">
    这是goods页面
    <span>{{$route.query.goodsId}}</span>
    <div @click="goOut">后退</div>
  </div>

</template>

<script>
export default {
  methods: {
    goOut(){
      this.$router.go(-1)
    }
  }
}

</script>
<style>
</style>