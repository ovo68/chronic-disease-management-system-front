<template>
  <div class="workspace-row">
    <el-row :gutter="10" v-for="row in getRows">
      <el-col :span="8">
        <workspace-item :sick="pageSicks[(row-1)*3]" v-if="(row-1)*3 < pageSicks.length"/>
      </el-col>
      <el-col :span="8">
        <workspace-item :sick="pageSicks[(row-1)*3 + 1]" v-if="(row-1)*3 + 1 < pageSicks.length"/>
      </el-col>
      <el-col :span="8">
        <workspace-item :sick="pageSicks[(row-1)*3 + 2]" v-if="(row-1)*3 + 2 < pageSicks.length"/>
      </el-col>
    </el-row>
    <work-space-page :table-data="sicks" @getPageData="getPageData" class="page"/>
  </div>
</template>

<script>
import WorkspaceItem from "@/views/workspace/children/WorkspaceItem";
import WorkSpacePage from "@/views/workspace/children/page/WorkSpacePage";

export default {
  name: 'WorkspaceContent',
  components: {
    WorkSpacePage,
    WorkspaceItem,
  },
  data() {
    return {
      pageSicks: []
    }
  },
  props: {
    sicks: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    getPageData(pageSicks) {
      this.pageSicks = pageSicks
    }
  },
  computed: {
    getRows() {
      return this.pageSicks.length % 3 === 0 ? Math.floor(this.pageSicks.length / 3) : Math.floor(this.pageSicks.length / 3) + 1;
    }
  },
}
</script>

<style scoped>
.page {
  text-align: center;
  margin-top: 20px;
}
</style>