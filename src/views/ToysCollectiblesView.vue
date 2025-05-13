<template>
  <v-container fluid class="ToysCollectiblesView content-page raster raster">
    <page-title title="Vintage Toys & Collectibles" icon="mdi-castle"></page-title>
    <v-layout row wrap justify-center>
      <topic-slide v-for="(topic, index) in topics"
        :image="topic.image"
        :title="topic.title"
        :desc="topic.desc"
        :key="index"
        @click="onClick(topic)"
      >
      </topic-slide>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import TopicSlide from '@/components/TopicSlide.vue'

export default {
  name: 'ToysCollectiblesView',
  components: { PageTitle, TopicSlide },
  data() {
    return {
      topics: [
        {
          title: 'My Toy Collection',
          desc: 'A smattering of candid photos from my vast toy collection.',
          image: require('@/assets/images/pages/mytoys/image (13).jpg'),
          route: '/MyToys'
        },
        {
          title: 'VertiBird',
          desc: 'The classic flying helicopter toy!',
          image: require('@/assets/images/pages/vertibird/image (1).jpg'),
          route: '/Vertibird'
        },
        {
          title: 'MicroVision',
          desc: 'Microvision is the first handheld game console that used interchangeable ROM cartridges. It was released by the Milton Bradley Company in November 1979.',
          image: require('@/assets/images/pages/microvision/image (1).jpg'),
          route: '/Microvision'
        },
        {
          title: 'Handheld Electronic Games',
          desc: 'These little gems came out in the mid to late \'70s. They would take a single 9V battery, and all gameplay was typically done with a small matrix of LED dots.',
          image: require('@/assets/images/pages/handheldgames/page.jpg'),
          route: '/HandheldGames'
        },
        {
          title: 'Big Trak',
          desc: 'Big Trak is a programmable electric vehicle created by Milton Bradley in 1979, resembling a futuristic Sci-Fi tank / utility vehicle.',
          image: require('@/assets/images/pages/bigtrak/page.jpg'),
          route: '/BigTrak'
        },
        {
          title: 'Vectrex',
          desc: 'The Vectrex is a vector display-based home video game console, first released in 1982.',
          image: require('@/assets/images/pages/vectrex/page.jpg'),
          route: '/Vectrex'
        },
        {
          title: 'Simon & Super Simon',
          desc: 'Simon is an electronic game of memory skill. The device creates a series of tones and lights and requires a user to repeat the sequence.',
          image: require('@/assets/images/pages/simon/page.jpg'),
          route: '/Simon'
        },
        {
          title: 'Testors Galax IV Hovercraft',
          desc: 'This was a plastic hovercraft produced by Testors that was powered by a small .049 glow fuel engine.',
          image: require('@/assets/images/pages/galaxiv/page.jpg'),
          route: '/GalaxIV'
        },
        {
          title: 'Toy Cars & Show Rods',
          desc: 'I have always loved model cars, but specifically "show rods". I have a large collection of show rod models, die-casts, and artwork.',
          image: require('@/assets/images/pages/showrods/page.jpg'),
          route: '/ShowRods'
        },
        {
          title: 'Micronauts',
          desc: 'The Micronauts line of toys came out around 1978-1979 if I recall. They were all the rage for 1 or 2 years.',
          image: require('@/assets/images/pages/micronauts/page.jpg'),
          route: '/Micronauts'
        },
        {
          title: 'Battlestar Galactica',
          desc: 'Battlestar Galactica. My favorite TV show ever. And I\'m talking about the ORIGINAL 1978 series.',
          image: require('@/assets/images/pages/bsg/page.jpg'),
          route: '/BattlestarGalactica'
        },
        {
          title: 'Vintage Computers',
          desc: 'Along with other bits of retro-technology, I collect vintage computers.',
          image: require('@/assets/images/pages/vintagecomputers/page.jpg'),
          route: '/VintageComputers'
        },
        {
          title: 'Hot Wheels Cars',
          desc: 'I started collecting these as an adult, strangely.',
          image: require('@/assets/images/pages/hotwheels/image (17).jpg'),
          route: '/Hotwheels'
        },
        {
          title: 'Mattel Talking Learning Machine',
          desc: 'I had one of these when I was a kid. A very inventive and cool toy for the time (late 60s).',
          image: require('@/assets/images/pages/talkinglearningmachine/page.jpg'),
          route: '/TalkingLearningMachine'
        },
        {
          title: 'Space Dust Candy',
          desc: 'Everybody remembers Pop Rocks from the late 70s, but before I had ever heard of Pop Rocks we had Space Dust.',
          image: require('@/assets/images/pages/spacedust/page.jpg'),
          route: '/SpaceDust'
        },
        {
          title: 'Shakey\'s Pizza',
          desc: 'When I was a kid, every month or so my mom would take all us kids to the local Shakey\'s Pizza place.',
          image: require('@/assets/images/pages/shakeys/page.jpg'),
          route: '/ShakeysPizza'
        },
        {
          title: 'Space Food Sticks',
          desc: 'Space Food Sticks were produced originally in 1971 by Pillsbury.',
          image: require('@/assets/images/pages/spacefoodsticks/page.jpg'),
          route: '/SpaceFoodSticks'
        },
        {
          title: 'Japanese Toy & Art Exhibit',
          desc: 'I saw this at SFO airport in San Francisco. It featured toys and artwork from Speed Racer and Ultraman!',
          image: require('@/assets/images/pages/sfotoymuseum/image (3).jpg'),
          route: '/SFOToyExhibit'
        }
      ]
    }
  },
  methods: {
    onClick(topic) {
      this.$router.push(topic.route).catch(err => {})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
