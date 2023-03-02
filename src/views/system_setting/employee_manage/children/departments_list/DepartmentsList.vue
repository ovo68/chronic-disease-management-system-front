<template>
  <div>
    <departments-list-find-bar/>
    <departments-list-table :table-data="departmentsListData"/>
  </div>

</template>

<script>
import DepartmentsListFindBar
  from "@/views/system_setting/employee_manage/children/departments_list/children/DepartmentsListFindBar";
import DepartmentsListTable
  from "@/views/system_setting/employee_manage/children/departments_list/children/DepartmentsListTable";
export default {
  name: "DepartmentsList",
  components: {
    DepartmentsListTable,
    DepartmentsListFindBar
  },
  data() {
    return {
      departmentsListData: [
        {
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },{
          id: 1,
          departmentId: '11111',
          departmentName: '全科',
          departmentIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          departmentStatus: true
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>