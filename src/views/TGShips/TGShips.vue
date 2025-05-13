<template>
  <v-container fluid class="TGShips">
    <iframe src="./TGShips/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'TGShips'
}
</script>

<style scoped lang="scss">
.TGShips{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
