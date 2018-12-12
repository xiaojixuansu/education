<template>
  <el-row style="height: 580px;">
    <el-col :span="6">
      <h3 style="color: #6c2c7d;">常见问答</h3>
      <el-card style="height: 444px">
        <img src="@/assets/index/question1.jpg" style="height: 100%;width: 100%">
        <ul class="question">
          <li><a>有什么班型？</a></li>
          <li><a>一个班几人？</a></li>
        </ul>
        <ul class="question">
          <li><a>怎么收费的？</a></li>
          <li><a>校区在哪里？</a></li>
        </ul>
        <ul class="question">
          <li><a>师资怎么样？</a></li>
          <li><a>效果如何？</a></li>
        </ul>
        <ul class="question">
          <li><a>补习时长多少？</a></li>
          <li><a>有住宿么？</a></li>
        </ul>
        <ul class="question">
          <li><a>学费贵吗？</a></li>
          <li><a>入学要测试吗？</a></li>
        </ul>
        <ul class="question">
          <li><a>签协议么？</a></li>
          <li><a>没效果怎么办？</a></li>
        </ul>
      </el-card>
    </el-col>
    <el-col :span="12">
      <h3 style="color: #6c2c7d;">名师芸简介</h3>
      <img src="@/assets/index/index.jpg" style="height: 270px;width:100%;">
      <el-card class="abstract">
        <p v-for="(item,index) in abstract" :key="index">{{item.text}}</p>
      </el-card>
    </el-col>
    <el-col :span="6">
      <h3 style="color: #6c2c7d;">名师芸头条</h3>
      <el-card style="height: 444px;">
        <img src="@/assets/index/index1.jpg" style="height: 100%;width: 100%;">
        <ul class="headline">
          <li v-for="item in headline" :key="item.text">
            <el-tooltip effect="dark" :content="item.text" placement="top">
              <a @click="hrefToSome(item.params)">{{getTooltip(item.text)}}</a>
            </el-tooltip>
          </li>
        </ul>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'question',
  data () {
    return {
      abstract: [
        {
          text: ' 名师荟教育专注中小学文化课补习，精品课程涵盖中考、高考、小升初、艺体生文化冲刺培训，着力打造教育培训行业高端领军品牌。以一套高效实用的“SEC”教学管理系统使学生成绩短时间内实现大幅度增长。'
        },
        {
          text: '名师荟教育拥有完整的管理运行机制，管理过程中实行标准化、流程...'
        }
      ],
      headline: [
        {
          text: '2018年9月起，中小学推迟上学时间！',
          params: ''
        },
        {
          text: '中学生学习压力集中在哪，怎样缓解学习压力？',
          params: ''
        },
        {
          text: '2019艺考必备|艺考生备考需要注意什么？',
          params: ''
        },
        {
          text: '艺考生应该怎样准备文化课的备考？',
          params: ''
        },
        {
          text: '小升初的孩子在假期里有必要补课吗？',
          params: ''
        },
        {
          text: '中小学生如何选择适合的书籍高效阅读？',
          params: ''
        },
        {
          text: '中小学务必重视这两大学科！',
          params: ''
        },
        {
          text: '中学生睡前做好这3件事，成绩一定直线上升',
          params: ''
        }
      ]
    }
  },
  methods: {
    getTooltip (val) {
      if (val.length > 15) {
        return val.slice(0, 15) + '...'
      } else {
        return val
      }
    },
    hrefToSome (val) {
      console.log(val)
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

  .el-col {
    padding: 10px;
    height: 530px;
  }

  .question {
    list-style: none;
    padding-left: 0px;
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .question > li {
    margin: 15px 5px 0 5px;
    width: 48%;
    border: 1px solid #6c2c7d;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    font-size: 15px;
    cursor: pointer;
    color: #6c2c7d;
  }
  .abstract{
    margin-top: 20px;
    height: 150px;
  }
  .abstract /deep/ p{
    margin-top: 9px;
    margin-bottom: 7px;
  }
  .headline{
    list-style: none;
    padding-left: 0px;
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
