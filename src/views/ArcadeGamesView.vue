<template>
  <v-container fluid class="ArcadeGamesView content-page raster">
    <page-title title="Arcade Games" icon="mdi-google-controller"></page-title>
    <article class="articletext">
      <p>
        I've collected video arcade games and pinball machines since the 1980s. That's a long time!
        At the peak of my collection I owned around 80-90 machines. My gameroom was called "Luna City Arcade"
        Then bad stuff happened in my life
        and I eventually sold all but 3 machines (2 pinball machines and 1 video game).
      </p>
      <p>
        You can visit the Luna City website mirror by clicking <a href="#/LunaCityArcadeMirror" target="_blank">here</a>.
      </p>
      <p>
        These days I am much more into just pinball machines, although I do own a couple video games.
      </p>
      <p>
        I've always been pretty good about repairing games when they break, which...is pretty much all the time.
        So, I typically buy them needing lots of love and bring them back to their former glory.
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Arcade Topics</h3>
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

    <h3 class="pagesubtitle" style="clear: both;">Misc. Photos &amp; Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle">VIDEOS</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ttjoj0ellBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <h3 class="pagesubtitle" style="clear: both;">Luna City Videos</h3>
    <center>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/EqxfDnmRB1M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/4w_pu7z0pQg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/WBqOflGdlhE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/QvWRDqJopwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/03nn1wKk6Zo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/MTXgQE7XcXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/pBk0pqAXhlI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="margin: 8px;" width="560" height="315" src="https://www.youtube.com/embed/t_ogwjWj8KI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'
import TopicSlide from '@/components/TopicSlide.vue'

export default {
  name: 'ArcadeGamesView',
  components: { PageTitle, TopicSlide, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'My old license plate from back in the days of Luna City Arcade.',
          image: require('@/assets/images/pages/arcade/arcadeplate.jpg')
        },
        {
          text: 'One of many very sweet letters I received from kids who visited Luna City Arcade',
          image: require('@/assets/images/pages/arcade/lunacityletter.jpg')
        },
        {
          text: '"Before Luna City" - my home arcade back in the 90s.',
          image: require('@/assets/images/pages/arcade/beforeluna/beforeluna1.jpg')
        },
        {
          text: '"Before Luna City" - my home arcade back in the 90s.',
          image: require('@/assets/images/pages/arcade/beforeluna/beforeluna2.jpg')
        },

        {
          text: 'My Tron and Disc of Tron on display at the Smithsonian Museum as part of an arcade game exhibit',
          image: require('@/assets/images/pages/arcade/smithsonian1.jpg')
        },
        {
          text: 'My Tron and Disc of Tron on display at the Smithsonian Museum as part of an arcade game exhibit',
          image: require('@/assets/images/pages/arcade/smithsonian2.jpg')
        },

        {
          text: 'Me working on a pinball machine at Home Amusements in Rockville Maryland. Sometime around the late 80s or very early 90s.',
          image: require('@/assets/images/pages/arcade/IMG_0255.jpg')
        },

        {
          text: 'Me and Dave Whittaker, the man who introduced me to arcade game collecting!',
          image: require('@/assets/images/pages/arcade/IMG_5713.jpg')
        },

        {
          text: 'My collection of arcade game themed board games',
          image: require('@/assets/images/pages/arcade/myboardgames.jpg')
        },
        {
          text: 'Former location of a small-town arcade I used to go to as a kid.',
          image: require('@/assets/images/pages/arcade/img_5583.jpg')
        },
        {
          text: 'Former location of a small-town arcade I used to go to as a kid.',
          image: require('@/assets/images/pages/arcade/img_5584.jpg')
        },
        {
          text: 'Dennys placemat',
          image: require('@/assets/images/pages/arcade/dennys.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/arcadead1.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/arcadead2.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/fathersday.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/img_6953.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/img_7150.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/img_7153.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/img_7626.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_8079.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_9294.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_0761.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_0762.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_0763.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/IMG_8282.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/IMG_0424.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/IMG_0910.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/pacman.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (0).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dragonslair (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (6).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/dl (7).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/arcade (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/arcade (1).png')
        },
        {
          image: require('@/assets/images/pages/arcade/misc/arcade (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (1).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (2).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (3).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (4).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (5).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (6).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (7).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (8).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (9).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (10).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (11).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (12).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (13).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanmodel/pacmanmodel (14).jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanxmas/img_7667.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanxmas/img_7668.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanxmas/img_7669.jpg')
        },
        {
          image: require('@/assets/images/pages/arcade/pacmanxmas/img_7670.jpg')
        }
      ],
      topics: [
        {
          title: 'Luna City Arcade Website Mirror',
          desc: 'My former home arcade. This is a complete mirror of the website as it existed.',
          image: require('@/assets/images/pages/arcade/lunacity-page.jpg'),
          route: '/LunaCityArcadeMirror'
        },
        {
          title: 'Time-Out Tunnel Website Mirror',
          desc: 'My fansite for the ubiquitous arcade chain "Time-Out". This is a complete mirror of the website as it existed.',
          image: require('@/assets/images/pages/arcade/timeout-page.jpg'),
          route: '/TimeOutTunnelMirror'
        },
        {
          title: 'Our Current Gameroom',
          desc: 'Pictures of our current gameroom.',
          image: require('@/assets/images/pages/arcade/current-page.jpg'),
          route: '/CurrentGameroom'
        },
        {
          title: 'Arcade Scan Depot',
          desc: 'Huge Repository of Scans of Arcade Stickers, Cards, Coloring Books, Children\'s Books, Magazine Articles, Advertisements, and More!',
          image: require('@/assets/images/pages/arcade/scans-page.jpg'),
          route: '/ArcadeScans'
        },
        {
          title: 'My Tron Restoration Project',
          desc: 'Photos documenting me restoring a converted Tron machine.',
          image: require('@/assets/images/pages/arcade/tronrestore/tron (44).jpg'),
          route: '/TronRestore'
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
