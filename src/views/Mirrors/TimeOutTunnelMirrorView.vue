<template>
  <v-container fluid class="TimeOutTunnelMirror">
    <iframe src="./Mirrors/TimeOutTunnel/index.html" height="100%" width="100%" onload="this.contentWindow.focus()"></iframe>
  </v-container>
</template>

<script>
export default {
  name: 'TimeOutTunnelMirrorView'
}
</script>

<style scoped lang="scss">
.TimeOutTunnelMirror{
  iframe {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
  }
}
</style>
