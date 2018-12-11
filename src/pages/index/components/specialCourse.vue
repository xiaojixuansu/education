<template>
  <el-row style="display: flex" :gutter="20">
    <div v-for="(item,index) in courseData" :key="index" style="width: 20%;margin: 5px">
       <el-card style="width: 100%;">
         <div>
           <img :src="item.img" style="height: 100%;width: 100%;">
         </div>
         <div class="card1"
           :style="{
                 borderLeft: `5px solid ${item.color}`
                }">
           <p :style="{color: item.color}">{{item.name}}</p>
           <p>{{item.description}}</p>
         </div>
       </el-card>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'specialCourse',
  data () {
    return {
      courseData: [{
        name: '艺考文化课',
        description: '艺考冲刺，为了梦想',
        color: '#fe9344',
        img: require('@/assets/index/course1.jpg')
      },
      {
        name: '中考集训',
        description: '一鼓作气，接力扬帆',
        color: '#6c2c7d',
        img: require('@/assets/index/course2.jpg')
      },
      {
        name: '高考复读',
        description: '放弃意味淘汰，坚持决胜未来',
        color: '#d65681',
        img: require('@/assets/index/course3.jpg')
      },
      {
        name: '高考集训',
        description: '冲刺高考，为梦而战',
        color: '#fdca06',
        img: require('@/assets/index/course4.jpg')
      },
      {
        name: '秋季班',
        description: '承上启下的关键阶段',
        color: '#91448b',
        img: require('@/assets/index/course5.jpg')
      }]
    }
  }
}
</script>

<style scoped>
  .card1{
    margin-top: 10px;
    box-shadow: 1px 1px 8px 0px rgba(236, 236, 236, 0.99);
    border-radius: 4px 0 0 4px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .card1> p{
    margin-left: 10px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 14px;
  }
</style>
