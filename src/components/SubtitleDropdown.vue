<template>
  <div>
    <h3 @click="$emit('click')" class="pagesubtitle less-glow">{{ title }}
      <i v-if="expanded" class="mdi mdi-chevron-up"></i>
      <i v-else class="mdi mdi-chevron-down"></i>
    </h3>
    <br>
    <v-slide-y-transition>
      <div v-show="expanded">
        <slot></slot>
      </div>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
  name: "SubtitleDropdown",
  props: {
    title: String,
    expanded: Boolean
  }
}
</script>

<style scoped lang="scss">
.pagesubtitle {
  display: inline-block;
  font-size: 20px;
  margin: 0;
  text-align: left;
  cursor: pointer;
  transition: all .5s;
  &:hover {
    transform: scale(1.2) translate(10%, 0);
  }
}
</style>