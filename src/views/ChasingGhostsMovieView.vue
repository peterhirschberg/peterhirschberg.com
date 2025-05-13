<template>
  <v-container fluid class="ChasingGhostsMovieView content-page raster">
    <page-title title='"Chasing Ghosts: Beyond the Arcade"' icon="mdi-filmstrip"></page-title>
    <img :src="require('@/assets/images/pages/chasingghosts/page.png')" width="240px" align="left">
    <article>
      <p>
        A fascinating documentary about the early '80s arcade scene and the players that thrived in that world. The film premiered at the 2007 Sundance Festival.
      </p>
      <p>
        For this film I provided 3D animations, graphics, logo design, and titling work. I also created some of the swag that was being given away at the Sundance Festival.        
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Movie Poster I Created For the Film</h3>
    <lightbox-slides :slides="slides3"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Paper Foldup Game</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Stills of my CGI Work</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Videos of my CGI Work</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nCVK7n9yJFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LR8tWePKaGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ChasingGhostsMovieView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (1).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (2).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (3).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (4).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (5).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (6).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (7).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (8).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (9).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (10).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (11).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (12).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (13).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (14).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (15).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (16).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (17).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (18).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (19).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (20).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (21).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (22).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (23).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (24).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (25).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (26).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (27).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (28).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (29).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (30).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (31).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (32).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (33).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (34).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (35).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (36).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (37).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (38).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (39).jpg')
        },
        {
          image: require('@/assets/images/pages/chasingghosts/stills/still (40).jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/chasingghosts/cg_foldup.png')
        }
      ],
      slides3: [
        {
          image: require('@/assets/images/pages/chasingghosts/poster.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
