<template>
  <v-container fluid class="ArcadeBumperStickersView content-page raster">
    <page-title title="Arcade Bumper Stickers" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeBumperStickersView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Pac-Man Bumper Sticker',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/pacman_bumpersticker.jpg')
        },
        {
          text: 'Pac-Man Bumper Sticker',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/pacman_bumpersticker2.png')
        },
        {
          text: 'Pac-Man Bumper Sticker',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/pacman_bumpersticker3.png')
        },
        {
          text: 'Pac-Man Bumper Sticker',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/pacman_bumpersticker4.png')
        },
        {
          text: 'Pac-Man Bumper Sticker',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/pacman_bumpersticker5.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
