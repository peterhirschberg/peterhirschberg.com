<template>
  <v-container fluid class="BattlestarGalacticaScreenshotsView content-page raster">
    <page-title title="Battlestar Galactica: Screenshots" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaScreenshotsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_0188.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_0956.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_8839.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (8).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_9404.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_9635.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/IMG_0512.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (1).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (2).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (3).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (4).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (5).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/screenshots/screenshot (9).jpg')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
