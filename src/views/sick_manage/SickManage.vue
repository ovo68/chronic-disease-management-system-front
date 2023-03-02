<!-- 患者管理-->
<template>
  <sn-card-with-title>
    <sick-manage-title slot="title"/>
    <div slot="content">
      <sick-manage-find-info-bar
          ref="findInfoBar"
          @searchByName="searchByName"
          @pullByLevel="pullByLevel"/>
      <sick-manage-table
          :table-data="sickManageTableData"/>
    </div>
  </sn-card-with-title>
</template>
<script>
import SickManageTitle from "@/views/sick_manage/children/SickManageTitle";
import SickManageFindInfoBar from "@/views/sick_manage/children/SickManageFindInfoBar";
import SickManageTable from "@/views/sick_manage/children/SickManageTable";

import * as sickManage from '@/api/sick_manage/sickManage'

export default {
  name: "SinkPersonManage",
  components: {
    SickManageTitle,
    SickManageFindInfoBar,
    SickManageTable
  },
  data() {
    return {
      sickManageTableData: []
    }
  },
  methods: {
    //查询所有的患者
    toQueryAllSicks() {
      sickManage.queryAllSicks().then(res => {
        this.sickManageTableData = res.data
      })
    },
    //根据姓名查询 点击事件
    searchByName(name) {
      //初始化会员类型下拉框
      this.$refs.findInfoBar.$refs.orderType.optionValue = 0
      //发送请求进行查询
      sickManage.queryByName(name).then(res => {
        this.sickManageTableData = res.data
      })
    },
    //根据会员等级查询
    pullByLevel(memberGrade) {
      //初始化根据患者姓名查询输入框
      this.$refs.findInfoBar.$refs.nameInput.value = ''
      //发送请求进行查询
      sickManage.queryByLevel(memberGrade).then(res => {
        this.sickManageTableData = res.data
      })
    }
  },
  //vue生命周期函数
  created() {
    this.toQueryAllSicks()
  }
}
</script>

<style scoped>

</style>