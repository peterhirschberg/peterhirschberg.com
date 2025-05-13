<template>
  <v-container fluid class="HotwheelsView content-page raster">
    <page-title title="Hot Wheels" icon="mdi-castle"></page-title>
    <lightbox-slides :slides="slides"></lightbox-slides>
    <br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'HotwheelsView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/pages/hotwheels/image (1).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (2).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (3).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (4).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (5).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (6).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (7).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (8).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (9).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (10).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (11).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (12).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (13).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (14).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (15).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (16).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (17).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (18).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (19).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (20).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (21).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (22).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (23).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (24).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (25).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (26).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (27).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (28).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (29).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (30).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (31).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (32).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (33).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (34).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (35).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (36).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (37).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (38).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (39).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (40).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (41).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (42).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (43).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (44).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (45).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (46).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (47).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (48).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (49).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (50).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (51).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (52).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (53).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (54).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (55).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (56).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (57).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (58).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (59).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (60).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (61).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (62).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (63).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (64).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (65).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (66).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (67).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (68).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (69).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (70).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (71).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (72).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (73).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (74).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (75).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (76).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (77).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (78).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (79).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (80).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (81).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (82).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (83).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (84).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (85).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (86).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (87).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (88).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (89).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (90).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (91).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (92).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (93).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (94).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (95).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (96).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (97).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (98).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (99).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (100).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (101).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (102).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (103).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (104).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (105).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (106).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (107).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (108).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (109).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (110).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (111).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (112).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (113).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (114).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (115).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (116).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (117).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (118).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (119).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (120).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (121).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (122).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (123).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (124).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (125).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (126).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (127).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (128).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (129).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (130).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (131).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (132).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (133).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (134).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (135).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (136).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (137).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (138).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (139).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (140).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (141).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (142).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (143).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (144).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (145).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (146).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (147).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (148).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (149).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (150).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (151).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (152).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (153).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (154).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (155).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (156).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (157).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (158).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (159).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (160).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (161).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (162).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (163).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (164).jpg')
        },
        {
          image: require('@/assets/images/pages/hotwheels/image (165).jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
