<template>
  <div
    class="rxsg-btn"
    :style="{ width: w + 'px', height: h + 'px', background: curBg }"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <SimpleMessage
      class="rxsg-btn-sm"
      v-show="showMsg && hover"
      :message="message"
      :width="msgW"
      :top="msgTop"
      :left="msgLeft"
    ></SimpleMessage>
  </div>
</template>
<script>
import SimpleMessage from "../message/simpleMessage";

export default {
  name: "RadioButton",
  components: { SimpleMessage },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    id: {
      type: [String, Number],
      default: "",
    },
    bg: {
      type: Object,
      default: () => {
        return {
          default: "",
          active: "",
          hover: "",
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
    clickBefore: {
      type: Function,
      default: () => {},
    },
    message: {
      type: String,
      default: "",
    },
    holdActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      vStyle: {},
      msgStyle: {},
      hover: false,
      active: this.value,
      showMsg: false,
      showHoverBg: false,
      msgW: "100px",
      msgTop: "20px",
      msgLeft: "20px",
      curBg: null,
      w: 100,
      h: 100,
    };
  },
  mounted: function () {
    this.w = this.width;
    this.h = this.height;
    this.msgW = this.message.length * 12 + "px";
    this.msgTop = Number(this.h) + 10 + "px";
    this.msgLeft = this.w + "px";

    if (this.message) {
      this.showMsg = true;
    }
    if (this.bg.hover && this.bg.hover !== "") {
      this.showHoverBg = true;
    }
    this.refreshBG();
  },
  methods: {
    mouseOver: function () {
      this.hover = true;
      this.refreshBG();
    },
    mouseLeave: function () {
      this.hover = false;
      this.refreshBG();
    },
    mouseDown: function () {},
    mouseUp: function (e) {
      if (this.holdActive && this.active) {
        return;
      }

      let br = this.clickBefore(e, this.id);
      if (br !== undefined && br === false) {
        return;
      }
      this.active = !this.active;
      this.refreshBG();
      this.$emit("input", this.active);
      if (this.click) {
        this.click(e, this.id);
      }
    },
    refreshBG() {
      if (this.active) {
        this.curBg = this.bg.active;
      } else {
        if (this.hover && this.showHoverBg) {
          this.curBg = this.bg.hover;
        } else {
          this.curBg = this.bg.default;
        }
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
    value: function (newVal) {
      this.active = newVal;
      this.refreshBG();
    },
  },
};
</script>
<style lang="less">
.rxsg-btn {
  position: relative;
  user-select: none;
  .rxsg-btn-sm {
    position: absolute;
  }
}
</style>