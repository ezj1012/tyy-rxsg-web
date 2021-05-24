<template>
  <div id="app">
    <Login v-show="show" style="margin-top: 10px"></Login>
  </div>
</template>
<script>
import Login from "@/components/game/login";
import appState from "@/utils/appStateManager";

export default {
  components: {
    Login,
  },
  data() {
    return {
      appState: appState,
      show: true,
    };
  },
  methods: {},
  beforeCreate() {
    appState.checkState();
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
</style>
