<template>
  <div>
    <span :style="setStyle"> {{ text }} <i>*</i></span>
    <span :style="otherStyle">
      <slot name="other"/>
    </span>
  </div>
</template>

<script>
export default {
  name: "MustText",
  computed: {
    setStyle() {
      return {
        'font-size': this.fontSize + 'px',
        'color': this.fontColor,
        'font-weight': this.fontWeight,
        'position': 'relative',
        'top': this.moveDown + 'px',
        'bottom': this.moveUp + 'px',
        'left': this.moveRight + 'px',
        'right': this.moveLeft + 'px',
      }
    },
  },
  props: {

    moveDown: {
      type: Number,
      default: 0
    },
    moveUp: {
      type: Number,
      default: 0
    },
    moveRight: {
      type: Number,
      default: 0
    },
    moveLeft: {
      type: Number,
      default: 0
    },

    fontSize: {
      type: Number,
      default: 14
    },
    fontWeight: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    otherStyle: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>
span {
  font-size: 14px;
  margin-right: 2px;
}

i {
  color: pink;
  font-size: 18px;
  position: relative;
  top: 2px;
}
</style>