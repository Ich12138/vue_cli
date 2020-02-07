//使用vuex练习
//1. 引入插件
import Vue from 'vue'
import Vuex from 'vuex'

//2. 使用Vue插件
Vue.use(Vuex);

//3. 创建Vuex对象
const store = new Vuex.Store({

  //里面放入的对象参数

  //存放一些变量的值
  state: {
    counter: 1000
  },

  //定义一些对state里面变量的方法函数
  mutations: {
    //上面的state是自动往这里面的函数里传入的
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
});

//4. 导出Vuex创建的对象
export default store
//5. 在main.js中挂在store
