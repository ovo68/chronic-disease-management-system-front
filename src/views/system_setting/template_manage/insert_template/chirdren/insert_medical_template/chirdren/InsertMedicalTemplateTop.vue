<template>
  <sn-card-with-title>
    <div slot="title">
      <span style="font-weight: bold;">新建病历模板</span>
      <el-button type="primary" v-text="'保存'" style="margin-left:70%"/>
      <el-button v-text="'返回'" style="margin-left:20px"/>
    </div>
    <div slot="content" style="background-color: lavender;padding: 10px;border-radius:10px">
      <sn-row-has-four-col :one="5" :two="5" :three="7" :four="7">
        <sn-input slot="one-col" is-disabled :input-value-from-parent="templateNo">
          <sn-text text="模板编号" slot="title"/>
        </sn-input>
        <sn-input slot="two-col" :input-placeholder="'请输入模板名称'">
          <sn-must-text text="模板名称" slot="title"/>
        </sn-input>
        <div slot="three-col" style="margin-top: 40px;">
          <span style="margin-right:5px">模板类型</span>
          <el-radio v-model="templateType" label="0">西药病历</el-radio>
          <el-radio v-model="templateType" label="1">中药病历</el-radio>
        </div>
        <div slot="four-col" style="margin-top: 40px;">
          <span style="margin-right:5px">模板权限</span>
          <el-radio v-model="templatePermission" label="0">私人病历</el-radio>
          <el-radio v-model="templatePermission" label="1">公共病历</el-radio>
        </div>
      </sn-row-has-four-col>
      <sn-row-has-four-col :one="10" :two="7" :three="7">
        <sn-input slot="one-col">
          <sn-text text="模板说明" slot="title"/>
        </sn-input>
        <sn-input slot="two-col" is-disabled :input-value-from-parent="creator">
          <sn-text text="创建人员" slot="title" />
        </sn-input>
        <sn-input slot="three-col" is-disabled :input-value-from-parent="createTime">
          <sn-text text="创建时间" slot="title" />
        </sn-input>
      </sn-row-has-four-col>
    </div>
  </sn-card-with-title>


</template>

<script>
export default {
  name: "InsertMedicalTemplateTop",
  data() {
    return {
      templateNo: 'RZ00055',
      templateName: '',
      templateType: '0',
      templatePermission:'0',
      creator:'张安',
      createTime:'2019-10-09'
    }
  }
}
</script>

<style scoped>

</style>