<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>

</template>

<style lang="scss" scoped>
@import '@/assets/global-color.scss';

@media (min-width: 1024px) {
  .wrapper {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: white;

  }
}

</style>
