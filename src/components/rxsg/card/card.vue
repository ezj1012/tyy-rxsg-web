<template>
  <div
    :class="{ 'rxsg-card' : span == 2 ,'rxsg-card-1': span == 1 }"
    :style="{ width: w, height: h }"
  >
    <div
      class="rxsg-card-main"
      :style="{ backgroundColor: backgroundColor }"
    >
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
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    backgroundColor: {
      type: [String],
      default: "transparent",
    },
    span: {
      type: [String, Number],
      default: 2,
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
      let span = this.span * 2;
      if (!isNaN(newVal)) {
        this.w = newVal - span + "px";
        console.log(newVal, this.w);
      } else if (newVal == null) {
        this.w = `calc(100% - ${span}px)`;
      } else {
        this.w = newVal;
      }
    },
    setH: function (newVal) {
      let span = this.span * 2;
      if (!isNaN(newVal)) {
        this.h = newVal - span + "px";
      } else if (newVal == null) {
        this.h = `calc(100% - ${span}px)`;
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
  border-top: 2px solid #735942;
  border-left: 2px solid #735942;
  border-right: 2px solid #6f685b;
  border-bottom: 2px solid #6f685b;
  .rxsg-card-main {
    border-top: 2px solid #21100c;
    border-left: 2px solid #2c1f11;
    border-right: 2px solid #302217;
    border-bottom: 2px solid #3c3023;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }
}

.rxsg-card-1 {
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