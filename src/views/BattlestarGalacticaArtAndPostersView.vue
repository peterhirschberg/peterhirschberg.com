<template>
  <v-container fluid class="BattlestarGalacticaArtAndPostersView content-page raster">
    <page-title title="Battlestar Galactica: Posters, Magazines, and Artwork" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaArtAndPostersView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0064.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0157.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0289.png')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0177.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0183.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0184.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0204.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0226.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0227.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8162.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8164.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8848.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8967.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8974.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8978.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_8979.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9120.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9121.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9188.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9189.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9385.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9386.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9432.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9531.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9544.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9570.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9593.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9604.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9643.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9711.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0242.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_0937.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (1).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (2).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (3).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (4).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (5).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/fanartandposters/bsg (8).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
