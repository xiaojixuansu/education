<template>
  <el-row style="height: 260px;">
    <el-col :xs="8" :md="8" :lg="6" style="padding-left: 0px;">
      <img :src="settingData.img" style="width: 100%;height: 240px;">
    </el-col>
    <el-col :xs="10" :md="10" :lg="12">
      <el-card style="height: 240px;"  :body-style="{paddingTop:'0px',paddingRight:'0px'}">
        <div slot="header">
          <p class="title">{{settingData.abstract.title}}<span style="float: right;color: #929292;font-weight: normal">{{settingData.abstract.day}}</span></p>
        </div>
        <!--<p v-html="settingData.abstract.text" style="text-indent: 2em;"></p>-->
        <div v-html="getHTML(settingData.abstract.text)" style="height: 200px;overflow: auto;padding-right: 2em"></div>
      </el-card>
    </el-col>
    <el-col :xs="6" :md="6" :lg="6">
      <div  style="border: 1px solid #e5e5e5e5;height: 240px;">
        <ul class="headline">
          <li v-for="item in settingData.list" :key="item.title">
            <el-tooltip :content="item.title">
              <a>{{getTooltipContent(item.title)}}</a>
            </el-tooltip>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'courseSetting1',
  props: {
    settingData: {
      type: Object,
      default: null
    }
  },
  methods: {
    getTooltipContent (val) {
      if (val.length > 15) {
        return val.slice(0, 15) + '...'
      } else {
        return val
      }
    },
    getHTML (val) {
      let html = ''
      let t1 = 0
      for (var i = 0; i < val.length; i++) {
        if (val[i] === '<') {
          html += '<p style="text-indent: 2em">' + val.slice(t1, i) + '</p>'
          i += 3
          t1 = i + 1
        }
      }
      html += '<p style="text-indent: 2em">' + val.slice(t1, val.length) + '</p>'
      return html
    }
  }
}
</script>

<style scoped>
  .div1 p{
    text-indent: 2em;
  }
  .title{
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bolder;
  }
  .el-col{
    padding: 10px;
  }
  .headline{
    list-style: none;
    padding-left: 10px;
    margin-bottom: 0px;
  }
  .headline>li{
    margin-top: 14px;
    margin-bottom: 14px;
    font-size: 14px;
  }
  .headline>li:before{
    content: '';
    color: #9d9d9d;
    /*font-size: 14px;*/
    height: 10px;
    width: 10px;
    border: 1px solid #9d9d9d;
    background:#9d9d9d ;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
</style>
