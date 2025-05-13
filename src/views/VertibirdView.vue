<template>
  <v-container fluid class="VertibirdView content-page raster">
    <page-title title="Vertibird" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/vertibird/vertibird-hero.png')" align="left">
    <article>
      <p>
        The VertiBird helicopter flies around a central base containing an electric motor, spring lift assist, pitch control, batteries, and a throttle.
      </p>
      <p>
        The helicopter is controlled using a two lever control unit. The controls operate similar to a real helicopter. The throttle control provides proportional control of the blade speed. The pitch control provides for tilting the Vertibird forward or backward. During flight the VertiBird is subject to the same physical flight characteristics as a real helicopter. This included ground-effects for low level hovering, plus altitude gains and losses when changing direction. Overall the VertiBird is easy to learn how to pilot for basic flight, but precision flying  requires some patience and time on the controls as in a real helicopter.
      </p>
      <p>
        VertiBird came in MANY different variations. I had the "Police" version as a kid.
      </p>
      <p>
        Please see the <a href="#/Software" target="_blank">My Games &amp; Software</a> page for my VertiBird simulator!
      </p>
      <p>
        Below are some VertiBird photos I've collected from around the Internet.
      </p>
    </article>
    <lightbox-slides :slides="slides" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">VIDEOS</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1XAiraoCheQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'VertibirdView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/vertibird/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/vertibird/image (18).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
