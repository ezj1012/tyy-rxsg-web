<template>
  <div class="rxsg-select" v-clickOut="blurSelect">
    <div class="show-value" @click="showClike">
      <span>
        {{ showIdx >= 0 ? list[showIdx].value : "" }}
      </span>
    </div>
    <ul v-show="showOptions" :style="opsStyle">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="[showIdx == index ? 'selected' : '']"
        @click.stop="selectIdx(index)"
      >
        <span> {{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RSelect",
  props: {
    value: { type: Number, default: 0 },
    list: {
      type: Array,
      default: () => [],
    },
    maxShow: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      showIdx: -1,
      showOptions: true,
      opsStyle: {},
    };
  },
  mounted: function () {
    if (this.list.length > 0) { 
      this.selectIdx(this.value);
      this.setOptionsHeight();
    }
  },
  methods: {
    showClike: function () {
      this.showOptions = !this.showOptions;
      return false;
    },
    blurSelect: function () {
      this.showOptions = false;
    },
    selectIdx: function (idx) {
      if (idx != this.showIdx) {
        this.showIdx = idx;
        //发送input事件用于修改v-model绑定的值
        this.$emit("input", this.showIdx);
      }
      this.showOptions = false;
    },
    setOptionsHeight: function () {
      if (this.maxShow > 0) {
        let n =
          this.maxShow > this.list.length ? this.list.length : this.maxShow;
        let t = { height: n * 24 + "px" };
        this.opsStyle = t;
      } else {
        this.opsStyle = {};
      }
    },
  },
  watch: {
    list: function () {
      this.setOptionsHeight();
    },
    value: function (newVal) {
      if (newVal != this.showIdx) {
        this.showIdx = newVal;
        this.showOptions = false;
      }
    },
  },
  directives: {
    clickOut: {
      bind: function (el, binding) {
        function handler(e) {
          if (el.contains(e.target)) return false;
          if (binding.expression) {
            binding.value();
          }
        }
        el.handler = handler;
        document.addEventListener("click", el.handler);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.handler);
      },
    },
  },
};
</script>
<style lang="less">
.rxsg-select {
  user-select: none;
  position: relative;
  background: transparent;
  min-width: 80px;
  .show-value {
    height: 26px;
    width: calc(100% - 26px);
    text-align: center;
    text-align-last: center;
    overflow: hidden;
    padding-right: 26px;
    line-height: 26px;
    background: url("../../../assets/form/combobox/combobox-border-left.png")
        no-repeat 0 0,
      url("../../../assets/form/combobox/combobox-border-right-up.png")
        no-repeat scroll right center,
      url("../../../assets/form/combobox/combobox-border-centre.png") repeat-x 0
        0;

    &:active {
      background: url("../../../assets/form/combobox/combobox-border-left.png")
          no-repeat 0 0,
        url("../../../assets/form/combobox/combobox-border-right-down.png")
          no-repeat scroll right center,
        url("../../../assets/form/combobox/combobox-border-centre.png") repeat-x
          0 0;
    }
    span {
      margin: 0 3px 0 6px;
      overflow: hidden;
      display: block;
    }
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    width: calc(100% - 28px);
    position: absolute;
    z-index: 99999;
    background-color: #1b241e;
    border: 2px solid #735942;
    overflow-y: scroll;
    // box-shadow: inset 0 0 1px 2px #735942;
    li {
      height: 24px;
      line-height: 24px;
      span {
        margin: 0 1px;
        overflow: hidden;
        display: block;
      }
    }

    li:hover {
      background-color: #35483b;
    }
    .selected {
      background-color: #1d3e28;
    }
  }
}
</style>