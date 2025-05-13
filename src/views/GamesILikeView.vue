<template>
  <v-container fluid class="GamesILikeView content-page raster">
    <page-title title="Games I Like" icon="mdi-content-save"></page-title>
    <v-layout row wrap justify-center>
      <topic-slide v-for="(topic, index) in topics"
        :image="topic.image"
        :title="topic.title"
        :desc="topic.desc"
        :key="index"
        @click="onClickTopic(topic)"
      >
      </topic-slide>
    </v-layout>
    <h3 class="pagesubtitle" style="clear: both;">Screenshots</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import TopicSlide from '@/components/TopicSlide.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'GamesILikeView',
  components: { PageTitle, TopicSlide, LightboxSlides },
  data() {
    return {
      topics: [
        {
          title: 'Bioshock',
          image: require('@/assets/images/pages/bioshock/page.png'),
          route: '/Bioshock'
        },
        {
          title: 'Geometry Wars',
          image: require('@/assets/images/pages/geometrywars/page.jpg'),
          route: '/GeometryWars'
        },
      ],
      slides: [
        {
          text: 'Atari Adventure',
          image: require('@/assets/images/pages/gamesilike/adventure.png')
        },
        {
          text: 'Ball Blaster',
          image: require('@/assets/images/pages/gamesilike/ballblaster.png')
        },
        {
          text: 'E.T. The Extra-Terrestrial',
          image: require('@/assets/images/pages/gamesilike/et.gif')
        },
        {
          text: 'The Eidolon',
          image: require('@/assets/images/pages/gamesilike/eidolon.gif')
        },
        {
          text: 'Rescue on Fractalus',
          image: require('@/assets/images/pages/gamesilike/rescue.png')
        },
        {
          text: 'Drol',
          image: require('@/assets/images/pages/gamesilike/drol.png')
        },
        {
          text: 'The Walking Dead',
          image: require('@/assets/images/pages/gamesilike/walkingdead.jpg')
        },
        {
          text: 'Journey',
          image: require('@/assets/images/pages/gamesilike/journey.jpg')
        },
        {
          text: 'Doom',
          image: require('@/assets/images/pages/gamesilike/doom.jpg')
        },
        {
          text: 'Quake',
          image: require('@/assets/images/pages/gamesilike/quake.jpg')
        },
        {
          text: 'Duke Nukem 3D',
          image: require('@/assets/images/pages/gamesilike/dukenukem.png')
        },
        {
          text: 'MiniGore',
          image: require('@/assets/images/pages/gamesilike/minigore.jpg')
        }
      ]
    }
  },
  methods: {
    onClickTopic(topic) {
      this.$router.push(topic.route).catch(err => {})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
