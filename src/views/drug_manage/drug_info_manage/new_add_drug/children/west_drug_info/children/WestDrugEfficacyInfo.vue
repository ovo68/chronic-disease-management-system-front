<!-- 中药功效 -->
<template>
  <div>
    <sn-text
        slot="one-col"
        text="功效说明"
        font-color="#409EFF"
        font-weight="bold"
        :font-size="20"/>
    <!-- 第一行 -->
    <sn-row-has-four-col
        class="margin-top-20"
        :one="6"
        :two="6"
        :three="6"
        :four="6">
      <sn-select slot="one-col" :select-data="useMethodData">
        <sn-must-text text="用法" slot="title"/>
      </sn-select>
      <sn-input-complex slot="two-col" :choose-item="dosageUnitData">
        <sn-must-text text="单次用量" slot="title"/>
      </sn-input-complex>
      <sn-select slot="three-col" :select-data="frequencyData">
        <sn-must-text text="频度" slot="title"/>
      </sn-select>
      <div class="to-flex" slot="four-col">
        <sn-select :select-data="daysData" class="margin-right">
          <sn-must-text text="天数" slot="title"/>
        </sn-select>
        <sn-input class="margin-right">
          <sn-must-text text="总量" slot="title"/>
        </sn-input>
        <sn-select :select-data="dosageUnitData" class="move-down"/>
      </div>
    </sn-row-has-four-col>

  </div>
</template>

<script>
export default {
  name: "WestDrugEfficacyInfo",
  data() {
    return {
      useMethodData: [
        {
          value: 0,
          label: '口服'
        },
        {
          value: 1,
          label: '注射'
        },
        {
          value: 2,
          label: '皮试'
        },
      ],
      dosageUnitData: [
        {
          value: 0,
          label: '片'
        },
        {
          value: 1,
          label: '颗'
        },
      ],
      frequencyData: [
        {
          value: 0,
          label: '一天1次'
        },
        {
          value: 1,
          label: '一天2次'
        },
        {
          value: 2,
          label: '一天3次'
        },
        {
          value: 3,
          label: '一天4次'
        },
        {
          value: 4,
          label: '两小时1次'
        },
        {
          value: 5,
          label: '四小时1次'
        },
      ],
      daysData: [
        {
          value: 0,
          label: '1'
        },
        {
          value: 1,
          label: '2'
        },
        {
          value: 2,
          label: '3'
        },
        {
          value: 3,
          label: '4'
        },
        {
          value: 4,
          label: '5'
        },
        {
          value: 5,
          label: '6'
        },
        {
          value: 6,
          label: '7'
        },
      ]
    }
  },
}
</script>

<style scoped>
.move-down{
  position: relative;
  top: 20px;
}
</style>