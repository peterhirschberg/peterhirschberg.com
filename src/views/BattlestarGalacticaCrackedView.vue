<template>
  <v-container fluid class="BattlestarGalacticaCrackedView content-page raster">
    <page-title title="Battlestar Galactica: Cracked Magazine Parody" icon="mdi-rocket"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaCrackedView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Cover',
          image: require('@/assets/images/pages/bsg/cracked/cover.png')
        },
        {
          text: 'Page 1',
          image: require('@/assets/images/pages/bsg/cracked/page1.png')
        },
        {
          text: 'Page 2',
          image: require('@/assets/images/pages/bsg/cracked/page2.png')
        },
        {
          text: 'Page 3',
          image: require('@/assets/images/pages/bsg/cracked/page3.png')
        },
        {
          text: 'Page 4',
          image: require('@/assets/images/pages/bsg/cracked/page4.png')
        },
        {
          text: 'Page 5',
          image: require('@/assets/images/pages/bsg/cracked/page5.png')
        },
        {
          text: 'Page 6',
          image: require('@/assets/images/pages/bsg/cracked/page6.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
