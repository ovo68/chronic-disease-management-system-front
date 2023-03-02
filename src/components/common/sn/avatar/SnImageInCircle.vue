<template>
  <div class="circle" :style="circleStyle">
    <img class="img-in-circle" :src="imgSrc">
  </div>
</template>

<script>
export default {
  name: "SnImageInCircle",
  props: {
    circleStyle: {
      type: Object,
      default() {
        return{

        }
      }
    },
    imgSrc: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped lang="less">
.circle {
  text-align: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: relative;
  top: -40px;
  .img-in-circle{
    position: relative;
    top: 18px;
  }
}
</style>