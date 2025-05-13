<template>
  <v-layout row wrap justify-center class="content-section">
    <template v-if="albums">
      <lightbox-slide
        v-for="(album, index) in albums"
        :key="index"
        :image="album.image"
        :text="album.text"
        album
        @click="onClickAlbum(album)"
      >
      </lightbox-slide>
    </template>
    <template v-else>
      <lightbox-slide
        v-for="(slide, index) in slides"
        :key="index"
        :image="slide.image"
        :text="slide.text"
        @click="onClickSlide(slide, index)"
      >
      </lightbox-slide>
    </template>
  </v-layout>
</template>

<script>
import LightboxSlide from '@/components/LightboxSlide.vue'

export default {
  name: 'LightboxSlides',
  components: { LightboxSlide },
  props: {
    slides: Array,
    albums: Array
  },
  methods: {
    onClickAlbum(album) {
      this.$store.commit('setLightbox', {
        slides: album.slides,
        startIndex: 0
      })
    },
    onClickSlide(slide, index) {
      this.$store.commit('setLightbox', {
        slides: this.slides,
        startIndex: index
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content-section {
  clear: both;
}
</style>