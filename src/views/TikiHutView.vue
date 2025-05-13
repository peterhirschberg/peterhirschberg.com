<template>
  <v-container fluid class="TikiHutView content-page raster">
    <page-title title='"The Enchanted Tiki Hut" Animatronics Show' icon="mdi-movie-filter-outline"></page-title>
    <center>
      <img :src="require('@/assets/images/pages/tikihut/show.png')" style="width: 100%;">
    </center>
    <article class="articletext" style="clear: both;">
      <p>
        I've always been into robotics and animatronics ever since I was a kid. My dream job has always been to work at Disneyworld on their attractions!
        So, when the quarantine hit, I took advantage of being home all the time to finally build an entire animatronics show (in our Dining Room no less!) from scratch.
        It's inspired by Disney's Enchanted Tiki Room (as well as a bit of Pirates of the Caribbean thrown in), but there's a lot of original material and songs I wrote and performed as well!
      </p>
      <p>
        Below, you'll find links to the official Show Video, a Behind the Scenes video, links to the music from the show, and lots of pictures as well!
      </p>
      <p>
        Enjoy!
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Videos</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/z5cUa3cOY-g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br><br>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zXUACvoqFFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br><br>
    </center>

    <h3 class="pagesubtitle" style="clear: both;">The Songs</h3>

    <a class="songlink" href="/TikiHut/The Tiki Song.wav">"The Tiki Song" - written and performed by Peter Hirschberg © 2020 Peter Hirschberg</a>
    <br><br>
    <a class="songlink" href="/TikiHut/We Are The Flowers.wav">"We Are The Flowers" - written and performed by Peter Hirschberg © 2020 Peter Hirschberg</a>
    <br><br>
    <a class="songlink" href="/TikiHut/Kon-Tiki - The Shadows.wav">"Kon-Tiki" - performed by The Shadows. © 1987 Parlophone Records Ltd, a Warner Music Group Company</a>
    <br><br>
    <a class="songlink" href="/TikiHut/Hawaiian War Chant - The Don Ralke Chorus.wav">"Hawaiian War Chant" - performed by The Don Ralke Chorus ℗ 2006 Digital Music Group, Inc., Inc.</a>
    <br><br>
    <a class="songlink" href="/TikiHut/Enchanted Tiki Room Montage.wav">"In the Tiki, Tiki, Tiki Room" (montage) - words/music by Richard M. &amp; Robert B. Sherman © 1963 Wonderland Music Company, Inc.</a>
    <br><br>
    <a class="songlink" href="/TikiHut/Ho Yo Ho Ho.wav">"Yo, Ho! (A Pirate's Life For Me)" - written by George Bruns, Xavier Atencio. © 1967 Walt Disney Records. Arranged and Performed by Peter Hirschberg</a>
    <br><br>
    <br><br>

    <h3 class="pagesubtitle" style="clear: both;">Pictures</h3>

    <lightbox-slides :slides="slides"></lightbox-slides>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'TikiHutView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        { image: require('@/assets/images/pages/tikihut/image (1).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (2).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (3).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (4).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (8).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (5).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (6).jpg') },
        { image: require('@/assets/images/pages/tikihut/image (7).jpg') },
        { image: require('@/assets/images/pages/tikihut/peter.jpg') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.songlink {
  margin-left: 20px;
}
</style>
