<template>
  <v-container fluid class="BattlestarGalacticaCastView content-page raster">
    <page-title title="Battlestar Galactica: Cast Photos" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaCastView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0187.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0231.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_8599.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_8948.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_8977.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9035.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9110.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9151.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9542.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9543.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9651.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_9932.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0448.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0479.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0509.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0592.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0934.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_0979.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_1097.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/IMG_1096.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/cast/boxeymuffet.jpg')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
