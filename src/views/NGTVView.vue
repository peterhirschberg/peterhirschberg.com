<template>
  <v-container fluid class="NGTVView content-page raster">
    <page-title title='National Geographic: "The Pigeon Murders"' icon="mdi-filmstrip"></page-title>
    <article>
      <p>
        This was a documentary that first aired on January 9, 2000 on CNBC. You can get more information about the special from the National Geographic site.
      </p>
      <p>
        For this film I piloted a radio-controlled helicopter around Central Park and down the streets of New York. The helicopter we used had a small film camera attached to the underside, and these shots were used to create the scenes from a falcon's point of view as it was flying around looking for pigeons.
      </p>
      <p>
        I was required to take off and land from the tops of a buildings, sidewalks, and side street (in between passing pedestrians), as well as fly around and between buildings and trees. All while taking direction from the movie director/producer.      
      </p>
    </article>

    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle">Trailer (with a few seconds of my flying)</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yJHRyGD97oE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'NGTVView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/ngtv/ngtv.jpg')
        },
        {
          image: require('@/assets/images/pages/ngtv/ngtvfilmheli.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
