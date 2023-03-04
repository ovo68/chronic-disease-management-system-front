<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-select
        @change="selectedChange"
        v-model="selectValue"
        multiple
        filterable
        allow-create
        default-first-option
        :placeholder="placeholder"
        style="width: 100%">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {

  data() {
    return {
      selectValue: ''
    }
  },
  methods:{
    selectedChange(){
      this.$emit('selectedChange', this.selectValue)
    }
  }
  ,

  watch: {
    toSelect(val) {
      this.selectValue = val
    }
  },

  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    toSelect: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}
</style>
