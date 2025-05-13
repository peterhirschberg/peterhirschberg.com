<template>
  <v-card class="topic-card shaped" shaped outlined max-width="400" @click="$emit('click')">
    <v-img
      class="white--text align-end"
      :height="desc && desc.length ? '300px' : '400px'"
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
      <v-card-title class="text-shadow">{{ title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary" v-if="desc && desc.length">
      <div>{{ desc }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ToysCollectiblesView',
  props: {
    image: String,
    title: String,
    desc: String
  }
}
</script>

<style scoped lang="scss">
</style>