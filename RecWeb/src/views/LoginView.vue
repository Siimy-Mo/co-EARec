<template>
  <div class="login wrap">
    <h1>Here is loginView.vue interface</h1>

    <input type="text" name="email" id="email" placeholder="Email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"/>
    <input type="password" name="password" id="password" placeholder="Password" />

    <!-- <input type="button" value="Help!" />
    <input type="submit" value="Log in" /> -->
    <div class="login_btns">
      <RouterLink id="btn_back" class="buttonType1" to="/">Home</RouterLink>
      <RouterLink id="btn_login" class="buttonType1" :to="{name:'personalView',params:{uid:'123'}}">Log in</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/global-color.scss';
/* 正常背景：1
无效背景（红色）：4
有效背景（绿色）：1 */

.wrap {
  margin: 0 auto;
} 
.login {
  width: 300px;
  // background: red;
}
.login input[type=text],
.login input[type=password] { //设置输入框的初始状态：
  opacity: 1;
  display: block;
  border: none;
  outline: none;
  width: 280px;
  padding: 10px;
  margin: 20px 0 0 0;
  border-radius: 5px;
}

// 这里开始分开设置两个输入框的格式要求以及交互动画了,后面三都不用了。
.login input[type=text] {
  animation: bounce 1s; //动画定义在最下边了
  -webkit-appearance: none;
}
.login input[type=text]:focus:valid {
  box-shadow: 0 0 0 10000px $themeColor1;
}
.login input[type=text]:focus:valid ~ input[type=button] {
  background: #27ae60; //help的按钮颜色
  color: $themeColor1;
}
.login input[type=text]:focus:valid ~ input[type=submit] {
  color: $themeColor1;
}
        //无效状态时：
.login input[type=text]:invalid {
  box-shadow: 0 0 0 10000px $themeColor4;
}
.login input[type=text]:invalid ~ input[type=button] {
  background: #c0392b;
  color: $themeColor4;
}
.login input[type=text]:invalid ~ input[type=submit] {
  color: $themeColor4;
}
.login input[type=password] {
  animation: bounce1 1.3s;
}

  //设置两个按钮的位置：
.login_btns{
  margin: 40px 0 0 0;

  animation: bounce2 1.6s;
  // outline: none;//轮廓，在元素边界之外绘制的一条线？描边
  // background: red;
  height:40px;

  #btn_login{ //右边这个会浮动???
    float: right;
    // background:blue;
  }
}
// .login input[type=submit],
// .login input[type=button] {
//   border: 0;
//   outline: 0;
//   padding: 13px 18px;
//   margin: 40px 0 0 0;
//   border-radius: 2px;
//   font-weight: 600;
//   animation: bounce2 1.6s;
// } 
// .login input[type=submit] {
//   float: right;
//   background: #fff;  
//   color: #34495e;
//   outline: none;
// }
// .login input[type=button] {
//   background: #2C3E50;
//   color: #34495e;
// }
@keyframes bounce {
  0% { transform: translateY(-250px); opacity: 0; }
} 
@keyframes bounce1 {
  0% {  opacity: 0; }
  40% { transform: translateY(-100px); opacity: 0;}
}
@keyframes bounce2 {
  0% {  opacity: 0; }
  70% { transform: translateY(-20px); opacity: 0;}
}      
</style>
