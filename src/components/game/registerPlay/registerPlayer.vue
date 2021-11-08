<template>
  <Card2
    title="创建城池"
    :style="style"
  >
    <Card
      width="260"
      height="500"
      span="1"
      style="margin-top: 5px; margin-left: 50px"
    >
      <span style="
          display: block;
          color: yellow;
          font-size: 13px;
          font-weight: 100;
          text-align: center;
          line-height: 50px;
          width: 100%;
          height: 50px;
        ">选择头像</span>
      <Card
        width="235"
        height="160"
        span="1"
        style="margin-left: 11.5px"
      >
        <!-- 选择头像部分-->
        <RButton
          class="player-pre"
          :bg="preBg"
          width="21"
          height="30"
          :click="preClick"
        ></RButton>
        <RButton
          class="player-next"
          :bg="nextBg"
          width="21"
          height="30"
          :click="nextClick"
        ></RButton>
      </Card>
      <div style="width: 100%; height: 25px; margin-top: 10px">
        <InputLabel
          name="君主姓名"
          color="#00d7ff"
          style="
            height: 24px;
            width: 73px;
            margin-left: 12px;
            float: left;
            font-size: 14px;
            line-height: 24px;
          "
        />
        <RInput
          class="name-input"
          style="width: 145px; height: 24px; margin-left: 6px; float: left"
        ></RInput>
      </div>
      <div style="width: 100%; height: 25px; margin-top: 12px">
        <InputLabel
          name="城池属地"
          color="#00d7ff"
          style="
            height: 24px;
            width: 73px;
            margin-left: 12px;
            float: left;
            font-size: 14px;
            line-height: 24px;
          "
        />
        <RSelect
          class="province-select"
          :list="provinces"
          :maxShow="7"
          v-model="selectProvince"
        ></RSelect>
      </div>

      <Card
        width="235"
        height="120"
        span="1"
        style="margin-left: 11.5px; margin-top: 5px"
      >
        <!-- 州城显示 -->
      </Card>
    </Card>
    <div class="register-player">
      <!-- <Player
        class="r-play"
        v-model="player"
      ></Player> -->
      <!-- <WorldMap
        class="r-map"
        v-model="player.selectProvince"
      ></WorldMap> -->
    </div>
  </Card2>
</template>
<script>
// import WorldMap from "./map";
// import { preBg, nextBg } from "../../../assets/assets.js";
// import Player from "./play";
import bg from "./a.png";
import RInput from "@/components/rxsg/input";
import InputLabel from "@/components/rxsg/inputLable";
import Card2 from "@/components/rxsg/card2";
import Card from "@/components/rxsg/card";
import RSelect from "@/components/rxsg/select";
import RButton from "@/components/rxsg/button";

export default {
  name: "RegisterPlayer",
  components: {
    Card,
    Card2,
    //  WorldMap,
    InputLabel,
    RInput,
    RSelect,
    RButton,
    // Player,
  },
  props: {},
  data() {
    return {
      preBg: {
        default:
          "url(" +
          require("../../../assets/rxsg/button/btn_prev.png") +
          ") ",
        hover:
          "url(" +
          require("../../../assets/rxsg/button/btn_prev_on.png") +
          ") ",
        active:
          "url(" +
          require("../../../assets/rxsg/button/btn_prev_down.png") +
          ") no-repeat",
      },
      nextBg: {
        default:
          "url(" +
          require("../../../assets/rxsg/button/btn_next.png") +
          ") ",
        hover:
          "url(" +
          require("../../../assets/rxsg/button/btn_next_on.png") +
          ") ",
        active:
          "url(" +
          require("../../../assets/rxsg/button/btn_next_down.png") +
          ") no-repeat",
      },
      //选择的省的ID
      player: {
        selectProvince: 0,
      },
      style: { background: "url(" + bg + "1)" },
      selectProvince: 0,
      provinces: [
        { id: 0, value: "随机" },
        { cityCount: 0, crowdCount: 0, id: 1, monarchCount: 0, value: "司隶" },
        { cityCount: 0, crowdCount: 0, id: 2, monarchCount: 0, value: "冀州" },
        { cityCount: 0, crowdCount: 0, id: 3, monarchCount: 0, value: "豫州" },
        { cityCount: 0, crowdCount: 0, id: 4, monarchCount: 0, value: "兖州" },
        { cityCount: 0, crowdCount: 0, id: 5, monarchCount: 0, value: "徐州" },
        { cityCount: 0, crowdCount: 0, id: 6, monarchCount: 0, value: "青州" },
        { cityCount: 0, crowdCount: 0, id: 7, monarchCount: 0, value: "荆州" },
        { cityCount: 0, crowdCount: 0, id: 8, monarchCount: 0, value: "扬州" },
        { cityCount: 0, crowdCount: 0, id: 9, monarchCount: 0, value: "益州" },
        { cityCount: 0, crowdCount: 0, id: 10, monarchCount: 0, value: "凉州" },
        { cityCount: 0, crowdCount: 0, id: 11, monarchCount: 0, value: "并州" },
        { cityCount: 0, crowdCount: 0, id: 12, monarchCount: 0, value: "幽州" },
        { cityCount: 0, crowdCount: 0, id: 13, monarchCount: 0, value: "交州" },
      ],
    };
  },
  beforeMount: function () {
    // console.log(preBg, nextBg);
    // this.preBufBG = preBg;
    // this.nextBufBG = nextBg;
    // console.log(this.preBufBG, this.nextBufBG);
  },
  mounted: function () {},
  methods: {
    preClick: function () {},
    nextClick: function () {},
  },
  directives: {},
};
</script>
<style lang="less">
.register-player {
  position: relative;
  width: 100%;
  height: 100%;
  // background-color: #22312a;
  .r-play {
    position: absolute;
    top: 62px;
    left: 52px;
  }
  .r-map {
    position: absolute;
    top: 67px;
    left: 339px;
  }
}

.province-select {
  float: left;
  margin-left: 7px;
  width: 145px;
  font-size: 12px;
  color: #f3e29a;
  background-color: #1a231d;
}
</style>
