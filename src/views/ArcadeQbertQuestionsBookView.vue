<template>
  <v-container fluid class="QBertQuestionsView content-page raster">
    <page-title title="Q*Bert's Quazy Questions Book" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'QBertQuestionsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_front.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p1.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p2.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p3.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p4.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p5.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p6.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p7.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p8.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p9.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p10.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p11.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p12.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p13.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p14.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p15.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p16.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p17.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p18.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p19.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p20.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p21.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_p22.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_rear.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
