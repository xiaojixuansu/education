<template>
  <el-row>
    <h3 style="color: #6c2c7d;">
      师资力量
      <a style="float: right;color: #000;font-size: 10px;position: relative;right: 20px;cursor: pointer;">查看更多+</a>
    </h3>
    <el-col :span="6" v-for="item in Faculty" :key="item.name">
      <el-card style="position: relative;cursor: pointer;" :body-style="{padding: '0px'}">
        <img :src="item.img" :alt="item.name" style="width: 100%;height: 100%;">
        <div class="teacher">
          <p>{{item.name}} {{item.text}}</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Faculty',
  data () {
    return {
      Faculty: [
        {
          img: require('@/assets/index/teacher1.jpg'),
          text: '名师荟高级英语教师',
          name: '蒲春梅'
        },
        {
          img: require('@/assets/index/teacher2.jpg'),
          text: '名师荟高级历史教师',
          name: '马泽文'
        },
        {
          img: require('@/assets/index/teacher3.jpg'),
          text: '名师荟骨干物理教师',
          name: '田心怡'
        },
        {
          img: require('@/assets/index/teacher4.jpg'),
          text: '名师荟优秀英语教师',
          name: '王小欢'
        }]
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin: 50px;
    padding: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.09);
    margin-top: 20px;
  }
  .el-col{
    padding: 10px;
  }
  .teacher{
    text-align: center;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    color: #ffffff;
  }
</style>
