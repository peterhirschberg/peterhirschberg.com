<template>
  <v-container fluid class="BookView">
    <iframe id="resume" src="/download/Luna City Arcade - The Book.pdf" height="100%" width="100%"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'LunaCityBookView'
}
</script>

<style lang="scss">
.BookView {
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
