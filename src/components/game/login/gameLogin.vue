<template>
  <div class="rxsg-login">
    <RInput class="login-un" max-length="15" v-model="username"></RInput>
    <RInput
      class="login-pwd"
      type="password"
      max-length="25"
      v-model="passwd"
    ></RInput>
    <Radio class="login-run" v-model="reUsername"></Radio>
    <Radio class="login-rpwd" v-model="rePasswd"></Radio>
    <RButton
      class="login-register"
      content="注册账号"
      :click="doRegister"
    ></RButton>
    <RButton class="login-login" content="登陆游戏" :click="doLogin"></RButton>
    <Card class="login-billboard" width="280" height="300">
      <div class="login-billboard-title">热血公告</div>
      <div class="login-billboard-main">
        <p>
          本私服架设的服务端程序下载于互联网，且严格按照“计算机软件保护条例（2001年12月20日中华人民共和国国务院令第339号发布）”第十七条的有关规定，是以学习和研究游戏内含的设计思想和原理为目地，并通过为游戏玩家提供在线试玩的方式来对相关游戏内含的设计思想和原理进行研究学习的行为，绝没有故意侵权或用此来谋取任何利益的意图，所有赞助仅为维持服务器开支。
        </p>
        <p>
          【声明】本站非赢利性质网站，任何人可直接游戏，仅供个人娱乐，完全免费；如果本站侵犯了您的合法权益，请联系我们删除。
        </p>
      </div>
    </Card>
    <RUser
      class="rg-plane"
      v-show="reOpen"
      :colse="
        () => {
          reOpen = false;
        }
      "
    ></RUser>
  </div>
</template>
<script>
import RInput from "@/components/rxsg/input";
import Radio from "@/components/rxsg/radio";
import RButton from "@/components/rxsg/redButton";
import Card from "@/components/rxsg/card";
import RUser from "./rUser";
import axios from "axios";

export default {
  name: "GameLogin",
  components: { RInput, Radio, RButton, Card, RUser },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          selectProvince: 0,
          radioPlay: "1",
        };
      },
    },
  },
  data() {
    return {
      username: "",
      passwd: "",
      reUsername: true,
      rePasswd: true,
      reOpen: false,
    };
  },
  mounted: function () {},
  methods: {
    doRegister: function () {
      console.log("eEEEEEEEEEEEEEEEEEEEEEE");
      this.reOpen = true;
    },
    doLogin: function () {
      // axios
      let params = {
        username: this.username,
        password: this.passwd,
        rememberMe: this.rePasswd,
      };
      axios
        .post("./authentication/form", params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });

      console.log("bbbbbbbbbbbbbbbbbbbbbb");
      console.log(axios);
    },
  },
  watch: {},
  directives: {},
};
</script>
<style lang="less">
.rxsg-login {
  position: relative;
  width: 1000px;
  height: 600px;
  // background-color: #22312a;
  background: url("../../../assets/rxsg/login-bj.jpg");
  .login-un {
    position: absolute;
    top: 438px;
    left: 450px;
    height: 24px;
    width: 150px;
  }
  .login-pwd {
    position: absolute;
    top: 467px;
    left: 450px;
    height: 24px;
    width: 150px;
  }
  .login-run {
    position: absolute;
    top: 504px;
    left: 398px;
  }
  .login-rpwd {
    position: absolute;
    top: 504px;
    left: 506px;
  }
  .login-register {
    position: absolute;
    top: 535px;
    left: 387px;
  }
  .login-login {
    position: absolute;
    top: 535px;
    left: 525px;
  }
  .login-billboard {
    position: absolute;
    top: 95px;
    left: 60px;
    background-color: #21100c8f;
    .login-billboard-title {
      width: 100%;
      height: 40px;
      color: #fbf48b;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      user-select: none;
      background: #a0a0a043;
    }
    .login-billboard-main {
      margin: 4px 5px 0px 5px;
      width: calc(100% - 10px);
      height: calc(100% - 45px);
      font-size: 13px;
      color: bisque;
      text-align: left;
      cursor: pointer;
    }
  }
  .rg-plane {
    position: absolute;
    top: 95px;
    left: 350px;
    background: #a0a0a083;
  }
}
</style>