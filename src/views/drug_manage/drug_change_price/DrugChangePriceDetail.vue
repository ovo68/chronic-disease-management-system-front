<template>
  <sn-card-with-title>
    <!-- 标题 -->
    <sn-row-has-two-col :left="22" :right="2" slot="title">
      <sn-text
          text="查看调价详情"
          slot="one-col"
          font-weight="bold"
          :move-down="10"
          :font-size="20"
          font-color="#666EE8"/>
      <div slot="two-col">
        <el-button type="primary" plain @click="returnUp">
          <sn-text text="返回"/>
        </el-button>
      </div>
    </sn-row-has-two-col>

    <!-- 调价内容-->
    <div slot="content">
      <el-table
          :data="changePriceTableData"
          :height="400"
          stripe
          style="width: 100%"
          :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
          :cell-style="{'text-align':'center'}">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="drugNumber" label="药品编码" width="110px"/>
        <el-table-column prop="drugName" label="药品名称"/>
        <el-table-column prop="stockNumber" label="采购编号"/>
        <el-table-column prop="specification" label="规格"/>
        <el-table-column prop="drugStock" label="库存量"/>
        <el-table-column prop="batchNumber" label="批号"/>
        <el-table-column prop="purchasePrice" label="采购价(元)"/>
        <el-table-column prop="oldSalePrice" label="原零售价(元)"/>
        <el-table-column prop="nowSalePrice" label="现零售价(元)"/>

        <el-table-column prop="differ" label="差价">
          <template slot-scope="scope">
            <sn-text :text="scope.row.differ" font-color="pink"/>
          </template>
        </el-table-column>

        <el-table-column prop="rate" label="比例">
          <template slot-scope="scope">
            <sn-text :text="scope.row.rate" font-color="pink"/>
          </template>
        </el-table-column>

        <el-table-column prop="createTime" label="操作时间" width="100"/>

        <el-table-column prop="operator" label="操作员"/>

      </el-table>
    </div>
  </sn-card-with-title>
</template>

<script>
import {getChangePriceByDrugid} from "@/api/drug_manage/drugManage";

export default {
  name: "DrugChangePriceDetail",
  data() {
    return {
      changePriceTableData: []
    }
  },
  methods: {
    finishDrugChangePrice() {
    },
    returnUp() {
      history.back()
    },
    toGetChangePriceByDrugid(id){
      getChangePriceByDrugid(id).then(res => {
        this.changePriceTableData=res.data
        this.$set(this.changePriceTableData[0],'id',1)
      })
    }
  },
  created() {
    this.toGetChangePriceByDrugid(this.$route.params.id)
  }
}
</script>

<style scoped>
.move-up {
  position: relative;
  bottom: 5px;
}

.el-button {
  width: 100px;
}
</style>