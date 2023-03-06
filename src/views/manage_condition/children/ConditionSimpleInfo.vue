<template>
  <el-card class="box-card" shadow="hover">
    <div class="info-title">
      <span>{{ cardTitle }}</span>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="17">
          <div class="describe">{{ describe }}</div>
<!--          <div class="up-and-down-div">-->
<!--            <img class="up-and-down" :src="downSvg[infoIcon-1]" v-if="!isUp">-->
<!--            <img class="up-and-down" :src="upSvg[infoIcon-1]" v-if="isUp">-->
<!--            <span>{{ aboutCondition }}</span>-->
<!--          </div>-->
        </el-col>
        <el-col :span="7">
          <sn-image-in-circle :circle-style="manageConditionIconBackgroundColor" :img-src="manageCondition[infoIcon-1]"/>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name:'ConditionSimpleInfo',
  data() {
    return {
      manageCondition: [
        require("@/assets/image/home/manage_condition/managecondition1.png"),
        require("@/assets/image/home/manage_condition/managecondition2.png"),
        require("@/assets/image/home/manage_condition/managecondition3.png"),
        require("@/assets/image/home/manage_condition/managecondition4.png"),
      ],
      downSvg: [
        require("@/assets/image/home/manage_condition/down1.svg"),
        require("@/assets/image/home/manage_condition/down2.svg"),
        require("@/assets/image/home/manage_condition/down3.svg"),
        require("@/assets/image/home/manage_condition/down4.svg"),
      ],
      upSvg: [
        require("@/assets/image/home/manage_condition/up1.svg"),
        require("@/assets/image/home/manage_condition/up2.svg"),
        require("@/assets/image/home/manage_condition/up3.svg"),
        require("@/assets/image/home/manage_condition/up4.svg"),
      ],
    }
  },
  props: {
    cardTitle: {
      type: [Number,String],
      default: 56
    },
    describe: {
      type: String,
      default: "今日挂号人次"
    },
    isUp: {
      type: Boolean,
      default: true
    },
    aboutCondition: {
      type: String,
      default: "较昨日上涨20%"
    },
    infoIcon: {
      type: Number,
      default: 1
    }
  },
  computed: {
    manageConditionIconBackgroundColor() {
      if (this.infoIcon === 1) {
        return {
          'background-color': '#F0F1FD'
        }
      } else if (this.infoIcon === 2) {
        return {
          'background-color': '#FFF0F0'
        }
      } else if (this.infoIcon === 3) {
        return {
          'background-color': '#EAFAF5'
        }
      } else if (this.infoIcon === 4) {
        return {
          'background-color': '#FFFAE9'
        }
      }
    }
  },
}
</script>

<style scoped lang="less">
.box-card {
  height: 170px;
  margin-bottom: 20px;
}

.info-title {
  font-size: 40px;
  font-weight: bolder;
  padding-left: 20px;
  margin-bottom: 20px;
}

.describe {
  color: #666;
  padding-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.up-and-down-div {
  padding-left: 20px;
}

.up-and-down {
  width: 20px/1.25;
  position: relative;
  top: 2px;
  margin-right: 5px;
}

</style>
