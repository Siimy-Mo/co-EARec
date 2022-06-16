<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Introduce from '@/views/IntroduceView.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div id="test"> 测试！！</div>
      </nav>
    </div>
  </header>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<style lang="scss" scoped>
/* @import '@/assets/base.css'; */
@import '@/assets/global-color.scss';

#test {
  width: 50px;
  height: 500px;
  background-color: $themeColor5;
}

</style>
