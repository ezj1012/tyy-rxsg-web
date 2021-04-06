<template>
  <div>
    <div class="group">
      <input
        type="text"
        ref="input"
        :placeholder="placeholder"
        :value="currentValue"
        :disabled="disabled"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import { findComponentUpward } from "../../utils/assist";
import Emitter from "../../mixins/emitter";

export default {
  name: "Input",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    search: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentValue: this.value,
      isOnComposition: false,
    };
  },
  methods: {
    handleEnter(event) {
      this.$emit("on-enter", event);
      if (this.search) this.$emit("on-search", this.currentValue);
    },
    handleKeyup(event) {
      this.$emit("on-keyup", event);
    },
    handleKeydown(event) {
      this.$emit("on-keydown", event);
    },
    handleKeypress(event) {
      this.$emit("on-keypress", event);
    },
    handleIconClick(event) {
      this.$emit("on-click", event);
    },
    handleFocus(event) {
      this.$emit("on-focus", event);
    },
    handleBlur(event) {
      this.$emit("on-blur", event);
      if (
        !findComponentUpward(this, [
          "DatePicker",
          "TimePicker",
          "Cascader",
          "Search",
        ])
      ) {
        // this.dispatch("FormItem", "on-form-blur", this.currentValue);
      }
    },
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
      console.log(event);
      if (this.isOnComposition) return;

      let value = event.target.value;
      if (this.number && value !== "")
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("on-change", event);
    },
    handleChange(event) {
      this.$emit("on-input-change", event);
    },
    setCurrentValue(value) {
      if (value == this.currentValue) {
        return;
      }
      this.$nextTick(() => {
        //this.resizeTextarea();
      });
      this.currentValue = value;
      if (
        !findComponentUpward(this, [
          "DatePicker",
          "TimePicker",
          "Cascader",
          "Search",
        ])
      ) {
        // this.dispatch("FormItem", "on-form-change", value);
      }
    },
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    },
  },
};
</script>
<style lang="less">
.group {
  user-select: none;
  input {
    border: 0px;
    outline: none;
    user-select: none;
    padding: 3px 3px 4px 15px;
    margin: 3px 5px;
    border-left: 10px solid transparent;
    font-size: 16px;

    &:focus {
      border-left: 10px solid #6f6f6f;
    }
  }
}
</style>