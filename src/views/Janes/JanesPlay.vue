<template>
  <v-container fluid class="JanesPlay">
    <iframe src="./JanesPlay/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'JanesPlay'
}
</script>

<style scoped lang="scss">
.JanesPlay{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
