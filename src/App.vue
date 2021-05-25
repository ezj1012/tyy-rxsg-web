<template>
  <div id="app">
    <router-link to="/login">Go to login</router-link>
    <router-link to="/gaming">Go to gaming</router-link>
    <router-link to="/">Go to home</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import appState from "@/utils/appStateManager";

export default {
  components: {
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
