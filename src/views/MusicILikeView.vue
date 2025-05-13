<template>
  <v-container fluid class="MusicILikeView content-page raster">
    <page-title title="Music I Like" icon="mdi-music-circle"></page-title>

    <h3 class="pagesubtitle">My Favorite Albums</h3>
    <lightbox-slides :slides="slides1" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">Rockers: Artwork</h3>
    <lightbox-slides :slides="slides2" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">Rockers: Paintings</h3>
    <lightbox-slides :slides="slides3" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">Rockers: Photos</h3>
    <lightbox-slides :slides="slides4" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">Rockers: Rolling Stone Covers</h3>
    <lightbox-slides :slides="slides5" style="clear: both;"></lightbox-slides>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'MusicILikeView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          image: require('@/assets/images/pages/albumart/image (1).jpeg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (1).png')
        },
        {
          image: require('@/assets/images/pages/albumart/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (20).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (21).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (22).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (23).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (24).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (25).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (26).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (27).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (28).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (29).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (30).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (31).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (32).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (33).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (34).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (35).jpg')
        },
        {
          image: require('@/assets/images/pages/albumart/image (36).jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/rockersartwork/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersartwork/image (20).jpg')
        }
      ],
      slides3: [
        {
          image: require('@/assets/images/pages/rockerspaintings/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/rockerspaintings/image (7).jpg')
        }
      ],
      slides4: [
        {
          image: require('@/assets/images/pages/rockersphotos/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (20).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (21).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (22).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (23).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (24).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (25).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (26).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (27).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (28).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (29).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (30).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (31).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (32).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (33).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/image (34).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/IMG_9785.jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/IMG_9786.jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/IMG_9788.jpg')
        },
        {
          image: require('@/assets/images/pages/rockersphotos/IMG_0913.jpg')
        }
      ],
      slides5: [
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/rockersrollingstone/image (11).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
