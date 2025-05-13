<template>
  <v-container fluid class="ShowRodsView content-page raster">
    <page-title title="Toy Cars & Show Rods" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/showrods/showrods-hero.png')" align="left">
    <article class="articletext">
      <p>
        I have always loved model cars, but specifically "show rods". I have a large collection of show rod models, die-casts, and artwork. Here are some vintage ads for some classic show rod models from the '70s.
      </p>
      <p>
        I've modeled a lot of these cars in 3D. Please check them out on my <a href="https://peterhirschberg.weebly.com/hot-rods--cars.html" target="_blank">Porfolio site</a>!
      </p>
      <p>
        I used to go to the drug store where there was a models section, and they always had these crazy kits for sale. Years later, I found that they were almost all designed by just a few people. Tom Daniels, Ed "Big Daddy" Roth, and George Barris. These guys are my heros now. Boy did they come up with some insane stuff.
      </p>
      <p>
        If you are also interested in show rods, you may be interested in these links:<br>
        <a href="http://www.showrods.com/" target="_blank">showrods.com</a> - Dave's Show Rod Rally Vintage Car Models<br>
        <a href="http://tomdaniel.com/" target="_blank">tomdaniel.com</a> - Official website for Tom Daniel<br>
        <a href="http://www.edroth.com/" target="_blank">edroth.com</a> - Official website for Ed Roth<br>
        <a href="http://www.barris.com/" target="_blank">barris.com</a> - Official website for George Barris<br>
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
  name: 'ShowRodsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_01.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_02.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_03.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_04.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_05.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_06.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_07.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_08.jpg')
        },
        {
          text: 'Advertisement Scan',
          image: require('@/assets/images/pages/showrods/td_ad_09.jpg')
        },
        {
          text: 'A full-sized Red Baron car! o_O',
          image: require('@/assets/images/pages/showrods/IMG_0195.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
