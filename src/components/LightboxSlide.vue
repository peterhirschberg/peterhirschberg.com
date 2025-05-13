<template>
  <v-card outlined :shaped="album" class="LightboxSlide slide" :class="{shaped: album}" @click="$emit('click')">
    <v-img
      class="white--text align-end"
      :height="text && text.length ? '200px' : '240px'"
      :src="image"
      :lazy-src="require('@/assets/images/static.gif')"
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
    <i class="mdi mdi-folder-multiple-image text-shadow" v-if="album"></i>
    <v-card-text class="text--primary" v-if="text && text.length">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'LightboxSlide',
  props: {
    image: String,
    text: String,
    album: Boolean
  }
}
</script>

<style scoped lang="scss">
.LightboxSlide {
  width: 240px;
  .mdi-folder-multiple-image {
    position: absolute;
    left: 8px;
    top: 8px;
  }
}
</style>