<template>
  <v-container fluid class="BattlestarGalacticaAutographsView content-page raster">
    <page-title title="Battlestar Galactica: Galacticon 2013 Autographs" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaAutographsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 1.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 2.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 3.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 4.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 5.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 6.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 7.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 8.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/autographs/scan 9.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
