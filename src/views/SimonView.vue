<template>
  <v-container fluid class="SimonView content-page raster">
    <page-title title="Simon & Super Simon" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/simon/simon-hero.png')" align="left">
    <article>
      <p>
        Simon is an electronic game of memory skill. The device creates a series of tones and lights and requires a user to repeat the sequence.
        If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over.
        Simon was launched in 1978 and was an immediate success, becoming a pop culture symbol of the 1970s and 1980s.
      </p>
      <p>
        I got one of these when they first came out, followed by a "Super Simon" when that was released. I liked the toy so much I
        painted the walls of my home gameroom <a href="#/LunaCityArcadeMirror" target="_blank">"Luna City Arcade"</a> to match the colors of the game!
        I had plans to create a giant wall
        of Simon toys, all matrixed together to a computer, with the lights all sequenced to go along with music being played.
        Alas, I never completed it. But for a while I had cornered the market on eBay for Simon machines. See photo below.
      </p>
    </article>
    <lightbox-slides :slides="slides" style="clear: both;"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'SimonView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Me posing with my massive Simon collection.',
          image: require('@/assets/images/pages/simon/simons.jpg')
        },
        {
          text: 'My Simon and Super Simon.',
          image: require('@/assets/images/pages/simon/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/simon/page.jpg')
        },
        {
          image: require('@/assets/images/pages/simon/Simon_Electronic_Game.jpg')
        },
        {
          image: require('@/assets/images/pages/simon/s-l1600 (1).jpg')
        },
        {
          image: require('@/assets/images/pages/simon/s-l1600.jpg')
        },
        {
          image: require('@/assets/images/pages/simon/IMG_9807.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
