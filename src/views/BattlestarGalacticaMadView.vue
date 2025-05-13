<template>
  <v-container fluid class="BattlestarGalacticaMadView content-page raster">
    <page-title title="Battlestar Galactica: Mad Magazine Parody" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaMadView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Page 1',
          image: require('@/assets/images/pages/bsg/mad/bgmad1.jpg'),
        },
        {
          text: 'Page 2',
          image: require('@/assets/images/pages/bsg/mad/bgmad2.jpg'),
        },
        {
          text: 'Page 3',
          image: require('@/assets/images/pages/bsg/mad/bgmad3.jpg'),
        },
        {
          text: 'Page 4',
          image: require('@/assets/images/pages/bsg/mad/bgmad4.jpg'),
        },
        {
          text: 'Page 5',
          image: require('@/assets/images/pages/bsg/mad/bgmad5.jpg'),
        },
        {
          text: 'Page 6',
          image: require('@/assets/images/pages/bsg/mad/bgmad6.jpg'),
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
