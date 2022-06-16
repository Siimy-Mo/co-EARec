<script setup>
import TitleLOGO from '../components/TitleLogo.vue'
</script>

<template>
  <body>
      <TitleLOGO />

      <!-- 还需要设置按钮颜色阴影 + hover状态： -->
      <nav class="nav_login">
        <RouterLink id="nav_btn" class="buttonType1" to="/login">Login</RouterLink>
        |
        <RouterLink id="nav_btn" class="buttonType1" :to="{name:'personalView',params:{uid:'123'}}">Test Account</RouterLink>

        <!-- 带传参：
        <router-link :to="{ name: 'user', params: { userId: '123' }}">User</router-link> -->
      </nav>

      <!-- 应该用footer:版权解释 -->
      <br />
      <footer id="home_footer">
        The right of final interpretation belongs to ...
      </footer>
  </body>


</template>

<style lang=scss scope>
@import '@/assets/global-color.scss';

#home_footer {
  font-family: $text;
  z-index: 1;
  /* background-color: white; */
}
#nav_btn {
  margin: 0 3vh;
}

.nav_login {
  height: 5vh;
  margin:0 0 0 1vw;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
}

body{
  min-width: 80vw;
  min-height: 40vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  background-color: $themeColor1;
  /* background-color: white; */
}



</style>


