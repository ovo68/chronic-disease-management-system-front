<template>
  <div>
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="number" label="患者编号" width="110px"/>
      <el-table-column prop="name" label="患者姓名"/>
      <el-table-column prop="gender.description" label="性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="phoneNumber" label="手机号码" width="110px"/>
      <el-table-column label="会员等级">
        <template slot-scope="scope">
            <span class="vip">
              {{ 'VIP' + scope.row.vip.level }}
            </span>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="100px"/>


      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="to-flex">
            <el-link type="primary"
                     :underline="false"
                     @click="toMeetDoctor(scope.row.id,scope.row.vip.level)"
                     class="margin-right">接诊
            </el-link>
            <el-link type="primary"
                     :underline="false"
                     @click="toEditSick(scope.row.id,scope.row.vip.level)"
                     class="margin-right">编辑
            </el-link>
            <el-link
                @click="deleteSick(scope.row.id)"
                type="primary"
                :underline="false"
                class="margin-right">删除
            </el-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
//导入根据患者id删除患者api
import {deleteSickById} from "@/api/sick_manage/sickManage";

export default {
  name: "SickManageTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },

    //根据id删除患者
    deleteSick(id) {
      this.myUtils.deleteConfirm(this, () => {
        deleteSickById(id).then(res => {
          for (let i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id === id) {
              this.tableData.splice(i, 1)
              break
            }
          }
          console.log("删除患者成功")
        })
      })
    },

    //根据id编辑患者信息
    toEditSick(id, level) {
      this.$router.push("/sickManageRoot/sickInfo/" + id + '/' + level)
    },
    //根据患者id 去接诊
    toMeetDoctor(id, level) {
      this.$router.push("/sickManageRoot/meetDoctor/" + id + '/' + level)
    }
  },
}
</script>

<style scoped>

</style>