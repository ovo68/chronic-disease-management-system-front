<template>
  <div class="sn-input">
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input
        :rows="textareaHeight"
        :type="inputType"
        @change="inputChange"
        v-model="inputValue"
        :style="inputStyle"
        :placeholder="inputPlaceholder"
        :disabled="isDisabled">
      <div slot="suffix">
        <slot name="inputSuffix"/>
      </div>
    </el-input>
    <div class="input-after">
      <slot name="input-after"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnInput',

  data() {
    return {
      inputValue: this.inputValueFromParent
    }
  },

  watch: {
    inputValueFromParent(val) {
      this.inputValue = val
    },
  },

  props: {
    //是否禁用
    isDisabled: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '40px'
    },
    inputStyle: {
      type: Object,
      default() {
        return {
          'width': this.width,
          'height': this.height
        }
      }
    },
    inputValueFromParent: {
      type: [String, Number],
    },
    inputType: {
      type: String,
      default: ''
    },
    textareaHeight: Number
  },

  methods: {
    inputChange() {
      this.$emit('inputChange', this.inputValue)
    }
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.sn-input {
  margin-right: 5px;
}

.input-after {
  margin-right: 5px;
}

/deep/ .el-input__inner {
  height: 100%;
}
</style>