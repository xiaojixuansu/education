<template>
  <el-row style="background: #5d2283;">
    <el-col :span="20" :offset="2">
      <el-menu mode="horizontal" default-active="1" active-text-color="#ffffff" background-color="#5d2283" text-color="#ffffff">
        <el-menu-item index="1" style="background: #853c91"><a>网站首页</a></el-menu-item>
        <el-menu-item index="2"><a>小学补习</a></el-menu-item>
        <el-menu-item index="3"><a>初中补习</a></el-menu-item>
        <el-menu-item index="4"><a>中考补习</a></el-menu-item>
        <el-menu-item index="5"><a>高考补习</a></el-menu-item>
        <el-menu-item index="6"><a>高考复读</a></el-menu-item>
        <el-menu-item index="7"><a>艺考文化课</a></el-menu-item>
        <el-menu-item index="8"><a>关于我们</a></el-menu-item>
        <el-menu-item index="9"><a>联系我们</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .el-menu-item{
    width: 10%;
  }
  .el-menu-item>a{
    font-size: 16px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: solid 1px #5d2283;
  }
  .el-menu-item:hover{
    background: #853c91 !important;
  }
</style>
