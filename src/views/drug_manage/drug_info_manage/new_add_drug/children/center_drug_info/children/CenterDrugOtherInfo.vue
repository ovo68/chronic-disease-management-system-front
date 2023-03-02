<!-- 中药其他信息 -->
<template>
  <div>
    <sn-text
        slot="one-col"
        text="其他信息"
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
      <sn-input slot="one-col">
        <sn-must-text text="库存下限" slot="title"/>
      </sn-input>
      <sn-input slot="two-col">
        <sn-must-text text="库存上限" slot="title"/>
      </sn-input>
      <sn-input slot="three-col">
        <sn-must-text text="货位号" slot="title"/>
      </sn-input>
      <sn-input slot="four-col">
        <sn-must-text text="有效期预警" slot="title"/>
        <sn-text slot="inputSuffix" text="天" class="change-position"/>
      </sn-input>
    </sn-row-has-four-col>

    <!-- 第二行-->
    <sn-row-has-four-col
        class="margin-top-20"
        :one="12"
        :two="12"
        :three="0"
        :four="0">
      <sn-input slot="one-col">
        <sn-must-text text="药品说明" slot="title"/>
      </sn-input>
      <sn-input slot="two-col" >
        <sn-must-text text="备注" slot="title"/>
      </sn-input>
    </sn-row-has-four-col>
  </div>
</template>

<script>
export default {
  name: "CenterDrugOtherInfo"
}
</script>

<style scoped>
.change-position{
  position: relative;
  top: 12px;
  right: 5px;
}
</style>