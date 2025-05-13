<template>
  <v-container fluid class="AdventurePlay">
    <iframe src="./AdventurePlay/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'AdventurePlay'
}
</script>

<style scoped lang="scss">
.AdventurePlay{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
