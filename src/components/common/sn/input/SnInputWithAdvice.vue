<template>
  <div>
    <div class="sub-title title">
      <slot name="title"/>
    </div>
    <el-autocomplete
        :disabled="isDisabled"
        @change="inputChange"
        class="inline-input"
        v-model="value"
        :fetch-suggestions="querySearch"
        @select="handleSelect"
        style="width: 100%">

      <template slot-scope="scope">
        <sn-row-has-two-col :left="5" :right="19">
          <el-image :src="imgSrc" slot="one-col"/>
          <div slot="two-col">
            <div class="to-flex">
              <sn-text
                  :text="scope.item.name"
                  :move-down="5"
                  font-weight="bold"
                  :font-size="16"
                  class="margin-right-20"/>
              <sn-text
                  :move-down="5"
                  :text="scope.item.gender.description"
                  class="margin-right-20"
                  :font-size="13"/>
              <sn-text
                  :move-down="5"
                  :number="scope.item.age"
                  class="margin-right"
                  :font-size="13"/>
              <sn-text
                  :move-down="5"
                  text="岁"
                  :font-size="13"/>
            </div>
            <sn-text :text="scope.item.phoneNumber" :font-size="13" :move-down="-2"/>
          </div>
        </sn-row-has-two-col>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
export default {

  data() {
    return {
      imgSrc: require('@/assets/image/user/cyq.jpg'),
      value: ''
    }
  },

  watch: {
    inputValue(val) {
      this.value = val
    }
  },

  props: {
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
    inputValue: {
      type: [String, Number],
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    querySearch(queryString, cb) {
      cb(this.selectData)
    },
    handleSelect(item) {
      this.$emit('handleSelect', item)
    },

    inputChange() {
      this.$emit('inputChange', this.value)
    }
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.el-image {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: relative;
  top: 15px;
}

</style>