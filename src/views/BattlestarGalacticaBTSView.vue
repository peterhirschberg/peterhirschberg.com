<template>
  <v-container fluid class="BattlestarGalacticaBTSView content-page raster">
    <page-title title="Battlestar Galactica: Behind The Scenes" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaBTSView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic4.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic5.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic6.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic7.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic8.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic9.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic10.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic11.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic12.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic13.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic14.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic15.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic16.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic17.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic18.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic19.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic20.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic1.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic2.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic3.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic21.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic22.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/IMG_0505.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/IMG_0456.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/IMG_0449.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic23.png')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic24.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic25.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic26.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/pic27.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/behindthescenes/IMG_1032.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
