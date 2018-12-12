<template>
  <el-row style="height: 408px">
    <el-carousel height="408px">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <div style="height: 100%;width: 100%;">
          <img :src="item.src" style="width: 100%;height: 100%;">
        </div>
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
