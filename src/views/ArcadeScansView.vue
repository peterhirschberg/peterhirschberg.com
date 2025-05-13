<template>
  <v-container fluid class="ArcadeScansView content-page raster">
    <page-title title="Arcade Scan Repository" icon="mdi-google-controller"></page-title>
    <article>
      My repository of Scans of Arcade Stickers, Cards, Coloring &amp; Children's Books, Magazine Articles, Advertisements, and More!
      These are all from my collection.
    </article>
    <br><br>   
    <h3 class="pagesubtitle" style="clear: both;">Scans</h3>
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
    <h3 class="pagesubtitle" style="clear: both;">Books</h3>
    <v-layout row wrap justify-center>
      <topic-slide v-for="(book, index) in books"
        :image="book.image"
        :title="book.title"
        :desc="book.desc"
        :key="index"
        @click="onClickTopic(book)"
      >
      </topic-slide>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import TopicSlide from '@/components/TopicSlide.vue'

export default {
  name: 'ArcadeScansView',
  components: { PageTitle, TopicSlide },
  data() {
    return {
      topics: [
        {
          title: 'Vintage Ads',
          desc: 'Advertisements relating to arcade or home video games',
          image: require('@/assets/images/pages/arcade/scans/ads/topic-hero.jpg'),
          route: '/ArcadeAds'
        },
        {
          title: 'Cards & Stickers',
          desc: 'Vintage arcade game collecting cards and stickers',
          image: require('@/assets/images/pages/arcade/scans/cardsandstickers/topic-hero.jpg'),
          route: '/ArcadeCardsAndStickers'
        },
        {
          title: 'Bumper Stickers',
          desc: 'Vintage arcade bumper stickers',
          image: require('@/assets/images/pages/arcade/scans/bumperstickers/topic-hero.jpg'),
          route: '/ArcadeBumperStickers'
        },
        {
          title: 'Arcade Music',
          desc: 'Arcade game inpired music items',
          image: require('@/assets/images/pages/arcade/scans/arcademusic/topic-hero.jpg'),
          route: '/ArcadeMusic'
        },
        {
          title: 'Mad Magazine',
          desc: 'Here\'s Mad Magazine\'s take on the video arcade phenomenon',
          image: require('@/assets/images/pages/arcade/scans/mad/topic-hero.jpg'),
          route: '/ArcadeMad'
        },
        {
          title: 'McDonalds Scratch and Win',
          desc: 'This came out in 1982',
          image: require('@/assets/images/pages/arcade/scans/scratch/topic-hero.jpg'),
          route: '/ArcadeScratch'
        }
      ],
      books: [
        {
          title: 'Pac-Man Coloring Book',
          desc: '',
          image: require('@/assets/images/pages/arcade/scans/pacman_coloringbook/front.jpg'),
          route: '/ArcadePacmanColoringBook'
        },
        {
          title: 'Q*Bert Coloring Book',
          desc: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_coloringbook/frontcover.jpg'),
          route: '/ArcadeQbertColoringBook'
        },
        {
          title: 'Dragon\'s Lair Coloring Book',
          desc: '',
          image: require('@/assets/images/pages/arcade/scans/dragons_lair_coloring_book_giddy_goons/front.png'),
          route: '/ArcadeDragonsLairColoringBook'
        },
        {
          title: '"Adventures of Q*Bert" Book',
          desc: '',
          image: require('@/assets/images/pages/arcade/scans/adventures_of_qbert/frontcover.jpg'),
          route: '/ArcadeAdventuresOfQbertBook'
        },
        {
          title: '"Q*Bert\'s Quazy Questions" Riddle Book',
          desc: '',
          image: require('@/assets/images/pages/arcade/scans/qbert_questions/qbert_questions_front.jpg'),
          route: '/ArcadeQbertQuestionsBook'
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
