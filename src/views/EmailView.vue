<template>
  <v-container fluid class="EmailView content-page raster">
    <page-title title="Email Me" icon="mdi-email-outline"></page-title>
    <center>
      <v-img :src="require('@/assets/images/pages/email/page.png')" width="481px"></v-img>
    </center>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'EmailView',
  components: { PageTitle },
}
</script>

<style scoped lang="scss">
</style>
