<template>
  <v-container fluid class="BattlestarGalacticaGalacticonView content-page raster">
    <page-title title="Battlestar Galactica: Galacticon 2013 - Houston, TX" icon="mdi-rocket"></page-title>
    <article class="articletext">
      <p>
        In 2013 I attended "GalactiCon" in Houston Texas. It was a mind-blowing experience, getting to meet the surviving cast. I will always treasure the memories.
      </p>
    </article>
    <br><br>
    <h3 class="pagesubtitle">My Photos</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>
    <br><br>
    <h3 class="pagesubtitle">Other Photos (Not Mine)</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaGalacticonView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          text: 'Me, Dirk Benedict, and Richard Hatch',
          image: require('@/assets/images/pages/bsg/galacticon/hatch benedict hirschberg.jpg')
        },
        {
          text: 'Me and Dirk Benedict',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4928.jpg')
        },
        {
          text: 'Me and Richard Hatch',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4924.jpg')
        },
        {
          text: 'Me Posing with a Cylon',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4946.jpg')
        },
        {
          text: 'Event Floor',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4942_stitch.jpg')
        },
        {
          text: 'Very Large Cylon Raider',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4926.jpg')
        },
        {
          text: 'Cosplayers',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4945.jpg')
        },
        {
          text: 'Jack Stauffer and a Cylon',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4934.jpg')
        },
        {
          text: 'Event Poster',
          image: require('@/assets/images/pages/bsg/galacticon/IMG_4947.jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic1.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic2.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic3.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic4.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic5.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic6.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic7.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic8.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic9.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic10.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic11.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic12.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic13.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/galacticon/other/pic14.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
