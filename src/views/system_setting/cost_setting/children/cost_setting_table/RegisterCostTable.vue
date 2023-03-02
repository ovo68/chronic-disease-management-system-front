<template >
  <sn-search-input input-placeholder="费用名称"
                   slot="two-col" class="move-down-little"
                   style="width: 300px"/>
</template>

<script>
export default {
  name: "RegisterCostTable",
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.move-down-little{
  position: relative;
  top: 3px;
}
</style>