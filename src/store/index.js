import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 导航的收放状态，false表示展开 true代表收起来
    collapsed: false,

    // 用户信息
    // user: {
    //     username: '',
    //     appkey: '',
    //     role: '',
    //     email: '',
    // },
    // 获取用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    // 设置用户信息 登陆成功后设置
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    // 退出 把user里的对象置为空
    logout(state) {
      state.user = {
        userusername: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      // 设置用户信息后设置cookie
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      // 退出后删除cookie
      removeUserCookie();
    },
  },
  modules: {},
});
