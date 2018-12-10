<template>
  <div class="testCom">
    <input type="text" v-model="message" />
    <button @click="click">Send</button>
  </div>
</template>

<script>
export default {
  name: "testCom",
  data(){
    return { 
      message: "我是子组件的消息"
    }
  },
  methods: {
    click() {
      this.$emit("childFn", this.message);
    }
  }
}

</script>
<style>
</style>