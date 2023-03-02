<!-- 穿梭框 -->
<template>
  <div style="text-align: center">

    <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value"
        filterable
        :render-content="renderFunc"
        :titles="[title, '处方']"
        :button-texts="['','添加药品']"
        :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}'
           }"
        @change="handleChange"
        :data="data">
      <sn-select slot="left-footer" :select-data="selectData"></sn-select>
    </el-transfer>
  </div>
</template>


<script>
import SnSelect from "@/components/common/sn/select/SnSelect";

export default {

  props: {
    title: {
      type: String,
      default: '药品'
    },
    selectData: {
      type: Array,
      default() {
        return [
          {
            value: 1,
            label: '全部分类'
          },
          {
            value: 2,
            label: '常用药品'
          },
          {
            value: 3,
            label: '西药'
          },
          {
            value: 4,
            label: '感冒药'
          },
          {
            value: 5,
            label: '材料'
          },
        ]
      }
    },

  },

  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: '备选项 ${i}',
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1],
      value4: [1],
      renderFunc(h, option) {
        return <span>{option.key} - {option.label}</span>;
      }
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    }
  },
  components: {
    SnSelect
  }
};
</script>

<style scoped>

</style>