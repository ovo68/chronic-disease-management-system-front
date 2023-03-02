<template>
  <div>
    <span :style="setStyle" v-if="text">
      {{ text }}
    </span>
    <span :style="setStyle" v-else>
      {{ number }}
    </span>
    <span>
      <slot name="other"/>
    </span>
  </div>
</template>

<script>
export default {

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

    text: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 14
    },
    fontWeight: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    },
    fontColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>