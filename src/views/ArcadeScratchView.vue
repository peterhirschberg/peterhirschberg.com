<template>
  <v-container fluid class="ArcadeScratchView content-page raster">
    <page-title title="McDonald's Arcade Scratch 'n Win Scans" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeScratchView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/scratch/image (34).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/scratch/scratch_cards_front.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/scratch/scratch_cards_rear.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
