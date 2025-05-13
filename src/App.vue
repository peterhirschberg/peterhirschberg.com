<template>
  <v-app theme="dark" :class="{ isMobile: isMobile }">
    <v-content fluid>

      <section class="theLayout">

        <!-- Left sidebar -->
        <v-card height="100vh" class="sidebar-card v-sheet--tile">
          <v-navigation-drawer
            permanent
            class="sidebar"
          >
            <template v-slot:img>
              <acid-slide v-if="!isMobile" :pause="pauseSidebarAnimations"></acid-slide>
            </template>
            <template v-slot:prepend>
              <v-list-item two-line>
                <v-list-item-avatar @mouseover="onMouseOverAvatar" @mouseleave="onMouseLeaveAvatar">
                  <img src="@/assets/avatar.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">PETER HIRSCHBERG</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-divider></v-divider>
            <v-list dense v-for="(section, index) in leftNavItems" :key="index">
              <v-list-item v-if="section.title">
                <v-list-item-content>
                  <v-list-item-title class="sidebar-title-item">{{section.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                class="sidebar-list-item zoom"
                v-for="item in section.items"
                :key="item.title"
                @click="onClick(item)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="item.href">
                    <v-icon class="pops-icon">mdi-open-in-new</v-icon>
                </v-list-item-action>

              </v-list-item>
              <v-divider></v-divider>
            </v-list>
            <p class="mobile-sadness" v-if="isMobile">
              You are viewing the mobile version of this website. To view this website in its full majesty please view it on a desktop browser.
            </p>
          </v-navigation-drawer>
        </v-card>


        <!-- The router view -->
        <router-view class="router"/>

        <!-- Right sidebar -->
        <v-card height="100vh" class="sidebar-card v-sheet--tile">
          <v-navigation-drawer
            permanent
            right
            class="sidebar"
          >
            <template v-slot:img>
              <!-- <acid-slide right :pause="pauseSidebarAnimations"></acid-slide> -->
              <acid-slide v-if="!isMobile" right :pause="pauseSidebarAnimations"></acid-slide>
              <!-- <img v-else :src="require('@/assets/acid/staticright.png')" style="height: 100vh; width: 256px;"/> -->
            </template>
            <v-list dense v-for="(section, index) in rightNavItems" :key="index">
              <v-list-item v-if="section.title">
                <v-list-item-content>
                  <v-list-item-title class="sidebar-title-item">{{section.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                class="sidebar-list-item zoom"
                v-for="item in section.items"
                :key="item.title"
                @click="onClick(item)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>

          </v-navigation-drawer>
        </v-card>

      </section>

      <!-- Avatar image on hover -->
      <v-fade-transition>
        <v-card outlined v-show="showAvatarCard" v-if="!isMobile" class="avatar-large-card">
          <img src="@/assets/avatar.jpg" width="120px">
        </v-card>
      </v-fade-transition>

      <!-- The global image lightbox -->
      <light-box></light-box>

    </v-content>
  </v-app>
</template>

<script>
import AcidSlide from '@/components/AcidSlide.vue'
import LightBox from '@/components/LightBox.vue'

export default {
  name: 'App',
  components: {
    AcidSlide,
    LightBox
  },
  data () {
    return {
      leftNavItems: [
        {
          items: [
            { title: 'Home', icon: 'mdi-home', route: '/' },
          ],
        },
        {
          title: 'MY PROFILE',
          items: [
            { title: 'Portfolio', icon: 'mdi-account', href: "https://peterhirschberg.weebly.com/" },
            { title: 'GitHub', icon: 'mdi-github', href: 'https://github.com/peterhirschberg' },
            { title: 'SourceForge', icon: 'mdi-code-array', href: 'https://sourceforge.net/u/peterhirschberg/profile/' },
            { title: 'LinkedIn', icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/peter-hirschberg-24b84a44' },
            { title: 'Artwork (DeviantArt)', icon: 'mdi-deviantart', href: 'https://www.deviantart.com/peterhirschberg/gallery' },
            { title: 'My Music', icon: 'mdi-soundcloud', href: '' }, // PDHTODO
            { title: 'Facebook', icon: 'mdi-facebook', href: 'https://www.facebook.com/peter.hirschberg.9' },
            { title: 'Blog', icon: 'mdi-account', href: 'http://peterhirschberg.blogspot.com/' },
            { title: 'Resume', icon: 'mdi-file-document', route: '/Resume' },
            // { title: 'Sign The Guestbook', icon: 'mdi-book-open-variant', route: '/Guestbook' },
            { title: 'Email', icon: 'mdi-email-outline', route: '/Email' }
          ]
        },
        {
          title: 'MY FILM WORK',
          items: [
            { title: 'Chasing Ghosts', icon: 'mdi-filmstrip', route: '/ChasingGhostsMovie' },
            // { title: 'The Space Invaders', icon: 'mdi-filmstrip', route: '/SpaceInvadersMovie' },
            { title: 'National Geographic', icon: 'mdi-filmstrip', route: '/NGTV' }
          ]
        },
        {
          title: 'MY OTHER WEBSITES',
          items: [
            { title: 'Time-Out Tunnel', icon: 'mdi-web', href: 'http://timeoutarcades.com' },
            { title: 'Luna City Arcade', icon: 'mdi-web', href: './Mirrors/LunaCityArcade/index.html' }
          ]
        },
        {
          title: 'BOOKS I\'VE WRITTEN',
          items: [
            { title: '"The Story of Luna City Arcade"', icon: 'mdi-movie-filter-outline', route: '/LunaCityBook' }
          ]
        }
      ],
      rightNavItems: [
        {
          title: 'MY INTERESTS',
          items: [
            { title: 'Arcade Games', icon: 'mdi-google-controller', route: '/ArcadeGames' },
            { title: 'Toys & Collectibles', icon: 'mdi-castle', route: '/ToysCollectibles' },
            { title: 'Vintage Computers', icon: 'mdi-keyboard', route: '/VintageComputers' },
            { title: 'Battlestar Galactica', icon: 'mdi-rocket', route: '/BattlestarGalactica' },
            { title: 'Music I Like', icon: 'mdi-music-circle', route: '/MusicILike' },
            { title: 'Games I Like', icon: 'mdi-content-save', route: '/GamesILike' },
            { title: 'Film & TV I Like', icon: 'mdi-television-classic', route: '/TVFilm' },
            { title: 'Don Bluth Animation', icon: 'mdi-filmstrip', route: '/DonBluth' },
            { title: 'Autograph Collection', icon: 'mdi-pen', route: '/Autographs' },
            { title: 'Helicopters', icon: 'mdi-helicopter', route: '/Helicopters' },
            { title: 'Cars', icon: 'mdi-car-convertible', route: '/Cars' }
          ]
        },
        {
          title: 'MY IN-BROWSER APPS',
          items: [
            { title: 'Adventure: Revisited', icon: 'mdi-google-controller', route: '/AdventurePlay' },
            { title: 'Jane\'s Program', icon: 'mdi-google-controller', route: '/JanesPlay' },
            { title: '"TailGunner" Ships', icon: 'mdi-google-controller', route: '/TGShips' },
            { title: 'Atari "Solid States" Demo', icon: 'mdi-google-controller', route: '/SolidStates' }
          ]
        },
        {
          title: 'MY GAMES & SOFTWARE',
          items: [
            { title: 'My Games & Software', icon: 'mdi-content-save', route: '/Software' },
            { title: 'Vector Tanks', icon: 'mdi-tank', route: '/VectorTanks' },
          ]
        },
        {
          title: 'ANIMATRONICS PROJECTS',
          items: [
            { title: '"The Enchanted Tiki Hut"', icon: 'mdi-movie-filter-outline', route: '/TikiHut' },
            { title: '"Madam Leota"', icon: 'mdi-movie-filter-outline', route: '' } // PDHTODO<<<<
          ]
        }
      ],
      showAvatarCard: false,
      pauseSidebarAnimations: false
    }
  },
  mounted() {
    // Pause sidebar animations as needed for game performance
    if (this.$router.currentRoute.name === 'JanesPlay' || this.$router.currentRoute.name === 'AdventurePlay') {
      this.pauseSidebarAnimations = true
    }
    this.$store.commit('setIsMobile', this.isMobile)

    let str = ''
    for (let i=0; i<200; i++) {
      str += `        dc i2'${(i*160).toString(16)}'\n`
    }
    console.log(str)

  },
  methods: {
    onClick(item) {
      if (item.route) {
        this.$router.push(item.route).catch(err => {})
        // Pause sidebar animations as needed for game performance
        if (item.route === '/JanesPlay' || item.route === '/AdventurePlay') {
          this.pauseSidebarAnimations = true
        } else {
          this.pauseSidebarAnimations = false
        }
      } else if (item.href) {
        window.open(item.href, '_blank')
      }
    },
    onMouseOverAvatar() {
      this.showAvatarCard = true
    },
    onMouseLeaveAvatar() {
      setTimeout(() => {
        this.showAvatarCard = false
      }, 400)
    }
  },
  computed: {
    isMobile() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ]
      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      })
    }
  }
}
</script>

<style lang="scss">
.sidebar-card .v-list {
  padding: 0 !important;
  .v-list-item.zoom {
    transition: all 500ms;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<style lang="scss">
#app {
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  .theLayout {
    display: flex;
    .router {
      position: relative;
      flex: 1 1 auto;
      z-index: 1;
    }
    .sidebar-card {
      flex: 0 0 initial;
      .sidebar {
        text-shadow:
          0 0 3px #000;
        .sidebar-myname,
        .sidebar-title-item {
          font-size: 16px;
          color: black;
          font-weight: 900 !important;
          padding-top: 8px;
          text-align: center;
          text-shadow: none;
          text-shadow: 1px 1px 1px rgba(255,255,255,.1);
        }
        .sidebar-myname {
          text-align: left;
          padding: 0;
        }
        .sidebar-list-item {
          padding-left: 40px !important;
          .pops-icon {
            font-size: 14px;
          }
        }
      }
    }
  }
  .avatar-large-card {
    position: fixed;
    top: 10px;
    left: 10px;
    pointer-events: none;
    z-index: 2;
  }
  .mobile-sadness {
    padding: 16px;
    opacity: .5;
    font-size: 14px;
  }
}
</style>
