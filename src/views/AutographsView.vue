<template>
  <v-container fluid class="AutographsView content-page raster">
    <page-title title="My Autograph Collection" icon="mdi-pen"></page-title>
    <lightbox-slides :slides="slides" style="clear: both;"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'AutographsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/autographs/All Dogs Go To Heaven.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/american tail.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/Egoraptor + Mini Gore.png')
        },
        {
          image: require('@/assets/images/pages/autographs/glados autograph - peter.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/jeff lynn scan_0001_stitch.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/jsj autograph - peter.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/Witchiepoo.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 1.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 2.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 3.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 4.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 5.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 6.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 7.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 8.jpg')
        },
        {
          image: require('@/assets/images/pages/autographs/galacticon/scan 9.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
