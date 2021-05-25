<template>
  <GameLogin v-show="true" style="margin-top: 10px"></GameLogin>
</template>
<script>
import GameLogin from "@/components/game/login";
import appState from "@/utils/appStateManager";
export default {
  name: "Login",
  components: {
    GameLogin,
  },
  props: {
    appState: appState,
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log(appState.getToken());
  },
};
</script>