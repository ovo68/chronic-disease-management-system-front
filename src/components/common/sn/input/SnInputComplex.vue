<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-input
        :disabled="isDisabled"
        @change="inputChange"
        placeholder="请输入内容"
        v-model="value"
        class="input-with-select" style="width: 100%">
      <el-select
          @change="selectChange"
          v-model="selectValue"
          slot="append"
          placeholder="请选择"
          style="width: 70px">
        <el-option
            :label="item.label"
            :value="item.value"
            v-for="item in chooseItem"></el-option>
      </el-select>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SnInputComplex',

  data() {
    return {
      value: '',
      selectValue: 0
    }
  },

  computed: {
    getNowSelect() {
      return this.myUtils.getSelectOption(this.selectValue, this.chooseItem)
    }
  },

  watch: {
    inputValue(val) {
      this.value = val
    },
    toSelect(val) {
      this.selectValue = val
    }
  },

  methods: {
    inputChange() {
      this.$emit('inputChange', this.value)
    },
    selectChange() {
      this.$emit('selectChange', this.getNowSelect)
    }
  },
  props: {
    toSelect: {
      type: Number,
      default: 0
    },
    chooseItem: {
      type: Array,
      default() {
        return []
      }
    },
    inputValue: {
      type: [Number, String]
    },
    isDisabled: Boolean
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}
</style>
