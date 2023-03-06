<template>
  <div class="third-row">
    <el-card class="box-card third-row-content">
      <div slot="header" class="clearfix">
        <span>门诊记录</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}">
        <el-table-column prop="id" label="序号"/>
        <el-table-column prop="name" label="患者姓名">
          <template slot-scope="scope">
                      <span class="status">
                        {{ scope.row.name.substring(0, 1) + "**" }}
                      </span>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.sex === 1 ? "男" : "女" }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="phone" label="手机号码" width="110">
          <template slot-scope="scope">
                      <span class="status">
                        {{ scope.row.phone.substring(0, 3) + "****" }}
                      </span>
          </template>
        </el-table-column>
        <!--        <el-table-column prop="registerType.description" label="门诊类型"/>-->
        <!--        <el-table-column prop="doctor.department.name" label="科室"/>-->
        <!--        <el-table-column prop="doctor" label="医生"/>-->
        <!--        <el-table-column prop="sick.updateTime" label="最后更新" width="100px"/>-->
      </el-table>
      <!-- 分页导航-->
      <!--
        @getPageData 自定义监听事件 当子组件发送该事件后监听到自动执行getPageData方法
        getPageData方法中的参数用来获取到子组件传来的数据
      -->
      <!--      <sn-page :table-data="tableData" class="page" @getPageData="getPageData"/>-->

<!--      <el-pagination-->
<!--          @size-change="handleSizeChange"-->
<!--          @current-change="handleCurrentChange"-->
<!--          :current-page="currentPage"-->
<!--          :page-sizes="[5, 10, 15, 20]"-->
<!--          :page-size="100"-->
<!--          layout="total, sizes, prev, pager, next, jumper"-->
<!--          :total="sickData.length">-->
<!--      </el-pagination>-->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ConditionThirdRow',
  data() {
    return {
      //每页数据
      sickData: [],
      currentPage: 1,
      pageSize: 5,
      pageNumber: 1
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
    handleSizeChange(pageSize) {
      console.log(`每页 ${pageSize} 条`);
    },
    handleCurrentChange(pageNumber) {
      console.log(`当前页: ${pageNumber}`);
    }
  },

  watch: {
    tableData() {

    }
  }
}
</script>

<style scoped lang="less">
.third-row {
  margin-top: 25px;

  .third-row-content {
    //标题
    .clearfix {
      span {
        font-size: 16px;
        font-weight: bold;
      }
    }

    //就诊状态字体颜色
    .status {
      color: #66D4A2;
    }

    //分页导航
    .page {
      margin-top: 20px;
      text-align: right;
    }
  }
}

</style>
