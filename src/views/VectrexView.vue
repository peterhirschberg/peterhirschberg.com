<template>
  <v-container fluid class="VectrexView content-page raster">
    <page-title title="Vectrex" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/vectrex/vectrex-hero-small.png')" align="left">
    <article class="articletext">
      <p>
        (From Wikipedia) - <i>"The Vectrex is a vector display-based home video game console released in 1982. In contrast to other video game systems available at the time, the Vectrex uses a monochrome CRT monitor, capable of displaying vector graphics, without need to be hooked up to a television set. The control pad is mounted to the base of the console, and is detachable. Games came with color overlays to compensate for the monochrome screen."</i>
      </p>
      <p>
        The Vectrex was completely revolutionary when it was released. I remember when these first came out I wanted one SOOOOOO badly. I finally acquired one several years ago from eBay along with a multi-cart with all the games on it. With vector-type arcade video games having always been my favorite, I definitely love my little Vectrex machine!
      </p>
    </article>
    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'VectrexView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'My Vectrex!',
          image: require('@/assets/images/pages/vectrex/myvectrex.jpg')
        },
        {
          text: 'Vectrex Ad',
          image: require('@/assets/images/pages/vectrex/vectrexad.jpg')
        },
        {
          text: 'Vectrex Ad',
          image: require('@/assets/images/pages/vectrex/vectrexad2.jpg')
        },
        {
          text: 'Vectrex Flyer 1 (Outside).',
          image: require('@/assets/images/pages/vectrex/vfoutside.jpg')
        },
        {
          text: 'Vectrex Flyer 1 (Inside).',
          image: require('@/assets/images/pages/vectrex/vfinside.jpg')
        },
        {
          text: 'Vectrex Flyer 2 (Front).',
          image: require('@/assets/images/pages/vectrex/vectrex-pg1.png')
        },
        {
          text: 'Vectrex Flyer 2 (Back).',
          image: require('@/assets/images/pages/vectrex/vectrex-pg2.png')
        },
        {
          text: 'Advertisement for the Vectrex "Light Pen" Accessory.',
          image: require('@/assets/images/pages/vectrex/vectrex-lightpen.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
