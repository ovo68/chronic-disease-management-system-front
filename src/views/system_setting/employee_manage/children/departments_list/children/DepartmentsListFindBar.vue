<template>
  <div>
    <sn-row-has-two-col :left="8">
      <sn-search-input input-placeholder="科室名称" class="margin-right to-flex" slot="one-col"/>
    </sn-row-has-two-col>
  </div>
</template>

<script>

export default {
  name: "DepartmentsListFindBar",
}
</script>

<style scoped>

</style>