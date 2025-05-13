<template>
  <v-container fluid class="TalkingLearningMachineView content-page raster">
    <page-title title="Mattel Talking Learning Machine" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/talkinglearningmachine/talkinglearningmachine-hero.png')" align="left">
    <article class="articletext">
      <p>
        I had one of these when I was a kid. A very inventive and cool toy for the time (late 60s).
      </p>
      <p>
        The toy consisted of plastic double-sided tiles with a series of "record groves" across the bottom. Depending on the position of a selector lever on the main unit, the machine would play one of the 6 available tracks on each tile. The tracks would each be a different angle on what was pictured on the tile. For example, the tile might have a picture of three red triangles. One position of the slider would speak the word "three", one would speak "triangle", and one would speak "red". The other positions of the sliders would do weird things like sound effects, or perhaps say "shapes". A tile of a baby would say "baby", make the sound of a baby, etc.
      </p>
      <p>
        The tiles would fit together in a tray on the machine, such that you could string together a bunch of tiles to create sentences and such. And yes, the machine really did use record grooves. The main unit had a little needle that would play the appropriate track on each tile as the machine pulled them past with a motor that was built into the unit.
      </p>
      <p>
        I recently picked up a boxed one of these from eBay. It came with a bunch of tiles, but unfortunately the machine doesn't work. I'd fix it, but it's held together with a type of screw that I haven't been able to find a driver for yet.
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'TalkingLearningMachineView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'My Talking Learning Machine',
          image: require('@/assets/images/pages/talkinglearningmachine/mine.jpg')
        },
        {
          text: '1968 Talking Learning Machine Magazine Advertisement.',
          image: require('@/assets/images/pages/talkinglearningmachine/talking_learning_machine_ad.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
