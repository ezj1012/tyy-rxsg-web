<template>
  <div
    class="rxsg-outercity-terrain"
    :style="{
      background: curBg + ' bottom',
      left: left + 'px',
      top: top + 'px',
    }"
  >
    <SimpleMessage
      class="terrain-msg"
      v-show="hover && overing"
      width="200px"
      :top="msgTop + 'px'"
      :left="msgLeft + 'px'"
      >啊啊啊</SimpleMessage
    >
  </div>
</template>
<script>
import SimpleMessage from "@/components/rxsg/message/simpleMessage";
export default {
  name: "Terrain",
  components: { SimpleMessage },
  props: {
    info: {
      default: {
        bg: "",
        msg: "",
      },
    },
    imgData: {
      type: ImageData,
      default: () => {},
    },
    left: {
      type: Number,
      default: 0,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      curBg: this.info.bg,
      hover: false,
      //像素级hover定制
      overing: false,
      msgTop: 0,
      msgLeft: 0,
    };
  },
  mounted: function () {},
  methods: {
    mouseMove: function (e) {
      if (!this.hover) {
        this.hover = true;
      }
      // if(this.hoverMsg)
      let box = this.$el.getBoundingClientRect();
      let x = e.x - box.x;
      let y = e.y - box.y;
      console.log(this.imgData);
      console.log(box);
      x = Math.floor(x) < x ? Math.floor(x) + 1 : Math.floor(x);
      y = Math.floor(y) < y ? Math.floor(y) + 1 : Math.floor(y);
      this.msgTop = y + 30;
      this.msgLeft = x + 30;

      let idx = (y + 20) * this.imgData.width * 4 + x * 4;
      if (this.imgData.data[idx + 3] > 0) {
        if (!this.overing) {
          this.overing = true;
        }
      } else if (this.overing) {
        this.overing = false;
      }
    },
    mouseLeave: function () {
      this.hover = false;
    },
  },
  computed: {},
  directives: {},
};
</script>
<style lang="less">
.rxsg-outercity-terrain {
  width: 107px;
  height: 55px;
  background-position: bottom;
  position: relative;
  user-select: none;
  .terrain-msg {
    position: absolute;
    z-index: 300;
  }
}
</style>