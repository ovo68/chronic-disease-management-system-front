<template>
  <div class="block">
    <div class="demonstration">
      <slot name="title"/>
    </div>
    <el-date-picker
        :disabled="isDisabled"
        @change="dateChange"
        v-model="date"
        type="date"
        placeholder="选择时间"
        :style="setStyle">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'SnDatePicker',
  data() {
    return {
      date: ''
    }
  },
  methods: {
    dateChange() {
      this.$emit('dateChange', this.myUtils.dateFormat(this.date))
    }
  },
  watch: {
    dateFromParent(val) {
      this.date = val
    }
  },
  props: {
    setStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },
    dateFromParent: {
      type: [Date, String],
    },
    isDisabled: Boolean
  },
}
</script>

<style scoped>
.demonstration {
  margin-bottom: 10px;
}
</style>