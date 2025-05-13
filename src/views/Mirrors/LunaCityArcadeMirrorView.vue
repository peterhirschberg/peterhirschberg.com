<template>
  <v-container fluid class="LunaCityArcadeMirror">
    <iframe src="./Mirrors/LunaCityArcade/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'LunaCityArcadeMirrorView'
}
</script>

<style scoped lang="scss">
.LunaCityArcadeMirror{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
