<template>
  <v-container fluid class="SpaceDustView content-page raster">
    <page-title title="Space Dust Candy" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/spacedust/spacedust-hero.png')" align="left">
    <article class="articletext">
      <p>
        Everybody remembers Pop Rocks from the late 70s, but before I had ever heard of Pop Rocks we had Space Dust. That was the case where I lived anyway.
      </p>
      <p>
        Produced in 1978 by General Foods, I remember it being all the rage. Then suddenly it was gone and there was only Pop Rocks.
      </p>
      <p>
        Space Dust differed from Pop Rocks in that the candy was powdery, rather than the large chunks that Pop Rocks had. It gave you more of a nice continuous sizzle like a carbonated drink, rather than the sometimes painful pops of Pop Rocks. I always thought Pop Rocks were a cheap ripoff of Space Dust, which I prefered over Pop Rocks.
      </p>
      <p>
        According to Doug Burns, who was involved with both products back in the 70s, "Pop Rocks came first, then Space Dust. Both originally owned by General Foods. Space Dust happened because Pop Rocks was made up of the top 25% (if I remember right) largest crystals when the product was made. Some smart dude decided to market the rest as Space Dust rather than throw it away as they had been doing. Space Dust became Cosmic Candy due to the Angel Dust scare. There were also articles back then in the Penthouse letters about the products as a sex aid! We brought out a bubblegum product called Incredibubble that lasted for a brief time". Doug was the one responsible for coining the name "Cosmic Candy" to replace the name Space Dust. According to him, there was also a TV commercial produced that was never aired that featured the three "planet heads" eating Space Dust.
      </p>
      <p>
        There was a book published about Pop Rocks that talks about Space Dust as well. The book is called "Pop Rocks: The Inside Story of America’s Revolutionary Candy", and is available from <a href="https://www.amazon.com/Pop-Rocks-Inside-Americas-Revolutionary/dp/0978631803/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1202062258&sr=1-1" target="_blank">Amazon</a>.
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
  name: 'SpaceDustView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Space Dust - Cherry (front)',
          image: require('@/assets/images/pages/spacedust/space_dust_cherry_front.jpg')
        },
        {
          text: 'Space Dust - Cherry (back)',
          image: require('@/assets/images/pages/spacedust/space_dust_cherry_back.jpg')
        },
        {
          text: 'Space Dust - Grape (front)',
          image: require('@/assets/images/pages/spacedust/space_dust_grape_front.jpg')
        },
        {
          text: 'Space Dust - Grape (back)',
          image: require('@/assets/images/pages/spacedust/space_dust_grape_back.jpg')
        },
        {
          text: 'Space Dust - Orange (front)',
          image: require('@/assets/images/pages/spacedust/space_dust_orange_front.jpg')
        },
        {
          text: 'Space Dust - Orange (back)',
          image: require('@/assets/images/pages/spacedust/space_dust_orange_back.jpg')
        },
        {
          text: 'Space Dust Box Scan - Grape',
          image: require('@/assets/images/pages/spacedust/space_dust_grape_box.png')
        },
        {
          text: 'Space Dust Poster I Made',
          image: require('@/assets/images/pages/spacedust/space_dust_poster.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
