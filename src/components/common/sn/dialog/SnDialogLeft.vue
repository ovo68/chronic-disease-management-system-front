<template>
  <div>
    <div v-if="showDialogLeft" class="dialog-left-content" @mouseleave="toHide">
      <div v-for="(item,index) in contentItemCount">
        <slot :name="'itemName' + index"/>
      </div>
    </div>
    <div>
      <el-link
          @mouseleave="toHide"
          @click="toShowDialogLeft"
          type="primary"
          :underline="false">
        <slot name="title"/>
      </el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnDialogLeft",
  data() {
    return {
      showDialogLeft: false
    }
  },
  methods: {
    toShowDialogLeft() {
      this.showDialogLeft = !this.showDialogLeft
    },
    toHide(){
      this.showDialogLeft = false
    }
  },
  props: {
    contentItemCount: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>
.dialog-left-content {
  position: absolute;
  right: 77px;
  top: 13px;
  width: 320px;
  display: flex;
  border: 1px solid #409EFF;
  justify-content: center;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px 5px;
  box-shadow: #409EFF 0 0 5px;
}
</style>