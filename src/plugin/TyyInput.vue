<template>
  <div style="width: 300px; height: 50px; background-color: red">
    <input id="aaaa" :value="val" />
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    val: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
</style>