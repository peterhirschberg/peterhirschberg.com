<template>
  <v-container fluid class="DragonsLairColoringBookView content-page raster">
    <page-title title="Dragon's Lair Coloring Book" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'DragonsLairColoringBookView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/front.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page1.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page2.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page3.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page4.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page5.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page6.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page7.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page8.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page9.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page10.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page11.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page12.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page13.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page14.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page15.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page16.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page17.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page18.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page19.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page20.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page21.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page22.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page23.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page24.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page25.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page26.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page27.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page28.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page29.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/page30.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/rear.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
