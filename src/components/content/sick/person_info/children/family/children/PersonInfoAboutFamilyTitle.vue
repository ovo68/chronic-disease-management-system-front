<template>
  <div>
    <sn-row-has-two-col :left="21" :right="3">
      <sn-text
          slot="one-col"
          :move-down="10"
          text="关联家庭成员"
          font-color="#21A3F1"
          :font-size="18"
          font-weight="bold"/>
      <el-button
          type="danger"
          slot="two-col"
          plain
          @click="dialogFormVisible = true">
        <sn-text text="添加家庭成员"/>
      </el-button>
    </sn-row-has-two-col>
    <el-dialog title="家庭成员信息" width="40%" :visible.sync="dialogFormVisible">
      <sn-row-has-two-col :left="12" :right="12">
        <sn-select :select-data="familyRelationSelect" slot="one-col">
          <sn-must-text text="家庭关系" slot="title"/>
        </sn-select>
        <sn-input-with-advice slot="two-col">
          <sn-must-text text="患者姓名" slot="title"/>
        </sn-input-with-advice>
      </sn-row-has-two-col>

      <sn-row-has-two-col :left="12" :right="12" class="margin-top">
        <sn-input-complex slot="one-col" ref="age">
          <sn-must-text slot="title" text="患者年龄"/>
        </sn-input-complex>
        <sn-date-picker slot="two-col">
          <sn-must-text text="出生日期" slot="title"/>
        </sn-date-picker>
      </sn-row-has-two-col>

      <sn-row-has-two-col :left="12" :right="12" class="margin-top">
        <sn-select :select-data="sex" slot="one-col">
          <sn-must-text text="性别" slot="title"/>
        </sn-select>
        <sn-input slot="two-col" class="move-down">
          <sn-text slot="title" text="手机号码"/>
        </sn-input>
      </sn-row-has-two-col>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PersonInfoAboutFamilyTitle",
  data() {
    return {
      dialogFormVisible: false,
      familyRelationSelect: [
        {
          value: 0,
          label: '父女'
        },
        {
          value: 1,
          label: '母女'
        },
        {
          value: 2,
          label: '父子'
        },
        {
          value: 3,
          label: '母子'
        },
        {
          value: 4,
          label: '兄弟'
        },
        {
          value: 5,
          label: '姐妹'
        },
        {
          value: 6,
          label: '其他'
        },
      ],
      sex: [
        {
          value: 0,
          label: '男'
        },
        {
          value: 1,
          label: '女'
        },
      ]
    }
  },
  methods: {
    handleChange(value) {

    },
  },

}
</script>

<style scoped lang="less">
.move-down {
  position: relative;
  top: 4.5px;
}
</style>