<template>
  <div
    class="rxsg-btn-radio"
    :style="{ background: curBg }"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  ></div>
</template>
<script>
import sd from "../../../assets/rxsg/button/radio_selected.png";
import unsd from "../../../assets/rxsg/button/radio_unselected.png";
import unsdo from "../../../assets/rxsg/button/radio_unselected_over.png";

export default {
  name: "Radio",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    sigleValue: { type: String, default: "" },
    sigle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: false,
      curBg: unsd,
      hover: false,
      defaultBg: "url(" + unsd + ") ",
      sdBg: "url(" + sd + ") ",
      hoverBg: "url(" + unsdo + ") ",
    };
  },
  mounted: function () {
    this.selected = this.value;
    this.setBg();
  },
  methods: {
    doSelected: function () {
      if (this.sigle) {
        this.selected = false;
        this.$emit("input", this.sigleValue);
        this.setBg();
      } else {
        this.selected = !this.selected;
        this.$emit("input", this.selected);
        this.setBg();
      }
    },
    mouseDown: function () {
      this.curBg = this.sdBg;
    },
    mouseUp: function () {
      this.doSelected();
    },
    mouseLeave: function () {
      this.hover = false;
      this.setBg();
    },
    mouseOver: function () {
      this.hover = true;
      this.setBg();
    },
    setBg: function () {
      if (this.sigle) {
        if (this.value == this.sigleValue) {
          this.curBg = this.hoverBg;
        } else {
          this.curBg = this.defaultBg;
        }
      } else {
        if (this.selected) {
          this.curBg = this.sdBg;
        } else if (this.hover) {
          this.curBg = this.hoverBg;
        } else {
          this.curBg = this.defaultBg;
        }
      }
    },
  },
  watch: {
    value: function () {
      this.setBg();
    },
  },
};
</script>
<style lang="less">
.rxsg-btn-radio {
  width: 25px;
  height: 24px;
  user-select: none;
}
</style>