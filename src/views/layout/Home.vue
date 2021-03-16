<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slideNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/menu.vue';
import SlideNav from './components/slideNav.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
  components: {
    LeftMenu,
    SlideNav,
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
