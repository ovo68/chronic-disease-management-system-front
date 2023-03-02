<template>
  <div class="drug-detail-info">
    <sn-row-has-four-col :one="5" :two="9" :three="4" :four="6" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="药品编码 :" class="margin-right"/>
        <sn-text :text="number"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="药品名称 :" class="margin-right"/>
        <sn-text :text="drugName"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="药品类型 :" class="margin-right"/>
        <sn-text :text="prescriptionType"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="药品规格 :" class="margin-right"/>
        <sn-text :text="specification"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="5" :two="9" :three="4" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="药品剂型 :" class="margin-right"/>
        <sn-text :text="drugForm"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="生产厂家 :" class="margin-right"/>
        <sn-text :text="factory"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="库存数量 :" class="margin-right"/>
        <sn-text :text="stock"/>
      </div>
    </sn-row-has-four-col>
  </div>
</template>

<script>
import {getDrugInfoById} from "@/api/drug_manage/drugManage";

export default {
  name: "StockDrugDetailInfo",
  data(){
    return {
      number:'',
      drugName:'',
      prescriptionType:'',
      specification:'',
      drugForm:'',
      factory:'',
      stock:''
    }
  },
  methods:{
    toGetDrugInfoById(id){
      getDrugInfoById(id).then(res =>{
        this.number=res.data.drug.number;
        this.drugName=res.data.drug.name;
        this.prescriptionType=res.data.drug.prescriptionType.description;
        this.specification=res.data.drug.specification;
        this.drugForm=res.data.drug.drugForm.form;
        this.factory=res.data.drug.factory.name;
        this.stock=res.data.drug.stock
      })
    }
  },
  created() {
    this.toGetDrugInfoById(this.$route.params.id)
  }
}
</script>

<style scoped>
.drug-detail-info {
  background-color: #EEEFFB;
  line-height: 60px;
}
</style>