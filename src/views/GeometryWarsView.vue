<template>
  <v-container fluid class="GeometryWarsView content-page raster">
    <page-title title="Geometry Wars" icon="mdi-content-save"></page-title>
    <img :src="require('@/assets/images/pages/geometrywars/geometry wars icon.png')" align="left">
    <article>
      <p>
        <i>"Geometry Wars: Retro Evolved is a old school style shooter, but remixed for the 21st century with next generation graphics and deep, modern gameplay. Playing is simple: you are a geometric "ship" trapped in a grid world, facing off against waves of deadly wanderers, snakes, and repulsars."</i>
      </p>
      <p>
        If you could have asked "80s me" what I thought games would look like in the future, I would have pictured
        something along the lines of Geometry Wars, with its glowy vector graphical wonder. Vector arcade games were
        always my favorites, so it is not any wonder that Geometry Wars is one of my all-time favorite games.
      </p>
      <p>
        The game is actually, of course, a franchise with many versions published over the years. I personally prefer
        "Geometry Wars: Retro Evolved" the best among them all, but the multiplayer aspect of Geometry Wars 2 really
        appeals to me. I had always hoped for an arcade version of the game that I could play in a cabinet in my gameroom,
        but sadly that never materialized.
      </p>
      <p>
        Being a computer programmer puts you in a unique position when there is a game or piece of software that you want
        but nobody makes. I wanted an arcade cabinet that played Geometry Wars. So I set out to recreate the game myself
        in C++ and using OpenGL. I loved the original the best but always felt the graphics weren't as sharp and crisp
        as they could have been. I also liked the multiplayer aspect of Geometry Wars 2. And on top of all that, I fell
        in love with the concept of differently shaped "grids" that you could play on that was part of Geometry Wars: Galaxies
        that was released on the Wii. My plan was to create my version and put it in a real arcade cabinet.
      </p>
      <p>
        The challenge to recreate the game using aspects of all 3 original games was pretty steep. The game looks rather
        "simple" when playing it, but there are a lot of complicated and subtle things going on that you don't really realize, like
        all the grid physics, particle effects, etc. It took me a really long time but I actually pulled off a couple "ports"
        of the game. All were multiplayer capable, but I ended up with a version that had all the levels of Geometry Wars: Galaxies,
        and another that just had the single retangular grid of the original Geometry Wars.
      </p>
      <p>
        Until Activision or somebody asks me to take it down, you can download one my versions below. It includes support for XBox
        controllers or just using the keyboard (which I don't recommend). There is also the source code if you are the type that
        likes to play with that.
      </p>
      <p>
        The screenshots below are actually from my port, not the original game!
      </p>
    </article>
    <br>
    <a href="/downloads/OpenGW.zip"><h4 class="biglink">Download my Geometry Wars port</h4></a>
    <a href="https://sourceforge.net/p/opengw/code/HEAD/tree/" target="_blank"><h4 class="biglink">My Geometry Wars port source code</h4></a>
    <br>
    <h3 class="pagesubtitle">Screenshots of my port</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'GeometryWarsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw1.png')
        },
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw2.png')
        },
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw3.png')
        },
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw4.png')
        },
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw5.png')
        },
        {
          image: require('@/assets/images/pages/geometrywars/myscreenshots/gw6.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
