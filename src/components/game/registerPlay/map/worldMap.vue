<template>
  <div
    class="world-map"
    :style="{ background: 'url(' + sanguoMap + ')' }"
    @mousemove.prevent="mouseMove"
    @click.stop="doSelect"
  >
    <div
      class="world-map-item"
      v-for="(item, idx) in imageList"
      :key="idx"
      :style="{
        top: item.top + 'px',
        left: item.left + 'px',
        opacity: item.opacity,
      }"
    >
      <Sprite :img="item.url" :ref="'sprite' + idx"></Sprite>
    </div>
  </div>
</template>
<script>
import sanguo_map from "@/assets/rxsg/map/sanguo_map.png";
import bingzhou from "@/assets/rxsg/map/bingzhou.png";
import jiaozhou from "@/assets/rxsg/map/jiaozhou.png";
import jingzhou from "@/assets/rxsg/map/jingzhou.png";
import jizhou from "@/assets/rxsg/map/jizhou.png";
import liangzhou from "@/assets/rxsg/map/liangzhou.png";
import qingzhou from "@/assets/rxsg/map/qingzhou.png";
import silv from "@/assets/rxsg/map/silv.png";
import xuzhou from "@/assets/rxsg/map/xuzhou.png";
import yangzhou from "@/assets/rxsg/map/yangzhou.png";
import yizhou from "@/assets/rxsg/map/yizhou.png";
import youzhou from "@/assets/rxsg/map/youzhou.png";
import yunzhou from "@/assets/rxsg/map/yunzhou.png";
import yuzhou from "@/assets/rxsg/map/yuzhou.png";
import Sprite from "../../../rxsg/sprite";

export default {
  name: "RegisterWorldMap",
  components: { Sprite },
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      sanguoMap: sanguo_map,
      imageList: [
        {
          name: "silv",
          url: silv,
          id: 1,
          left: 203,
          top: 153,
          width: 179,
          height: 93,
          opacity: 0,
        },
        {
          name: "jizhou",
          url: jizhou,
          id: 2,
          left: 356,
          top: 84,
          width: 102,
          height: 105,
          opacity: 0,
        },
        {
          name: "yuzhou",
          url: yuzhou,
          id: 3,
          left: 327,
          top: 185,
          width: 123,
          height: 101,
          opacity: 0,
        },
        {
          name: "yunzhou",
          url: yunzhou,
          id: 4,
          left: 369,
          top: 149,
          width: 96,
          height: 92,
          opacity: 0,
        },
        {
          name: "xuzhou",
          url: xuzhou,
          id: 5,
          left: 416,
          top: 178,
          width: 118,
          height: 96,
          opacity: 0,
        },
        {
          name: "qingzhou",
          url: qingzhou,
          id: 6,
          left: 423,
          top: 116,
          width: 119,
          height: 81,
          opacity: 0,
        },
        {
          name: "jingzhou",
          url: jingzhou,
          id: 7,
          left: 248,
          top: 229,
          width: 152,
          height: 172,
          opacity: 0,
        },
        {
          name: "yangzhou",
          url: yangzhou,
          id: 8,
          left: 368,
          top: 233,
          width: 204,
          height: 175,
          opacity: 0,
        },
        {
          name: "yizhou",
          url: yizhou,
          id: 9,
          left: 33,
          top: 214,
          width: 270,
          height: 204,
          opacity: 0,
        },
        {
          name: "liangzhou",
          url: liangzhou,
          id: 10,
          left: -5,
          top: 2,
          width: 260,
          height: 244,
          opacity: 0,
        },
        {
          name: "bingzhou",
          url: bingzhou,
          id: 11,
          left: 213,
          top: 40,
          width: 153,
          height: 155,
          opacity: 0,
        },
        {
          name: "youzhou",
          url: youzhou,
          id: 12,
          left: 354,
          top: 0,
          width: 253,
          height: 118,
          opacity: 0,
        },
        {
          name: "jiaozhou",
          url: jiaozhou,
          id: 13,
          left: 128,
          top: 356,
          width: 328,
          height: 136,
          opacity: 0,
        },
      ],
      hoverIdx: -1,
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    mouseMove: function (e) {
      let box = this.$el.getBoundingClientRect();
      let x = e.x - box.x;
      let y = e.y - box.y;
      // console.log(box);
      // console.log(x + " " + y);
      let hoverIdx = -1;
      for (let i = 0; i < this.imageList.length; i++) {
        let img = this.imageList[i];
        let c = this.$refs["sprite" + i][0];
        if (
          x > img.left &&
          x < img.left + img.width &&
          y > img.top &&
          y < img.top + img.height
        ) {
          let offs = {
            offsetX: x - img.left,
            offsetY: y - img.top,
          };
          let r = c.mouseMove(offs);
          if (r) {
            hoverIdx = i;
            break;
          }
        }
      }
      for (let i = 0; i < this.imageList.length; i++) {
        let img = this.imageList[i];
        if (hoverIdx == i) {
          img.opacity = 1;
        } else {
          img.opacity = 0;
        }
      }
      this.hoverIdx = hoverIdx;
    },
    doSelect: function () {
      if (this.hoverIdx >= 0) {
        this.$emit("input", this.imageList[this.hoverIdx].id);
      }
    },
  },
};
</script>
<style lang="less">
.world-map {
  width: 608px;
  height: 490px;
  position: relative;
  .world-map-item {
    position: absolute;
  }
}
</style>