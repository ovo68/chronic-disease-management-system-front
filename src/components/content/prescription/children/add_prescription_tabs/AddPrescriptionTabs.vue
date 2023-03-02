<template>
  <div :style="{'margin-top':'20px'}">
    <el-dropdown trigger="click"
                 size="medium"
                 split-button
                 type="warning" round>
      <div>
        <slot name="title"/>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in downData" @click="addTab(item)">
          <span
              @click="addTab(item)">
            {{ item }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name">
        <west-prescription
            :sick-id="sickId"
            v-show="item.content === '西/成药处方'"/>
        <center-prescription
            v-show="item.content === '中药处方'"/>
        <check-item-prescription
            v-show="item.content === '检查项目'"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CenterPrescription from "@/components/content/prescription/children/CenterPrescription";
import CheckItemPrescription from "@/components/content/prescription/children/CheckItemPrescription";
import WestPrescription from "@/components/content/prescription/children/WestPrescription";

export default {
  name: "AddPrescriptionTabs",
  components: {
    WestPrescription,
    CenterPrescription,
    CheckItemPrescription
  },
  props: {
    downData: {
      type: Array,
      default() {
        return []
      }
    },
    sickId: Number
  },
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: '西/成药处方 1',
          name: '1',  //name 与 editableTabsValue相同时在添加后会自动显示
          content: '西/成药处方'
        }
      ],
      tabIndex: 1
    }
  }
  ,
  methods: {

    //动态添加tab
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '' //新标签的name
      let title = targetName + ' ' + this.tabIndex //新标签显示的标题
      this.editableTabs.push({
        title: title,
        name: newTabName,
        content: targetName //内容描述
      });
      this.editableTabsValue = newTabName;
    },
    //动态删除tab
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
}
</script>

<style scoped>
</style>