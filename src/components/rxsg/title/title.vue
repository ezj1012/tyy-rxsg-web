<template>
  <div
    class="rxsg-title"
    :style="style"
  >{{ title }}</div>
</template>
<script>
import titleBG from "../../../assets/rxsg/common/title.png";
export default {
  name: "Title",
  components: {},
  props: {
    msg: {
      type: String,
      default: "阿斯達薩達群無",
    },
  },
  data() {
    return {
      title: "",
      style: {
        background: "url(" + titleBG + ")",
      },
    };
  },
  mounted: function () {
    this.title = this.msg;
  },
};
</script>
<style lang="less">
.rxsg-title {
  position: absolute;
  user-select: none;
  width: 250px;
  height: 35px;
  color: yellow;
  font-size: 15px;
  text-align: center;
  line-height: 28px;
  left: calc(50% - 125px);
  z-index: 500;
}
</style>