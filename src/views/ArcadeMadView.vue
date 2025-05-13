<template>
  <v-container fluid class="ArcadeMadView content-page raster">
    <page-title title="Mad Magazine Arcade Scans" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ArcadeMadView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (37).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (21).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (14).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (11).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (41).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (43).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (42).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/mad/image (45).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
