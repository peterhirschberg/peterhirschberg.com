<template>
  <v-container fluid class="TronRestoreView content-page raster">
    <page-title title="My Tron Restoration" icon="mdi-google-controller"></page-title>
    <article>
      <p>
        I bought this Tron machine that had a nice cabinet but had been converted to a "Choplifter" game. I painstakingly restored it back to a beautiful Tron machine.
      </p>
      <p>
        The photos below are all out of order - sorry! But they should give you an idea how much effort and expense went into restoring it.
        I actually had an auto body paint shop do the final repaint of the cabinet to black and it came out fantastic!
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
  name: 'TronRestoreView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (6).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (7).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (8).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (9).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (10).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (11).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (12).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (13).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (14).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (15).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (16).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (17).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (18).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (19).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (20).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (21).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (22).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (23).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (24).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (25).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (26).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (27).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (28).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (29).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (30).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (31).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (32).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (33).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (34).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (35).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (36).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (37).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (38).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (39).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (40).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (41).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (42).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (43).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (44).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (45).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (46).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (47).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (48).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (49).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (50).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (51).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (52).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (53).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (54).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (55).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (56).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (57).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (58).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (59).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (60).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (61).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (62).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (63).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (64).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (65).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (66).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (67).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (68).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (69).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (70).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (71).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (72).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (73).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (74).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (75).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (76).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (77).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (78).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (79).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/tronrestore/tron (80).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
