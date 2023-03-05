<template>
  <div class="block">
    <span class="demonstration">
      <div class="title">
        <slot name="title"/>
      </div>
    </span>
    <el-cascader
        :disabled="isDisabled"
        v-model="value"
        :options="options"
        @change="handleChange" style="width: 100%"></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('selectChange', this.value)
    }
  },
  watch: {
    selectValue(val) {
      this.value = val
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selectValue: {
      type: Array
    },
    isDisabled: Boolean
  },
};
</script>

<style scoped>
.block {
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}
</style>
