<template>
  <v-container fluid class="VintageComputersView content-page raster">
    <page-title title="Vintage Computers" icon="mdi-keyboard"></page-title>
    <img :src="require('@/assets/images/pages/vintagecomputers/stevejobs-hero.png')" align="left">
    <article class="articletext">
      Along with other bits of retro-technology, I collect vintage computers. See video below. My current collection includes the following:
      <br><br>
      <ul>
          <li>Apple Mac Color Classic "Mystic"</li>
          <li>Apple Mac SE 30</li>
          <li>Apple Mac Cube</li>
          <li>Apple Mac Quicksilver</li>
          <li>Apple Mac Quadra 700</li>
          <li>Apple eMac</li>

          <li>Apple IIGS</li>
          <li>Apple IIe Platinum</li>
          <li>Apple IIe Plus</li>

          <li>Atari Mega ST 4</li>
          <li>Atari 1200XL</li>
          <li>Atari 600XL</li>
          <li>Atari 800</li>

          <li>Commodore 64</li>
          <li>Radio Shack TRS-80 Model IV</li>
          <li>Sinclair ZX Spectrum 48K</li>
          <li>Timex Sinclair TS1000</li>
      </ul>
      <br>
    </article>

    <br clear="all">

    <h3 class="pagesubtitle">Video of my collection</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iIU3JHlnwVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br>

    <h3 class="pagesubtitle" style="clear: both;">Photos / Scans</h3>
    <lightbox-slides :slides="slides"></lightbox-slides>

    <h3 class="pagesubtitle">Albums</h3>
    <lightbox-slides :albums="albums"></lightbox-slides>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'VintageComputersView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          text: 'A rare photo of my Atari computer setup from the \'80s',
          image: require('@/assets/images/pages/vintagecomputers/mycomputer.jpg')
        },
        {
          text: 'Me, on the job, fixing Atari computers at "L&Y Computers" in Woodbridge Virginia back in the \'80s',
          image: require('@/assets/images/pages/vintagecomputers/img_6966.jpg')
        },
        {
          text: 'My workbench at "L&Y Computers" in Woodbridge Virginia back in the \'80s',
          image: require('@/assets/images/pages/vintagecomputers/img_5013.jpg')
        },        
        {
          text: 'Atari 1200XL Advertisement. Scanned From My Collection.',
          image: require('@/assets/images/pages/vintagecomputers/1200xl/atari1200xl_ad_touchedup.jpg')
        },
        {
          text: 'The never-produced but amazing Atari 1450XLD',
          image: require('@/assets/images/pages/vintagecomputers/img_7266.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/macad.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/img_5493.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/img_6659.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/img_7284.jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/image (1).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/image (2).jpg')
        },
        {
          text: '',
          image: require('@/assets/images/pages/vintagecomputers/image (3).jpg')
        },
      ],
      albums: [
        {
          text: 'Original Users Manual for the Atari 1200XL. Scanned From My Collection.',
          image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_front.jpg'),
          slides: [
            {
              text: 'Front Cover',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_front.jpg')
            },
            {
              text: 'Page 1',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page1.jpg')
            },
            {
              text: 'Page 2',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page2.jpg')
            },
            {
              text: 'Page 3',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page3.jpg')
            },
            {
              text: 'Page 4',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page4.jpg')
            },
            {
              text: 'Page 5',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page5.jpg')
            },
            {
              text: 'Page 6',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page6.jpg')
            },
            {
              text: 'Page 7',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page7.jpg')
            },
            {
              text: 'Page 8',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page8.jpg')
            },
            {
              text: 'Page 9',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page9.jpg')
            },
            {
              text: 'Page 10',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page10.jpg')
            },
            {
              text: 'Page 11',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page11.jpg')
            },
            {
              text: 'Page 12',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page12.jpg')
            },
            {
              text: 'Page 13',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page13.jpg')
            },
            {
              text: 'Page 14',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page14.jpg')
            },
            {
              text: 'Page 15',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page15.jpg')
            },
            {
              text: 'Page 16',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page16.jpg')
            },
            {
              text: 'Page 17',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page17.jpg')
            },
            {
              text: 'Page 18',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_page18.jpg')
            },
            {
              text: 'Rear Cover',
              image: require('@/assets/images/pages/vintagecomputers/1200xl/manual/atari1200_rear.jpg')
            }
          ]
        },
        {
          text: '1984 Sinclair ZX Spectrum Catalog. Scanned From My Collection.',
          image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p1.jpg'),
          slides: [
            {
              text: 'Page 1',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p1.jpg')
            },
            {
              text: 'Page 2',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p2.jpg')
            },
            {
              text: 'Page 3',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p3.jpg')
            },
            {
              text: 'Page 4',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p4.jpg')
            },
            {
              text: 'Page 5',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p5.jpg')
            },
            {
              text: 'Page 6',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p6.jpg')
            },
            {
              text: 'Page 7',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p7.jpg')
            },
            {
              text: 'Page 8',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p8.jpg')
            },
            {
              text: 'Page 9',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p9.jpg')
            },
            {
              text: 'Page 10',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p10.jpg')
            },
            {
              text: 'Page 11',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p11.jpg')
            },
            {
              text: 'Page 12',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p12.jpg')
            },
            {
              text: 'Page 13',
              image: require('@/assets/images/pages/vintagecomputers/sinclair/catalog1984/sinclair catalog 1984 p13.jpg')
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
