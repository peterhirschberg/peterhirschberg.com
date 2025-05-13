<template>
  <v-container fluid class="BattlestarGalacticaBlueprintsView content-page raster">
    <page-title title="Battlestar Galactica: Blueprints" icon="mdi-rocket"></page-title>
    <h3 class="pagesubtitle" style="clear: both;">Official Blueprints</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>
    <h3 class="pagesubtitle" style="clear: both;">Other Blueprints</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaBlueprintsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          text: 'Cover',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_cover.jpg'),
        },
        {
          text: 'Page 1',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_01.png'),
        },
        {
          text: 'Page 2',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_02.png'),
        },
        {
          text: 'Page 3',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_03.png'),
        },
        {
          text: 'Page 4',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_04.png'),
        },
        {
          text: 'Page 5',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_05.png'),
        },
        {
          text: 'Page 6',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_06.png'),
        },
        {
          text: 'Page 7',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_07.png'),
        },
        {
          text: 'Page 8',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_08.png'),
        },
        {
          text: 'Page 9',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_09.png'),
        },
        {
          text: 'Page 10',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_10.png'),
        },
        {
          text: 'Page 11',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_11.png'),
        },
        {
          text: 'Page 12',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_12.png'),
        },
        {
          text: 'Page 13',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_13.png'),
        },
        {
          text: 'Page 14',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_14.png'),
        },
        {
          text: 'Page 15',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_15.png'),
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/bsg/other_blueprints/blueprint1.jpg'),
        },
        {
          image: require('@/assets/images/pages/bsg/other_blueprints/blueprint2.jpg'),
        },
        {
          image: require('@/assets/images/pages/bsg/other_blueprints/blueprint3.jpg'),
        },
        {
          image: require('@/assets/images/pages/bsg/other_blueprints/blueprint4.jpg'),
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
