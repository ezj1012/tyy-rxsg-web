import testPanel from './panel.vue'
import tyyInput from './TyyInput.vue'

let tyy = {}
tyy.install = function (Vue) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel) // testPanel.name 组件的name属性
  Vue.component(tyyInput.name, tyyInput) // testPanel.name 组件的name属性
}
export default tyy