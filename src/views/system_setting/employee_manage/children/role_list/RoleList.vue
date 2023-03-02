<template>
  <div>
    <RoleListFindBar/>
    <RoleListTable :table-data="roleListTableData"/>
  </div>
</template>

<script>
import RoleListFindBar
  from "@/views/system_setting/employee_manage/children/role_list/children/RoleListFindBar";
import RoleListTable
  from "@/views/system_setting/employee_manage/children/role_list/children/RoleListTable";
export default {
name: "RoleList",
  components: {
    RoleListTable,
    RoleListFindBar
  },
  data() {
    return {
      roleListTableData: [
        {
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },{
          id: 1,
          roleId: '11111',
          roleName: '超管',
          roleIntroduce: '和爱搜回复iOS大活佛is大红覅和奥斯防滑袜覅偶哈我发 OWIFI   SADF ASDF ',
          createTime: '2019-11-12 12:08:28',
          createPerson: '王冕',
          roleStatus: true
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>