<template>
  <!-- 标题-->
  <sn-row-has-two-col :left="20" :right="4">
    <sn-text
        :move-down="11"
        :font-size="20" font-weight="bold"
        text="新增患者信息" slot="one-col"/>

    <div slot="two-col" class="to-flex">
      <el-button type="primary" @click="toSaveSick">
        <sn-text text="保存"/>
      </el-button>
      <el-button type="primary" plain @click="returnUp">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "NewAddSickTitle",
  methods: {
    returnUp() {
      history.back()
    },
    //保存患者
    toSaveSick(){
      this.$emit('saveSick')
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>