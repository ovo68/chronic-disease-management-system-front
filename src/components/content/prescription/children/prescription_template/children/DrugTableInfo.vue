<!-- 药品信息 -->
<template>
  <sn-table-has-checkbox
      @getSelectFromTable="getSelectFromTable"
      :table-title="tableTitle"
      :table-data="tableData"
      height="250"
      :add-title="addTitle">

  </sn-table-has-checkbox>
</template>

<script>
export default {

  name: 'DrugTableInfo',

  methods: {
    getSelectFromTable(selectInfo) {
      this.$emit('getSelectInfo', selectInfo)
    }
  },

  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    tableTitle: {
      type: Array,
      default() {
        return []
      }
    },
    addTitle: {
      type: String,
      default: ''
    }
  },
}
</script>
<style scoped>

</style>