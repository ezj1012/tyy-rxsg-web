<template>
  <div class="rxsg-button" @click="xx">
    <div class="rxsg-button-main">
      <div class="rxsg-button-content">
        {{ content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RedButton",
  props: {
    content: {
      type: [String],
      default: "",
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted: function () {},
  methods: {
    xx: function (e) {
      this.click(e);
    },
  },
  watch: {},
};
</script>
<style lang="less">
.rxsg-button {
  width: 90px;
  height: 36px;
  position: relative;
  user-select: none;

  .rxsg-button-main {
    position: relative;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    .rxsg-button-content {
      color: #e6f678;
      line-height: 32px;
      font-size: 12px;
      width: 100%;
      height: 100%;
      position: absolute;
      background: url("../../../assets/rxsg/button/bnt-red.png") no-repeat;
    }
    .rxsg-button-content:hover {
      filter: brightness(150%);
    }
    .rxsg-button-content:active {
      // filter: brightness(150%);
      margin-top: 1px;
      margin-left: 1px;
    }
  }

  // border-top: 1px solid #735942;
  // border-left: 1px solid #735942;
  // border-right: 1px solid #6f685b;
  // border-bottom: 1px solid #6f685b;
}
</style>