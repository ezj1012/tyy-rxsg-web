<template>
  <div
    class="rxsg-flicker-btn"
    :style="{ width: w + 'px', height: h + 'px', background: curBg }"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  ></div>
</template>
<script>
export default {
  name: "FlickerButton",
  components: {},
  props: {
    bg: {
      type: Object,
      default: () => {
        return {
          default: "",
          hover: "",
          active: "",
          flicker: "",
        };
      },
    },
    width: {
      type: String,
      default: "100",
    },
    height: {
      type: String,
      default: "100",
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      vStyle: {},
      hover: false,
      active: false,
      flicker: false,
      curBg: null,
      w: 100,
      h: 100,
    };
  },
  mounted: function () {
    this.w = this.width;
    this.h = this.height;
    this.refreshBG();
  },
  methods: {
    mouseOver: function () {
      this.hover = true;
      this.refreshBG();
    },
    mouseLeave: function () {
      // if(!this.active) {
      this.hover = false;
      this.active = false;
      // }

      this.refreshBG();
    },
    mouseDown: function () {
      this.active = true;
      this.refreshBG();
    },
    mouseUp: function () {
      this.active = false;
      this.refreshBG();
      if (this.click) {
        this.click();
      }
    },
    refreshBG() {
      if (this.flicker) {
        this.curBg = this.bg.flicker;
      } else {
        if (this.active) {
          this.curBg = this.bg.active;
        } else if (this.hover) {
          this.curBg = this.bg.hover;
        } else {
          this.curBg = this.bg.default;
        }
      }
    },
  },
};
</script>
<style lang="less">
.rxsg-btn {
  position: relative;
  user-select: none;
}
</style>