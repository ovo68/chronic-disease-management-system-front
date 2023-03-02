<template>
  <div>
    <sn-row-has-two-col :left="22" :right="2" class="to-flex">
      <div slot="one-col">
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
      <div slot="two-col">
        <slot name="otherButton"/>
      </div>
    </sn-row-has-two-col>

    <div class="margin-top-20">
      <slot name="notChange"/>
    </div>

    <div>
      <div v-for="(item,index) in contentCount"
           v-show="buttonId === index">
        <slot :name="'content' + index"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SnShowByButtonNoCard",

  data() {
    return {
      buttonId: 0,
    }
  },
  props: {
    buttonCount: {
      type: Number,
      default: 0
    },
    contentCount: {
      type: Number,
      default: 0
    },
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
      //向父组件发送当前点击的按钮的名字
      this.$emit('getCurrentClickButtonName', this.buttonNames[index])
    },
  },
}
</script>

<style scoped>
.button-click-style {
  background-color: #409EFF;
  color: #fff
}

.el-button {
  width: 100px;
}
</style>