<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>
    <el-select
        @change="chooseItem"
        v-model="optionValue"
        :disabled="disabledSelect"
        :placeholder="selectPlaceholder"
        :style="selectStyle">
      <el-option
          v-for="item in selectData"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SnSelect',
  data() {
    return {
      optionValue: this.toSelect
    }
  },

  watch:{
    toSelect(val){
      this.optionValue = val
    }
  },

  computed: {
    getNowSelect() {
      return this.myUtils.getSelectOption(this.optionValue, this.selectData)
    }
  },

  methods: {
    chooseItem() {
      this.$emit('selectChange', this.getNowSelect)
    }
  },

  props: {
    //是否禁用
    disabledSelect: {
      type: Boolean,
      default: false
    },
    selectStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },
    toSelect: {
      type: Number,
      default: 0
    },
    selectPlaceholder: {
      type: String,
      default: '请选择'
    },
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}
</style>