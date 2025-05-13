<template>
  <v-container fluid class="ArcadeMusicView content-page raster">
    <page-title title="Arcade Music Scans" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeMusicView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Space Invaders Record (front)',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/space_invaders_record_front.jpg')
        },
        {
          text: 'Space Invaders Record (back)',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/space_invaders_record_rear.jpg')
        },
        {
          text: '"Pac-Man Fever" Sheet Music (front cover)',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_cover.png')
        },
        {
          text: '"Pac-Man Fever" Sheet Music',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_02.png')
        },
        {
          text: '"Pac-Man Fever" Sheet Music',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_03.png')
        },
        {
          text: '"Pac-Man Fever" Sheet Music',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_04.png')
        },
        {
          text: '"Pac-Man Fever" Sheet Music',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_05.png')
        },
        {
          text: '"Pac-Man Fever" Sheet Music (back cover)',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/pacman_fever_sheet_music/pmf_backcover.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
