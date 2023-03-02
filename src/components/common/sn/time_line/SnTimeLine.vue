<template>
  <div class="sn-time-line">
    <sn-row-has-two-col :left="23" :right="1">
      <!-- 1. 时间线描述信息 -->
      <div slot="one-col">
        <!-- 1.1 具体时间 -->
        <div class="put-time">
          <el-link
              @click="chooseThisTimeLine"
              class="time"
              :class="{'is-select':timeLienId === selectId}"
              slot="content"
              :underline="false">
            <slot name="time">
            </slot>
          </el-link>
        </div>

        <!-- 1.2 信息描述 -->
        <sn-card-no-title class="time-line-info">
          <el-link
              @click="chooseThisTimeLine"
              :underline="false"
              slot="content">
            <slot name="content">
            </slot>
          </el-link>
        </sn-card-no-title>
      </div>

      <!-- 2. 时间线-->
      <div slot="two-col" class="move-up">
        <!-- 2.1 上面线-->
        <div class="time-line above"></div>

        <!-- 2.2 中间点-->
        <el-link
            @click="chooseThisTimeLine"
            :underline="false"
            class="time-line-point"
            :class="{'is-select': timeLienId === selectId}"></el-link>

        <!-- 2.3 下面线-->
        <div class="time-line below"></div>
      </div>
    </sn-row-has-two-col>
  </div>
</template>

<script>
export default {
  name: "SnTimeLine",
  methods: {
    chooseThisTimeLine() {
      this.$emit('chooseTimeLine', this.timeLienId)
    }
  },
  props: {
    timeLienId: {
      type: Number,
    },
    selectId: {
      type: Number,
    }
  },
}
</script>

<style scoped lang="less">

.time-line-point {
  width: 10px;
  height: 10px;
  border-radius: 8px;
  border: 2px solid #C5C8F6;
}

.time-line {
  background-color: pink;
  width: 1.8px;


}

.above {
  position: relative;
  left: 6px;
  top: 3px;
  height: 100px;
}

.below {
  position: relative;
  left: 6px;
  bottom: 0.5px;
  height: 80px;
}

.is-select {
  background-color: #666EE8;
  box-shadow: #666 0 0 2px; //四周设置阴影
  color: #fff;
}

.time {
  width: 130px;
  border: 1px solid #666EE8;
  box-shadow: #666 0 0 2px; //四周设置阴影
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 13.5px;
}

.put-time {
  display: flex;
  justify-content: flex-end;
}

.move-up {
  position: relative;
  bottom: 22px;
}

.sn-time-line {
  .el-link.el-link--default:hover {
    color: #606266;
  }
}

.time-line-info {
  text-align: center;
  position: relative;
  top: 6px;
}
</style>