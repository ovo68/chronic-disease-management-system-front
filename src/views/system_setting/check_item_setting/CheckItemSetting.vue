<!-- 检查项目设置-->
<template>
<div>
  <CheckItemSettingFindBar/>
  <CheckItemSettingTable :table-data="checkItemSettingTableData"/>
</div>
</template>

<script>
import CheckItemSettingFindBar
  from "@/views/system_setting/check_item_setting/children/CheckItemSettingFindBar";
import CheckItemSettingTable
  from "@/views/system_setting/check_item_setting/children/CheckItemSettingTable";
export default {
  name: "CheckItemSetting",
  components: {
    CheckItemSettingTable,
    CheckItemSettingFindBar
  },
  data() {
    return {
      checkItemSettingTableData: [
        {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '启用',
          createTime: '2019-02-09 10:23:56'
        },
        {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        }, {
          id: '1',
          itemId: '1000002',
          itemName: '煎药费',
          itemType: '血压测量',
          itemInvoice: '检查费',
          retailPrice: '16.00',
          purchasePrice: '14.00',
          unit: '次',
          itemStatus: '停用',
          createTime: '2019-02-09 10:23:56'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>