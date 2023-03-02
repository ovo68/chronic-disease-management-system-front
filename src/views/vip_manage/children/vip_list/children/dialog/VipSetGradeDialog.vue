<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogVipSetGradeVisible= true"
        type="primary"
        :underline="false">
      <sn-text :text="description"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="27%"
        :visible.sync="dialogVipSetGradeVisible">
      <!-- 标题 -->
      <div slot="title">
        <sn-text
            class="text-left"
            text="设置会员等级"
            :font-size="18"
            font-weight="bold"/>
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text :number="sick.vipNumber" class="margin-right-20"/>
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text :text="sick.name" class="margin-right-20"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="到期时间 :" class="margin-right" :move-down="18"/>
          <sn-date-picker class="margin-right"/>
          <el-checkbox v-model="neverExpires" class="move-down">
            <sn-text text="永不过期"/>
          </el-checkbox>
        </div>
      </div>
      <!-- 信息 -->
      <el-table
          class="margin-top"
          :data="vipSetGradeTableData" stripe style="width: 100%"
          :border="true"
          :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
          :cell-style="{'text-align':'center'}">
        <el-table-column label="选择" width="50">
          <template slot-scope="scope">
            <el-radio v-model="chooseId" :label="scope.$index" class="choose-radio">
              <span></span>
            </el-radio>
          </template>
        </el-table-column>
        <el-table-column prop="vipGrade" label="会员等级">
          <template slot-scope="scope">
            <sn-text
                class="vip"
                :text="scope.row.vipGrade"/>
          </template>
        </el-table-column>
        <el-table-column prop="vipName" label="会员名称"/>
        <el-table-column prop="discount" label="折扣"/>
      </el-table>

      <div slot="footer" class="dialog-footer margin-top">
        <el-button type="primary" plain @click="dialogVipSetGradeVisible = false">取 消</el-button>
        <el-button type="primary" @click="vipSetEnsure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "VipSetGradeDialog",
  data() {
    return {
      //单选框选中哪一个
      chooseId: 1,
      neverExpires: false,
      dialogVipSetGradeVisible: false,
      vipSetGradeTableData: [
        {
          vipGrade: 'vip1',
          vipName: '普通会员',
          discount: '9.80',
        },
        {
          vipGrade: 'vip1',
          vipName: '普通会员',
          discount: '9.80',
        },
      ]
    }
  },
  props: {
    description: {
      type: String,
      default: '设置等级'
    },
    vipNumber: String,
    name: String
  },
  methods: {
    vipSetEnsure() {
      this.dialogVipSetGradeVisible = false
    }
  }
}
</script>

<style scoped>
.choose-radio {
  position: relative;
  left: 5px;
  top: 2px;
}

.move-down {
  position: relative;
  top: 19px;
}
</style>