<template>
  <v-container fluid class="ArcadeAdsView content-page raster">
    <page-title title="Arcade Ads" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeAdsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Atari Joust Ad',
          image: require('@/assets/images/pages/arcade/scans/ads/atari_joust_ad.jpg')
        },
        {
          text: 'Atari Ad',
          image: require('@/assets/images/pages/arcade/scans/ads/image (1).jpg')
        },
        {
          text: 'Pac-Man Watch Ad',
          image: require('@/assets/images/pages/arcade/scans/ads/image (13).jpg')
        },
        {
          text: 'Sears Tele-Games Contest Ad',
          image: require('@/assets/images/pages/arcade/scans/ads/image (18).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
