<template>
  <div
    class="rxsg-outercity-inner"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mousemove="mouseMove"
    @mouseleave="mouseLeave"
  >
    <div class="inner-main">
      <Terrain
        class="terrain"
        v-for="(item, idx) in terrains"
        :key="idx"
        :info="terrainResouces[1]"
        :imgData="imageData"
        :left="item.left"
        :top="item.top"
      ></Terrain>
    </div>
  </div>
</template>
<script>
import { getImageData } from "../../../../../utils/assist";
import city from "../../../../../assets/rxsg/main/outercity/city.png";
import land from "../../../../../assets/rxsg/main/outercity/land.png";
import desert from "../../../../../assets/rxsg/main/outercity/desert.png";
import forest from "../../../../../assets/rxsg/main/outercity/forest.png";
import grass from "../../../../../assets/rxsg/main/outercity/grass.png";
import hill from "../../../../../assets/rxsg/main/outercity/hill.png";
import lake from "../../../../../assets/rxsg/main/outercity/lake.png";
import swamp from "../../../../../assets/rxsg/main/outercity/swamp.png";
import Terrain from "../terrain";

export default {
  name: "InnerPlane",
  components: { Terrain },
  props: {},
  data() {
    return {
      img: land,
      imageData: null,
      terrainResouces: {
        0: {
          bg: "url(" + city + ")",
          type: 0,
          typeName: "城池",
          msgList: "",
        },
        1: {
          bg: "url(" + land + ")",
          type: 1,
          typeName: "平地",
          msgList: "",
        },
        2: {
          bg: "url(" + desert + ")",
          type: 2,
          typeName: "荒漠",
          msgList: "",
        },
        3: {
          bg: "url(" + forest + ")",
          type: 3,
          typeName: "森林",
          msgList: "",
        },
        4: {
          bg: "url(" + grass + ")",
          type: 4,
          typeName: "草原",
          msgList: "",
        },
        5: {
          bg: "url(" + hill + ")",
          type: 5,
          typeName: "山地",
          msgList: "",
        },
        6: {
          bg: "url(" + lake + ")",
          type: 6,
          typeName: "湖泊",
          msgList: "",
        },
        7: {
          bg: "url(" + swamp + ")",
          type: 7,
          typeName: "沼泽",
          msgList: "",
        },
      },
      widthSize: 10,
      heightSize: 10,
      terrains: [],
      terrainsX: [],
      terrainsY: [],
      pressing: false,
      moving: false,
    };
  },
  mounted: function () {
    this.imageData = getImageData(this.img, this.setImageData);
    this.loadMap();
  },
  methods: {
    loadMap() {
      for (let y = 0; y < this.heightSize; y++) {
        let offLeft = y % 2 == 0 ? 0 : -53;

        for (let x = 0; x < this.widthSize; x++) {
          let top =
            y % 2 == 0
              ? Math.floor(y / 2) * 55
              : Math.floor((y - 1) / 2) * 55 + 27;

          let terrain = {
            left: offLeft + x * 107,
            top: top,
          };
          console.log(terrain);
          if (this.terrainsX[x] === undefined) {
            this.terrainsX[x] = [];
          }
          this.terrainsX[x].push(terrain);

          if (this.terrainsY[y] === undefined) {
            this.terrainsY[y] = [];
          }
          this.terrainsY[y].push(terrain);

          this.terrains.push(terrain);
        }
      }
    },
    setImageData(id) {
      this.imageData = id;
    },
    mouseMove(e) {
      if (this.pressing) {
        //TODO 移动地图
        let box = this.$el.getBoundingClientRect();
        let x = e.x - box.x;
        let y = e.y - box.y;
        console.log("moving x:" + x + " y:" + y);
        console.log(box);
      } else {
        // hover操作
        let box = this.$el.getBoundingClientRect();
        let x = e.x - box.x;
        let y = e.y - box.y;
        console.log("hoving x:" + x + " y:" + y);
      }
    },
    mouseLeave() {
      console.log("mouseLeave");
      this.moving = false;
      this.pressing = false;
    },
    mouseDown() {
      this.moving = true;
      this.pressing = true;
      console.log(
        "mouseDown" + " moving:" + this.moving + " pressing" + this.pressing
      );
    },
    mouseUp() {
      this.pressing = false;
    },
  },
  computed: {},
  directives: {},
};
</script>
<style lang="less">
.rxsg-outercity-inner {
  width: 737px;
  height: 600px;
  // 107 75
  .inner-main {
    position: relative;
    .terrain {
      position: absolute;
    }
  }
}
</style>