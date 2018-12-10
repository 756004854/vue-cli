<template>
  <div class="test">
  123
    {{this.$store.state.name}}
    <div @click="hq">获取gettres</div>
    <div @click="xg">修改state.name</div>
  </div>
</template>

<script>
export default {
  name: "test",
  created(){
    console.log( this.$store.state )
  },
  methods:{
    hq(){
      console.log( this.$store.getters.addName )
      console.log( this.$store.getters.getNameLength )
    },
    xg(){
      this.$store.commit("addName", {
        value: "e41289418429e8w"
      })
    }
  }
}

</script>
<style>
</style>