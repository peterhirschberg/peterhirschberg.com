<template>
  <v-container fluid class="MicrovisionView content-page raster">
    <page-title title="Microvision" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/microvision/microvision-hero.png')" align="left">
    <article>
      <p>
        Microvision is the first handheld game console that used interchangeable ROM cartridges. It was released by the Milton Bradley Company in November 1979. The Microvision was designed by Jay Smith, the engineer who would later design the Vectrex gaming console. The Microvision's combination of portability and a cartridge-based system led to moderate success, however, very few cartridges, a small screen, and a lack of support from established home video game companies led to its demise in 1981.
      </p>
      <p>
        Interstingly, unlike most later consoles, the Microvision did not contain an onboard processor (CPU). Instead, each game included its own processor contained within the removable cartridge. This meant that the console itself effectively consisted of the controls, LCD panel and LCD controller.
      </p>
      <p>
        The LCD display boasted a whopping resolution of 16 × 16 pixels.
      </p>
      <p>
        Microvision units and cartridges are now somewhat rare. Those that are still in existence are susceptible to three main problems: "screen rot," ESD damage, and keypad destruction.
      </p>
      <p>
        The manufacturing process used to create the Microvision's LCD was primitive by modern standards. Poor sealing and impurities introduced during manufacture has resulted in the condition known as screen rot. The liquid crystal spontaneously leaks and permanently darkens, resulting in a game unit that still plays but is unable to properly draw the screen. While extreme heat (such as resulting from leaving the unit in the sun) which can instantly destroy the screen can be avoided, there is nothing that can be done to prevent screen rot in most Microvision systems.
      </p>
      <p>
        I got one of these for Christmas back when they were first introduced, but sadly it succummed to the inevitable screen rot problem. While I no longer have my Microvision, below are some photos I picked up from the Internet.
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
  name: 'MicrovisionView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/microvision/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/microvision/catalog.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
