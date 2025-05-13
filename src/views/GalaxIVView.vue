<template>
  <v-container fluid class="GalaxIVView content-page raster">
    <page-title title="Testors Galax IV Hovercraft" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/galaxiv/galax-hero.png')" align="left">
    <article class="articletext">
      <p>
        This was a plastic hovercraft produced by Testors that was powered by a small .049 glow fuel engine. It had no controls, and would freefloat about 1" above smooth surfaces - bouncing lazily around our patio like a giant air-hockey puck.
      </p>
      <p>
        I believe this toy came out sometime around 1978. You can see the Star Wars influence that nearly every toy had at the time.
      </p>
      <p>
        If I remember correctly, I got this item by selling greeting cards door to door (one of those places that used to advertise in kid's magazines and comics). The engine used to scare the bejeesus out of me when it ran.
      </p>
      <p>
        I have three(!) of these toys now, all from eBay (my original toy disappeared). Two are used and the other one I got was still sealed in the box(!). The used ones aren't running at the moment.
      </p>
      <p>
        You can listen to the "instructional record" that came with the toy by clicking <a href="/download/galax_record.mp3" target="_blank">here</a>.
      </p>
    </article>
    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Videos</h3>

    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/n8WiFgchtqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XWu4PPGd2I4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'GalaxIVView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Galax IV Flyer scan',
          image: require('@/assets/images/pages/galaxiv/flyer.jpg')
        },
        {
          text: 'A couple of my Galax IVs',
          image: require('@/assets/images/pages/galaxiv/imgp5115.jpg')
        },
        {
          text: 'A couple of my Galax IVs',
          image: require('@/assets/images/pages/galaxiv/imgp5116.jpg')
        },
        {
          text: 'My kids posing with one of my Galax IVs, getting ready to start it up!',
          image: require('@/assets/images/pages/galaxiv/imgp5112.jpg')
        },
        {
          text: 'Closeup of the engine',
          image: require('@/assets/images/pages/galaxiv/engine.jpg')
        },
        {
          text: 'Scan of the original box',
          image: require('@/assets/images/pages/galaxiv/box_side.png')
        },
        {
          text: 'Galax IV Advertisement',
          image: require('@/assets/images/pages/galaxiv/galaxad1.jpg')
        },
        {
          text: 'Galax IV Advertisement',
          image: require('@/assets/images/pages/galaxiv/galaxad2.jpg')
        },
        {
          text: 'Galax IV Advertisement',
          image: require('@/assets/images/pages/galaxiv/galaxad3.jpg')
        },
        {
          text: 'Instructional record that came with the Galax IV',
          image: require('@/assets/images/pages/galaxiv/record.jpg')
        },
        {
          text: 'Instructions - Page 1',
          image: require('@/assets/images/pages/galaxiv/page1.jpg')
        },
        {
          text: 'Instructions - Page 2',
          image: require('@/assets/images/pages/galaxiv/page2.jpg')
        },
        {
          text: 'Instructions - Page 3',
          image: require('@/assets/images/pages/galaxiv/page3.jpg')
        },
        {
          text: 'Instructions - Page 4',
          image: require('@/assets/images/pages/galaxiv/page4.jpg')
        },
        {
          text: 'Instructions - Page 5',
          image: require('@/assets/images/pages/galaxiv/page5.jpg')
        },
        {
          text: 'Instructions - Page 6',
          image: require('@/assets/images/pages/galaxiv/page6.jpg')
        },
        {
          text: 'Parts List',
          image: require('@/assets/images/pages/galaxiv/partslist.jpg')
        },
        {
          text: 'Scan of the sticker sheet that came with the toy',
          image: require('@/assets/images/pages/galaxiv/stickerscans.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
