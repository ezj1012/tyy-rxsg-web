<template>
  <div
    class="simple-message"
    :style="{
      width: width,
      top: top,
      left: left,
    }"
  >
    <div v-if="message !== undefined && message !== ''">
      {{ message }}
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script >
export default {
  name: "SimpleMessage",
  components: {},
  props: {
    message: {
      type: String,
      default: "",
    },
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
.simple-message {
  padding: 2px 5px;
  background: #000;
  color: #fff;
  font-size: 12px;
  border: 1px solid #000;
  box-shadow: inset 0 0 1px 0px #fff;
  border-radius: 3px;
}
</style>