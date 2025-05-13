<template>
  <v-container fluid class="AdventuresOfQbertBookView content-page raster">
    <page-title title="Adventures Of Qbert Book" icon="mdi-google-controller"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'AdventuresOfQbertBookView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Front Cover',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/frontcover.jpg')
        },
        {
          text: 'Inside Cover (left)',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/inside_cover_left.jpg')
        },
        {
          text: 'Inside Cover (right)',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/inside_cover_right.jpg')
        },
        {
          text: 'Page 1',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page1.jpg')
        },
        {
          text: 'Page 2',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page2.jpg')
        },
        {
          text: 'Page 3',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page3.jpg')
        },
        {
          text: 'Page 4',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page4.jpg')
        },
        {
          text: 'Page 5',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page5.jpg')
        },
        {
          text: 'Page 6',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page6.jpg')
        },
        {
          text: 'Page 7',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page7.jpg')
        },
        {
          text: 'Page 8',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page8.jpg')
        },
        {
          text: 'Page 9',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page9.jpg')
        },
        {
          text: 'Page 10',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page10.jpg')
        },
        {
          text: 'Page 11',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page11.jpg')
        },
        {
          text: 'Page 12',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page12.jpg')
        },
        {
          text: 'Page 13',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page13.jpg')
        },
        {
          text: 'Page 14',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page14.jpg')
        },
        {
          text: 'Page 15',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page15.jpg')
        },
        {
          text: 'Page 16',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page16.jpg')
        },
        {
          text: 'Page 17',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page17.jpg')
        },
        {
          text: 'Page 18',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page18.jpg')
        },
        {
          text: 'Page 19',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page19.jpg')
        },
        {
          text: 'Page 20',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page20.jpg')
        },
        {
          text: 'Page 21',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page21.jpg')
        },
        {
          text: 'Page 22',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page22.jpg')
        },
        {
          text: 'Page 23',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page23.jpg')
        },
        {
          text: 'Page 24',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page24.jpg')
        },
        {
          text: 'Page 25',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page25.jpg')
        },
        {
          text: 'Page 26',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/page26.jpg')
        },
        {
          text: 'Rear Cover',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/rearcover.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
