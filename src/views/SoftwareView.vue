<template>
  <v-container fluid class="SoftwareView content-page raster">
    <page-title title="My Games & Software" icon="mdi-content-save"></page-title>
    <article>
      <p>
        Greetings Programs! The software listed below is all VERY old, but offered here for posterity. Please see my GitHub and SourceForge links on the left for my more up-to-date projects.
      </p>
      <p>
        Please note that all the links on this page are direct-download links and that only Windows versions are available.
      </p>
    </article>
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
  name: 'SoftwareView',
  components: { PageTitle, TopicSlide },
  data() {
    return {
      topics: [
        {
          title: '"LEDHead"',
          desc: 'My classic LED handheld game simulator',
          image: require('@/assets/images/pages/software/ledhead/page.jpg'),
          route: '/download/ledheadwin32setup.exe'
        },
        {
          title: '"VertiSim"',
          desc: 'My simulator for the vintage flying helicopter toy',
          image: require('@/assets/images/pages/software/vertisim/page.png'),
          route: '/download/vsimsetup02042002.exe'
        },
        {
          title: '"Adventure: Revisited"',
          desc: 'My port of the immortal game for the 2600. Note you can now play this in your browser by following the link on the right!',
          image: require('@/assets/images/pages/software/adventure/page.png'),
          route: '/download/winadventure.zip'
        },
        {
          title: '"I,Robot Remastered"',
          desc: 'My unfinished but playable port of the first arcade game with solid 3D objects. In glorious HD at 60fps!',
          image: require('@/assets/images/pages/software/irobot/page.jpg'),
          route: '/download/irobotdist.zip'
        },
        {
          title: '"Marble Madness Emulator"',
          desc: 'Another unfinished but playable project. No sound. Please note you MUST run the game in fullscreen or the controls do not work.',
          image: require('@/assets/images/pages/software/mme/page.png'),
          route: '/download/mme.zip'
        },
        {
          title: '"Aire Freshener"',
          desc: 'My nature sounds program',
          image: require('@/assets/images/pages/software/aire/page.png'),
          route: '/download/aire20setup.exe'
        },
        {
          title: '"Classic Space Wars"',
          desc: 'My port of the arcade game. Comes with source code.',
          image: require('@/assets/images/pages/software/csw/page.jpg'),
          route: '/download/spacewar.zip'
        },
        {
          title: '"Fractal Zoom"',
          desc: 'My Mandelbrot zoom program. Comes with source code.',
          image: require('@/assets/images/pages/software/fractalzoom/page.png'),
          route: '/download/fractalzoom.zip'
        },
        {
          title: '"Mini-Synth"',
          desc: 'Free mini synthesizer / tone-generator that I created as part of a software vocoder I was making. Great for annoying your coworkers.',
          image: require('@/assets/images/pages/software/minisynth/page.png'),
          route: '/download/minisynth.zip'
        },
        {
          title: '"Taskbar Lavalight"',
          desc: 'Fairly useless program that simulates a Lava Lamp in your Windows system tray area.',
          image: require('@/assets/images/pages/software/taskbarlava/page.png'),
          route: '/download/llamp11.zip'
        },
        {
          title: '"Tail Gunner Ships"',
          desc: 'Program I wrote to demo me reverse-engineering the spaceships from the video game "Tail Gunner". Use the 1,2,3,4 keys to change ships and the arrow keys to spin the ships around. Unfortunately it runs REALLY fast on today\'s computers.',
          image: require('@/assets/images/pages/software/tg_ships/page.png'),
          route: '/download/tgships.zip'
        }
      ]
    }
  },
  methods: {
    onClick(topic) {
      window.open(topic.route)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
