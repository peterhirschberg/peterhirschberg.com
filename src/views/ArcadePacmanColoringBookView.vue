<template>
  <v-container fluid class="ArcadePacmanColoringBookView content-page raster">
    <page-title title="Pac-Man Coloring Book" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadePacmanColoringBookView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/front.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan1.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan2.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan3.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan4.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan5.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan6.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan7.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan8.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan9.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/scan10.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/rear.jpg')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
