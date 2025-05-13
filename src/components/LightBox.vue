<template>
  <v-dialog fullscreen class="LightBox" v-model="show" @keydown.left="goLeft()" @keydown.right="goRight()">
    <v-card class="card" :color="isMobile ? 'black' : 'rgba(0, 0, 0, 0.8)'">

      <v-card-text class="text-center" v-if="slides.length && !singleImage">
        {{ (currentIndex + 1) + ' of ' +  slides.length}}
      </v-card-text>

      <v-img class="main-image" contain v-if="slides.length && slides[currentIndex].image" :src="slides[currentIndex].image" :lazy-src="require('@/assets/images/static.gif')">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>        
      </v-img>

      <v-card-text class="text-center" v-if="slides.length && slides[currentIndex].text">
        {{ slides[currentIndex].text }}
      </v-card-text>

      <!-- thumbnails -->
      <v-flex row align-center justify-center class="thumbnails" v-if="slides.length && !singleImage && !isMobile">
        <i class="mdi mdi-chevron-left button leftThumbButton text-shadow" @click="goLeft()" v-if="!singleImage"></i>
        <template v-for="(slide, index) in thumbnails">
          <v-img class="thumbnail"
            v-if="slide && slide.image"
            :class="{selected: isThumbnailSelected(slide)}"
            :key="index"
            :src="slide.image"
            @click="onClickThumbnail(index)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>        
          </v-img>
        </template>
        <i class="mdi mdi-chevron-right button rightThumbButton text-shadow" @click="goRight()" v-if="!singleImage"></i>
      </v-flex>

      <i class="mdi mdi-chevron-left button leftButton text-shadow" @click="goLeft()" v-if="!singleImage"></i>
      <i class="mdi mdi-chevron-right button rightButton text-shadow" @click="goRight()" v-if="!singleImage"></i>
      <a v-if="slides.length && slides[currentIndex].image" :href="slides[currentIndex].image" download><i class="mdi mdi-download button downloadButton text-shadow"></i></a>
      <i class="mdi mdi-facebook button fbButton text-shadow" @click="fbShare()"></i>
      <i class="mdi mdi-close-circle button closeButton text-shadow" @click="show=false"></i>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LightBox',
  data() {
    return {
      show: false,
      slides: [],
      currentIndex: 0,
      maxThumbnails: 10,
      thumbIndex: 0
    }
  },
  methods: {
    isThumbnailSelected(thumb) {
      return thumb === this.slides[this.currentIndex]
    },
    onClickThumbnail(index) {
      if (this.numSlides > this.maxThumbnails) {
        let startIndex = this.thumbIndex
        if (startIndex > this.numSlides - this.maxThumbnails) {
          startIndex = this.numSlides - this.maxThumbnails
        }
        this.currentIndex = index + startIndex
      } else {
        this.currentIndex = index
      }
    },
    goLeft() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.slides.length - 1
      }
      this.updateThumbIndex()
    },
    goRight() {
      this.currentIndex++
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0
      }
      this.updateThumbIndex()
    },
    updateThumbIndex() {
      if (this.numSlides > this.maxThumbnails) {
        if (this.thumbIndex < this.currentIndex - (this.maxThumbnails - 4)) {
          this.thumbIndex = (this.currentIndex - (this.maxThumbnails - 4))
          if (this.thumbIndex >= this.numSlides) {
            this.thumbIndex = this.numSlides - 4
          }
          if (this.thumbIndex < 0) {
            this.thumbIndex = 0
          }
        } else if (this.thumbIndex > this.currentIndex - 3) {
          this.thumbIndex = this.currentIndex - 3
          if (this.thumbIndex < 0) {
            this.thumbIndex = 0
          }
        }
      }
    },
    fbShare() {
      const imageURL = location.origin + this.slides[this.currentIndex].image
      FB.ui({
        method: 'share',
        href: imageURL
      }, function(response){});
    }
  },
  computed: {
    lightbox() {
      return this.$store.getters.lightbox
    },
    singleImage() {
      return this.slides.length === 1
    },
    isMobile() {
      return this.$store.getters.isMobile
    },
    numSlides() {
      return this.slides.length
    },
    thumbnails() {
      let startIndex = this.thumbIndex
      if (this.numSlides > this.maxThumbnails) {
        if (startIndex > this.numSlides - this.maxThumbnails) {
          startIndex = this.numSlides - this.maxThumbnails
        }
      }
      return this.slides.slice(startIndex, this.thumbIndex + this.maxThumbnails)
    }
  },
  watch: {
    lightbox(newValue, oldValue) {
      if (newValue.slides && newValue.slides.length) {
        this.slides = newValue.slides
        this.currentIndex = newValue.startIndex
        if (this.numSlides <= this.maxThumbnails) {
          this.thumbIndex = 0
        } else {
          this.thumbIndex = (this.currentIndex - (this.maxThumbnails - 4))
          if (this.thumbIndex >= this.numSlides) {
            this.thumbIndex = this.numSlides - 4
          }
          if (this.thumbIndex < 0) {
            this.thumbIndex = 0
          }
        }
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss">
.LightBox {
  .v-dialog {
    &:not(.v-dialog--fullscreen) {
      max-height: 100% !important;
    }
  }
}
.thumbnails {
  .v-responsive__sizer {
    padding-bottom: 0 !important;
  }
}
</style>

<style scoped lang="scss">
.card {
  overflow: hidden;
  transition: all 1000ms;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  .main-image {
    flex: 1 1 auto;
  }
  .text-center {
    flex: 0 0 auto;
  }
  .thumbnails {
    flex: 0 0 auto;
    margin: 0;
    margin-top: 6px;
    padding: 0;
    .thumbnail {
      position: relative;
      background-color: #404040;
      height: 60px;
      width: 60px;
      max-width: 60px;
      margin: 1px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 350ms;
      &.selected {
        border: 4px solid yellow;
        border-radius: 4px;
      }
      &:hover {
        transform: scale(1.4) translate(0, -12px);
        margin-left: 14px;
        margin-right: 14px;
        z-index: 3;
      }
    }
  }
  .button {
    cursor: pointer;
    position: absolute;
    transition: transform 500ms;
    &:hover {
      transform: scale(1.5);
    }
  }
  .downloadButton {
    font-size: 64px;
    left: 12px;
    top: 0;
    &:hover {
      transform: scale(1.3);
    }
  }
  .fbButton {
    font-size: 58px;
    left: 100px;
    top: 0;
    &:hover {
      transform: scale(1.3);
    }
  }
  .closeButton {
    font-size: 64px;
    right: 12px;
    top: 0;
    &:hover {
      transform: scale(1.3);
    }
  }
  .leftButton,
  .rightButton {
    font-size: 70px;
  }
  .leftButton {
    left: 8px;
    top: calc(50vh - 40px);
  }
  .rightButton {
    right: 8px;
    top: calc(50vh - 40px);
  }
  .leftThumbButton,
  .rightThumbButton {
    position: static;
    font-size: 30px;
    z-index: 4;
  }
}
</style>
