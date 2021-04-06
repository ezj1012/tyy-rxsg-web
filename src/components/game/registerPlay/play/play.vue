<template>
  <div class="player">
    <div class="player-info">
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
      <Radio
        class="player-boy"
        :sigle="true"
        sigleValue="1"
        v-model="radioPlay"
      ></Radio>
      <Radio
        class="player-girl"
        :sigle="true"
        sigleValue="2"
        v-model="radioPlay"
      ></Radio>
      <Radio class="agree-rules" v-model="agree"> </Radio>
      <RInput class="name-input"></RInput>
      <RSelect
        class="province-select"
        :list="provinces"
        :maxShow="7"
        v-model="selectProvince"
      ></RSelect>
      <Card
        class="province-info"
        :width="237"
        :height="120"
        backgroundColor="#161a15"
      >
        啊实打实大师多
      </Card>
    </div>
  </div>
</template>
<script>
import RInput from "../../../rxsg/input";
import Radio from "../../../rxsg/radio";
import RButton from "@/components/rxsg/button";
import RSelect from "@/components/rxsg/select";
import Card from "@/components/rxsg/card";

export default {
  name: "Player",
  components: { RInput, Radio, RButton, RSelect, Card },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          selectProvince: 0,
          radioPlay: "1",
        };
      },
    },
  },
  data() {
    return {
      preBg: {
        default:
          "url(" +
          require("../../../../assets/rxsg/button/btn_prev.png") +
          ") ",
        hover:
          "url(" +
          require("../../../../assets/rxsg/button/btn_prev_on.png") +
          ") ",
        active:
          "url(" +
          require("../../../../assets/rxsg/button/btn_prev_down.png") +
          ") no-repeat",
      },
      nextBg: {
        default:
          "url(" +
          require("../../../../assets/rxsg/button/btn_next.png") +
          ") ",
        hover:
          "url(" +
          require("../../../../assets/rxsg/button/btn_next_on.png") +
          ") ",
        active:
          "url(" +
          require("../../../../assets/rxsg/button/btn_next_down.png") +
          ") no-repeat",
      },
      radioPlay: this.value.radioPlay,
      agree: true,
      selectProvince: this.value.selectProvince,
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
  mounted: function () {},
  methods: {
    nextClick: function () {},
    preClick: function () {},
  },
  watch: {
    "value.selectProvince"(newVal) {
      this.selectProvince = newVal;
    },
  },
  directives: {},
};
</script>
<style lang="less">
.player {
  position: relative;
  width: 256px;
  height: 496px;
  border: 2px solid #857063;
  box-shadow: inset 0 0 1px 2px #483c2d;
  // background-color: #22312a;
  background-color: transparent;

  .player-info {
    width: 100%;
    height: 100%;
    position: relative;
    .name-input {
      top: 221px;
      left: 100px;
      position: absolute;
      height: 24px;
      width: 142px;
      background-color: #161a15;
    }
    .player-pre {
      top: 98px;
      left: 46px;
      position: absolute;
    }
    .player-next {
      top: 98px;
      left: 187px;
      position: absolute;
    }
    .player-boy {
      top: 171px;
      left: 87px;
      position: absolute;
    }
    .player-girl {
      top: 171px;
      left: 143px;
      position: absolute;
    }

    .province-select {
      width: 145px;
      top: 256px;
      left: 100px;
      position: absolute;
      font-size: 12px;
      color: #f3e29a;
      background-color: #1a231d;
    }

    .province-info {
      top: 289px;
      left: 12px;
      position: absolute;
    }

    .agree-rules {
      top: 415px;
      left: 25px;
      position: absolute;
    }
  }
}
</style>