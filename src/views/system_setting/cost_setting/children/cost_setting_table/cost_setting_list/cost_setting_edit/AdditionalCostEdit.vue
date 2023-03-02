<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <!-- 标题 -->
      <sn-row-has-four-col :left="22" :right="2" slot="title">
        <sn-text
            text="新增附加费"
            slot="one-col"
            font-weight="bold"
            :move-down="10"
            :font-size="20"
            font-color="#666EE8"/>
        <div slot="two-col" >
          <el-button type="primary" plain @click="saveUp" >
            <sn-text text="保存"/>
          </el-button>
          <el-button type="primary" plain @click="returnUp" >
            <sn-text text="返回"/>
          </el-button>
        </div>
      </sn-row-has-four-col>
      <span slot="content">
        <additional-input/>
      </span>
    </sn-card-with-title>

  </sn-three-col-space>

</template>

<script>
import AdditionalInput
  from "@/views/home/children/system_setting/children/cost_setting/children/cost_setting_table/cost_setting_list/cost_setting_edit/children/AdditionalInput";
export default {
  name: "AdditionalCostEdit",
  components:{
    AdditionalInput
  },
  data() {
    return {

    }
  },
  methods: {
    returnUp(){

     },
    saveUp(){

    }
  }
}
</script>

<style scoped>
.move-up {
  position: relative;
  bottom: 5px;
}
</style>