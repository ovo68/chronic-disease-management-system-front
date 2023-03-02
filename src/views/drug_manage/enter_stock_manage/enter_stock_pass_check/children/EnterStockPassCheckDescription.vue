<template>
  <div class="out-stock-pass-check-description">
    <sn-row-has-four-col :one="7" :two="7" :three="4" :four="6">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="入库单号 :" class="margin-right"/>
        <sn-text :text="number"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="入库日期 :" class="margin-right"/>
        <sn-text :text="stockDate"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="入库人员 :" class="margin-right"/>
        <sn-text :text="stockWorker"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="入库类型 :" class="margin-right"/>
        <sn-text :text="stockType"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="7" :two="7" :three="4" :four="6">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="制单日期 :" class="margin-right"/>
        <sn-text :text="createTime"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="制单人员 :" class="margin-right"/>
        <sn-text :text="tableMaker"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="供应商 :" class="margin-right"/>
        <sn-text :text="supplierName"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="入库备注 :" class="margin-right"/>
        <sn-text :text="remark"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="7" :two="7" :three="4" :four="6">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="审核日期 :" class="margin-right"/>
        <sn-text :text="checkDate"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="审核人员 :" class="margin-right"/>
        <sn-text :text="checkWorker"/>
      </div>
    </sn-row-has-four-col>

  </div>
</template>

<script>
import {getStockByid} from "@/api/drug_manage/drugManage";

export default {
  name: "EnterStockPassCheckDescription",
  data() {
    return {
      stockDate: '',
      number: "",
      stockWorker: "",
      stockType: "",
      tableMaker: "",
      createTime: "",
      supplierName: "",
      remark: "",
      checkDate: 'sadhjgsa',
      checkWorker: ""
    }
  },
  methods: {
    toGetOne(id) {
      getStockByid(id).then(res => {
        console.log(this.checkDate)

        console.log(res.data)

        this.checkDate=res.data[0].stock.checkDate;
        this.checkWorker=res.data[0].stock.checkWorker.name;
        this.createTime=res.data[0].stock.createTime;
        this.number=res.data[0].stock.number;
        this.stockDate=res.data[0].stock.stockDate;
        this.stockType=res.data[0].stock.stockType.type;
        this.stockWorker=res.data[0].stock.stockWorker.name;
        this.tableMaker=res.data[0].stock.tableMaker.name;
        this.remark=res.data[0].stock.remark;
        this.supplierName=res.data[0].stock.supplier.name;
      })
    }
  },
  created() {
    this.toGetOne(this.$route.params.id)
  }
}
</script>

<style scoped>
.out-stock-pass-check-description {
  background-color: #EEEFFB;
  line-height: 30px;
  padding-top: 10px;
}
</style>