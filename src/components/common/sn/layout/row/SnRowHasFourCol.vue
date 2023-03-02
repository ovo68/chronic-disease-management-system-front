<template>
  <el-row :gutter="10" class="row-has-four-col">
    <el-col :span="one">
      <div>
        <slot name="one-col"/>
      </div>
    </el-col>
    <el-col :span="two">
      <div>
        <slot name="two-col"/>
      </div>
    </el-col>
    <el-col :span="three">
      <div>
        <slot name="three-col"/>
      </div>
    </el-col>
    <el-col :span="four">
      <div>
        <slot name="four-col"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "RowHasFourCol",
  props:{
    one:{
      type:Number,
      default: 6
    },
    two:{
      type:Number,
      default: 6
    },
    three:{
      type:Number,
      default: 6
    },
    four:{
      type:Number,
      default: 6
    },
  }
}
</script>

<style scoped>
.row-has-four-col {
  margin-bottom: 20px;
}
</style>