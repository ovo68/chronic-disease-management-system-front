<template>
  <div class="demo-input-suffix">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input
        @blur="inputContentChange"
        @keyup.enter.native="inputContentChange"
        :placeholder="inputPlaceholder"
        suffix-icon="el-icon-search"
        v-model="value"
        :style="inputStyle"
        class="input"
        :type="inputType">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SnSearchBox",
  data() {
    return {
      value: '',
    }
  },

  watch: {
    inputValueFromParent(val) {
      this.value = val
    }
  },

  methods: {
    //内容发生变化
    inputContentChange() {
      this.$emit("inputContentChange", this.value)
    }
  },

  props: {
    inputValueFromParent: {
      type: [String, Number]
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    inputStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    inputType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  font-size: 12px;
}
</style>