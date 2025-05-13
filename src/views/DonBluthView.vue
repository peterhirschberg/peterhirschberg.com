<template>
  <v-container fluid class="DonBluthView content-page raster">
    <page-title title="Don Bluth Animation" icon="mdi-filmstrip"></page-title>
    <img :src="require('@/assets/images/pages/donbluth/donbluth-hero.png')" align="left">
    <article>
      <p>
        Don Bluth is an American animator, film director, producer, writer, production designer, video game designer, and animation instructor. 
        He is best known for directing animated films, including The Secret of NIMH (1982), An American Tail (1986), The Land Before Time (1988), All Dogs Go to Heaven (1989), and Anastasia (1997), and for his involvement in the LaserDisc game Dragon's Lair (1983).
      </p>
      <p>
        I have been a huge fan of his work ever since the game Dragon's Lair was released in 1983. The animation was SO well done it was fascinating
        to simply sit back and watch other people play the game. It was that good.
      </p>
      <p>
        In the years since Dragon's Lair I have fallen in love with his film work and followup video game work on Dragon's Lair II and Space Ace.
        He even did an animated sequence for the film "Xanadu", set to one of my favorite band's music (ELO). See video below.
      </p>
      <p>
        My favorite Bluth film is "All Dogs Go To Heaven", followed closely by "An American Tail".
      </p>
      <p>
        I had the great opportunity to meet him briefly and got him to autograph my two original / film-used "American Tail" animation cels (see images below). What a thrill!
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Images</h3>
    <lightbox-slides :slides="slides0"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Dragon's Lair</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Space Ace</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">All Dogs Go To Heaven</h3>
    <lightbox-slides :slides="slides3"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">An American Tail</h3>
    <lightbox-slides :slides="slides4"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Videos</h3>
    <center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XQ9cqaVjufo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SY9d8zm8ON8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4BPDlUnr9cI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/g9LhIxwdvRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'DonBluthView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides0: [
        {
          text: 'My signed "An American Tail" production animation cel!',
          image: require('@/assets/images/pages/donbluth/mycell.jpg')
        },
        {
          text: 'My autographed "An American Tail" picture',
          image: require('@/assets/images/pages/donbluth/american tail.jpg')
        },
        {
          text: 'My autographed "All Dogs Go To Heaven" picture',
          image: require('@/assets/images/pages/donbluth/All Dogs Go To Heaven.jpg')
        }
      ],
      slides1: [
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (13).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (1).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (2).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (3).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (4).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (5).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (6).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (7).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (8).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (9).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (10).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (11).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (12).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (14).jpg') },
        { image: require('@/assets/images/pages/donbluth/dragonslair/dl (15).jpg') }
      ],
      slides2: [
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (1).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (2).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (3).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (4).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (5).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (6).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (7).jpg') },
        { image: require('@/assets/images/pages/donbluth/spaceace/spaceace (8).jpg') }
      ],
      slides3: [
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (1).jpg') },
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (2).jpg') },
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (3).jpg') },
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (4).jpg') },
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (5).jpg') },
        { image: require('@/assets/images/pages/donbluth/alldogs/alldogs (6).jpg') }
      ],
      slides4: [
        { image: require('@/assets/images/pages/donbluth/at/at (1).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (2).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (3).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (4).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (7).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (5).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (6).jpg') },
        { image: require('@/assets/images/pages/donbluth/at/at (8).jpg') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
