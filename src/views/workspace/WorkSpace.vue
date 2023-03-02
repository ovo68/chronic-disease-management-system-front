<!-- 工作空间-->
<template>
  <div>
    <workspace-top-bar
        @querySicksByName="toQuerySicksByName"
        @querySicksByCreateDate="toQuerySicksByCreateTime"/>
    <div class="text item">
      <workspace-content
          :sicks="sicks"/>
    </div>
  </div>
</template>

<script>
import WorkspaceItem from "@/views/workspace/children/WorkspaceItem";
import WorkspaceContent from "@/views/workspace/children/WorkspaceContent";
import WorkspaceTopBar from "@/views/workspace/children/WorkspaceTopBar";

//查询所有患者
import {queryAllSicks} from "@/api/workspace/workspace";
//导入根据创建时间查询病人的api
import {querySicksByCreateTime} from "@/api/workspace/workspace";
//导入根据患者姓名查询患者的api
import {querySicksByName} from "@/api/workspace/workspace";

export default {
  name: "WorkSpace",
  components: {
    WorkspaceItem,
    WorkspaceContent,
    WorkspaceTopBar,
  },
  data() {
    return {
      sicks: []
    }
  },
  methods: {
    //查询所有患者
    toQueryAllSicks() {
      queryAllSicks().then(res => {
        this.sicks = res.data
      })
    },
    //根据创建时间查询患者
    toQuerySicksByCreateTime(date) {
      if (date !== null) {
        querySicksByCreateTime(date[0], date[1]).then(res => {
          this.sicks = res.data
        })
      } else {
        this.toQueryAllSicks()
      }
    },
    //根据患者姓名查询患者
    toQuerySicksByName(name) {

      if (name === ''){
        this.toQueryAllSicks()
      }else {
        querySicksByName(name).then(res => {
          this.sicks = res.data
        })
      }
    }
  },
  created() {
    //查询所有患者
    this.toQueryAllSicks()
  }
}
</script>

<style scoped lang="less">

</style>

