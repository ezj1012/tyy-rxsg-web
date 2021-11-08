<template>
  <div
    :class="{ 'rxsg-card' : span == 2 ,'rxsg-card-1': span == 1 }"
    :style="{ width: w, height: h }"
  >
    <div
      class="rxsg-card-main"
      :style="{ backgroundColor: backgroundColor }"
    >
      <div class="rxsg-card-title">
        <Title :msg="title" />
      </div>

      <slot></slot>
    </div>
  </div>
</template>
<script>
import Title from "@/components/rxsg/title";
export default {
  name: "Card2",
  components: { Title },
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
      type: [Number],
      default: 2,
    },
    title: {
      type: String,
      default: "",
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
      if (typeof newVal === "number") {
        this.w = newVal - span + "px";
      } else if (newVal == null) {
        this.w = `calc(100% - ${span}px)`;
      } else {
        this.w = newVal;
      }
    },
    setH: function (newVal) {
      let span = this.span * 2;
      if (typeof newVal === "number") {
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
  position: relative;
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
    .rxsg-card-title {
      position: relative;
      padding-top: 10px;
      width: 100%;
      height: 45px;
    }
  }
}

.rxsg-card-1 {
  position: relative;
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
    .rxsg-card-title {
      position: relative;
      padding-top: 10px;
      width: 100%;
      height: 45px;
    }
  }
}
</style>