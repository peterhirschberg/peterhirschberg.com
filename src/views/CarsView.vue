<template>
  <v-container fluid class="CarsView content-page raster">
    <page-title title="Cars" icon="mdi-car-convertible"></page-title>

    <h3 class="pagesubtitle" style="clear: both;">My "Dream" Cars</h3>

    <center>
      <article>
        <p>
          Two of the most beautiful and iconic cars ever made...the Pontiac "Bandit" Trans-Am and the Delorean DMC-12.
        </p>
      </article>
    </center>

    <h3 class="pagesmalltitle" style="clear: both;">Pontiac "Bandit" Trans-Am (1977)</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>

    <h3 class="pagesmalltitle" style="clear: both;">Delorean DMC-12 (1981)</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <h3 class="pagesmalltitle" style="clear: both;">Lamborghini Huracan</h3>
    <center><article><p>Widening the field to foreign cars I consider the Lamborghini Huracan the most beautiful car ever made.</p></article></center>
    <lightbox-slides :slides="slides3"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Cars I Currently Own</h3>

    <h3 class="pagesmalltitle" style="clear: both;">2017 Camaro SS</h3>
    <lightbox-slides :slides="slides4"></lightbox-slides>

    <h3 class="pagesmalltitle" style="clear: both;">2008 Pontiac Solstice</h3>
    <lightbox-slides :slides="slides5"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Cars I Would Love To Own Someday</h3>
    <lightbox-slides :slides="slides6"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Cars I Used To Own</h3>
    <lightbox-slides :slides="slides7"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Fantasy Cars</h3>
    <lightbox-slides :slides="slides8"></lightbox-slides>

    <br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'CarsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        { image: require('@/assets/images/pages/cars/transam/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/transam/image (2).jpg') },
      ],
      slides2: [
        { image: require('@/assets/images/pages/cars/delorean/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (6).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (7).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (8).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (9).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (10).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (11).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (12).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (13).jpg') },
        { image: require('@/assets/images/pages/cars/delorean/image (14).jpg') },
      ],
      slides3: [
        { image: require('@/assets/images/pages/cars/lambo/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/lambo/image (2).jpg') },
        { image: require('@/assets/images/pages/cars/lambo/image (3).jpg') },
      ],
      slides4: [
        { image: require('@/assets/images/pages/cars/camaro/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/camaro/image (3).jpg') },
        { image: require('@/assets/images/pages/cars/camaro/image (4).jpg') },
        // { image: require('@/assets/images/pages/cars/camaro/image (2).jpg') },
      ],
      slides5: [
        { image: require('@/assets/images/pages/cars/solstice/image (4).jpg') },
        { image: require('@/assets/images/pages/cars/solstice/image (0).jpg') },
        { image: require('@/assets/images/pages/cars/solstice/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/solstice/image (3).jpg') },
        { image: require('@/assets/images/pages/cars/solstice/image (5).jpg') },        
      ],
      slides6: [
        { image: require('@/assets/images/pages/cars/ssr/image (2).jpg') },
        { image: require('@/assets/images/pages/cars/ssr/image (3).jpg') },
        { image: require('@/assets/images/pages/cars/ssr/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/prowler/image (1).jpg') },
      ],
      slides7: [
        { image: require('@/assets/images/pages/cars/fiero/image (0).png') },
        { image: require('@/assets/images/pages/cars/fiero/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/fiero/image (2).jpg') },

        { image: require('@/assets/images/pages/cars/smart/image (1).jpg') },

        { image: require('@/assets/images/pages/cars/x90/image (1).jpg') },

        { image: require('@/assets/images/pages/cars/honda/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/honda/image (2).jpg') },

        { image: require('@/assets/images/pages/cars/200sx/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/200sx/image (2).jpg') },

        { image: require('@/assets/images/pages/cars/truck/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/truck/image (2).jpg') },
      ],
      slides8: [
        { image: require('@/assets/images/pages/cars/mach5/image (1).jpg') },
        { image: require('@/assets/images/pages/cars/mach5/image (2).jpg') },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
