<template>
  <div class="side-bar">
    <div class="title-img-div">
      <el-image :src="image0" class="title-img"/>
    </div>
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo no-back-color"
             @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <!-- 1.经营概况-->
      <sidebar-manage-condition/>
      <!-- 2.工作台-->
      <sidebar-workspace/>
      <!-- 3.新开就诊-->
      <sidebar-new-see-doctor/>
      <!-- 4.挂号管理-->
      <sidebar-registration-manage/>
      <!-- 5.药品零售-->
      <sidebar-drug-sale/>
      <!-- 6.收费管理-->
      <sidebar-cost-manage/>
      <!-- 7.患者管理-->
      <sidebar-sick-manage/>
      <!-- 8.药品管理-->
      <sidebar-drug-manage/>
      <!--  TODO 加入社区模块    -->
      <sidebar-talk/>
      <!-- 9.会员管理-->
<!--      <sidebar-vip-manage/>-->
      <!-- 10.统计报表-->
      <sidebar-statistics-table/>
      <!-- 11.系统设置-->
      <sidebar-system-setting/>
    </el-menu>
  </div>
</template>

<script>
import SidebarManageCondition from "@/components/content/sidebar/children/SidebarManageCondition";
import SidebarNewSeeDoctor from "@/components/content/sidebar/children/SidebarNewSeeDoctor";
import SidebarWorkspace from "@/components/content/sidebar/children/SidebarWorkspace";
import SidebarRegistrationManage from "@/components/content/sidebar/children/SidebarRegistrationManage";
import SidebarDrugSale from "@/components/content/sidebar/children/SidebarDrugSale";
import SidebarCostManage from "@/components/content/sidebar/children/SidebarCostManage";
import SidebarSickManage from "@/components/content/sidebar/children/SidebarSickManage";
import SidebarDrugManage from "@/components/content/sidebar/children/SidebarDrugManage";
import SidebarStatisticsTable from "@/components/content/sidebar/children/SidebarStatisticsTable";
import SidebarSystemSetting from "@/components/content/sidebar/children/SidebarSystemSetting";
import SidebarTalk from "@/components/content/sidebar/children/SideBarTalk.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarSickManage,
    SidebarCostManage,
    SidebarDrugSale,
    SidebarRegistrationManage,
    SidebarNewSeeDoctor,
    SidebarWorkspace,
    SidebarManageCondition,
    SidebarDrugManage,
    // SidebarVipManage,
    SidebarTalk,
    SidebarStatisticsTable,
    SidebarSystemSetting,
  },
  data() {
    return {
      //侧边栏相关
      isCollapse: true,
      image0: require('@/assets/image/home/sidebar/home0.png'),
      fit: 'fill'
    }
  },
  methods: {
    //侧边栏相关
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped lang="less">

.no-back-color {
  background-color: transparent;
  border: none;
}

.title-img-div {
  width: 50px/1.25;
  height: 50px/1.25;
  background-color: #F0F1FD;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px/1.25/2;

  .title-img {
    margin-top: 6px;
  }
}

</style>