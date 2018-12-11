<template>
  <el-row style="margin-top: 10px;margin-bottom: 20px;">
    <el-col :span="3" style="text-align: right;">
      <img src="@/assets/index/nav_rmkc.png" style="position: relative;top: 20px;">
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <a style="font-size: 16px;font-weight: bold;">小学课程</a>
      </div>
      <a>一年级至六年级</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <a style="font-size: 16px;font-weight: bold;">初中课程</a>
      </div>
      <a class="a1">初一</a>
      <a class="a1">初二</a>
      <a class="a1">初三</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <a style="font-size: 16px;font-weight: bold;">高中课程</a>
      </div>
      <a class="a1">高一</a>
      <a class="a1">高二</a>
      <a class="a1">高三</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <img src="@/assets/index/yk.png">
        <a style="font-size: 16px;font-weight: bold;color: #73d0fc">艺考文化课</a>
      </div>
      <a>艺考冲刺，制胜高考</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <img src="@/assets/index/zk.png">
        <a style="font-size: 16px;font-weight: bold;color: #d25087">中考集训</a>
      </div>
      <a>锁定目标，全力以赴</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <img src="@/assets/index/gk.png">
        <a style="font-size: 16px;font-weight: bold;color: #863c92">高考集训</a>
      </div>
      <a>全天候学习，全科目抢分</a>
    </el-col>
    <el-col :span="3">
      <div style="margin-top: 16px;margin-bottom: 16px;">
        <img src="@/assets/index/qjb.png">
        <a style="font-size: 16px;font-weight: bold;color: #fc8840">秋季班</a>
      </div>
      <a>承上启下的关键阶段</a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'courseLocation'
}
</script>

<style scoped>
 a{
   font-size: 14px;
   cursor: pointer;
 }
  .el-col{
    text-align: center;
  }
  .a1{
    margin-left: 5px;
  }
</style>
