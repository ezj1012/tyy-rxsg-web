<template>
  <div class="rxsg-card" :style="{ width: w, height: h }">
    <div class="rxsg-card-main" :style="{ backgroundColor: backgroundColor }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
    height: {
      type: [String, Number],
      default: "100%",
    },
    backgroundColor: {
      type: [String],
      default: "transparent",
    },
  },
  data() {
    return {
      w: 0,
      h: 0,
    };
  },
  mounted: function () {
    this.setW(this.width);
    this.setH(this.height);
  },
  methods: {
    setW: function (newVal) {
      console.log(typeof newVal === "number");
      if (typeof newVal === "number" || !newVal.endsWith("%")) {
        this.w = newVal - 2 + "px";
      } else {
        this.w = newVal;
      }
    },
    setH: function (newVal) {
      if (typeof newVal === "number" || !newVal.endsWith("%")) {
        this.h = newVal - 2 + "px";
      } else {
        this.h = newVal;
      }
    },
  },
  watch: {
    width(newVal) {
      this.setW(newVal);
    },
    height(newVal) {
      this.setH(newVal);
    },
  },
};
</script>
<style lang="less">
.rxsg-card {
  border-top: 1px solid #735942;
  border-left: 1px solid #735942;
  border-right: 1px solid #6f685b;
  border-bottom: 1px solid #6f685b;
  .rxsg-card-main {
    border-top: 1px solid #21100c;
    border-left: 1px solid #2c1f11;
    border-right: 1px solid #302217;
    border-bottom: 1px solid #3c3023;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
}
</style>