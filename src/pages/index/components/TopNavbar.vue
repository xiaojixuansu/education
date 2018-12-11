<template>
  <el-menu mode="horizontal" background-color="#f8f5f9" text-color="#878787"  class="topNavbar">
    <el-submenu index="1" class="menu1">
      <template slot="title">精品课程</template>
      <el-menu-item index="1-1" class="a2">艺考文化课集训</el-menu-item>
      <el-menu-item index="1-2" class="a2">高考冲刺辅导</el-menu-item>
      <el-menu-item index="1-3" class="a2">中考冲刺辅导</el-menu-item>
      <el-menu-item index="1-4" class="a2">高中辅导</el-menu-item>
      <el-menu-item index="1-5" class="a2">初中辅导</el-menu-item>
      <el-menu-item index="1-6" class="a2">小学辅导</el-menu-item>
    </el-submenu>
    <el-submenu index="2" class="munu2">
      <template slot="title">关注微信</template>
      <!--<el-menu-item index="2-1">-->
        <img style="width: 150px;" src="../../../assets/index/ewm.png">
      <!--</el-menu-item>-->
    </el-submenu>
    <el-menu-item index="3"><a class="a2">在线咨询</a></el-menu-item>
    <el-menu-item index="4">
      <a class="a1">你好，欢迎进入名师云教育官方网站！</a>
      <a class="a1">24小时咨询热线:<b style="color: #eb5653;font-size: 20px;margin-left: 20px;">400-155-0075</b></a>
    </el-menu-item>
  </el-menu>
</template>

<script>
import './TopNavbar.css'
export default {
  name: 'TopNavbar'
}
</script>

<style scoped>
  .topNavbar {
    padding-left: 50px;
  }
  .a1:hover{
    color: #878787 !important;
  }
  .a2:hover{
    color: red !important;
  }
</style>
