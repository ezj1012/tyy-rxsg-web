// 应用状态管理器.用于控制用户进度.
// import axios from 'axios';

const tokenKey = "token";
const stateInit = 0;
const stateGaming = 1;

var appState = {
  debug: true,
  state: 0,
  checkState() {
    if (this.getToken() !== undefined) {
      //调整游戏状态
      let r = this.verifyToken();
      if (!r) {
        console.log("当前Token无效,重置Token");
        this.clearToken();
        this.setState(stateInit);
      } else {
        console.log("当前Token有效,进入游戏状态!");
        this.setState(stateGaming);
      }


    } else {
      console.log("初始化状态未获取有效Token");
      this.setState(stateInit);
    }
  }, setState(state) {
    this.state = state;
  },
  verifyToken() {

  }
  , getToken() {
    return localStorage.getItem(tokenKey);
  }, setToken(tk) {
    localStorage.setItem(tokenKey, tk);
  }, clearToken() {
    localStorage.removeItem(tokenKey);
  }
}

export default appState;