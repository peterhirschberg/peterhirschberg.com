<template>
  <v-container fluid class="BioshockView content-page raster">
    <page-title title="Bioshock" icon="mdi-content-save"></page-title>
    <img :src="require('@/assets/images/pages/bioshock/bioshock-hero.png')" align="left">
    <article>
      <p>
        (From Wikipedia) - <i>"The series consists of three main games. BioShock and BioShock 2 were released in 2007 and 2010, respectively, and take place in 1960 and 1968 in the fictional underwater city of Rapture. BioShock Infinite, released in 2013, is thematically and narratively tied to the first games, but takes place in 1912 aboard the floating city of Columbia. Combined, the three games have sold more than 34 million copies as of December 2019, making the series one of the best-selling video game franchises of all time. A mobile version of the first game was developed by IG Fun and released in 2009. A motion picture based on the first game had been planned but was ultimately cancelled."</i>
      </p>
      <p>
        I actually started playing this game series a couple years after it came out. I immediately fell in love with
        its art-deco beauty and fantastic and spooky undersea atmosphere. I love that they tied the gorgeous "BioShock Infinite"
        back to the original games.
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Syringe Replica</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Images</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BioshockView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          text: 'Full-sized "Little Sister" syringe I made for my daughter\'s cosplay',
          image: require('@/assets/images/pages/bioshock/mysyringe/mysyringe1.jpg')
        },
        {
          text: 'Full-sized "Little Sister" syringe I made for my daughter\'s cosplay',
          image: require('@/assets/images/pages/bioshock/mysyringe/mysyringe2.jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (13).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (12).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/comics/BioShock_cover.jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/comics/BioShock2_cover.jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/comics/BioShockInfinite_cover.jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (1).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (2).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (3).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (4).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (5).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/misc/bioshock (8).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (1).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (2).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (3).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (4).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (5).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (8).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (9).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (10).jpg')
        },
        {
          image: require('@/assets/images/pages/bioshock/posters/poster (11).jpg')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
