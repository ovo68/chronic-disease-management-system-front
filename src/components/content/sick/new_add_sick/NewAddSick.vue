<!-- 新增患者 -->
<template>
  <div>
    <!-- 标题 -->
    <new-add-sick-title
        @saveSick="getSickInfo"
        class="margin-bottom-20"/>
    <!-- 个人信息-->
    <person-info
        ref="personInfo"
        :show-diagnose="false"/>
  </div>
</template>

<script>
import PersonInfo from "@/components/content/sick/person_info/PersonInfo";
import NewAddSickTitle from "@/components/content/sick/new_add_sick/children/NewAddSickTitle";

import {saveSick} from "@/api/sick_manage/sickManage";

export default {
  name: "NewAddSick",
  components: {
    PersonInfo,
    NewAddSickTitle
  },
  methods: {
    getSickInfo() {

      //1.获取个人信息子组件
      let personInfo = this.$refs.personInfo

      //2.获取患者对象
      let sick = personInfo.getSickBaseInfo()

      //2.对象解构
      const {
        address, addressDetail,
        age, birthday, dueDate,
        gender, idCard, name, vip,
        phoneNumber
      } = sick

      //3.判断输入是否为空
      if (address === '' ||
          addressDetail === '' ||
          age === '' ||
          birthday === '' ||
          dueDate === '' ||
          idCard === '' ||
          name === '' ||
          vip === '' ||
          phoneNumber === '') {
        this.myUtils.showMessage(this, '！！请完整填写患者信息(*^▽^*)')
        return
      }

      //4.获取患者卡号 并设置
      let vipNumber = personInfo.getSickVipNumber()
      this.$set(sick, 'vipNumber', vipNumber)

      //5.设置患者性别
      this.$set(sick, 'gender', {
        value: gender.value,
        description: gender.label
      })

      //6.向后端发请求 保存患者
      saveSick(sick).then(res => {
        history.back()
        this.myUtils.showMessage(this, '！！保存成功(*^▽^*)')
      })
    },
    //不显示医嘱
    notShowDiagnose() {
      this.$refs.personInfo.$refs.personBaseInfo.isShowDiagnose = false
    }
  },
  mounted() {
    this.notShowDiagnose()
  }
}
</script>

<style scoped>

</style>