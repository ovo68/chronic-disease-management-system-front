<template>
  <div class="margin-top">
    <div class="to-flex">
      <!-- 新增会员弹出框-->
      <new-add-vip-type-dialog @addVipsInfo="toAddVips"/>
      <!-- 会员条件设置弹出框-->
      <vip-condition-dialog/>
    </div>
    <!-- 表格内容 -->
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"/>
      <el-table-column prop="level" label="会员等级">
        <template slot-scope="scope">
          <sn-text :text="'VIP'+scope.row.level" class="vip"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="会员名称"/>
      <el-table-column prop="discount" label="折扣"/>
      <el-table-column prop="floorIntegral" label="最低积分"/>
      <el-table-column prop="upgradeIntegral" label="升级所需积分"/>
      <el-table-column prop="remark" label="备注"/>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status.value"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <!-- 编辑会员弹出框 -->
          <edit-vip-dialog
          />
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import EditVipDialog from "@/views/vip_manage/children/vip_setting/children/dialog/EditVipDialog";
import NewAddVipTypeDialog
  from "@/views/vip_manage/children/vip_setting/children/dialog/NewAddVipTypeDialog";
import VipConditionDialog
  from "@/views/vip_manage/children/vip_setting/children/dialog/VipConditionDialog";
import {addVips} from "@/api/vip_manage/vipManage";

export default {
  name: "VipSettingTable",
  components: {
    EditVipDialog,
    NewAddVipTypeDialog,
    VipConditionDialog
  },
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    toAddVips(data) {
      addVips(data)
      this.$router.go(0)
    }
  },
}
</script>

<style scoped>
.vip-grade {
  font-style: italic;
}

/deep/ .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
</style>