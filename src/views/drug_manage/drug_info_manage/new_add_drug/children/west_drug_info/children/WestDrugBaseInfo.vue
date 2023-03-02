<!-- 中药基础信息 -->
<template>
  <div>
    <sn-text
        slot="one-col"
        text="基本信息"
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
      <sn-input slot="one-col" :is-disabled="true" input-placeholder="16514321654">
        <sn-must-text text="药品编码" slot="title"/>
      </sn-input>
      <sn-input slot="two-col">
        <sn-must-text text="药品条形码" slot="title"/>
      </sn-input>
      <sn-input slot="three-col">
        <sn-must-text text="药品通用名" slot="title"/>
      </sn-input>
      <sn-input slot="four-col">
        <sn-must-text text="拼音码" slot="title"/>
      </sn-input>


    </sn-row-has-four-col>

    <!-- 第二行-->
    <sn-row-has-four-col
        class="margin-top-20"
        :one="6"
        :two="6"
        :three="6"
        :four="6">
      <sn-select slot="one-col" :select-data="drugClassifyData">
        <sn-must-text text="药品分类" slot="title"/>
      </sn-select>
      <sn-input slot="two-col">
        <sn-must-text text="药品规格" slot="title"/>
      </sn-input>
      <sn-select slot="three-col" :select-data="drugTypeData">
        <sn-must-text text="药品剂型" slot="title"/>
      </sn-select>

      <div slot="four-col" class="to-flex">
        <sn-text text="OTC药品 :"
                 class="margin-right-20"
                 :move-down="41"/>
        <el-radio
            v-model="OTCRadio"
            label="1"
            class="to-flex move-down">
          <sn-text text="是"/>
        </el-radio>
        <el-radio
            v-model="OTCRadio"
            label="2"
            class="to-flex move-down">
          <sn-text text="否"/>
        </el-radio>
      </div>
    </sn-row-has-four-col>

    <!-- 第三行-->
    <sn-row-has-four-col
        class="margin-top-20"
        :one="6"
        :two="6"
        :three="6"
        :four="6">
      <sn-select slot="one-col" :select-data="invoiceData">
        <sn-must-text text="发票项目" slot="title"/>
      </sn-select>
      <sn-input slot="two-col">
        <sn-must-text text="批准文号" slot="title"/>
      </sn-input>
      <sn-select slot="three-col" :select-data="manufacturersData">
        <sn-must-text text="生产厂家" slot="title"/>
      </sn-select>

      <div slot="four-col" class="to-flex">
        <sn-text text="药品状态 :"
                 class="margin-right-20"
                 :move-down="41"/>
        <el-radio
            v-model="drugStatusRadio"
            label="1"
            class="to-flex move-down">
          <sn-text text="是"/>
        </el-radio>
        <el-radio
            v-model="drugStatusRadio"
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
  name: "WestDrugBaseInfo",
  data() {
    return {
      drugClassifyData: [
        {
          value: 0,
          label: '注射类'
        },
        {
          value: 1,
          label: '消炎类'
        },
        {
          value: 2,
          label: '西药'
        },
      ],
      drugTypeData: [
        {
          value: 0,
          label: '片剂'
        },
        {
          value: 1,
          label: '注射液'
        },
        {
          value: 2,
          label: '口服液'
        },
      ],
      invoiceData: [
        {
          value: 0,
          label: '诊疗费'
        },
        {
          value: 1,
          label: '检查费'
        },
        {
          value: 2,
          label: '西药费'
        },
      ],
      manufacturersData: [
        {
          value: 0,
          label: '昆明制药集团'
        },
        {
          value: 1,
          label: '上海医药集团'
        },
        {
          value: 2,
          label: '山东医药集团'
        },
      ],
      OTCRadio: '1',
      drugStatusRadio: '1'
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