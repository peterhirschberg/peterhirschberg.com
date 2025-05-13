<template>
  <v-container fluid class="ResumeView">
    <iframe id="resume" src="/download/Peter David Hirschberg Resume.pdf" height="100%" width="100%"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'ResumeView'
}
</script>

<style lang="scss">
.ResumeView {
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
