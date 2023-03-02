<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="vipNumber" label="卡号">
        <template slot-scope="scope">
          {{scope.row.vipNumber}}
        </template>
      </el-table-column>
      <el-table-column prop="vipType" label="会员类型">
        <template slot-scope="scope">
          {{ scope.row.vip.name }}
        </template>
      </el-table-column>
      <el-table-column prop="level" label="会员等级">
        <template slot-scope="scope">
          <sn-text
              class="vip"
              :text="'VIP'+scope.row.vip.level"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="会员姓名">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="toSinkInfo">
            <sn-text :text="scope.row.name"/>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号码"/>
      <el-table-column prop="integral" label="积分"/>

      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="to-flex">
            <!-- 变动积分弹出框 -->
            <change-integral-dialog
                @addIntegralRecordInfo='toAddIntegralRecordInfo'
                @reduceIntegralRecordInfo='toReduceIntegralRecordInfo'
                @resetIntegralRecordInfo ='toResetIntegralRecordInfo'
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber
                }"
            />
            <!-- 积分变动记录弹出框 -->
            <change-integral-record-dialog
                :vip-number="scope.row.vipNumber"
                :name="scope.row.name"
                :integral="scope.row.integral"
                :sid="scope.row.id"
            />
          </div>
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
import ChangeIntegralDialog
  from "@/views/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralDialog";
import ChangeIntegralRecordDialog
  from "@/views/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralRecordDialog";
import {updateSickChange} from "@/api/vip_manage/vipManage";

export default {
  name: "VipIntegralTable",
  components: {
    ChangeIntegralDialog,
    ChangeIntegralRecordDialog
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
    toSinkInfo() {
      this.$router.push('/vipManageRoot/sickInfo')
    },
    toAddIntegralRecordInfo(data) {
      updateSickChange(data)
    },
    toReduceIntegralRecordInfo(data){
      updateSickChange(data)
    },
    toResetIntegralRecordInfo(data){
      updateSickChange(data)
    }
  },
}
</script>

<style scoped>

</style>