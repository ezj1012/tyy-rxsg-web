<template>
  <div class="rxsg-input">
    <input
      :type="type"
      ref="input"
      :value="curValue"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @input="handleInput"
      :maxlength="maxLength"
    />
  </div>
</template>
<script>
// 热血三国的输入框不用考虑 修改绑定的相同的字段
export default {
  components: {},
  name: "Input",
  props: {
    type: { type: String, default: "text" },
    value: { type: String, default: "" },
    maxLength: { type: [Number, String], default: 10 },
  },
  data() {
    return {
      curValue: this.value,
      isOnComposition: false,
    };
  },
  mounted: function () {},
  methods: {
    handleComposition(event) {
      if (event.type === "compositionstart") {
        this.isOnComposition = true;
      }
      if (event.type === "compositionend") {
        this.isOnComposition = false;
        this.handleInput(event);
      }
    },
    handleInput(event) {
      if (this.isOnComposition) return;

      let value = event.target.value;
      if (this.number && value !== "")
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setcurValue(value);
    },
    setcurValue(value) {
      if (value == this.curValue) {
        return;
      }
    },
  },
  directives: {},
};
</script>
<style lang="less">
.rxsg-input {
  background-color: transparent;
  border: 1px solid #423224;
  input {
    width: calc(100% - 7px);
    height: calc(100% - 1px);
    color: #e6f678;
    background-color: transparent;
    outline: 0;
    border: 0px;
    box-shadow: inset 0 0 1px 1px #725841;
    padding-left: 6px;
  }
}
</style>