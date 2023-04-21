<template>
  <div class="container">
    <el-button type="primary" round @click="play">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "test",
  methods:{
    play(){
      console.log("1")
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

</style>