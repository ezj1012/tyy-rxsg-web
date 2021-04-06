<template>
  <div class="register-player" :style="style">
    <Player class="r-play" v-model="player"></Player>
    <WorldMap class="r-map" v-model="player.selectProvince"></WorldMap>
  </div>
</template>
<script>
import WorldMap from "./map";
import Player from "./play";
import bg from "./a.png";

export default {
  name: "RegisterPlayer",
  components: { WorldMap, Player },
  props: {},
  data() {
    return {
      //选择的省的ID
      player: {
        selectProvince: 0,
      },
      style: { background: "url(" + bg + ")" },
    };
  },
  mounted: function () {},
  methods: {},
  directives: {},
};
</script>
<style lang="less">
.register-player {
  position: relative;
  width: 1000px;
  height: 600px;
  background-color: turquoise;
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
</style>