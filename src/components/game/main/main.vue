<template>
  <div class="game-main">
    <UserPlane class="main-user-plane"></UserPlane>
    <BtnPlane class="main-btn-plane"></BtnPlane>
  </div>
</template>
<script>
import UserPlane from "./userPlane";
import BtnPlane from "./btnPlane";

export default {
  name: "RxsgMain",
  components: { UserPlane, BtnPlane },
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
  background: url("./bj.jpg");
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
  }
}
</style>