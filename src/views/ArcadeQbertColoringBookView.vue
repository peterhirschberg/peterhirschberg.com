<template>
  <v-container fluid class="ArcadeQbertColoringBookView content-page raster">
    <page-title title="Q*Bert Coloring Book" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeQbertColoringBookView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/frontcover.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page01.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page02.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page03.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page04.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page05.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page06.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page07.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page08.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page09.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page10.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page11.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page12.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page13.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page14.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page15.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page16.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page17.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page18.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page19.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page20.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page21.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page22.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page23.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page24.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page25.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page26.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page27.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page28.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page29.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page30.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page31.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page32.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page33.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page34.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page35.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page36.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page37.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page38.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page39.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page40.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page41.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page42.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page43.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page44.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page45.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page46.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page47.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page48.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page49.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page50.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page51.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page52.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page53.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page54.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page55.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page56.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page57.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page58.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page59.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page60.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page61.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page62.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page63.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/page64.gif')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/rearcover.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
