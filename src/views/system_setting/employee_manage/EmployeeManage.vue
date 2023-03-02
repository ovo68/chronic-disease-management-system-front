<!-- 员工管理 -->
<template>
  <div>
    <sn-show-by-button-with-card
        :button-count="3"
        :content-count="3"
        :button-names="buttonNames">

      <sn-text text="员工列表" slot="buttonName0"/>
      <sn-text text="科室列表" slot="buttonName1"/>
      <sn-text text="角色列表" slot="buttonName2"/>

      <div slot="content0">
        <employee-list/>
      </div>
      <div slot="content1">
        <departments-list/>
      </div>
      <div slot="content2">
        <role-list/>
      </div>

    </sn-show-by-button-with-card>
  </div>
</template>

<script>
import EmployeeList
  from "@/views/system_setting/employee_manage/children/employee_list/EmployeeList";
import DepartmentsList
  from "@/views/system_setting/employee_manage/children/departments_list/DepartmentsList";
import RoleList from "@/views/system_setting/employee_manage/children/role_list/RoleList";

export default {
  name: "EmployeeManage",
  components: {
    EmployeeList,
    DepartmentsList,
    RoleList
  },
  data() {
    return {
      buttonNames: [
        '员工列表', '科室列表', '角色列表'
      ]
    }
  }
}
</script>

<style scoped>

</style>