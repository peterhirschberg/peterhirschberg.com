<template>
  <v-container fluid class="HandheldGamesView content-page raster">
    <page-title title="Handheld Electronic Games" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/handheldgames/handheldgames-hero.png')" align="left">
    <article class="articletext">
      <p>
        These little gems came out in the mid to late '70s. They would take a single 9V battery, and all gameplay was typically done with a small matrix of LED dots or a simple fluorescent display.
        All sound was done with a tiny built-in piezo driver. I was in love with these little guys the minute I first saw a neighbor kid with a Mattel "Auto Race"!
      </p>          
      <p>
        I also have several other handheld games from the era like Merlin, Simon, Super Simon, etc.
      </p>          
      <p>
        My favorite games were the "Battlestar Galactica" Space Alert, Master Blaster, and Super Simon.            
      </p>
      <p>
        Be sure to check out my handheld game simulator <span class="redglow">"LEDHead"</span> on my <a href="#/Software">Games &amp; Software Page</a>!
      </p>
    </article>
    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>
    <h3 class="pagesubtitle" style="clear: both;">Mattel Catalog Scans</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'HandheldGamesView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          text: 'My handheld game collection',
          image: require('@/assets/images/pages/handheldgames/handhelds1.jpg')
        },
        {
          text: 'My handheld games collection',
          image: require('@/assets/images/pages/handheldgames/handhelds2.jpg')
        },
        {
          text: 'My mint "Master Blaster" game',
          image: require('@/assets/images/pages/handheldgames/masterblaster1.jpg')
        },
        {
          text: 'My mint "Master Blaster" game',
          image: require('@/assets/images/pages/handheldgames/masterblaster2.jpg')
        },
        {
          text: 'My mint "Master Blaster" game',
          image: require('@/assets/images/pages/handheldgames/masterblaster3.jpg')
        },
        {
          text: 'Master Blaster flyer',
          image: require('@/assets/images/pages/handheldgames/masterblaster.jpg')
        },
        {
          text: 'Me posing with my VERY large "Simon" collection (which I no longer have)',
          image: require('@/assets/images/pages/handheldgames/simons.jpg')
        },
        {
          text: 'My remaining Simon and Super Simon collection',
          image: require('@/assets/images/pages/handheldgames/mysimons.jpg')
        },
        {
          text: 'Vintage advertisement for "Space Laser Attack". I own one of these.',
          image: require('@/assets/images/pages/handheldgames/space_laser_attack.png')
        },
        {
          text: 'Vintage advertisement for Mattel handheld games',
          image: require('@/assets/images/pages/handheldgames/mattele782.jpg')
        },
        {
          text: 'Vintage advertisement for Mattel Basketball',
          image: require('@/assets/images/pages/handheldgames/mattele781.jpg')
        },
        {
          text: 'Simon advertisement',
          image: require('@/assets/images/pages/handheldgames/simonad1.jpg')
        },
        {
          text: 'Super Simon advertisement',
          image: require('@/assets/images/pages/handheldgames/simonad2.jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (1).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (2).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (3).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (4).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (5).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (6).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (7).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (8).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (9).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (10).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (11).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (12).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (13).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (14).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (15).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (16).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (17).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (18).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (19).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (20).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (21).jpg')
        },
        {
          image: require('@/assets/images/pages/handheldgames/catalog/catalog (22).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
