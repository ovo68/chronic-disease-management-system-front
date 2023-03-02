<template>
  <div class="block sn-date-picker">
    <div>
      <slot name="title"></slot>
    </div>
    <el-date-picker
        @change="chooseDate"
        value-format="yyyy-MM-dd"
        v-model="value"
        type="daterange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        :editable="false"
        :style="datePickerStyle"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime());
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近三天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近两周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近三周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 21);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '近两个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
              picker.$emit('pick', [start, end]);
            }
          },
        ]
      },
    };
  },
  props:{
    datePickerStyle:{
      type:Object,
      default(){
        return{

        }
      }
    }
  },
  methods: {
    chooseDate() {
      this.$emit('chooseDate',this.value)
    }
  },
}
</script>

<style scoped lang="less">
.sn-date-picker {

  //日期选择器
  .el-date-editor--daterange.el-input__inner {
    width: 360/1.25px;
    height: 52/1.25px;
    position: relative;
    top: 2px;
    margin-right: 30px;
    border: 3px solid #CCCCCC;
    padding-right: 0;
  }

  // 日期图表的位置
  /deep/ .el-date-editor .el-range__icon {
    line-height: 30px;
  }

  // ‘至’ 的位置
  /deep/ .el-range-separator {
    position: relative;
    bottom: 1px;
    font-size: 14px;
  }

  //选中日期选择器时的边框
  .el-range-editor.is-active {
    border-color: #666EE8;
  }
}


</style>