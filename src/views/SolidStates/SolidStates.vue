<template>
  <v-container fluid class="SolidStates">
    <iframe src="./SolidStates/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'SolidStates'
}
</script>

<style scoped lang="scss">
.SolidStates{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
