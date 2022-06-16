<script>
import Parallax from "parallax-js";

export default {
  name: "websiteName",
  mounted() {
    var scene = this.$refs.js_scene;
    new Parallax(scene);
  }
};

</script>

<template>

  <section class="wrapper_title">

            <div ref="js_scene" class="scene" data-hover-only="false">
                <div class="circle2" data-depth="0.20"></div>
                <div class="circle1" data-depth="0.8"></div> 

                <p class="siteName" data-depth="0.50">Site Name</p>
                <p class="siteName" data-depth="0.10">Site Name</p>

            </div>

    </section>

</template>

<style lang="scss" scoped>
@import '@/assets/global-color.scss';

@mixin sm {
    @media screen and (max-width: 799px) {
        @content;
    }
}
.wrapper_title {
  position: absolute;
  // top: 0%;
  width: 100%;
  // text-align: center;

  .scene {
    background-color: yellowgreen;
    
  }
}

// @mixin height {
//     @media screen and (max-height:660px) {
//         @content;
//     }
// }

// Bigger Circle 原来是有阴影的，这里不需要。
.circle1 {
    // position: absolute;
    &:before {
        content: '';
        position: absolute; // 這個不能去掉
        width: 20vw;
        height: 20vw;
        background-color: rgba($themeColor5, 0.5);
        border-radius: 100%;
        left: 10vw;
        transform: translate(-50%, -50%);
        box-shadow: 0 32px 40px -20px rgba(0,0,0,.25);
        animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;

        @keyframes circle {
            0% {
                width: 0;
                height: 0;
            }
        }

        @include sm {
            width: 400px;
            height: 400px;  
        }
    }
}

.circle2 {
    // position: absolute;
    &:before {
        content: '';
        position: absolute; // 這個不能去掉
        width: 40vw;
        height: 40vw;
        background-color: rgba($themeColor3, 0.5);
        border-radius: 100%;
        left: 15%;
        transform: translate(-50%, -50%);
        box-shadow: 0 32px 40px -20px rgba(0,0,0,.25);
        animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;

        @keyframes circle {
            0% {
                width: 0;
                height: 0;
            }
        }

        @include sm {
            width: 400px;
            height: 400px;  
        }
    }
}

// site title name
.siteName{
  position: absolute;
  // bottom: 0%;
  // margin: 0 auto;
  margin: 5vh 0 0 3vw;
  font-family: $title;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.25);
  color: white;
  z-index: 2;
  // background-color: yellowgreen;


  &:nth-of-type(2) {
    color: $themeColor4;
    z-index: 1;
    filter: blur(2px);
    opacity: 0.8;
  }
}



</style>
