<template>
  <sn-card-with-title>
    <!-- 标题 -->
    <sn-row-has-two-col :left="20" :right="4" slot="title">
      <sn-text
          text="新增调价"
          slot="one-col"
          font-weight="bold"
          :move-down="10"
          :font-size="20"
          font-color="#666EE8"/>
      <div slot="two-col">
        <el-button type="primary" plain @click="finishDrugChangePrice">
          <sn-text text="完成调价"/>
        </el-button>
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
        <el-table-column prop="drugNumber" label="药品编码" width="110"/>
        <el-table-column prop="drugName" label="药品名称"/>
        <el-table-column prop="stockNumber" label="采购编号" width="120"/>
        <el-table-column prop="specification" label="规格"/>
        <el-table-column prop="drugStock" label="库存量"/>
        <el-table-column prop="batchNumber" label="批号" width="120"/>
        <el-table-column prop="purchasePrice" label="采购价(元)"/>
        <el-table-column prop="oldSalePrice" label="原零售价(元)"/>
        <el-table-column label="现零售价(元)">
          <template slot-scope="scope">
            <sn-input
                @inputChange="getNowSale"
                :input-value-from-parent="scope.row.nowSale" class="move-up"/>
          </template>
        </el-table-column>

        <el-table-column prop="differ" label="差价"/>
        <el-table-column prop="rate" label="比例"/>
      </el-table>
    </div>

  </sn-card-with-title>
</template>

<script>
import {getChangePriceByDrugid} from "@/api/drug_manage/drugManage";

import {updateDrugSalePrice} from "@/api/drug_manage/drugManage";

export default {
  name: "NewAddChangePrice",
  data() {
    return {
      changePriceTableData: [],
      nowPrice:''
    }
  },
  methods: {
    finishDrugChangePrice() {
      if(this.nowPrice == ''){
        this.myUtils.showMessage(this,"请输入调整的价格！！")
      }else {
        updateDrugSalePrice(this.$route.params.id,this.nowPrice)
        this.$router.push('/drugManageRoot/drugChangePriceRecord')
      }
    },
    returnUp() {
      history.back()
    },
    toGetChangePriceByDrugid(id){

      getChangePriceByDrugid(id).then(res => {
        this.changePriceTableData=res.data
        this.$set(this.changePriceTableData[0],'id',1)
      })
    },

    getNowSale(nowSale){
      this.nowPrice=nowSale;
    },

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
</style>