<template>
  <div id="app">
    <!-- <WorldMap v-model="province" style="margin: 20px"></WorldMap> -->
    <Main></Main>
    <Login v-show="show" style="margin-top: 10px"></Login>
    <RegisterPlayer v-show="show" style="margin-top: 10px"></RegisterPlayer>
    <div v-show="show" style="width: 800px; height: 30px">
      <RedButton
        style="float: left; margin-left: 30px"
        content="注册账号"
      ></RedButton>
      <RedButton
        style="float: left; margin-left: 30px"
        content="登陆游戏"
      ></RedButton>
    </div>
    <RSelect v-show="show" :list="list" v-model="selectValue"></RSelect>
    {{ selectValue }}
    <div v-show="show" style="width: 800px; height: 30px">
      <Input style="width: 200px" v-model="username" placeholder="表名称" />
      <Input
        style="float: left; margin-left: 30px"
        v-model="username"
        placeholder="和前面一页"
      />
    </div>
    <div v-show="show" style="width: 200px; height: 30px">
      <RButton
        style="float: left"
        :bg="preBg"
        width="21"
        height="30"
        :click="preClick"
      ></RButton>
      <RButton
        style="float: left; margin-left: 30px"
        :bg="nextBg"
        width="21"
        height="30"
        :click="nextClick"
      ></RButton>
      <Radio v-model="select" style="float: left; margin-left: 30px"></Radio>
      <Radio v-model="select" style="float: left; margin-left: 30px"></Radio>
    </div>
    <Sprite v-show="show" :img="liangzhou"></Sprite>
  </div>
</template>
<script>
import RSelect from "@/components/rxsg/select";
import RButton from "@/components/rxsg/button";
import Sprite from "@/components/rxsg/sprite";
import Input from "@/components/rxsg/input";
import liangzhou from "@/assets/rxsg/map/liangzhou.png";
import Radio from "@/components/rxsg/radio";
import RedButton from "@/components/rxsg/redButton";

// import WorldMap from "@/components/game/registerPlay/map";
import RegisterPlayer from "@/components/game/registerPlay";
import Login from "@/components/game/login";
import Main from "@/components/game/main";
import appState from "@/utils/appStateManager";

export default {
  components: {
    Login,
    RSelect,
    Input,
    RButton,
    Sprite,
    // WorldMap,
    RegisterPlayer,
    Radio,
    RedButton,
    Main,
  },
  data() {
    return {
      appState: appState,
      show: false,
      list: [
        { value: "aaaaaa" },
        { value: "bbbbbb" },
        { value: "cccccc" },
        { value: "dddddd" },
        { value: "eeeeee" },
      ],
      selectValue: "bbbbbb",
      username: "",
      preBg: {
        default: "url(" + require("./assets/rxsg/button/btn_prev.png") + ") ",
        hover: "url(" + require("./assets/rxsg/button/btn_prev_on.png") + ") ",
        active:
          "url(" +
          require("./assets/rxsg/button/btn_prev_down.png") +
          ") no-repeat",
      },
      nextBg: {
        default: "url(" + require("./assets/rxsg/button/btn_next.png") + ") ",
        hover: "url(" + require("./assets/rxsg/button/btn_next_on.png") + ") ",
        active:
          "url(" +
          require("./assets/rxsg/button/btn_next_down.png") +
          ") no-repeat",
      },
      liangzhou: liangzhou,
      province: 1,
      select: false,
    };
  },
  methods: {
    preClick: function () {
      console.log("do pre click!");
    },
    nextClick: function () {
      console.log("do next click!");
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
::-webkit-scrollbar {
  width: 16px;
  background-color: #727261;
}

::-webkit-scrollbar-thumb {
  width: 16px;
  height: 59px;
  background: url("./assets/scrollbar/scrollbar-thumb.png") no-repeat;
  background-position-x: center;
}

::-webkit-scrollbar-thumb:hover {
  /* background-color: rgba(114, 114, 114, 0.5); */
  filter: brightness(150%);
}

::-webkit-scrollbar-track {
  background: url("./assets/scrollbar/scrollbar-track.png") repeat-y;
}

::-webkit-scrollbar-track-piece:hover {
  background: url("./assets/scrollbar/scrollbar-track-piece.png") repeat-y;
}

::-webkit-scrollbar-button:decrement {
  height: 16px;
  background: url("./assets/scrollbar/scrollbar-up.png") no-repeat scroll 0 0;
}

::-webkit-scrollbar-button:decrement:hover {
  background: url("./assets/scrollbar/scrollbar-up.png") no-repeat scroll 0 0,
    url("./assets/scrollbar/scrollbar-up-hover.png") no-repeat scroll 2px 2px;
}

::-webkit-scrollbar-button:decrement:active {
  background: url("./assets/scrollbar/scrollbar-up.png") no-repeat scroll 0 0;
}

::-webkit-scrollbar-button:increment {
  height: 16px;
  background: url("./assets/scrollbar/scrollbar-down.png") no-repeat scroll 0
    0px;
}

::-webkit-scrollbar-button:increment:hover {
  background: url("./assets/scrollbar/scrollbar-down.png") no-repeat scroll 0 0,
    url("./assets/scrollbar/scrollbar-down-hover.png") no-repeat scroll 2px 2px;
}

::-webkit-scrollbar-button:increment:active {
  background: url("./assets/scrollbar/scrollbar-down.png") no-repeat scroll 0 0;
}
</style>
