<template>
  <div>
    <sn-row-has-two-col :left="5" :right="6">
      <sn-select :select-data="checkItemSettingFindBarData"
                 :select-style="{'width':'150px'}" slot="one-col" class="to-flex">
        <sn-text text="项目状态" slot="title" :move-down="15" class="margin-right"/>
      </sn-select>

      <sn-search-input input-placeholder="项目名称/项目编号" slot="two-col"/>
    </sn-row-has-two-col>
  </div>
</template>

<script>

export default {
  name: "CheckItemSettingFindBar",
  data() {
    return {
      checkItemSettingFindBarData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '启用'
        },
        {
          value: 2,
          label: '停用'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>