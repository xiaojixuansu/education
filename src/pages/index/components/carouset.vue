<template>
  <el-row>
    <el-carousel height="400">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <img :src="item.src" style="width: 100%;height: 100%;">
      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
export default {
  name: 'carouset',
  data () {
    return {
      img: [{
        src: require('@/assets/index/zkpc.jpg')
      },
      {
        src: require('@/assets/index/gkpc.jpg')
      }]
    }
  }
}
</script>

<style scoped>
</style>
