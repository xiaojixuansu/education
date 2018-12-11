<template>
  <div id="app">
    <TopNavbar></TopNavbar>
    <el-row>
      <el-col :span="20" :offset="2">
        <img src="@/assets/index/logo.png" style="width: 100%;">
      </el-col>
    </el-row>
    <Navbar></Navbar>
    <courseLocation></courseLocation>
    <carouset></carouset>
    <el-row style="background: #f8f3fb">
      <el-row style="margin: 50px;margin-bottom:20px;padding: 25px;background:#ffffff;box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.09)">
        <h3 style="color: #6c2c7d;">特色课程</h3>
        <specicalCourse></specicalCourse>
      </el-row>
      <question></question>
    </el-row>
    <el-row class="row1">
      <a class="row1_a">赶超逆袭就趁现在，在线免费诊断学课薄弱项</a>
      <el-button class="row1_button">立即诊断</el-button>
    </el-row>
    <el-row style="background: #f8f3fb">
      <Faculty></Faculty>
      <Teaching></Teaching>
      <courseSetting></courseSetting>
      <h4 style="margin-left: 50px;">友情链接:<span style="font-size: 14px;color: #929292">艺考文化课</span></h4>
    </el-row>
    <footer1></footer1>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import courseLocation from './components/courseLocation'
import carouset from './components/carouset'
import specicalCourse from './components/specialCourse'
import question from './components/question'
import Faculty from './components/Faculty'
import Teaching from './components/teaching'
import courseSetting from './components/courseseting'
import footer1 from './components/footer1'
export default {
  name: 'index',
  components: {
    Navbar,
    TopNavbar,
    courseLocation,
    carouset,
    specicalCourse,
    question,
    Faculty,
    Teaching,
    courseSetting,
    footer1
  },
  data () {
    return {
      value6: 0
    }
  }
}
</script>

<style scoped>
.row1{
  text-align: center;
  height: 100px;
  padding: 20px;
  background: -webkit-linear-gradient(left, #ffad0b,#ff9b17 ,#ff6f3a); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #ffad0b,#ff9b17, #ff6f3a); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #ffad0b,#ff9b17, #ff6f3a); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #ffad0b,#ff9b17 , #ff6f3a); /* 标准的语法（必须放在最后） */
}
  .row1_a{
    color: #ffffff;
    font-size: 40px;
    font-family: 'Droid Sans';
    font-weight: bolder;
  }
  .row1_button{
    margin-left: 100px;
    width: 200px;
    height: 50px;
    border-radius: 100px;
    color: #d04b1e;
    background: #fcd935;
    font-size: 26px;
    font-family: 'Droid Sans';
    font-weight: bolder;
  }
</style>
