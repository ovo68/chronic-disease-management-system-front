<template>
  <div>
    <employee-list-find-bar
        @getDepartment="queryByDepartment"
        @getInputText="queryByInputText"
    />
    <employee-list-table
        @deleteConfirm="deleteConfirm"
        @changeEmployeeStatus="changeEmployeeStatus"
        ref="employeeListTable"
        :table-data="data"/>
  </div>
</template>

<script>
import EmployeeListFindBar
  from "@/views/system_setting/employee_manage/children/employee_list/children/EmployeeListFindBar";
import EmployeeListTable
  from "@/views/system_setting/employee_manage/children/employee_list/children/EmployeeListTable";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "EmployeeList",
  components: {
    EmployeeListTable,
    EmployeeListFindBar
  },
  data() {
    return {
      employeeListData: [],
      data: []
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getEmployeeByNameData'
    })
  },

  methods: {
    ...mapActions([
      'asyncChangeEmployeeStatus',
      'asyncDelEmployeeById'
    ]),

    /*    getTableData(){
          for(let item of this.tableData){
            this.employeeListData.push(item)
          }
        },*/
    queryByDepartment(department) {
      this.data = []
      if (department.label !== '全部') {
        for (let item of this.employeeListData) {
          if (item.department.name === department.label) {
            this.data.push(item)
          }
        }
      } else {
        this.data = this.employeeListData
      }
    },
    queryByInputText(text) {
      this.data = []
      if (text !== "") {
        for (let item of this.employeeListData) {
          if (item.name.indexOf(text) !== -1) {
            this.data.push(item)
          }
        }
      } else {
        this.data = this.employeeListData
      }
    },
    changeEmployeeStatus(data) {
      this.asyncChangeEmployeeStatus(data)
      for (let item of this.data) {
        if (item == data) {
          if (data.status.value === 1) {
            this.$set(item.status, 'value', 0)
            this.$set(item.status, 'description', '停用')
          } else {
            this.$set(item.status, 'value', 1)
            this.$set(item.status, 'description', '启用')
          }
        }
      }
    },

    deleteConfirm(id) {
      this.asyncDelEmployeeById(id)
      console.log(this.data.length)
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id === id) {
          this.data.splice(i, 1)
        }
      }
    }
  },

  /*  mounted() {
      this.getTableData()
    },*/
  //创建组件前先获取数据
  created() {
    this.employeeListData = this.tableData
    this.data = this.employeeListData
  }
}
</script>

<style scoped>

</style>