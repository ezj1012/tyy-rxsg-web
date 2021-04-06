<template>
  <div
    class="inner-message"
    :style="{
      width: width,
      top: top,
      left: left,
    }"
  >
    <slot></slot>
  </div>
</template>
<script >
export default {
  name: "InnerMessage",
  components: {},
  props: {
    width: {
      type: String,
      default: "200px",
    },
    top: {
      type: String,
      default: "30px",
    },
    left: {
      type: String,
      default: "30px",
    },
  },
  mounted: function () {
    this.w = this.width;
  },
};
</script > 
<style lang="less" >
.inner-message {
  padding: 2px 5px;
  background: #000;
  color: #fff;
  font-size: 12px;
  border: 1px solid #000;
  box-shadow: inset 0 0 1px 0px #fff;
  border-radius: 3px;
}
</style>