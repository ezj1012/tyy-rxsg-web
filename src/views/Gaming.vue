<template>
  <div class="gaming">
    <RegisterPlayer v-if="state == 1"/>
  </div>
</template>

<script>
import { getPlayerInfo } from "../api/gaming";
import RegisterPlayer from "@/components/game/registerPlay/registerPlayer.vue"
export default {
  name: "Gaming",
  components: {RegisterPlayer},
  data() {
    return {
      player: {},
      state: 1, //1注册角色
      formInline: {
        user: "",
        password: "",
      },
      username: "",
      password: "",
    };
  },
  async beforeCreate() {
    let t = await getPlayerInfo({});
    if (t == null) {
      this.state = 1;
    } else {
      this.player = t;
    }
  },
};
</script>
<style>
.gaming{
  width: 1000px;
  height: 600px;
  margin: 0 auto;
}
</style>