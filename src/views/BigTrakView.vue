<template>
  <v-container fluid class="BigTrakView content-page raster">
    <page-title title="Big Trak" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/bigtrak/bigtrak-hero.png')" align="left">
    <article class="articletext">
      <p>
        (From Wikipedia) - <i>"Big Trak is a programmable electric vehicle created by Milton Bradley in 1979, resembling a futuristic Sci-Fi tank / utility vehicle. The original Big Trak was a six-wheeled tank with a front-mounted blue "photon beam" headlamp, and a keypad on top. The toy could remember up to 16 commands, which it then executed in sequence. There also was an optional cargo trailer accessory. Once hooked to the Big Trak, this trailer could be programmed to dump its payload."</i>
      </p>
      <p>
        I got one of these for Christmas when they first came out, along with the cargo trailer. I was so much fun to play with, and it had such a super-cool futuristic look to it! I no longer have my original Big Trak but did manage
        to purchase a used one still in the box (albiet, sadly, with a broken wheel) for only around $20 or so.
      </p>
      <p>
        Below you will find an assortment of Big Trak images I've found around the Internet.
      </p>
    </article>
    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Videos</h3>
    <center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u6V-tuOf3dE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BigTrakView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'My Big Trak!',
          image: require('@/assets/images/pages/bigtrak/IMG_0662.jpg')
        },
        {
          text: 'My Big Trak! (with cargo trailer)',
          image: require('@/assets/images/pages/bigtrak/IMG_0665.jpg')
        },
        {
          text: 'My Big Trak!',
          image: require('@/assets/images/pages/bigtrak/mine.jpg')
        },
        {
          text: 'Big Trak Photo',
          image: require('@/assets/images/pages/bigtrak/bigtrak2.jpg')
        },
        {
          text: 'Big Trak with Cargo Trailer',
          image: require('@/assets/images/pages/bigtrak/bigtrak4.jpg')
        },
        {
          text: 'Big Trak with Cargo Trailer',
          image: require('@/assets/images/pages/bigtrak/bigtrak3.jpg')
        },
        {
          text: 'Big Trak Catalog Photo',
          image: require('@/assets/images/pages/bigtrak/catalog0.jpg')
        },
        {
          text: 'Big Trak Catalog Photo',
          image: require('@/assets/images/pages/bigtrak/catalog1.jpg')
        },
        {
          text: 'Big Trak Catalog Photo',
          image: require('@/assets/images/pages/bigtrak/catalog2.jpg')
        },
        {
          text: 'Big Trak Catalog Photo',
          image: require('@/assets/images/pages/bigtrak/catalog3.jpg')
        },
        {
          text: 'Big Trak Catalog Photo',
          image: require('@/assets/images/pages/bigtrak/catalog4.jpg')
        },
        {
          text: 'Big Trak Advertisement',
          image: require('@/assets/images/pages/bigtrak/bigtrakad1.png')
        },
        {
          text: 'Big Trak Advertisement',
          image: require('@/assets/images/pages/bigtrak/bigtrakad2.png')
        },
        {
          text: 'Big Trak Advertisement',
          image: require('@/assets/images/pages/bigtrak/bigtrakad3.png')
        },
        {
          text: 'Big Trak Advertisement',
          image: require('@/assets/images/pages/bigtrak/bigtrakad4.png')
        },
        {
          text: 'Big Trak Article',
          image: require('@/assets/images/pages/bigtrak/article1.jpg')
        },
        {
          text: 'Big Trak Article',
          image: require('@/assets/images/pages/bigtrak/article2.jpg')
        },
        {
          text: 'Big Trak Article',
          image: require('@/assets/images/pages/bigtrak/article3.jpg')
        },
        {
          text: 'Big Trak Transport Box',
          image: require('@/assets/images/pages/bigtrak/transportbox1.jpg')
        },
        {
          text: 'Big Trak Transport Box',
          image: require('@/assets/images/pages/bigtrak/transportbox2.jpg')
        },
        {
          text: 'Big Trak And Trailer Ad',
          image: require('@/assets/images/pages/bigtrak/bigtrackandtrailerad.jpg')
        },
        {
          text: 'The Big Trak Keypad',
          image: require('@/assets/images/pages/bigtrak/keypad.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
