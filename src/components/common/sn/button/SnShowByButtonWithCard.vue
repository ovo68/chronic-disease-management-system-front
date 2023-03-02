<template>
  <sn-card-with-title>
    <div class="to-flex" slot="title">
      <el-button
          :class="{'button-click-style': index === buttonId}"
          @click="change(index)"
          plain
          type="primary"
          v-for="(item,index) in buttonCount">
        <span>
          <slot :name="'buttonName' + index"/>
        </span>
      </el-button>
    </div>
    <div slot="content">
      <div>
        <slot name="notChange"/>
      </div>
      <div v-for="(item,index) in contentCount"
           v-if="buttonId === index">
        <slot :name="'content' + index"/>
      </div>
    </div>
  </sn-card-with-title>

</template>

<script>
export default {
  name: "SnShowByButtonWithCard",

  data() {
    return {
      buttonId: 0,
    }
  },
  props: {
    //按钮数量
    buttonCount: {
      type: Number,
      default: 0
    },
    //按钮操控的内容
    contentCount: {
      type: Number,
      default: 0
    },
    //按钮的名字
    buttonNames: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    change(index) {
      this.buttonId = index
      this.$emit('getCurrentClickButtonName', this.buttonNames[index])
    }
  },
}
</script>

<style scoped>
.button-click-style {
  background-color: #409EFF;
  color: #fff
}
</style>