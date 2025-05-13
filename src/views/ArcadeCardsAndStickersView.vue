<template>
  <v-container fluid class="ArcadeCardsAndStickersView content-page raster">
    <page-title title="Arcade Cards & Stickers" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeCardsAndStickersView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (6).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (7).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (8).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (9).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (10).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (11).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (12).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (13).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (14).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (15).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (1).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (2).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (3).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (4).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (5).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (6).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (7).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (8).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (9).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (10).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (11).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (12).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (13).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (14).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (15).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (16).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (17).png')
        },
        {
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/scan (18).png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
