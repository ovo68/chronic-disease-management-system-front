<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="6" >
    <sn-search-input input-placeholder="费用名称" slot="one-col" class="move-down-little">
      <sn-text text="费用名称" slot="title"  />
    </sn-search-input>

    <sn-search-input input-placeholder="金额" slot="three-col" class="move-down-little">
      <sn-text text="金额" slot="title"  />
    </sn-search-input>
    <sn-search-input input-placeholder="0.00" slot="four-col" class="move-down-little">
      <sn-text text="成本" slot="title"  />
    </sn-search-input>

  </sn-row-has-four-col>

</template>

<script>
import SnSearchBox from "@/components/common/sn/input/SnSearchInput";
export default {
  name: "RegisterInput",
  components: {SnSearchBox},
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>