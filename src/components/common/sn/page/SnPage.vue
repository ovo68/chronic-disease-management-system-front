<template>
  <!--
      @size-change 每页条数改变
      @current-change 当前页改变
      :current-page 当前页数
      :page-sizes="[5, 6, 7, 8, 9]" 可以改变的每页记录数
      layout="total, sizes, prev, pager, next, jumper" 组件布局，子组件名用逗号分隔
      :total="tableData.length" 总的记录数
      :pager-count 页码按钮的数量，当总页数超过该值时会折叠
  -->
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20, 25]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
      :background="hasBackgroundColor"
      :pager-count="pagerCount">
  </el-pagination>
</template>

<script>
export default {
  name: 'SnPage',
  data() {
    return {
      //是否有背景
      hasBackgroundColor: true,
      //显示页码数
      pagerCount: 5,
      //每页数据
      pageData: [],
      // 每页多少条
      pageSize: 5,
      // 当前页
      currentPage: 1,
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
  watch: {
    //当表格数据发生变化时  进行重新分页
    tableData() {
      this.handleCurrentChange(1)
    }
  },
  computed: {
    pageCount() {
      return this.tableData.length % this.pageSize === 0 ? this.tableData.length / this.pageSize :
          Math.floor(this.tableData.length / this.pageSize + 1)
    },
    //最后一页数据个数
    lastPageCount() {
      return this.tableData.length % this.pageSize === 0 ? this.pageSize : this.tableData.length % this.pageSize
    }
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage)
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.changePageData(this.tableData, val)
    },
    changePageData(data, currentPage) {
      //获取当前页第一条数据在总数据中开始的索引
      //此时currentPageBeginIndex的值表示的只是前面页一共显示了多少数据
      // + 1 要显示的本来就是下一条数据
      // - 1 集合中索引从0开始
      let begin = this.pageSize * (currentPage - 1)
      //声明一个空集合来放当前页的数据
      this.pageData = []
      //判断是否是最后一页
      if (currentPage === this.pageCount) {
        this.getDataFromList(data, this.lastPageCount, begin)
        return
      }
      this.getDataFromList(data, this.pageSize, begin)
    },
    getDataFromList(data, count, begin) {
      /**
       * data从哪儿拿数据
       * count遍历的次数
       * begin开始的索引
       */
      for (let i = 0; i < count; i++) {
        //将当前索引数据放到存放当前页数据的集合中
        if (data[begin + i]) {
          this.pageData.push(data[begin + i])
        }
      }
      /**
       * 向父组件发送自定义事件
       */
      this.$emit('getPageData', this.pageData)
    }
  },

  mounted() {
    this.handleCurrentChange(1)
  }
}
</script>

<style scoped>

</style>