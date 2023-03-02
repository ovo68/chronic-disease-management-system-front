<template>
<sn-row-has-two-col :left="7" :right="15" >

  <sn-date-picker-with-round slot="one-col" class="to-flex move-up">
    <sn-text text="订单时间" slot="title" move-down="12" class="margin-right"  />
  </sn-date-picker-with-round>

  <sn-search-input slot="two-col" input-placeholder="输入单号或项目名称" input-style="width:40%" />
</sn-row-has-two-col>
</template>

<script>
export default {
  name: "CheckItemStaticsFindBar"

}
</script>

<style scoped>
.move-up{
  position: relative;
  bottom: 3px;
}
</style>