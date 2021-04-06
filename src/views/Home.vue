<template>
  <div>
    <Input v-model="username" placeholder="表名称" />
    <Input v-model="password" placeholder="表注解" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Input from "@/components/input";

export default {
  name: "Home",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      username: "",
      password: "",
    };
  },
  components: {
    // HelloWorld
    Input,
  },
};
</script>
