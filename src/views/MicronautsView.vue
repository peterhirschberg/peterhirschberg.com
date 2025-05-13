<template>
  <v-container fluid class="MicronautsView content-page raster">
    <page-title title="Micronauts" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/micronauts/micronauts-hero.png')" align="left">
    <article class="articletext">
      <p>
        (From Wikipedia) -
        <i>"Micronauts was a North American science fiction toyline manufactured and marketed by Mego from 1976 to 1980. The Micronauts toyline was based on and licensed from the Microman toyline created by Japanese-based toy company Takara in 1974.
        Mego discontinued the Micronauts line in 1980 prior to the company’s bankruptcy and dissolution in 1982. Years after Mego’s demise other toy companies, such as Palisades Toys and SOTA (State of the Art) Toys, have attempted to revive the toyline over the years."</i>
      </p>
      <p>
        Micronauts hit the scene in the late '70s like a giant bomb. Every kid either had or wanted the entire toyline. My brother and I collected and hoarded each toy in the set
        like a trophy. I remember every birthday and every Christmas being nothing but Micronauts.
      </p>
      <p>
        The genious behind this toyline was that all the toys had interchangable pieces and were all designed to fit together as a whole. It had such a great unified vision.
      </p>
      <p>
        My favorite figure was always the "Time Traveler", which came in many variations of colors and chest-plates. The figure pictured on the left is from my original collection.
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>

    <article class="articletext">
      <p>
        One of the coolest Micronauts sets ever was the "Rocket Tubes" set. Sort of the "holy grail" of the toyline and WAY too expensive for me to get as a kid. I now have three sets in various conditions and states of completeness. Between the three of them I can get a pretty big set going.
      </p>
    </article>
    <lightbox-slides :slides="slides1"></lightbox-slides>
    
    <article class="articletext" style="clear: both;">
      <p>
        Most Rocket Tubes sets I've seen don't have the stickers, so I was pleasantly surprised when one of my sets had an unused sticker sheet. I promptly scanned it so others could print out their own sticker sets. Unfortunately, the sticker sheet is printed on a silver foil backed material, which made the scan come out really bad.
      </p>
    </article>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <article class="articletext" style="clear: both;">
      <p>
        There was also a sticker sheet for the glow-in-the-dark parts of the set, but it has deteriorated with age such that I don't see the point of scanning it. It's just a bunch of thin stripes of glow in the dark sticker for the most part anyway.
      </p>
    </article>

    <article class="articletext" style="clear: both;">
      <p>
        Someone recently had this cool set of original blueprints for the Rocket Tubes set on eBay. I didn't bid, but I did snarf the photos for posterity.
      </p>
    </article>
    <lightbox-slides :slides="slides3"></lightbox-slides>

    <article class="articletext" style="clear: both;">
      <p>
        Here's a cool advertisement for the Rocket Tubes set. This is from an August 1979 'Playthings' magazine.
      </p>
    </article>
    <lightbox-slides :slides="slides4"></lightbox-slides>

    <article class="articletext" style="clear: both;">
      <p>
        Lastly here are some candid photos of some of my sets.
      </p>
    </article>
    <lightbox-slides :slides="slides5"></lightbox-slides>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'MicronautsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          text: 'The box from one of my sets.',
          image: require('@/assets/images/pages/micronauts/rocket_tubes_box.png')
        },
        {
          text: 'Instruction Sheet (front)',
          image: require('@/assets/images/pages/micronauts/rockettubes_inst_front.png')
        },
        {
          text: 'Instruction Sheet (back)',
          image: require('@/assets/images/pages/micronauts/rockettubes_inst_back.png')
        }
      ],
      slides2: [
        {
          text: 'Sticker sheet from Rocket Tubes set.',
          image: require('@/assets/images/pages/micronauts/rockettubes_stickers.png')
        }
      ],
      slides3: [
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0265.png')
        },
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0266.png')
        },
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0267.png')
        },
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0268.png')
        },
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0269.png')
        },
        {
          image: require('@/assets/images/pages/micronauts/blueprints/DSCF0270.png')
        }
      ],
      slides4: [
        {
          text: '1979 Rocket Tubes Ad',
          image: require('@/assets/images/pages/micronauts/rocket_tubes_1979_playthings_ad.jpg')
        }
      ],
      slides5: [
        {
          image: require('@/assets/images/pages/micronauts/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/micronauts/image (38).jpg')
        },
        {
          image: require('@/assets/images/pages/micronauts/image (42).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
