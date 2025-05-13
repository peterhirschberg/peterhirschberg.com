<template>
  <v-container fluid class="GuestBook">
    <iframe src="./GuestBook/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'GuestBook'
}
</script>

<style scoped lang="scss">
.GuestBook{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
