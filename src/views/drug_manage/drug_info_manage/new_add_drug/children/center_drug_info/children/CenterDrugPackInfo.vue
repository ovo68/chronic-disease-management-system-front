<!-- 中药包装信息 -->
<template>
  <div>
    <sn-text
        slot="one-col"
        text="包装信息"
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
      <sn-select slot="one-col" :select-data="packUnitData">
        <sn-must-text text="包装单位" slot="title"/>
      </sn-select>
      <sn-input slot="two-col">
        <sn-must-text text="基本系数" slot="title"/>
      </sn-input>
      <sn-select slot="three-col" :select-data="baseUnitData">
        <sn-must-text text="基本单位" slot="title"/>
      </sn-select>
      <sn-input slot="four-col">
        <sn-must-text text="剂量系数" slot="title"/>
      </sn-input>
    </sn-row-has-four-col>

    <!-- 第二行-->
    <sn-row-has-four-col
        class="margin-top-20"
        :one="6"
        :two="6"
        :three="6"
        :four="6">
      <sn-select slot="one-col" :select-data="dosageUnitData">
        <sn-must-text text="剂量单位" slot="title"/>
      </sn-select>
      <sn-input-complex slot="two-col" :choose-item="buyPriceUnitData">
        <sn-must-text text="采购价(元)" slot="title"/>
      </sn-input-complex>
      <sn-input-complex slot="three-col" :choose-item="salePriceUnitData">
        <sn-must-text text="零售价(元)" slot="title"/>
      </sn-input-complex>

      <div slot="four-col" class="to-flex">
        <sn-text text="允许拆零 :"
                 class="margin-right-20"
                 :move-down="41"/>
        <el-radio
            v-model="allowRadio"
            label="1"
            class="to-flex move-down">
          <sn-text text="是"/>
        </el-radio>
        <el-radio
            v-model="allowRadio"
            label="2"
            class="to-flex move-down">
          <sn-text text="否"/>
        </el-radio>
      </div>
    </sn-row-has-four-col>
  </div>
</template>

<script>
export default {
  name: "CenterDrugPackInfo",
  data() {
    return {
      packUnitData: [
        {
          value: 0,
          label: '盒'
        },
        {
          value: 1,
          label: '袋'
        },
        {
          value: 2,
          label: '片'
        },
      ],
      baseUnitData: [
        {
          value: 0,
          label: '盒'
        },
        {
          value: 1,
          label: '袋'
        },
        {
          value: 2,
          label: '片'
        },
      ],
      dosageUnitData: [
        {
          value: 0,
          label: '盒'
        },
        {
          value: 1,
          label: '袋'
        },
        {
          value: 2,
          label: '片'
        },
      ],
      buyPriceUnitData: [
        {
          value: 0,
          label: '盒'
        },
        {
          value: 1,
          label: '袋'
        },
        {
          value: 2,
          label: '片'
        },
      ],
      salePriceUnitData: [
        {
          value: 0,
          label: '盒'
        },
        {
          value: 1,
          label: '袋'
        },
        {
          value: 2,
          label: '片'
        },
      ],
      allowRadio: '1'
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 45px;
}
</style>