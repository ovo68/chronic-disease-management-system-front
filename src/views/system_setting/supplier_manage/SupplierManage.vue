<!-- 供应商管理 -->
<template>
  <div>
    <supplier-manage-find-bar/>
    <supplier-manage-table :table-data="SupplierManageTableData"/>
  </div>
</template>

<script>
import SupplierManageFindBar
  from "@/views/system_setting/supplier_manage/children/SupplierManageFindBar";
import SupplierManageTable
  from "@/views/system_setting/supplier_manage/children/SupplierManageTable";

export default {
  name: "SupplierManage",
  components: {
    SupplierManageTable, SupplierManageFindBar
  },
  data() {
    return {
      SupplierManageTableData: [
        {

          id: '1',
          supplierNo: '1004',
          supplierName: '蓝天制药厂',
          contactPerson: '王宽硕',
          tel: 18865789099,
          createTime: 2019 - 11 - 12,
          creator: '王冕',
          status: '启用'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>