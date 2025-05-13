<template>
  <v-container fluid class="SFOToyExhibitView content-page raster">
    <page-title title="Japanese Toy & Art Exhibit at SFO Airport" icon="mdi-castle"></page-title>
    <article>
      <p>
        This was a temporary exhibit at San Francisco's SFO airport. I was lucky enough to be passing through travelling for work and took some photos.
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
  name: 'SFOToyExhibitView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/sfotoymuseum/image (19).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
