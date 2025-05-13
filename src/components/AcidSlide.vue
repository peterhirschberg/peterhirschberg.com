<template>
  <div class="AcidSlide" :class="{ 'right': right }">
    <img class="slide slide1" src="@/assets/acid/image1.png" :class="{ 'pause': pause, 'isMobile': isMobile }">
    <img class="slide slide2" src="@/assets/acid/image2.png" :class="{ 'pause': pause, 'isMobile': isMobile }">
    <img class="slide slide3" src="@/assets/acid/image3.png" :class="{ 'pause': pause, 'isMobile': isMobile }">
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'AcidSlide',
  props: {
    right: Boolean,
    pause: Boolean
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile
    }
  }
}
</script>

<style scoped lang="scss">

@-moz-keyframes spinCW { 100% { -moz-transform: rotate(360deg) translate3d(0,0,0); } }
@-webkit-keyframes spinCW { 100% { -webkit-transform: rotate(360deg) translate3d(0,0,0); } }
@keyframes spinCW { 100% { -webkit-transform: rotate(360deg) translate3d(0,0,0); transform:rotate(360deg) translate3d(0,0,0); } }

@-moz-keyframes spinCCW { 100% { -moz-transform: rotate(-360deg) translate3d(0,0,0); } }
@-webkit-keyframes spinCCW { 100% { -webkit-transform: rotate(-360deg) translate3d(0,0,0); } }
@keyframes spinCCW { 100% { -webkit-transform: rotate(-360deg) translate3d(0,0,0); transform:rotate(-360deg) translate3d(0,0,0); } }

.AcidSlide{
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: white;
  overflow: hidden;
  .slide {
    position: absolute;
    width: 300vh;
    opacity: .5;
    will-change: transform;
    &.pause{
      -webkit-animation: none !important;
      -moz-animation: none !important;
      animation: none !important;
    }
  }
  .slide1 {
    -webkit-animation:spinCW 24s linear infinite;
    -moz-animation:spinCW 24s linear infinite;
    animation:spinCW 24s linear infinite;
    &.isMobile {
      -webkit-animation:spinCW 24s steps(72, start) infinite;
      -moz-animation:spinCW 24s steps(72, start) infinite;
      animation:spinCW 24s steps(72, start) infinite;
    }
    top: -100vh;
    left: -25vw;
  }
  .slide2 {
    -webkit-animation:spinCCW 28s linear infinite;
    -moz-animation:spinCCW 28s linear infinite;
    animation:spinCCW 28s linear infinite;
    &.isMobile {
      -webkit-animation:spinCCW 28s steps(72, start) infinite;
      -moz-animation:spinCCW 28s steps(72, start) infinite;
      animation:spinCCW 28s steps(72, start) infinite;
    }
    top: -100vh;
    left: -25vw;
  }
  .slide3 {
    -webkit-animation:spinCW 36s linear infinite;
    -moz-animation:spinCW 36s linear infinite;
    animation:spinCW 36s linear infinite;
    &.isMobile {
      -webkit-animation:spinCW 36s steps(72, start) infinite;
      -moz-animation:spinCW 36s steps(72, start) infinite;
      animation:spinCW 36s steps(72, start) infinite;
    }
    top: -100vh;
    left: -25vw;
    opacity: .25;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
  }
  &.right {
    .slide1 {
      -webkit-animation:spinCCW 28s linear infinite;
      -moz-animation:spinCCW 28s linear infinite;
      animation:spinCCW 28s linear infinite;
      &.isMobile {
        -webkit-animation:spinCCW 28s steps(72, start) infinite;
        -moz-animation:spinCCW 28s steps(72, start) infinite;
        animation:spinCCW 28s steps(72, start) infinite;
      }
    }
    .slide2 {
      -webkit-animation:spinCW 36s linear infinite;
      -moz-animation:spinCW 36s linear infinite;
      animation:spinCW 36s linear infinite;
      &.isMobile {
        -webkit-animation:spinCW 36s steps(72, start) infinite;
        -moz-animation:spinCW 36s steps(72, start) infinite;
        animation:spinCW 36s steps(72, start) infinite;
      }
    }
    .slide3 {
      -webkit-animation:spinCW 24s linear infinite;
      -moz-animation:spinCW 24s linear infinite;
      animation:spinCW 24s linear infinite;
      &.isMobile {
        -webkit-animation:spinCW 24s steps(72, start) infinite;
        -moz-animation:spinCW 24s steps(72, start) infinite;
        animation:spinCW 24s steps(72, start) infinite;
      }
    }
  }
}
</style>

