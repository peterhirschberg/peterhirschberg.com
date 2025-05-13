<template>
  <v-container fluid class="TVFilmView content-page raster">
    <page-title title="Film & TV I Like" icon="mdi-television-classic"></page-title>
    <article class="plug">
      <p>
        See my <a href="#/BattlestarGalactica">dedicated Battlestar Galactica page</a>!
      </p>
    </article>

    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(topic, index) in topics" :key="index">
          <v-expansion-panel-header><div class="titletext coolfont less-glow">{{topic.title}} <div class="imagecount">{{ topic.slides.length + ' images' }}</div></div></v-expansion-panel-header>
          <v-expansion-panel-content>
            <lightbox-slides :slides="topic.slides"></lightbox-slides>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'TVFilmView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      topics: [
        {
          title: 'Star Wars (1977)',
          slides: [
            {
              text: 'My retro action figures',
              image: require('@/assets/images/pages/tvfilm/starwars/image (1).jpg')
            },
            {
              text: 'My ForceFX lightsaber collection',
              image: require('@/assets/images/pages/tvfilm/starwars/image (0).jpg')
            },
            {
              text: 'Drawing I did way back in high school!',
              image: require('@/assets/images/pages/tvfilm/starwars/image (27).jpg')
            },
            { image: require('@/assets/images/pages/tvfilm/starwars/image (50).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (38).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (14).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (16).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (17).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (18).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (19).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (20).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (21).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (22).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (23).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (24).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (25).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (26).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (28).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (29).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (30).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (31).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (32).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (33).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (34).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (35).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (36).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (37).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (39).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (40).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (41).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (42).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (43).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (44).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (45).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (46).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (47).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (48).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (49).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (51).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (52).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (53).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (54).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (55).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (56).jpg')},
            { image: require('@/assets/images/pages/tvfilm/starwars/image (57).jpg')},            
            { image: require('@/assets/images/pages/tvfilm/starwars/image (58).jpg')},            
            { image: require('@/assets/images/pages/tvfilm/starwars/image (59).jpg')},            
            { image: require('@/assets/images/pages/tvfilm/starwars/image (60).jpg')},            
            { image: require('@/assets/images/pages/tvfilm/starwars/image (61).jpg')},            
            // { image: require('@/assets/images/pages/tvfilm/starwars/image (62).jpg')},            
          ]
        },
        {
          title: 'Star Trek (TOS) (1966)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (0).png')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (14).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (16).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (17).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (18).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (19).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (20).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (21).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (22).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (23).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (24).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (25).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (26).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (28).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (29).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (30).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (31).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (32).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (33).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (34).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (35).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (36).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (37).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (38).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (39).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (40).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektos/image (41).jpg')},
          ]
        },
        {
          title: 'Star Trek (TMP) (1979)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (16).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (17).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/startrektmp/image (14).jpg')},
          ]
        },
        {
          title: 'Speed Racer (1967)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (10).png')},
            { image: require('@/assets/images/pages/tvfilm/speedracer/image (11).jpg')},
          ]
        },
        {
          title: 'Ultraman (1966)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/ultraman/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/ultraman/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/ultraman/image (3).jpg')},
          ]
        },
        {
          title: 'Buck Rogers in the 25th Century (1979)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/buckrogers/image (8).jpg')},
          ]
        },
        {
          title: '2001: A Space Odyssey (1968)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/2001/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/2001/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/2001/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/2001/image (4).jpg')},
          ]
        },
        {
          title: 'Aliens (1986)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/aliens/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/aliens/image (11).jpg')},
          ]
        },
        {
          title: 'Blade Runner / Blade Runner 2049 (1982 / 2017)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/bladerunner/poster1.webp')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/poster2.webp')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (2).jpg')},
            // { image: require('@/assets/images/pages/tvfilm/bladerunner/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (14).png')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/bladerunner/image (16).jpg')},
          ]
        },
        {
          title: 'Close Encounters of the Third Kind (1977)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (0).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (14).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (16).jpg')},
            { image: require('@/assets/images/pages/tvfilm/closeencounters/image (17).jpg')},
          ]
        },
        {
          title: 'E.T. the Extra-Terrestrial (1982)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/et/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/et/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/et/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/et/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/et/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/et/image (7).jpg')},
            { 
              text: 'Me at the filming location of the house used in the film',
              image: require('@/assets/images/pages/tvfilm/et/image (5).jpg')
            },
          ]
        },
        {
          title: 'The Jetsons (1962)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/jetsons/image (6).jpg')},
          ]
        },
        {
          title: 'Smokey and the Bandit (1977)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (3).png')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/smokeybandit/image (9).jpg')},
          ]
        },
        {
          title: 'Stranger Things (2016)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (0).png')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/strangerthings/image (11).jpg')},
          ]
        },
        {
          title: 'The Thing (1982)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/thething/image (0).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/thething/image (8).webp')},
          ]
        },
        {
          title: 'Toy Story (1995)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/toystory/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (14).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/toystory/image (16).jpg')},
          ]
        },
        {
          title: 'Tron (1982)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/tron/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (9).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (10).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (11).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (12).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (13).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (14).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (15).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (16).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (17).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (18).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tron/image (19).jpg')},
          ]
        },
        {
          title: 'The Simpsons (1989)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (0).png')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (7).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (8).jpg')},
            { image: require('@/assets/images/pages/tvfilm/simpsons/image (9).png')},
          ]
        },
        {
          title: 'Frozen (2013)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/frozen/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/frozen/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/frozen/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/frozen/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/frozen/image (5).jpg')},
          ]
        },
        {
          title: 'Tideland (2006)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/tideland/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tideland/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tideland/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tideland/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/tideland/image (3).jpg')},
          ]
        },
        {
          title: 'Space 1999 (1975)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/space1999/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/space1999/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/space1999/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/space1999/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/space1999/image (3).jpg')},
          ]
        },
        {
          title: 'Coraline (2009)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/coraline/image (6).jpg')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (1).png')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (1).webp')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/coraline/image (5).jpg')},
          ]
        },
        {
          title: 'The Nightmare Before Christmas (1993)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (1).png')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (1).webp')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (5).jpg')},
            { image: require('@/assets/images/pages/tvfilm/nightmare/image (6).jpg')},
          ]
        },
        {
          title: 'A Clockwork Orange (1971)',
          slides: [
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (1).jpg')},
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (1).png')},
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (2).jpg')},
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (3).jpg')},
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (4).jpg')},
            { image: require('@/assets/images/pages/tvfilm/clockworkorange/image (5).jpg')}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.plug {
  padding-left: 32px;
}
.titletext {
  margin-left: 20px;
  font-size: 18px;
}
.imagecount {
  font-size: 10px;
}
</style>
