<template>
  <v-container fluid class="BattlestarGalacticaToysView content-page raster">
    <page-title title="Battlestar Galactica: Toys" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaToysView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0073.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0137.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0140.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0186.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0189.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0190.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0192.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0201.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0207.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0208.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0209.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0210.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0211.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0212.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0213.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0214.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_8291.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_8577.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_8810.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_9148.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_9447.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/bsg_model_ad.png')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_9605.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/toyad.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0478.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/bsg2.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/bsgfigures.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/IMG_0789.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/toys/rocket.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
