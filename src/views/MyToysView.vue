<template>
  <v-container fluid class="MyToysView content-page raster">
    <page-title title="My Toys" icon="mdi-castle"></page-title>
    <article>
      <p>
        Here is a smattering of candid photos from my vast toy collection.
      </p>
    </article>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'MyToysView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/mytoys/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (20).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (21).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (22).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (23).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (24).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (25).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (26).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (27).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (28).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (29).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (30).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (31).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (32).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (33).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (34).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (35).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (36).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (37).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (38).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (39).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (40).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (41).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (42).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (43).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (44).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (45).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (46).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (47).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (48).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (49).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (50).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (51).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (52).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (53).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (54).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (55).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (56).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (57).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (58).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (59).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (60).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (61).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (62).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (63).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (64).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (65).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (66).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (67).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (68).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (69).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (70).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (71).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (72).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (73).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (74).jpg')
        },
        {
          image: require('@/assets/images/pages/mytoys/image (75).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
