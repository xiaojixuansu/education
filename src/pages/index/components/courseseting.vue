<template>
  <el-row style="margin: 50px;
    padding: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.09);
    margin-top: 20px;">
    <el-col :span="2">
      <h3 style="font-size: 16px;margin-top: 10px;">课程设置</h3>
    </el-col>
    <el-col :span="22">
      <el-tabs v-model="active" type="card">
        <el-tab-pane v-for="(item, index) in settingData" :key="index"
                     :label="item.name" :name="item.name">
          <settingContent :settingData="item"></settingContent>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import settingContent from './courseSetting1'
export default {
  name: 'courseseting',
  components: {
    settingContent
  },
  data () {
    return {
      active: '小学',
      settingData: [
        {
          name: '小学',
          img: require('@/assets/index/setting1.jpg'),
          abstract: {
            title: '成都小学补习收费',
            id: 1,
            day: '2018-10-25',
            text: '  成都名师荟教育，选拔精英的教研和管理团队，成功打造出的中高端教育品牌。成都名师荟教育花巨资引进打造先进的教学系统SEC，这套SEC教学系统整合了优质的教育资源，并细分出针对不同学员个性化的教学管理流程。成都名师荟教育专注于小升初、中考、高考、艺体生文化冲刺培训。并始终践行“助千万学子圆梦理想名校”这一重大使命!'
          },
          list: [
            {
              id: 1,
              title: '成都小学补习收费'
            },
            {
              id: 2,
              title: '成都小学补课'
            },
            {
              id: 1,
              title: '成都小学补习班收费'
            },
            {
              id: 1,
              title: '成都小学一对一数学补习辅导'
            },
            {
              id: 1,
              title: '成都小学补习收费1'
            }
          ]
        },
        {
          name: '初中',
          img: require('@/assets/index/setting2.jpg'),
          abstract: {
            title: '成都初中英语补习班',
            id: 1,
            day: '2018-10-25',
            text: '  成都名师荟教育, 专注于小升初、中考、高考、艺体生文化冲刺培训。整合了全国知名的教育专家、心理学硕士、中小学教育培训专家、高考全日制管理组、个性化小班管理组，提出N对1服务模式，为每一个学生提供全方位的个性化教学辅导服务，是中国教培行业影响力较大的中高端教育品牌!'
          },
          list: [
            {
              id: 1,
              title: '成都初中英语补习班'
            },
            {
              id: 2,
              title: '成都初中数学补习哪家好'
            },
            {
              id: 1,
              title: '成都初三化学补习'
            },
            {
              id: 1,
              title: '成都初二物理补习'
            },
            {
              id: 1,
              title: '成都初中补习班'
            }
          ]
        },
        {
          name: '高中',
          img: require('@/assets/index/setting3.jpg'),
          abstract: {
            title: '成都高中文综补课机构哪家好',
            id: 1,
            day: '2018-10-20',
            text: '  成都名师荟教育，本着以“诚信负责、质量为本、勤学精进、开拓创新”的核心教育理念，成都名师荟教育咨询有限公司致力于帮助每一位学生提高文化成绩，激发学习潜能，培养学习习惯。专注于小升初、中考、高考、艺体生文化冲刺培训。不论您的孩子处于什么年级、成绩如何，我们都能为您的孩子提供量身定做的优质服务，充分弥补课堂教育的不足，获得卓越效果!'
          },
          list: [
            {
              id: 1,
              title: '成都高中文综补课机构哪家好'
            },
            {
              id: 2,
              title: '成都高中理综辅导收费'
            },
            {
              id: 1,
              title: '成都高中物理辅导班收费'
            },
            {
              id: 1,
              title: '成都高中英语补课机构哪家好'
            },
            {
              id: 1,
              title: '成都高中物理辅导价格'
            }
          ]
        },
        {
          name: '中考',
          img: require('@/assets/index/setting4.jpg'),
          abstract: {
            title: '成都中考化学补习班',
            id: 1,
            day: '2018-10-20',
            text: '成都名师荟教育，先进的教育理念，高效的SEC教学系统，完整的管理运行机制，专业的教学管理团队，专业的师资，N对1服务模式。专注于小升初、中考、高考、艺体生文化冲刺培训，我们一切以学生为本，努力为学生创造价值。为学生配置个性化的学习帮助计划和适合的教学方案，释放学生学习潜能，对每个学生的教育真正做到“标准化、流程化、专业化、规范化、系统化!'
          },
          list: [
            {
              id: 1,
              title: '成都中考化学补习班'
            },
            {
              id: 2,
              title: '成都中考补习收费多少钱'
            },
            {
              id: 1,
              title: '成都中考文化课冲刺辅导价格'
            },
            {
              id: 1,
              title: '成都中考文化课集训价格'
            },
            {
              id: 1,
              title: '成都中考考前培训收费'
            }
          ]
        },
        {
          name: '高考',
          img: require('@/assets/index/setting5.jpg'),
          abstract: {
            title: '资阳高考补习学校好吗',
            id: 1,
            day: '2018-12-11',
            text: '  名师荟高考冲刺集训<br>  名师荟教育，是一家有着多年高考辅导经验的教育培训机构，累积的经验总结为一套针对即将高考的学生有效复习提分的教学系统，能更加精准高效的帮助高三考生们提升成绩，考上理想大学。<br>  班型介绍:<br>  VIP 1对1教学：N对1的教学模式，学习进度规划师，学习管理师，心理辅导老师，每一名学科老师等集中教导一名学生，多方位立体式教学体系，确保学生取得理想。'
          },
          list: [
            {
              id: 1,
              title: '资阳高考补习学校好吗'
            },
            {
              id: 2,
              title: '资阳高考补习学校有哪些'
            },
            {
              id: 1,
              title: '资阳高考补习学校费用多少'
            },
            {
              id: 1,
              title: '资阳高考补习学校地址'
            },
            {
              id: 1,
              title: '资阳高考补习学校如何收费'
            }
          ]
        },
        {
          name: '艺考文化',
          img: require('@/assets/index/setting6.jpg'),
          abstract: {
            title: '遂宁艺考文化课集训去哪家',
            id: 1,
            day: '2018-12-11',
            text: '  成都名师荟教育坚持勤学精进，以“实现学生的利益，得到家长的认可”和做优质的教育人为奋斗目标。<br>  同时，公司独推的“SEC陪伴式教学”，成就了成都名师荟教育，也让成都名师荟教育受到业内尊敬和社会的高度认可!<br>【名师荟班型】<br>VIP一对一:<br>结合艺考生学习特点与目标院校，特聘艺考生高级教师量身制定提分方案，以考点为核心查漏补缺，弥补未能系统进行一轮。'
          },
          list: [
            {
              id: 1,
              title: '遂宁艺考文化课集训去哪家'
            },
            {
              id: 2,
              title: '四川艺术生文化课集训去哪家'
            },
            {
              id: 1,
              title: '四川艺术生文化课辅导班'
            },
            {
              id: 1,
              title: '四川艺术生文化课冲刺去哪家'
            },
            {
              id: 1,
              title: '四川艺术生文化课补习班'
            }
          ]
        },
        {
          name: '高考复读',
          img: require('@/assets/index/setting7.jpg'),
          abstract: {
            title: '眉山美术生文化课辅导班',
            id: 1,
            day: '2018-10-25',
            text: '成都名师荟教育，专注于艺体生文化冲刺培训，我们一切以学生为本，努力为学生创造价值。先进的教育理念，高效的SEC教学系统，完整的管理运行机制，专业的教学管理团队，专业的师资，N对1服务模式。为艺体生配置个性化的学习帮助计划和适合的教学方案，释放考生学习潜能，对每个学生的教育真正做到“标准化、流程化、专业化、规范化、系统化”!'
          },
          list: [
            {
              id: 1,
              title: '眉山美术生文化课辅导班'
            },
            {
              id: 2,
              title: '高考复读全日制补习机构'
            },
            {
              id: 1,
              title: '乐山高考复读中心'
            },
            {
              id: 1,
              title: '乐山高考复读全日制'
            },
            {
              id: 1,
              title: '乐山高考复读冲刺哪家好？'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
