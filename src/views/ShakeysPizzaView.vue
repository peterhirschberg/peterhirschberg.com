<template>
  <v-container fluid class="ShakeysPizzaView content-page raster">
    <page-title title="Shakey's Pizza" icon="mdi-castle"></page-title>
    <img :src="require('@/assets/images/pages/shakeys/shakeys_hero.png')" align="left">
    <article class="articletext">
      <p>
        Every month or so my mom would take all us kids to the local Shakey's in Woodbridge, Virginia. This was sometime around 1978-79. They had arcade games lined up all along one wall, plus a small enclosed section in the back with a couple more games. It was always dark and always smelled like pizza. Boy I miss that place.
      </p>
      <p>
        All the items pictured below are from my collection (yeah, I know I'm a weirdo).
      </p>
      <p>
        Today the Shakey's in Woodbridge is currently an outdoor pool store. Their outdoor sign however still holds the unique shape of the Shakey's logo to this day. (UPDATE - Sadly I learned that at some point the building burned to the ground due to arson)
      </p>
    </article>

    <h3 class="pagesubtitle" style="clear: both;">Albums</h3>
    <lightbox-slides :albums="albums"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans From My Collection</h3>
    <lightbox-slides :slides="slides1"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Misc Shakey's Photos / Scans</h3>
    <lightbox-slides :slides="slides2"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Modern-Day Photos of Shakey's in Woodbridge, VA</h3>
    <lightbox-slides :slides="slides3"></lightbox-slides>

  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'ShakeysPizzaView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      albums: [
        {
          text: 'I was visiting Los Angeles for the LA Film Festival in June 2007 and was very surprised to see a Shakey\'s Pizza restaurant as I drove down the road. I literally swerved off the road so I could take some photos. Having lived on the East Coast all my life, the last Shakey\'s I saw was sometime in the late \'70s!',
          image: require('@/assets/images/pages/shakeys/la_trip_2007/sign.jpg'),
          slides: [
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8749.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8750.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8781.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8782.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8783.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8784.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8785.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8786.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8787.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8788.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8789.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8790.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8791.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8792.jpg'),
            },
            {
              image: require('@/assets/images/pages/shakeys/la_trip_2007/imgp8793.jpg'),
            },
            {
              text: 'Menu Side 1',
              image: require('@/assets/images/pages/shakeys/la_trip_2007/shakeys_menu_side1.jpg'),
            },
            {
              text: 'Menu Side 2',
              image: require('@/assets/images/pages/shakeys/la_trip_2007/shakeys_menu_side2.jpg'),
            }
          ]
        },
        {
          text: 'Shakey\'s "Parlor Design Detail" brochure I purchased on eBay. Dated 1966.',
          image: require('@/assets/images/pages/shakeys/parlor_design/photo1.jpg'),
          slides: [
            {
              text: 'Front Cover',
              image: require('@/assets/images/pages/shakeys/parlor_design/frontcover.jpg'),
            },
            {
              text: 'Page 1',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo1.jpg'),
            },
            {
              text: 'Page 2',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo2.jpg'),
            },
            {
              text: 'Page 3',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo3.jpg'),
            },
            {
              text: 'Page 4',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo4.jpg'),
            },
            {
              text: 'Page 5',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo5.jpg'),
            },
            {
              text: 'Page 6',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo6.jpg'),
            },
            {
              text: 'Page 7',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo7.jpg'),
            },
            {
              text: 'Page 8',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo8.jpg'),
            },
            {
              text: 'Page 9',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo9.jpg'),
            },
            {
              text: 'Page 10',
              image: require('@/assets/images/pages/shakeys/parlor_design/photo10.jpg'),
            }
          ]
        }
      ],
      slides1: [
        {
          text: 'Shakeys Menu (front)',
          image: require('@/assets/images/pages/shakeys/shakeys_menu_1.jpg')
        },
        {
          text: 'Shakeys Menu (back)',
          image: require('@/assets/images/pages/shakeys/shakeys_menu_2.jpg')
        },
        {
          text: 'Large Wooden Shakeys Sign. This is about 36" across and made of carved wood. I got this in an auction from an old Shakey\'s that had closed.',
          image: require('@/assets/images/pages/shakeys/shakeys_sign.jpg')
        },
        {
          text: 'Shakeys Advertisement from 1966',
          image: require('@/assets/images/pages/shakeys/shakeys_pizza_ad_1966_happiness.jpg')
        },
        {
          text: 'Shakeys Matchbook',
          image: require('@/assets/images/pages/shakeys/shakeys_matchbook.jpg')
        },
        {
          text: 'Shakeys Glass',
          image: require('@/assets/images/pages/shakeys/shakeys_glass.jpg')
        },
        {
          text: 'Shakeys Pizza Tray',
          image: require('@/assets/images/pages/shakeys/shakeys_tray.jpg')
        },
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/shakeys/misc/img_7031.png')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_0223.jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_7793.jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_8617.png')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_9122.jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_9405.jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/IMG_9683.jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/shakeys/misc/image (4).jpg')
        },
        {
          text: 'Shakeys Pizza 1970s',
          image: require('@/assets/images/pages/shakeys/misc/IMG_0675.jpg')
        }
      ],
      slides3: [
        {
          text: 'Shakeys Woodbridge, Virginia (Modern-Day)',
          image: require('@/assets/images/pages/shakeys/shakeys_woodbridge_today_1.jpg')
        },
        {
          text: 'Shakeys Woodbridge, Virginia (Modern-Day)',
          image: require('@/assets/images/pages/shakeys/shakeys_woodbridge_today_2.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
