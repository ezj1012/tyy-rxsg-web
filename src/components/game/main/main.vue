<template>
  <div class="game-main">
    <UserPlane v-show="false" class="main-user-plane"></UserPlane>
    <BtnPlane v-show="false" class="main-btn-plane"></BtnPlane>
    <OuterCityPlane class="main-gaming-plane"></OuterCityPlane>
  </div>
</template>
<script>
import UserPlane from "./userPlane";
import BtnPlane from "./btnPlane";
import OuterCityPlane from "./outercityPlane";

export default {
  name: "RxsgMain",
  components: { UserPlane, BtnPlane, OuterCityPlane },
  props: {},
  data() {
    return {};
  },
  mounted: function () {},
  methods: {},
  directives: {},
};
</script>
<style lang="less">
.game-main {
  position: relative;
  width: 1000px;
  height: 600px;
  // background: url("./bj.jpg");
  user-select: none;
  .main-user-plane {
    position: absolute;
    width: 263px;
    height: 600px;
    background-color: #2f2f2fff;
  }
  .main-btn-plane {
    position: absolute;
    left: 263px;
    // background-color: #ffff2fcf;
    z-index: 300;
  }
  .main-gaming-plane {
    position: absolute;
    background-color: red;
    left: 263px;
    z-index: 10;
  }
}
</style>