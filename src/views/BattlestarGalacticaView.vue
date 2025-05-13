<template>
  <v-container fluid class="BattlestarGalacticaView content-page raster">
    <page-title title="Battlestar Galactica" icon="mdi-rocket"></page-title>
    <img :src="require('@/assets/images/pages/bsg/bsg-hero.png')" align="left">
    <article class="articletext">
      <p>
        (From Wikipedia) - <i>"Battlestar Galactica is an American science fiction television series created by Glen Larson. Starring Lorne Greene, Richard Hatch, and Dirk Benedict, it follows the surviving humans as they flee in Battlestar Galactica and other ships in search for a new home while being pursued by the Cylons. The series ran for the 1978–1979 season before being canceled."</i>
      </p>
      <p>
        In the wake of Star Wars back in the late '70s, there was Battlestar Galactica. My brother and I were completely enthralled with the fantastic premise set forth by the show. It had everything I loved - spaceships, laser battles, robots, and epic orchestral music.
      </p>
      <p>
        As almost everyone knows, the show was "reimagined" in the early 2000's. I watched it and somewhat enjoyed it but remain bitter about the entire concept of reimagining something I loved so much as a child.
      </p>
      <p>
        The original 1978 episodes remain my favorite TV show of all time (followed closely by the classic "Speed Racer" cartoons).
      </p>
      <p>
        In 2013 I attended "GalactiCon" in Houston Texas. It was a mind-blowing experience, getting to meet the surviving cast. I will always treasure the memories.
      </p>
    </article>
    <v-layout row wrap justify-center style="clear: both;">
      <topic-slide v-for="(topic, index) in topics"
        :image="topic.image"
        :title="topic.title"
        :desc="topic.desc"
        :key="index"
        @click="onClickTopic(topic)"
      >
      </topic-slide>
    </v-layout>
    <br><br>    
    <h3 class="pagesubtitle" style="clear: both;">Newspaper ads</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>
    <h3 class="pagesubtitle" style="clear: both;">Misc. Photos/Scans</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Videos</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WtUxDbWcVTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import TopicSlide from '@/components/TopicSlide.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'BattlestarGalacticaView',
  components: { PageTitle, TopicSlide, LightboxSlides },
  data() {
    return {
      topics: [
        {
          title: 'Blueprints',
          desc: '',
          image: require('@/assets/images/pages/bsg/galactica_blueprints/galactica_blueprints_cover.jpg'),
          route: '/BattlestarGalacticaBlueprints'
        },
        {
          title: 'Cracked Magazine Parody',
          desc: '',
          image: require('@/assets/images/pages/bsg/cracked/cover.png'),
          route: '/BattlestarGalacticaCracked'
        },
        {
          title: 'Mad Magazine Parody',
          desc: '',
          image: require('@/assets/images/pages/bsg/mad/bgmad1.jpg'),
          route: '/BattlestarGalacticaMad'
        },
        {
          title: 'Cast Photos',
          desc: '',
          image: require('@/assets/images/pages/bsg/cast/IMG_8948.jpg'),
          route: '/BattlestarGalacticaCast'
        },
        {
          title: 'Posters, Magazines, and Artwork',
          desc: '',
          image: require('@/assets/images/pages/bsg/fanartandposters/IMG_9119.jpg'),
          route: '/BattlestarGalacticaArtAndPosters'
        },
        {
          title: 'Screenshots',
          desc: '',
          image: require('@/assets/images/pages/bsg/screenshots/IMG_0188.jpg'),
          route: '/BattlestarGalacticaScreenshots'
        },
        {
          title: 'Behind The Scenes',
          desc: '',
          image: require('@/assets/images/pages/bsg/behindthescenes/pic10.jpg'),
          route: '/BattlestarGalacticaBTS'
        },
        {
          title: 'Toys',
          desc: '',
          image: require('@/assets/images/pages/bsg/toys/IMG_0192.jpg'),
          route: '/BattlestarGalacticaToys'
        },
        {
          title: 'Galacticon 2013',
          desc: '',
          image: require('@/assets/images/pages/bsg/galacticon/hatch benedict hirschberg.jpg'),
          route: '/BattlestarGalacticaGalacticon'
        },
        {
          title: 'Galacticon 2013 Autographs',
          desc: '',
          image: require('@/assets/images/pages/bsg/autographs/scan 1.jpg'),
          route: '/BattlestarGalacticaAutographs'
        }
      ],
      slides1: [
        {
          text: 'Newspaper Ad Scan',
          image: require('@/assets/images/pages/bsg/img_6937.png')
        },
        {
          text: 'Newspaper Ad Scan',
          image: require('@/assets/images/pages/bsg/img_7133.png')
        },
        {
          text: 'Newspaper Ad Scan',
          image: require('@/assets/images/pages/bsg/IMG_0078.jpg')
        },
        {
          text: 'Newspaper Ad Scan',
          image: require('@/assets/images/pages/bsg/IMG_8970.jpg')
        }
      ],
      slides2: [
        {
          text: '8-track tape',
          image: require('@/assets/images/pages/bsg/s-l640.jpg')
        },
        {
          text: 'Board game',
          image: require('@/assets/images/pages/bsg/boardgame.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0474.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0467.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0470.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0480.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0477.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0475.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_0511.jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/bsg (6).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/bsg (7).jpg')
        },
        {
          image: require('@/assets/images/pages/bsg/IMG_8133.jpg')
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
