<template>
  <el-row
    style="margin: 50px;
    padding: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.09);
    margin-top: 20px;">
    <el-tabs type="card" v-model="active">
      <el-tab-pane label="教学环境" name="教学环境">
        <el-row>
          <el-col :span="6" v-for="(item,index) in teaching1" :key="index">
            <el-card :body-style="{padding:'0px'}">
              <img :src="item.img" style="height: 100%;width: 100%;">
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="课堂瞬间" name="课堂瞬间">
        <el-row>
          <el-col :span="6" v-for="(item,index) in teaching2" :key="index">
            <el-card :body-style="{padding:'0px'}">
              <img :src="item.img" style="height: 100%;width: 100%;">
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="教学地址" name="教学地址">
        <el-row>
          <el-col :span="6">
            <img :src="img" style="width: 210px;float: right">
          </el-col>
          <el-col :span="18">
            <ul>
              <li v-for="item in teachingAddress" :key="item.name">
                <p><b>{{item.name}}:</b>{{item.address}}</p>
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'teaching',
  data () {
    return {
      active: '教学环境',
      img: require('@/assets/index/teaching9.jpg'),
      teaching1: [
        {
          img: require('@/assets/index/teaching1.jpg')
        },
        {
          img: require('@/assets/index/teaching2.jpg')
        },
        {
          img: require('@/assets/index/teaching3.jpg')
        },
        {
          img: require('@/assets/index/teaching4.jpg')
        }
      ],
      teaching2: [
        {
          img: require('@/assets/index/teaching5.jpg')
        },
        {
          img: require('@/assets/index/teaching6.jpg')
        },
        {
          img: require('@/assets/index/teaching7.jpg')
        },
        {
          img: require('@/assets/index/teaching8.jpg')
        }
      ],
      teachingAddress: [{
        name: '名师芸蜀汉路教学点',
        address: '金牛区蜀汉路蜀通街12号红世大厦3楼（欧尚对面）'
      },
      {
        name: '名师荟梁家巷教学点',
        address: '金牛区一环路北四段108号附6号1栋附325（银海中心）'
      },
      {
        name: '名师荟白马寺教学点',
        address: '金牛区北站西二路17号'
      },
      {
        name: '名师荟红牌楼教学点',
        address: '武侯区红牌楼长益路159号红城一栋一单元五楼西部汽车城旁'
      },
      {
        name: '名师荟橡树林教学点',
        address: '锦江区瑞升望江橡树林三期东院2栋2楼'
      }]
    }
  }
}
</script>

<style scoped>
  .el-col {
    padding: 10px;
  }

  ul, li {
    list-style: none;
  }

  b {
    color: red;
  }
  .el-tabs/deep/>.el-tabs__header/deep/ .el-tabs__item.is-active/deep/{
    background: red;
  }
</style>
