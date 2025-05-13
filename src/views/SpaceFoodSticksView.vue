<template>
  <v-container fluid class="SpaceFoodSticksView content-page raster">
    <page-title title="Space Food Sticks" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/spacefoodsticks/spacefoodsticks-hero.png')" align="left">
    <article class="articletext">
      <p>
        Space Food Sticks were produced originally in the late 1960s by Pillsbury.
      </p>
      <p>
        In 1970, Pillsbury filed for a trademark for a "non-frozen balance energy snack in rod form containing nutritionally balanced amounts of carbohydrate, fat and protein" which they dubbed "Space Food Sticks". (No basis for use of the term "nutritionally balanced" was provided.) A forerunner of energy bars, Space Food Sticks were promoted by Pillsbury for their association with NASA's efforts to create safe, healthy and nutritional space food. Capitalizing on the popularity of the Apollo space missions, Pillsbury marketed Space Food Sticks as a "nutritionally balanced between meal snack". Fourteen individually packaged sticks were included in a box, and came in six flavors such as peanut butter, caramel, and chocolate. In 1972, astronauts on-board Skylab 3 ate modified versions of Space Food Sticks to test their "gastrointestinal compatibility"
      </p>
      <p>
        Space Food Sticks disappeared from North American supermarket shelves in the 1980s. They were revived by Retrofuture Products, of Port Washington, NY in 2006. Two flavors, chocolate and peanut butter, were released. They are being sold at flight museums such as the Kennedy Space Center and the Smithsonian Air &amp; Space Museum as well as online.
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle">Vintage Space Food Sticks TV Commercial</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KPZ8HHRR1A0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'SpaceFoodSticksView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'Space Food Sticks Magazine Advertisement from 1971',
          image: require('@/assets/images/pages/spacefoodsticks/space_food_sticks_ad_1971.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
