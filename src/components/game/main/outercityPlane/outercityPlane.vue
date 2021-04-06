<template>
  <div
    class="rxsg-outercity-plane"
    @mousedown="mouseDown"
    @mouseleave="mouseLeave"
    @mouseup="mouseUp"
    @mousemove="mouseMove"
  >
    <div class="outercity-main">
      <div class="outercity-main-show">{{ showMsg }}</div>
      <div
        class="outercity-main-terrains"
        :style="{ left: sceneX + 'px', top: sceneY + 'px' }"
      >
        <div
          class="terrain"
          v-for="(item, idx) in terrains"
          :key="idx"
          :style="{ left: item.left + 'px', top: item.top + 'px' }"
        >
          {{ idx }} {{ item.idx }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import RButton from "@/components/rxsg/button";
// import RadioButton from "@/components/rxsg/radioButton";
import land from "../../../../assets/rxsg/main/outercity/terrain_land.png";

export default {
  name: "OuterCityPlane",
  components: {},
  props: {},
  data() {
    return {
      palneState: {},
      mapTile: {
        1: land,
      },
      pressing: false,
      sceneX: 0,
      sceneY: 0,
      lastSceneX: 0,
      lastSceneY: 0,
      moving: false,
      xSize: 20,
      ySize: 25,
      cx: 0,
      cy: 0,
      curX: 0,
      cury: 0,
      downX: 0,
      downY: 0,
      moveX: 0,
      moveY: 0,
      terrains: [],
      terrainsX: [],
      terrainsY: [],
    };
  },
  mounted: function () {
    // this.palneState.top.openInnercityPlane = true;
    let offxt = -1 * Math.floor((this.xSize - 7) / 2) * 107;
    let offyt = -1 * Math.floor((this.ySize - 16) / 4) * 75;
    // let offyt = 0;
    for (let x = 0; x < this.ySize; x++) {
      let offx = x % 2 == 0 ? 0 : -53;

      for (let y = 0; y < this.xSize; y++) {
        let top =
          x % 2 == 0
            ? Math.floor(x / 2) * 75
            : Math.floor((x - 1) / 2) * 75 + 34;
        let t = {
          top: top + offyt,
          left: y * 107 + offx + offxt,
          idx: "x" + y + "y" + x,
        };
        if (this.terrainsX[y] === undefined) {
          this.terrainsX[y] = [];
        }
        this.terrainsX[y].push(t);
        if (this.terrainsY[x] === undefined) {
          this.terrainsY[x] = [];
        }
        this.terrainsY[x].push(t);

        this.terrains.push(t);
      }
    }
  },
  methods: {
    mouseDown: function (e) {
      this.downX = e.x;
      this.downY = e.y;
      this.moveX = 0;
      this.moveY = 0;
      this.pressing = true;
    },
    mouseUp: function () {
      if (this.pressing) {
        // console.log("mouseUp");
        this.pressing = false;
        // console.log("offset " + (e.x - this.downX) + "," + (e.y - this.downY));
      }
    },
    mouseMove: function (e) {
      if (this.pressing) {
        let mx = e.x - this.downX - this.moveX;
        let my = e.y - this.downY - this.moveY;
        this.sceneX += mx;
        this.sceneY += my;
        this.lastSceneX += mx;
        this.lastSceneY += my;
        // console.log(this.lastSceneY);
        if (Math.abs(this.lastSceneX) > 107) {
          //TODO 触发搬迁
          this.computedMoveX(this.lastSceneX);
        }
        if (Math.abs(this.lastSceneY) > 75) {
          this.computedMoveY(this.lastSceneY);
        }

        // console.log("offset " + (e.x - this.downX) + "," + (e.y - this.downY));
        this.moveX = e.x - this.downX;
        this.moveY = e.y - this.downY;
      }
    },
    mouseLeave: function () {
      // console.log("mouseLeave");
      this.pressing = false;
    },
    computedMoveX: function (movePostion) {
      if (this.moving) {
        return;
      }
      this.moving = true;
      try {
        let c = Math.floor(Math.abs(movePostion) / 107);
        let f = movePostion > 0; //

        let moveOff = f ? -107 * this.xSize : 107 * this.xSize;
        console.log(
          "触发X迁移,当前向" +
            (f ? "左" : "右") +
            "迁移" +
            c +
            "个,当前x元素为" +
            this.cx +
            ",需要偏移" +
            moveOff
        );
        for (let i = 0; i < c; i++) {
          let ofEleXId = f ? this.fixedX(this.cx - 1) : this.cx;
          let temp = this.terrainsX[ofEleXId];
          console.log(temp[0].left);
          for (let index = 0; index < temp.length; index++) {
            const element = temp[index];
            element.left += moveOff;
            // console.log("pp " + element.idx + "  " + element.left);
          }
          if (f) {
            this.cx--;
            if (this.cx < 0) {
              this.cx = this.xSize - 1;
            }
          } else {
            this.cx++;
            if (this.cx >= this.xSize) {
              this.cx = 0;
            }
          }
          console.log(temp[0].left);
        }
        this.lastSceneX += f ? c * -107 : c * 107;
        console.log("当前x元素为" + this.cx + ",当前偏移为" + this.lastSceneX);
      } finally {
        this.moving = false;
      }
    },
    computedMoveY: function (movePostion) {
      if (this.moving) {
        return;
      }
      this.moving = true;
      try {
        let c = Math.floor(Math.abs(movePostion) / 75) * 2;
        let upf = movePostion > 0; //

        // let moveOff =
        //   this.ySize % 2 == 0
        //     ? 75 * Math.floor(this.ySize / 2)
        //     : Math.floor(this.ySize / 2) * 75 + 35;
        // moveOff = f ? -1 * moveOff : moveOff;
        console.log(
          "触发Y迁移,当前向" +
            (upf ? "上" : "下") +
            "迁移" +
            c +
            "个,当前x元素为" +
            this.cy +
            ",需要偏移"
        );
        for (let i = 0; i < c; i++) {
          let ofEleXId = upf ? this.fixedY(this.cy - 1) : this.cy;
          let ccIdx = upf
            ? this.fixedY(this.fixedY(ofEleXId + 1) + 1)
            : this.fixedY(this.fixedY(ofEleXId - 1) - 1);
          let temp = this.terrainsY[ofEleXId];
          console.log(
            "ofEleXId:" +
              ofEleXId +
              "  ccIdx:" +
              ccIdx +
              "   cur" +
              temp[0].top +
              "move to " +
              this.terrainsY[ccIdx][0].top
          );
          let moveTo = upf
            ? this.terrainsY[ccIdx][0].top - 75
            : this.terrainsY[ccIdx][0].top + 75;
          for (let index = 0; index < temp.length; index++) {
            const element = temp[index];
            element.top = moveTo;
            //     // console.log("pp " + element.idx + "  " + element.left);
          }
          this.cy = upf ? this.fixedY(this.cy - 1) : this.fixedY(this.cy + 1);
          console.log(temp[0].top);
        }
        this.lastSceneY += upf ? (c / 2) * -75 : (c / 2) * 75;
        console.log("当前Y元素为" + this.cy + ",当前偏移为" + this.lastSceneY);
      } finally {
        this.moving = false;
      }
    },
    fixedX(x) {
      if (x < 0) {
        return this.xSize - 1;
      } else if (x >= this.xSize) {
        return 0;
      }
      return x;
    },
    fixedY(y) {
      if (y < 0) {
        return this.ySize - 1;
      } else if (y >= this.ySize) {
        return 0;
      }
      return y;
    },
  },
  computed: {
    showMsg: function () {
      let msg =
        "x" +
        this.downX +
        "y" +
        this.downY +
        ",===mx " +
        this.moveX +
        "my" +
        this.moveY;
      "===cx" + this.moveX / 107;
      return msg;
    },
  },
  directives: {},
};
</script>
<style lang="less">
.rxsg-outercity-plane {
  width: 737px;
  height: 600px;
  // 107 75
  .outercity-main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .outercity-main-show {
      position: absolute;
      width: 200px;
      height: 100px;
      left: -200px;
      background-color: #fff;
    }
    .outercity-main-terrains {
      position: absolute;
      width: 100%;
      height: 100%;

      .terrain {
        position: absolute;
        width: 107px;
        height: 75px;
        background-color: #7272617f;
      }
    }
  }
}
</style>