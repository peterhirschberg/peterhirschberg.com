<template>
  <v-container fluid class="HelicoptersView content-page raster">
    <page-title title="Helicopters" icon="mdi-helicopter"></page-title>
    <img :src="require('@/assets/images/pages/helicopters/helicopters-hero.png')" align="left">
    <article>
      <p>
        I started flying radio control helicopters sometime in the late 80s and flew for about 10 years before giving it up because of the cost. For a while I was in an air show team, where I could do stunts in front of hundreds of people. I also volunteered for a while at my local hobby store to help with the helicopter section, and would do demos in the afternoon. Funny, I would hover inverted a few inches above the grass, fly backwards, etc, but the thing that got the biggest reaction from the crowds was simply sitting in a normal hover, punching the collective and going straight up. Oh well.
      </p>
      <p>
        I would love to get back into flying again but these days it's all about "drones" which don't do anything for me.
      </p>
      <p>
        When I was a kid I had a VertiBird helicopter toy. If you are someone who remembers this immortal toy, be sure to check out my VertiBird simulator on <a href="#/Software">My Games &amp; Software</a> page!
      </p>
    </article>

    <lightbox-slides :slides="slides0" style="clear: both;"></lightbox-slides>

    <article>
      <center>
      <p>
        Me posing with my first RC helicopter.
      </p>
      </center>
    </article>

    <lightbox-slides :slides="slides5" style="clear: both;"></lightbox-slides>

    <article>
      <center>
      <p>
        Flying one my (many) radio control helicopters.
      </p>
      </center>
    </article>

    <lightbox-slides :slides="slides1" style="clear: both;"></lightbox-slides>

    <article>
      <p>
        I have done several interesting projects involving radio controlled helicopters, including a couple movie projects. One was a National Geographic Television documentary called "The Pigeon Murders" (see movie clips below). The documentary aired on January 9, 2000 on CNBC. You can get more information about the special from the National Geographic site. The helicopter we used had a small film camera attached to the underside. That's me on the left in the photo above.
      </p>
    </article>

    <lightbox-slides :slides="slides2" style="clear: both;"></lightbox-slides>

    <article>
      <p>
        I flew the camera heli around Central Park and down the streets of New York to create the scenes from a falcon's point of view as it was flying around looking for pigeons. I took off and landed from the top of a building, and even from the sidewalks on the side of the streets in-between pedestrians. Cool stuff. Most adrenalin I've ever had in my system at one time.
      </p>
    </article>

    <lightbox-slides :slides="slides3" style="clear: both;"></lightbox-slides>

    <article>
      <p>
        I have flown for some aerial pictures of the Dulles Airport control tower. We had permission and clearance from the tower to fly, with clearance being coordinated by a airport security worker on the ground with us. I am actually in the picture on the right, in the shadows in the lower left corner. As with the National Geographic shots, the helicopter was actually being flown much farther from me than it would appear from these pictures.
      </p>
    </article>

    <lightbox-slides :slides="slides4" style="clear: both;"></lightbox-slides>

    <article>
      <p>
        In addition to the radio controlled helicopters, I flew real helicopters for a couple years. I flew a Robinson R-22. Nothing can quite describe the feeling of being the single person in an aircraft. This is a picture of me right after my first solo flight, along with some photos of the two helicopters I used to fly and a picture of me flying.
      </p>
    </article>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'HelicoptersView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides0: [
        {
          image: require('@/assets/images/pages/helicopters/IMG_5698.jpg')
        }
      ],
      slides1: [
        {
          image: require('@/assets/images/pages/helicopters/ngtvfilmheli.jpg')
        }
      ],
      slides2: [
        {
          image: require('@/assets/images/pages/helicopters/ngtv.jpg')
        }
      ],
      slides3: [
        {
          image: require('@/assets/images/pages/helicopters/dulles1.jpg')
        },
        {
          image: require('@/assets/images/pages/helicopters/dulles2.jpg')
        }
      ],
      slides4: [
        {
          image: require('@/assets/images/pages/helicopters/helisolo.jpg')
        },
        {
          image: require('@/assets/images/pages/helicopters/IMG_7838.jpg')
        },
        {
          image: require('@/assets/images/pages/helicopters/IMG_9429.jpg')
        },
        {
          image: require('@/assets/images/pages/helicopters/IMG_9430.jpg')
        }
      ],
      slides5: [
        {
          image: require('@/assets/images/pages/helicopters/IMG_9431.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
