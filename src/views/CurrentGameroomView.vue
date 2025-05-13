<template>
  <v-container fluid class="CurrentGameroomView content-page raster">
    <page-title title="Our Current Gameroom" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'CurrentGameroomView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0011.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0013.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0015.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0047.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0061.png')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0594.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_0595.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/current/IMG_9401.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
