<template>
  <div class="rxsg-user-register">
    <Card class="user-register-card" width="300" height="400">
      <div class="r-main">
        账号:
        <RInput
          class="r-un r-input"
          max-length="15"
          v-model="username"
        ></RInput>
        密码:<RInput
          class="r-pwd r-input"
          type="password"
          max-length="25"
          v-model="password"
        ></RInput>
        确认密码:
        <RInput
          class="r-pwd2 r-input"
          type="password"
          max-length="25"
          v-model="password2"
        ></RInput>
        QQ号:
        <RInput class="r-qq r-input" max-length="15" v-model="qq"></RInput>
        <RButton class="r-register" content="注册" :click="register"></RButton>
        <RButton
          class="r-unregister"
          :click="unregister"
          content="取消"
        ></RButton>
      </div>
    </Card>
  </div>
</template>
<script>
import RInput from "@/components/rxsg/input";
import RButton from "@/components/rxsg/redButton";
import Card from "@/components/rxsg/card";

export default {
  name: "RUser",
  components: { RInput, RButton, Card },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          username: "",
          password: "",
        };
      },
    },
    colse: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      username: this.value.username,
      password: this.value.password,
      password2: this.value.password,
      qq: "",
      doRegister: false,
    };
  },
  mounted: function () {},
  methods: {
    register: function () {
      if (this.doRegister) {
        return false;
      }
      try {
        this.doRegister = true;
        console.log("doRegister");
        //TODO
        if (this.password.lenght < 4) {
          alert("密码过于简单!");
        }
        if (this.password !== this.password2) {
          alert("密码不一致!");
        }
      } finally {
        this.doRegister = false;
      }
    },
    unregister: function () {
      this.doRegister = false;
      this.colse();
    },
    registerOK: function () {
      let userInfo = {
        username: this.username,
        password: this.password,
      };
      this.$emit("input", userInfo);
    },
  },
  watch: {},
  directives: {},
};
</script>
<style lang="less">
.rxsg-user-register {
  z-index: 20;
  .r-main {
    position: relative;
    width: calc(100% - 40px);
    height: calc(100% - 20px);
    margin-top: 20px;
    margin-left: 20px;
    .r-input {
      height: 25px;
      margin-top: 10px;
      background-color: #a0a0a0f3;
    }
    &::after {
      width: 100px;
      height: 100px;
      filter: blur(20px);
      background-color: #e6f678;
    }
    .r-register {
      position: absolute;
      top: 255px;
      left: 20px;
    }
    .r-unregister {
      position: absolute;
      top: 255px;
      left: 145px;
    }
  }
}
</style>