<template>
<sn-row-has-two-col :left="3" :right="21">
  <div slot="one-col">
    <el-button
        class="button"
        :class="{'button-click-style': index === buttonId}"
        @click="change(index)"
        plain
        type="primary"
        v-for="(item,index) in buttonCount" >
        <span>
          <slot :name="'buttonName' + index"/>
        </span>
    </el-button>
  </div>

  <div slot="two-col">
    <div v-for="(item,index) in contentCount"
         v-if="buttonId === index">
      <slot :name="'content' + index"/>
    </div>
  </div>
</sn-row-has-two-col>
</template>

<script>
export default {
  name: "SnShowBySideButton",

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
.el-button{
  width: 100px;
}

.button{
  margin-left: 1px;
  margin-bottom: 5px;
}
</style>