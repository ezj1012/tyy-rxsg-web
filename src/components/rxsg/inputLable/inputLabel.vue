<template>
  <div
    class="rxsg-input-label"
    :style="style"
  >
    {{name}}
  </div>
</template>
<script>
// 热血三国的输入框不用考虑 修改绑定的相同的字段
export default {
  components: {},
  name: "InputLabel",
  props: {
    name: { type: String, default: "" },
    color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      style: { color: this.color },
    };
  },
  mounted: function () {},
  methods: {},
  directives: {},
};
</script>
<style lang="less">
.rxsg-input-label {
  background-color: transparent;
  border: 1px solid #423224;
  box-shadow: inset 0 0 1px 1px #725841;
  padding-left: 6px;
  user-select: none;
}
</style>
