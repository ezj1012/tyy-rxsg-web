<template>
  <div id="app">
    <Gaming />
  </div>
</template>
<script>
import Gaming from "./views/Gaming.vue";

import appState from "@/utils/appStateManager";

export default {
  components: { Gaming },
  data() {
    return {
      appState: appState,
      show: true,
    };
  },
  methods: {},
  beforeCreate() {
    // appState.checkState();
  },
};
</script>
<style>
html,
body {
  padding: 0px;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
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
