<template>
  <sn-card-with-title>
    <drug-info-show-title slot="title"/>
    <div slot="content">
      <drug-info-show-find-bar
          @getInput="getInputValue"
          @getStatus="getStatusValue"
          @getTypeId="getTypeValue"
          input-placeholder="输入药品名称/编码"/>
      <drug-info-show-table :table-data="drugInfoShowTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import DrugInfoShowFindBar
  from "@/views/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowFindBar";
import DrugInfoShowTable
  from "@/views/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowTable";
import DrugInfoShowTitle
  from "@/views/drug_manage/drug_info_manage/drug_info_show/children/DrugInfoShowTitle";

//导入查询所有药品信息方法
import {getAllInfoMaintenance} from "@/api/drug_manage/drugManage";

//导入根据处方查询药品的方法
import {getAllInfoMaintenanceByType} from "@/api/drug_manage/drugManage";
//导入根据药品状态查询药品
import {getAllInfoMaintenanceByStatus} from "@/api/drug_manage/drugManage";
//导入模糊查询方法
import {getAllInfoMaintenanceByLike} from "@/api/drug_manage/drugManage";

export default {
  name: "DrugInfoShow",
  components: {
    DrugInfoShowFindBar,
    DrugInfoShowTable,
    DrugInfoShowTitle
  },
  data() {
    return {
      drugInfoShowTableData:[]
    }
  },
  methods:{
    toGetAllInfoMaintenance(){
      getAllInfoMaintenance().then(res => {
        this.drugInfoShowTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.drugInfoShowTableData[i],'ids',i+1)
        }
      })
    },
    getTypeValue(value){
      if(value.value===2){
        this.toGetAllInfoMaintenance()
      }else{
        getAllInfoMaintenanceByType(value.value).then(res =>{
          this.drugInfoShowTableData=res.data;
          for (let i=0;i<res.data.length;i++){
            this.$set(this.drugInfoShowTableData[i],'ids',i+1)
          }
        })
      }
    },
    getStatusValue(value){
      if(value.value===2){
        this.toGetAllInfoMaintenance()
      }else{
        getAllInfoMaintenanceByStatus(value.value).then(res =>{
          this.drugInfoShowTableData=res.data;
          for (let i=0;i<res.data.length;i++){
            this.$set(this.drugInfoShowTableData[i],'ids',i+1)
          }
        })
      }
    },
    getInputValue(value){
      if(value===null || value==''){
        this.toGetAllInfoMaintenance()
      }else{
          getAllInfoMaintenanceByLike(value).then(res =>{
            this.drugInfoShowTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugInfoShowTableData[i],'ids',i+1)
            }
          })
      }

    }
  },
  created() {
    this.toGetAllInfoMaintenance();
  }
}
</script>

<style scoped>

</style>