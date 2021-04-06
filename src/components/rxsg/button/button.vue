<template>
  <div
    class="rxsg-btn"
    :style="{ width: w + 'px', height: h + 'px', background: curBg }"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  ></div>
</template>
<script>
export default {
  name: "RButton",
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
          disabled: "",
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
    flicker: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      vStyle: {},
      hover: false,
      active: false,
      curFlicker: this.flicker,
      curDisabled: this.disabled,
      curBg: null,
      w: 100,
      h: 100,
    };
  },
  mounted: function () {
    this.w = this.width;
    this.h = this.height;
    this.refreshBG();
    // this.setDefaultBG();
    // this.vStyle = { backgroundColor: "red" };
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
      if (this.curDisabled) {
          this.curBg = this.bg.disabled;
      } else if (this.curFlicker) {
        this.curBg = this.bg.flicker;
      } else if (this.active) {
        this.curBg = this.bg.active;
      } else if (this.hover) {
        this.curBg = this.bg.hover;
      } else {
        this.curBg = this.bg.default;
      }
    },
  },
  watch: {
    flicker: function (newVal) {
      this.curFlicker = newVal;
    },
    disabled: function (newVal) {
      this.curDisabled = newVal;
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