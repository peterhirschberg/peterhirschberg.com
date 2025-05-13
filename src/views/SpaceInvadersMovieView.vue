<template>
  <v-container fluid class="SpaceInvadersMovieView content-page raster">
    <page-title title='"The Space Invaders"' icon="mdi-filmstrip"></page-title>
    <article>
      <p>
        <i>"The history of arcade video games, the people who grew up playing them, and their efforts to collect and preserve their memories."</i>
      </p>
      <p>
        This is a movie that I was interviewed for, and both me and my (former) home arcade "Luna City" are featured in the film.
      </p>
    </article>

    <article>
      <p>
        While I am not featured in the trailer you can see a bit of Luna City footage around the 4 minute mark.
      </p>
    </article>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/327iCaaZd8Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'SpaceInvadersMovieView',
  components: { PageTitle }
}
</script>

<style scoped lang="scss">
</style>
