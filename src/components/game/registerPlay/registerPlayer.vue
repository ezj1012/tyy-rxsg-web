<template>
  <Card2
    title="创建城池"
    :style="style"
    style="user-select: none;"
    backgroundColor="#22312a"
  >
    <Card
      width="260"
      height="500"
      span="1"
      style="margin-top: 5px; margin-left: 50px;float:left"
      backgroundColor="#1a231d"
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
      <!-- 选择头像部分 -->
      <Card
        width="235"
        height="160"
        span="1"
        style="margin-left: 11.5px"
        backgroundColor="#161a15"
      >
        <!-- 选择头像部分-->
        <div style="width:100%;height:120px">
          <RButton
            :bg="preBg"
            width="21"
            height="30"
            :click="preClick"
            style="float: left; margin: 46px 0px 0 32px"
          ></RButton>
          <Card
            span="1"
            width="85"
            height="105"
            style="float: left; margin-left: 18px; margin-top: 10px"
          >
            <img
              :src="iconImage"
              style="width: 76px; height: 96px; padding: 2px"
            />
          </Card>
          <RButton
            class="player-next"
            :bg="nextBg"
            width="21"
            height="30"
            :click="nextClick"
            style="float: left; margin: 46px 0 0 18px"
          ></RButton>
        </div>
        <div style="width:100%">
          <Radio
            :sigle="true"
            sigleValue="1"
            v-model="sexual"
            style="float:left;margin-left:65px"
          ></Radio>
          <span style="display: block;float: left;color: yellow;margin-left: 3px;">男</span>
          <Radio
            :sigle="true"
            sigleValue="2"
            v-model="sexual"
            style="float:left;margin-left:18px"
          ></Radio>
          <span style="display: block;float: left;color: yellow;margin-left: 3px;">女</span>
        </div>
      </Card>

      <!-- 输入君主名称部分 -->
      <div style="width: 100%; height: 25px; margin-top: 10px;">
        <InputLabel
          name="君主姓名"
          color="#00d7ff"
          style="
            height: 24px;
            width: 73px;
            margin-left: 12px;
            float: left;
            font-size: 14px;
            line-height: 24px;background-color: #161a15;
          "
        />
        <RInput
          class="name-input"
          style="width: 145px; height: 24px; margin-left: 6px; float: left;background-color: #161a15;"
        ></RInput>
      </div>

      <!-- 出生州选择 -->
      <div style="width: 100%; height: 25px; margin-top: 12px;">
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
        backgroundColor="#161a15"
      >
        <!-- 州城显示 -->
      </Card>

      <div style="width:100%;margin-top:8px">
        <Radio
          class="agree-rules"
          v-model="agree"
          style="float: left;margin-left: 24px;"
        ></Radio>
        <span style="color:yellow;height: 24px;width: 170px;float: left;font-size: 13px;line-height: 24px;">我同意《三国游戏手册》</span>
      </div>
    </Card>

    <Card
      width="616"
      height="500"
      style="margin-top: 5px;margin-right: 50px;float: right;"
      backgroundColor="#1a231d"
    >
      <WorldMap
        class="r-map"
        v-model="player.selectProvince"
      ></WorldMap>
    </Card>
  </Card2>
</template>
<script>
import WorldMap from "./map";
import { buttonIcon } from "../../../assets/cfg.js";
import { playerIcon } from "../../../api/cfg.js";
// import Player from "./play";
import bg from "./a.png";
import RInput from "@/components/rxsg/input";
import Radio from "@/components/rxsg/radio";
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
    WorldMap,
    InputLabel,
    RInput,
    RSelect,
    RButton,
    Radio,
    // Player,
  },
  props: {},
  data() {
    return {
      preBg: {},
      nextBg: {},
      //选择的省的ID
      player: {
        selectProvince: 0,
      },
      style: { background: "url(" + bg + ")" },
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
      playerIcons: {
        female: [],
        male: [],
      },
      sexual: 1,
      agree: true,
      SelectPlayerIcon: 0,
    };
  },
  computed: {
    iconImage: function () {
      let icon = null;
      if (this.sexual == 1) {
        icon = this.playerIcons.male[this.SelectPlayerIcon];
      } else {
        icon = this.playerIcons.female[this.SelectPlayerIcon];
      }
      if (icon) {
        return "/sanguo/" + icon.path;
      }
      return "";
    },
    icons: function () {
      if (this.sexual == 1) {
        return this.playerIcons.male;
      } else {
        return this.playerIcons.female;
      }
    },
  },
  beforeMount: async function () {
    this.preBg = buttonIcon.preBg;
    this.nextBg = buttonIcon.nextBg;
    let icons = await playerIcon();
    this.playerIcons.male = [];
    this.playerIcons.female = [];
    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      if (icon.type == 1) {
        this.playerIcons.male.push(icon);
      } else if (icon.type == 2) {
        this.playerIcons.female.push(icon);
      }
    }
    console.log(this.playerIcons.male, this.playerIcons.male[1], "xxx");
    // console.log(preBg, nextBg);
    // this.preBufBG = preBg;
    // this.nextBufBG = nextBg;
    // console.log(this.preBufBG, this.nextBufBG);
  },
  mounted: function () {},
  methods: {
    preClick: function () {
      this.SelectPlayerIcon--;
      if (this.SelectPlayerIcon < 0) {
        this.SelectPlayerIcon = this.icons.length - 1;
      }
    },
    nextClick: function () {
      this.SelectPlayerIcon++;
      if (this.SelectPlayerIcon >= this.icons.length) {
        this.SelectPlayerIcon = 0;
      }
    },
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
