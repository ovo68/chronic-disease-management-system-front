<template>
  <div>
    <div class="to-flex margin-bottom title">
      <i class="el-icon-tickets margin-right"/>
      <sn-title title="费用明细"/>
    </div>
    <sn-table
        height="300"
        :table-data="CheckOutTableData"
        :table-title="CheckOutTableTitle"
        :is-has-border="true">
    </sn-table>
    <!-- 具体费用 -->
    <sn-card-no-title class="margin-top-20 ">
      <div slot="content">
        <div class="to-flex cost">
          <sn-text text="处理费 :" class="margin-right"/>
          <sn-text :number="15.00" class="margin-right number"/>
          <sn-text text="元" class="margin-right-20"/>
          <sn-text text="处理费 :" class="margin-right"/>
          <sn-text :number="20.00" class="margin-right number"/>
          <sn-text text="元"/>
        </div>
        <div class="to-flex cost  margin-top total">
          <sn-text text="共计 :" class="margin-right"/>
          <sn-text :number="15.00" class="margin-right number"/>
          <sn-text text="元"/>
        </div>
      </div>
    </sn-card-no-title>
  </div>
</template>

<script>
export default {
  name: "CheckOutDrugInfoTable",
  props: {
    CheckOutTableData: {
      type: Array,
      default() {
        return []
      }
    },
    CheckOutTableTitle: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.title {
  color: #666EE8;
}

.number {
  color: #666EE8;
  font-size: 20px;
  position: relative;
  bottom: 3px;
}

.cost {
  justify-content: flex-end;
}

.total{
  border-top: 1px solid #83A0BC;
  padding-top: 10px;
  padding-right: 10px;
}
</style>